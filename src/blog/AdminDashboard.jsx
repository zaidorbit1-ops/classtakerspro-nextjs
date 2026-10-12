"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "../lib/supabase/browser";
import { getBlogAdminSession, requestBlogAdmin } from "../lib/blog-admin-client";
import AdminShell from "./AdminShell";
import styles from "./AdminContent.module.css";

export default function AdminDashboard() {
  const router = useRouter();
  const [overview, setOverview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getBlogAdminSession()
      .then(async (session) => {
        if (!active) return;
        if (!session.response.ok || !session.authorized) {
          router.replace("/blog-admin/login");
          return;
        }
        const [posts, categories, authors] = await Promise.all([
          requestBlogAdmin("posts"),
          requestBlogAdmin("categories"),
          requestBlogAdmin("authors"),
        ]);
        if (!active) return;
        setOverview({
          posts: posts.items,
          postCount: posts.items.length,
          publishedCount: posts.items.filter((post) => post.status === "published").length,
          draftCount: posts.items.filter((post) => post.status === "draft").length,
          categoryCount: categories.items.length,
          authorCount: authors.items.length,
        });
      })
      .catch((loadError) => {
        if (active) setError(loadError.message);
      });

    return () => { active = false; };
  }, [router]);

  const logout = async () => {
    const { error: signOutError } = await getSupabaseBrowserClient().auth.signOut();
    if (signOutError) {
      setError(signOutError.message);
      return;
    }
    router.replace("/blog-admin/login");
    router.refresh();
  };

  const stats = overview ? [
    { label: "Total articles", value: overview.postCount, detail: "Across all statuses" },
    { label: "Published", value: overview.publishedCount, detail: "Live on the journal" },
    { label: "Drafts", value: overview.draftCount, detail: "Work in progress" },
    { label: "Contributors", value: overview.authorCount, detail: `${overview.categoryCount} topics` },
  ] : [];

  return (
    <AdminShell title="Publishing overview" subtitle="A clear view of your editorial workspace." activeItem="dashboard">
      <div className={styles.stack}>
        <div className={styles.actionRow} style={{ justifyContent: "flex-end" }}>
          <button type="button" onClick={logout} className={styles.buttonSecondary}>Log out</button>
        </div>
        {error ? <p role="alert" className={styles.alert}>{error}</p> : null}
        {!overview && !error ? <p className={styles.empty}>Loading publishing overview…</p> : null}

        {overview ? (
          <>
            <div className={styles.stats}>
              {stats.map((item) => (
                <div key={item.label} className={styles.stat}>
                  <div className={styles.statLabel}>{item.label}</div>
                  <div className={styles.statValue}>{item.value}</div>
                  <div className={styles.statDetail}>{item.detail}</div>
                </div>
              ))}
            </div>

            <div className={styles.actionRow}>
              <Link href="/blog-admin/posts/new" className={styles.button}>＋ Write an article</Link>
              <Link href="/blog-admin/categories" className={styles.buttonSecondary}>Manage categories</Link>
              <Link href="/blog-admin/authors" className={styles.buttonSecondary}>Manage authors</Link>
            </div>

            <section className={styles.panel}>
              <header className={styles.panelHeader}>
                <div>
                  <h2 className={styles.panelTitle}>Recently updated</h2>
                  <p className={styles.panelHint}>Your latest work across drafts and published articles.</p>
                </div>
                <Link href="/blog-admin/posts" className={styles.buttonSecondary}>All articles</Link>
              </header>
              {overview.posts.length ? (
                <div className={styles.list}>
                  {overview.posts.slice(0, 6).map((post) => (
                    <div className={styles.listItem} key={post.id}>
                      <div>
                        <div className={styles.itemTitle}>{post.title}</div>
                        <div className={styles.itemMeta}>/blog/{post.slug}</div>
                      </div>
                      <div className={styles.rowActions}>
                        <span className={`${styles.status} ${post.status === "published" ? styles.statusPublished : styles.statusDraft}`}>{post.status}</span>
                        <Link href={`/blog-admin/posts/${post.id}`} className={styles.smallButton}>Edit</Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : <div className={styles.empty}>No articles yet. Start with your first draft.</div>}
            </section>
          </>
        ) : null}
      </div>
    </AdminShell>
  );
}
