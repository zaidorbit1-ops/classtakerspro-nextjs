import Link from "next/link";
import styles from "./BlogListPage.module.css";
import { readingTimeMinutes } from "../lib/blog-data";

function formatDate(value) {
  if (!value) return "Draft";
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogListPage({
  posts,
  categories,
  selectedCategory,
  searchValue,
  page,
  totalPages,
  total = posts.length,
  routePath = "/blog",
  pageTitle = "Confidence-driven study advice for online learners.",
  pageDescription = "Practical guidance for staying organized, preparing for assessments, and building momentum across a demanding semester.",
  emptyStateTitle = "No blog posts match your filters yet.",
  emptyStateDescription = "Try a broader search or browse another category to find the latest academic tips.",
}) {
  const allCategories = categories || [];
  const query = new URLSearchParams();
  if (selectedCategory && routePath === "/blog") query.set("category", selectedCategory);
  if (searchValue) query.set("q", searchValue);

  const pageLink = (targetPage) => {
    const params = new URLSearchParams(query);
    if (targetPage > 1) params.set("page", String(targetPage));
    else params.delete("page");
    const suffix = params.toString();
    return suffix ? `${routePath}?${suffix}` : routePath;
  };

  const resultCount = `${total} article${total === 1 ? "" : "s"}`;

  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <div className={styles.introLabel}><span /> THE CLASS TAKERS JOURNAL</div>
          <div className={styles.introGrid}>
            <h1 className={styles.title}>{pageTitle}</h1>
            <p className={styles.lead}>{pageDescription}</p>
          </div>
        </div>

        <div className={styles.toolbar}>
          <form action={routePath} method="get" className={styles.searchWrap}>
            <span className={styles.searchMark} aria-hidden="true">⌕</span>
            <input
              type="text"
              name="q"
              aria-label="Search blog posts"
              placeholder="Search topics, strategies, or study tips"
              defaultValue={searchValue}
              className={styles.searchInput}
            />
            {selectedCategory ? <input type="hidden" name="category" value={selectedCategory} /> : null}
            <button type="submit" className={styles.searchButton}>Search articles</button>
          </form>
          <div className={styles.toolbarSummary}>
            {selectedCategory || searchValue ? (
              <>
                <span>{resultCount}</span>
                <Link href={routePath} className={styles.clearLink}>Clear filters</Link>
              </>
            ) : (
              <span>{resultCount}</span>
            )}
          </div>
        </div>

        <nav className={styles.categoryRow} aria-label="Browse blog categories">
          <Link href="/blog" aria-current={!selectedCategory ? "page" : undefined} className={`${styles.categoryPill} ${!selectedCategory ? styles.categoryPillActive : ""}`}>All articles</Link>
          {allCategories.map((category) => (
            <Link key={category.id} href={`/blog?category=${category.slug}`} aria-current={selectedCategory === category.slug ? "page" : undefined} className={`${styles.categoryPill} ${selectedCategory === category.slug ? styles.categoryPillActive : ""}`}>{category.name}</Link>
          ))}
        </nav>

        {posts.length ? (
          <>
            <div className={styles.resultsRow}>
              <span className={styles.count}>{resultCount}</span>
            </div>
            <div className={`${styles.grid} ${posts.length === 1 ? styles.gridSingle : posts.length === 2 ? styles.gridDouble : ""}`}>
              {posts.map((post) => {
                const primaryCategory = post.categories?.[0] || null;

                return (
                  <article key={post.id} className={styles.card}>
                    <Link href={`/blog/${post.slug}`} className={styles.cardImageLink} aria-label={`Read ${post.title}`}>
                      {post.featuredImage ? <img src={post.featuredImage} alt={post.featuredImageAlt || post.title} className={styles.cardImage} /> : <span className={styles.imagePlaceholder} />}
                      <span className={styles.imageOverlay} />
                      <span className={styles.imageReadingTime}>{readingTimeMinutes(post.contentHtml || post.sections || [])} min read</span>
                    </Link>
                    <div className={styles.cardBody}>
                      <div className={styles.cardTopline}>
                        {primaryCategory ? <Link href={`/blog?category=${primaryCategory.slug}`} className={styles.tag}>{primaryCategory.name}</Link> : <span className={styles.tag}>Insights</span>}
                      </div>

                      <Link href={`/blog/${post.slug}`} className={styles.cardTitleLink}>
                        <h3 className={styles.cardTitle}>{post.title}</h3>
                      </Link>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>

                      <div className={styles.cardFooter}>
                        <div className={styles.byline}>
                          <span className={styles.authorMark} aria-hidden="true">{(post.author?.name || "C").charAt(0).toUpperCase()}</span>
                          <span><strong>{post.author?.name || "Class Takers Pro"}</strong><small>{formatDate(post.publishedAt)}</small></span>
                        </div>
                        <Link href={`/blog/${post.slug}`} className={styles.readButton}>Read article <span aria-hidden="true">↗</span></Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {totalPages > 1 ? (
              <div className={styles.pagination}>
                <Link
                  href={pageLink(Math.max(1, page - 1))}
                  aria-label="Previous page"
                  aria-disabled={page <= 1}
                  tabIndex={page <= 1 ? -1 : undefined}
                  className={`${styles.pageLink} ${page <= 1 ? styles.pageLinkDisabled : ""}`}
                >
                  ←
                </Link>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((targetPage) => (
                  <Link
                    key={targetPage}
                    href={pageLink(targetPage)}
                    aria-current={page === targetPage ? "page" : undefined}
                    className={`${styles.pageLink} ${page === targetPage ? styles.pageLinkActive : ""}`}
                  >
                    {targetPage}
                  </Link>
                ))}
                <Link
                  href={pageLink(Math.min(totalPages, page + 1))}
                  aria-label="Next page"
                  aria-disabled={page >= totalPages}
                  tabIndex={page >= totalPages ? -1 : undefined}
                  className={`${styles.pageLink} ${page >= totalPages ? styles.pageLinkDisabled : ""}`}
                >
                  →
                </Link>
              </div>
            ) : null}
          </>
        ) : (
          <div className={styles.emptyState}>
            <h3>{emptyStateTitle}</h3>
            <p>{searchValue ? "Try a different search or clear your filters to browse all articles." : emptyStateDescription}</p>
          </div>
        )}
      </div>
    </main>
  );
}
