"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminShell from "../../../src/blog/AdminShell";
import { sanitizeSlug } from "../../../src/lib/blog-data";
import { getBlogAdminSession, requestBlogAdmin } from "../../../src/lib/blog-admin-client";
import styles from "../../../src/blog/AdminContent.module.css";

const emptyForm = { name: "", slug: "", bio: "", websiteUrl: "" };

export default function BlogAdminAuthorsPage() {
  const router = useRouter();
  const [authors, setAuthors] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState("");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const loadAuthors = useCallback(async () => {
    const session = await getBlogAdminSession();
    if (!session.response.ok || !session.authorized) {
      router.replace("/blog-admin/login");
      return;
    }
    const result = await requestBlogAdmin("authors");
    setAuthors(result.items);
  }, [router]);

  useEffect(() => {
    loadAuthors().catch((loadError) => setError(loadError.message)).finally(() => setLoading(false));
  }, [loadAuthors]);

  const resetForm = () => {
    setEditingId("");
    setForm(emptyForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setNotice("");
    setBusy(true);
    const payload = { ...form, slug: form.slug.trim() || sanitizeSlug(form.name) };

    try {
      await requestBlogAdmin("authors", {
        method: editingId ? "PATCH" : "POST",
        body: editingId ? { ...payload, id: editingId } : payload,
      });
      await loadAuthors();
      setNotice(editingId ? "Author updated." : "Author created.");
      resetForm();
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (author) => {
    if (!window.confirm(`Delete author “${author.name}”? Existing posts will have no assigned author.`)) return;
    setError("");
    setNotice("");
    try {
      await requestBlogAdmin("authors", { method: "DELETE", query: `?id=${encodeURIComponent(author.id)}` });
      await loadAuthors();
      setNotice("Author deleted.");
    } catch (deleteError) {
      setError(deleteError.message);
    }
  };

  return (
    <AdminShell title="Authors" subtitle="Maintain clear, consistent contributor profiles." activeItem="authors">
      <div className={styles.stack}>
        {error ? <p role="alert" className={styles.alert}>{error}</p> : null}
        {notice ? <p role="status" className={styles.notice}>{notice}</p> : null}
        <section className={styles.panel}>
          <header className={styles.panelHeader}><div><h2 className={styles.panelTitle}>{editingId ? "Edit author" : "Add an author"}</h2><p className={styles.panelHint}>Give each contributor a clear public identity.</p></div></header>
          <form onSubmit={handleSubmit} className={`${styles.panelBody} ${styles.form}`}>
            <div className={styles.fieldGrid}>
              <label className={styles.field}>Name<input required maxLength={120} value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} /></label>
              <label className={styles.field}>URL slug<input maxLength={120} value={form.slug} placeholder={sanitizeSlug(form.name)} onChange={(event) => setForm((current) => ({ ...current, slug: event.target.value }))} /></label>
            </div>
            <label className={styles.field}>Biography<textarea value={form.bio} onChange={(event) => setForm((current) => ({ ...current, bio: event.target.value }))} rows={4} /></label>
            <label className={styles.field}>Website URL<input type="url" value={form.websiteUrl} onChange={(event) => setForm((current) => ({ ...current, websiteUrl: event.target.value }))} /></label>
            <div className={styles.actionRow}>
              {editingId ? <button type="button" onClick={resetForm} className={styles.buttonSecondary}>Cancel edit</button> : null}
              <button disabled={busy} type="submit" className={styles.button}>{busy ? "Saving…" : editingId ? "Save author" : "Add author"}</button>
            </div>
          </form>
        </section>

        <section className={styles.panel}>
          <header className={styles.panelHeader}><div><h2 className={styles.panelTitle}>Contributors</h2><p className={styles.panelHint}>{authors.length} author profiles</p></div></header>
          {loading ? <div className={styles.empty}>Loading authors…</div> : authors.length ? <div className={styles.list}>
            {authors.map((author) => (
              <div key={author.id} className={styles.listItem}>
                <div><div className={styles.itemTitle}>{author.name}</div><div className={styles.itemMeta}>/{author.slug}{author.bio ? ` · ${author.bio}` : ""}</div></div>
                <div className={styles.rowActions}>
                  <button type="button" onClick={() => { setEditingId(author.id); setForm({ name: author.name, slug: author.slug, bio: author.bio || "", websiteUrl: author.websiteUrl || "" }); }} className={styles.smallButton}>Edit</button>
                  <button type="button" onClick={() => handleDelete(author)} className={`${styles.smallButton} ${styles.smallButtonDanger}`}>Delete</button>
                </div>
              </div>
            ))}
          </div> : <div className={styles.empty}>No authors in the database yet.</div>}
        </section>
      </div>
    </AdminShell>
  );
}
