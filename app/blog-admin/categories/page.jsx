"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminShell from "../../../src/blog/AdminShell";
import { sanitizeSlug } from "../../../src/lib/blog-data";
import { getBlogAdminSession, requestBlogAdmin } from "../../../src/lib/blog-admin-client";
import styles from "../../../src/blog/AdminContent.module.css";

const emptyForm = { name: "", slug: "", description: "" };

export default function BlogAdminCategoriesPage() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState("");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const loadCategories = useCallback(async () => {
    const session = await getBlogAdminSession();
    if (!session.response.ok || !session.authorized) {
      router.replace("/blog-admin/login");
      return;
    }
    const result = await requestBlogAdmin("categories");
    setCategories(result.items);
  }, [router]);

  useEffect(() => {
    loadCategories().catch((loadError) => setError(loadError.message)).finally(() => setLoading(false));
  }, [loadCategories]);

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
      await requestBlogAdmin("categories", {
        method: editingId ? "PATCH" : "POST",
        body: editingId ? { ...payload, id: editingId } : payload,
      });
      await loadCategories();
      setNotice(editingId ? "Category updated." : "Category created.");
      resetForm();
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (category) => {
    if (!window.confirm(`Delete category “${category.name}”? Categories used by posts cannot be deleted.`)) return;
    setError("");
    setNotice("");
    try {
      await requestBlogAdmin("categories", { method: "DELETE", query: `?id=${encodeURIComponent(category.id)}` });
      await loadCategories();
      setNotice("Category deleted.");
    } catch (deleteError) {
      setError(deleteError.message);
    }
  };

  return (
    <AdminShell title="Categories" subtitle="Keep the journal organized by topic." activeItem="categories">
      <div className={styles.stack}>
        {error ? <p role="alert" className={styles.alert}>{error}</p> : null}
        {notice ? <p role="status" className={styles.notice}>{notice}</p> : null}
        <section className={styles.panel}>
          <header className={styles.panelHeader}><div><h2 className={styles.panelTitle}>{editingId ? "Edit category" : "Create a category"}</h2><p className={styles.panelHint}>A useful topic helps readers discover related articles.</p></div></header>
          <form onSubmit={handleSubmit} className={`${styles.panelBody} ${styles.form}`}>
            <div className={styles.fieldGrid}>
              <label className={styles.field}>Name<input required maxLength={120} value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} /></label>
              <label className={styles.field}>URL slug<input maxLength={120} value={form.slug} placeholder={sanitizeSlug(form.name)} onChange={(event) => setForm((current) => ({ ...current, slug: event.target.value }))} /></label>
            </div>
            <label className={styles.field}>Description<textarea value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} rows={3} /></label>
            <div className={styles.actionRow}>
              {editingId ? <button type="button" onClick={resetForm} className={styles.buttonSecondary}>Cancel edit</button> : null}
              <button disabled={busy} type="submit" className={styles.button}>{busy ? "Saving…" : editingId ? "Save category" : "Create category"}</button>
            </div>
          </form>
        </section>

        <section className={styles.panel}>
          <header className={styles.panelHeader}><div><h2 className={styles.panelTitle}>Topics</h2><p className={styles.panelHint}>{categories.length} categories available</p></div></header>
          {loading ? <div className={styles.empty}>Loading categories…</div> : categories.length ? <div className={styles.list}>
            {categories.map((category) => (
              <div key={category.id} className={styles.listItem}>
                <div><div className={styles.itemTitle}>{category.name}</div><div className={styles.itemMeta}>/{category.slug}{category.description ? ` · ${category.description}` : ""}</div></div>
                <div className={styles.rowActions}>
                  <button type="button" onClick={() => { setEditingId(category.id); setForm({ name: category.name, slug: category.slug, description: category.description || "" }); }} className={styles.smallButton}>Edit</button>
                  <button type="button" onClick={() => handleDelete(category)} className={`${styles.smallButton} ${styles.smallButtonDanger}`}>Delete</button>
                </div>
              </div>
            ))}
          </div> : <div className={styles.empty}>No categories in the database yet.</div>}
        </section>
      </div>
    </AdminShell>
  );
}
