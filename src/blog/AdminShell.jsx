import Link from "next/link";
import styles from "./AdminShell.module.css";

export default function AdminShell({ title, subtitle, children, activeItem = "dashboard" }) {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>C</span>
          <span className={styles.brandText}>Class Takers Pro<small>Publishing desk</small></span>
        </div>
        <p className={styles.navLabel}>Workspace</p>
        <nav className={styles.nav} aria-label="Blog admin navigation">
          <Link href="/blog-admin" aria-current={activeItem === "dashboard" ? "page" : undefined} className={`${styles.navItem} ${activeItem === "dashboard" ? styles.navItemActive : ""}`}><span className={styles.navIcon}>⌂</span>Overview</Link>
          <Link href="/blog-admin/posts" aria-current={activeItem === "posts" || activeItem === "editor" ? "page" : undefined} className={`${styles.navItem} ${activeItem === "posts" || activeItem === "editor" ? styles.navItemActive : ""}`}><span className={styles.navIcon}>▤</span>Articles</Link>
          <Link href="/blog-admin/categories" aria-current={activeItem === "categories" ? "page" : undefined} className={`${styles.navItem} ${activeItem === "categories" ? styles.navItemActive : ""}`}><span className={styles.navIcon}>◫</span>Categories</Link>
          <Link href="/blog-admin/authors" aria-current={activeItem === "authors" ? "page" : undefined} className={`${styles.navItem} ${activeItem === "authors" ? styles.navItemActive : ""}`}><span className={styles.navIcon}>♙</span>Authors</Link>
        </nav>
        <div className={styles.sidebarBottom}>
          <Link href="/blog" className={styles.navItem}><span className={styles.navIcon}>↗</span>View public journal</Link>
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.topbar}>
          <span className={styles.topbarLabel}>Content studio <span aria-hidden="true">/</span> {title}</span>
          <Link href="/blog" className={styles.topbarLink}>View journal ↗</Link>
        </div>

        <header className={styles.headingRow}>
          <div><h1 className={styles.title}>{title}</h1>{subtitle ? <p className={styles.subtle}>{subtitle}</p> : null}</div>
          {activeItem === "posts" ? <Link href="/blog-admin/posts/new" className={styles.topbarLink}>＋ New article</Link> : null}
        </header>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}
