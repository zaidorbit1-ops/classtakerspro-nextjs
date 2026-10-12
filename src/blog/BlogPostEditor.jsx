"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AdminShell from "./AdminShell";
import { sanitizeSlug } from "../lib/blog-data";
import { getBlogAdminSession, requestBlogAdmin } from "../lib/blog-admin-client";
import { uploadBlogImage } from "../lib/blog-media-client";
import RichTextEditor from "./RichTextEditor";
import styles from "./AdminContent.module.css";

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  authorId: "",
  categoryIds: [],
  status: "draft",
  featuredImage: "",
  featuredImageAlt: "",
  seoTitle: "",
  metaDescription: "",
  contentHtml: "",
};

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function sectionsToHtml(sections = []) {
  return sections.map((section) => {
    const heading = section.title ? `<h2>${escapeHtml(section.title)}</h2>` : "";
    const paragraphs = (section.body || "").split(/\n{2,}/).map((part) => `<p>${escapeHtml(part).replace(/\n/g, "<br>")}</p>`).join("");
    return `${heading}${paragraphs}`;
  }).join("");
}

export default function BlogPostEditor({ postId = "new" }) {
  const router = useRouter();
  const coverInput = useRef(null);
  const [state, setState] = useState({ posts: [], categories: [], authors: [] });
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState("");
  const [editorVersion, setEditorVersion] = useState(0);
  const [busy, setBusy] = useState(false);
  const [coverUploading, setCoverUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const loadData = useCallback(async () => {
    const session = await getBlogAdminSession();
    if (!session.response.ok || !session.authorized) {
      router.replace("/blog-admin/login");
      return;
    }
    const [posts, categories, authors] = await Promise.all([
      requestBlogAdmin("posts"),
      requestBlogAdmin("categories"),
      requestBlogAdmin("authors"),
    ]);
    setState({ posts: posts.items, categories: categories.items, authors: authors.items });
  }, [router]);

  useEffect(() => {
    loadData()
      .catch((loadError) => setError(loadError.message))
      .finally(() => setLoading(false));
  }, [loadData]);

  useEffect(() => {
    if (postId === "new") {
      setEditingId("");
      setForm(emptyForm);
      return;
    }
    const post = state.posts.find((item) => item.id === postId);
    if (!post) return;
    setEditingId(post.id);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      authorId: post.authorId || "",
      categoryIds: post.categoryIds || [],
      status: post.status,
      featuredImage: post.featuredImage || "",
      featuredImageAlt: post.featuredImageAlt || "",
      seoTitle: post.seoTitle || "",
      metaDescription: post.metaDescription || "",
      contentHtml: post.contentHtml || sectionsToHtml(post.sections || []),
    });
  }, [postId, state.posts]);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleCategoryToggle = (categoryId) => {
    setForm((current) => ({
      ...current,
      categoryIds: current.categoryIds.includes(categoryId)
        ? current.categoryIds.filter((id) => id !== categoryId)
        : [...current.categoryIds, categoryId],
    }));
  };

  const resetForm = () => {
    router.push("/blog-admin/posts");
  };

  const postNotFound = !loading && !error && postId !== "new" && !state.posts.some((post) => post.id === postId);
  const editorReady = postId === "new" || editingId === postId;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    setNotice("");

    const payload = {
      ...form,
      slug: form.slug.trim() || sanitizeSlug(form.title),
    };

    try {
      await requestBlogAdmin("posts", {
        method: editingId ? "PATCH" : "POST",
        body: editingId ? { ...payload, id: editingId } : payload,
      });
      await loadData();
      router.push("/blog-admin/posts");
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setBusy(false);
    }
  };

  const handleCoverUpload = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setCoverUploading(true);
    setError("");
    try {
      const url = await uploadBlogImage(file, "featured");
      updateField("featuredImage", url);
      if (!form.featuredImageAlt) updateField("featuredImageAlt", file.name.replace(/\.[^.]+$/, ""));
      setNotice("Featured image uploaded.");
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setCoverUploading(false);
    }
  };

  return (
    <AdminShell title={postId === "new" ? "New article" : "Edit article"} subtitle="Write, refine and publish your journal article." activeItem="editor">
      <div className={styles.stack}>
        {loading ? <div className={styles.empty}>Loading article workspace…</div> : null}
        {error ? <p role="alert" className={styles.alert}>{error}</p> : null}
        {notice ? <p role="status" className={styles.notice}>{notice}</p> : null}
        {postNotFound ? (
          <div className={styles.panel}>
            <p className={styles.empty}>This article could not be found.</p>
            <div className={styles.actionRow} style={{ justifyContent: "center", paddingBottom: 20 }}>
              <button type="button" onClick={resetForm} className={styles.buttonSecondary}>Back to articles</button>
            </div>
          </div>
        ) : null}

        {editorReady ? <form id="editor" onSubmit={handleSubmit} className={styles.editorForm}>
          <div className={styles.editorMain}>
            <input className={styles.editorTitle} required maxLength={180} aria-label="Article title" placeholder="Give your article a title…" value={form.title} onChange={(event) => updateField("title", event.target.value)} />
            <label className={styles.field}>URL slug
              <input value={form.slug} maxLength={120} placeholder={sanitizeSlug(form.title) || "article-url"} onChange={(event) => updateField("slug", event.target.value)} />
            </label>
            <label className={styles.field}>Standfirst <span className={styles.panelHint}>A short introduction shown in article previews.</span>
              <textarea value={form.excerpt} onChange={(event) => updateField("excerpt", event.target.value)} rows={3} />
            </label>
            <section className={styles.panel}>
              <header className={styles.panelHeader}><div><h2 className={styles.panelTitle}>Article body</h2><p className={styles.panelHint}>Paste formatted writing directly. Headings, text styles, links, lists, tables and images are supported.</p></div></header>
              <RichTextEditor key={`${editingId}:${editorVersion}`} value={form.contentHtml} onChange={(html) => updateField("contentHtml", html)} onError={setError} resetKey={editorVersion} />
            </section>
          </div>

          <aside className={styles.editorAside}>
            <section className={styles.panel}>
              <header className={styles.panelHeader}><div><h2 className={styles.panelTitle}>Publishing</h2><p className={styles.panelHint}>Choose whether this article is live.</p></div></header>
              <div className={`${styles.panelBody} ${styles.form}`}>
                <label className={styles.field}>Status
                  <select value={form.status} onChange={(event) => updateField("status", event.target.value)}><option value="draft">Draft</option><option value="published">Published</option></select>
                </label>
                <label className={styles.field}>Author
                  <select value={form.authorId} onChange={(event) => updateField("authorId", event.target.value)}><option value="">No author selected</option>{state.authors.map((author) => <option key={author.id} value={author.id}>{author.name}</option>)}</select>
                </label>
                <div className={styles.actionRow}>
                  <button disabled={busy} type="submit" className={styles.button}>{busy ? "Saving…" : editingId ? "Save changes" : "Save article"}</button>
                  <button type="button" onClick={resetForm} className={styles.buttonSecondary}>Back to articles</button>
                </div>
              </div>
            </section>

            <section className={styles.panel}>
              <header className={styles.panelHeader}><div><h2 className={styles.panelTitle}>Topics</h2><p className={styles.panelHint}>Select one or more categories.</p></div></header>
              <div className={styles.panelBody}>
                {state.categories.length ? <fieldset className={styles.fieldset}>
                  <legend className={styles.legend}>Categories</legend>
                  <div className={styles.checkList}>{state.categories.map((category) => <label key={category.id} className={styles.checkRow}><input type="checkbox" checked={form.categoryIds.includes(category.id)} onChange={() => handleCategoryToggle(category.id)} />{category.name}</label>)}</div>
                </fieldset> : <p className={styles.panelHint}>Create a category to organize your article.</p>}
              </div>
            </section>

            <section className={styles.panel}>
              <header className={styles.panelHeader}><div><h2 className={styles.panelTitle}>Featured image</h2><p className={styles.panelHint}>Use a wide image, around 1200 × 630.</p></div></header>
              <div className={`${styles.panelBody} ${styles.form}`}>
                <input ref={coverInput} className={styles.hiddenInput} type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={handleCoverUpload} />
                <div className={styles.actionRow}>
                  <button type="button" disabled={coverUploading} onClick={() => coverInput.current?.click()} className={styles.buttonSecondary}>{coverUploading ? "Uploading…" : form.featuredImage ? "Replace image" : "Upload image"}</button>
                  {form.featuredImage ? <button type="button" onClick={() => { updateField("featuredImage", ""); updateField("featuredImageAlt", ""); }} className={styles.buttonDanger}>Remove</button> : null}
                </div>
                {form.featuredImage ? <img src={form.featuredImage} alt="" className={styles.coverPreview} /> : null}
                <label className={styles.field}>Image description<input required={Boolean(form.featuredImage)} placeholder="Describe the image for readers using assistive technology" value={form.featuredImageAlt} onChange={(event) => updateField("featuredImageAlt", event.target.value)} /></label>
                <span className={styles.panelHint}>JPEG, PNG, WebP or GIF · max 5 MB</span>
              </div>
            </section>

            <details className={styles.panel}>
              <summary className={styles.panelHeader}><span className={styles.panelTitle}>Search appearance</span></summary>
              <div className={`${styles.panelBody} ${styles.form}`}>
                <label className={styles.field}>SEO title<input value={form.seoTitle} onChange={(event) => updateField("seoTitle", event.target.value)} /></label>
                <label className={styles.field}>Meta description<textarea rows={4} value={form.metaDescription} onChange={(event) => updateField("metaDescription", event.target.value)} /></label>
              </div>
            </details>
          </aside>
        </form> : null}

      </div>
    </AdminShell>
  );
}
