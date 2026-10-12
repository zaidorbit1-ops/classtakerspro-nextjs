"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminShell from "../../../src/blog/AdminShell";
import styles from "../../../src/blog/AdminContent.module.css";
import { getBlogAdminSession, requestBlogAdmin } from "../../../src/lib/blog-admin-client";

export default function BlogAdminPostsPage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const loadPosts = useCallback(async () => {
    const session = await getBlogAdminSession();
    if (!session.response.ok || !session.authorized) {
      router.replace("/blog-admin/login");
      return;
    }
    const result = await requestBlogAdmin("posts");
    setPosts(result.items);
  }, [router]);

  useEffect(() => {
    loadPosts().catch((loadError) => setError(loadError.message)).finally(() => setLoading(false));
  }, [loadPosts]);

  const changeStatus = async (post) => {
    setBusyId(post.id);
    setError("");
    setNotice("");
    try {
      await requestBlogAdmin("posts", {
        method: "PATCH",
        body: {
          ...post,
          id: post.id,
          status: post.status === "published" ? "draft" : "published",
          publishedAt: post.publishedAt || new Date().toISOString(),
        },
      });
      await loadPosts();
      setNotice(post.status === "published" ? "Article moved to drafts." : "Article published.");
    } catch (updateError) {
      setError(updateError.message);
    } finally {
      setBusyId("");
    }
  };

  const deletePost = async (post) => {
    if (!window.confirm(`Delete “${post.title}” permanently?`)) return;
    setBusyId(post.id);
    setError("");
    setNotice("");
    try {
      await requestBlogAdmin("posts", { method: "DELETE", query: `?id=${encodeURIComponent(post.id)}` });
      await loadPosts();
      setNotice("Article deleted.");
    } catch (deleteError) {
      setError(deleteError.message);
    } finally {
      setBusyId("");
    }
  };

  const visiblePosts = posts.filter((post) => {
    const matchesSearch = `${post.title} ${post.slug}`.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && (statusFilter === "all" || post.status === statusFilter);
  });

  return (
    <AdminShell title="Articles" subtitle="Your recent drafts and published articles." activeItem="posts">
      <div className={styles.stack}>
        {error ? <p role="alert" className={styles.alert}>{error}</p> : null}
        {notice ? <p role="status" className={styles.notice}>{notice}</p> : null}

        <section className={styles.panel}>
          <header className={styles.panelHeader}>
            <div>
              <h2 className={styles.panelTitle}>Recent articles</h2>
              <p className={styles.panelHint}>Choose Edit to open an article. Writing tools stay closed until you ask for them.</p>
            </div>
            <Link href="/blog-admin/posts/new" className={styles.button}>＋ Write article</Link>
          </header>
          <div className={styles.toolbar}>
            <input
              className={styles.search}
              type="search"
              placeholder="Search title or slug"
              aria-label="Search articles"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <select className={styles.filter} aria-label="Filter by status" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
              <option value="all">All statuses</option>
              <option value="published">Published</option>
              <option value="draft">Drafts</option>
            </select>
          </div>
          {loading ? <div className={styles.empty}>Loading recent articles…</div> : visiblePosts.length ? (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead><tr><th>Article</th><th>Status</th><th>Author</th><th>Updated</th><th>Actions</th></tr></thead>
                <tbody>
                  {visiblePosts.map((post) => (
                    <tr key={post.id}>
                      <td>
                        <span className={styles.primaryText}>{post.title}</span>
                        <span className={styles.secondaryText}>/blog/{post.slug}</span>
                      </td>
                      <td><span className={`${styles.status} ${post.status === "published" ? styles.statusPublished : styles.statusDraft}`}>{post.status}</span></td>
                      <td>{post.author?.name || "—"}</td>
                      <td>{post.updatedAt ? new Date(post.updatedAt).toLocaleDateString() : "—"}</td>
                      <td>
                        <div className={styles.rowActions}>
                          <Link href={`/blog-admin/posts/${post.id}`} className={styles.smallButton}>Edit</Link>
                          {post.status === "published" ? <Link href={`/blog/${post.slug}`} target="_blank" className={styles.smallButton}>View</Link> : null}
                          <button type="button" disabled={busyId === post.id} onClick={() => changeStatus(post)} className={styles.smallButton}>{post.status === "published" ? "Unpublish" : "Publish"}</button>
                          <button type="button" disabled={busyId === post.id} onClick={() => deletePost(post)} className={`${styles.smallButton} ${styles.smallButtonDanger}`}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : <div className={styles.empty}>{posts.length ? "No articles match these filters." : "No articles yet. Choose “Write article” when you’re ready to create the first one."}</div>}
        </section>
      </div>
    </AdminShell>
  );
}
