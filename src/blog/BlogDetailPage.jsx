"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { readingTimeMinutes } from "../lib/blog-data";
import styles from "./BlogDetailPage.module.css";

function slugify(value = "") {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function formatDate(value) {
  if (!value) return "Draft";
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogDetailPage({ post, relatedPosts }) {
  const author = post.author;
  const categories = post.categories || [];
  const readingTime = readingTimeMinutes(post.contentHtml || post.sections || []);
  const related = relatedPosts || [];
  const contentRef = useRef(null);
  const [htmlHeadings, setHtmlHeadings] = useState([]);
  const legacyHeadings = useMemo(
    () => (post.sections || []).filter((section) => section?.title).map((section) => ({ id: slugify(section.title), title: section.title })),
    [post.sections]
  );
  const headings = post.contentHtml
    ? htmlHeadings
    : legacyHeadings;
  const [activeSection, setActiveSection] = useState(headings[0]?.id || "");

  useEffect(() => {
    if (!post.contentHtml || !contentRef.current) return;
    const usedIds = new Set();
    const nextHeadings = Array.from(contentRef.current.querySelectorAll("h2, h3, h4"))
      .map((element) => {
        const baseId = slugify(element.textContent || "");
        if (!baseId) return null;
        let id = baseId;
        let suffix = 2;
        while (usedIds.has(id)) id = `${baseId}-${suffix++}`;
        usedIds.add(id);
        element.id = id;
        return { id, title: element.textContent || "" };
      })
      .filter(Boolean);
    setHtmlHeadings(nextHeadings);
  }, [post.contentHtml]);

  useEffect(() => {
    if (!headings.length) return;
    const sectionIds = headings.map((heading) => heading.id);

    const onScroll = () => {
      const offset = window.scrollY + 160;
      let currentId = sectionIds[0] || "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= offset) {
          currentId = id;
        }
      }

      setActiveSection(currentId);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  return (
    <section className={styles.page}>
      <div className={styles.wrapper}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>→</span>
          <Link href="/blog">Blog</Link>
          {categories[0] ? <>
            <span>→</span>
            <Link href={`/blog?category=${categories[0].slug}`}>{categories[0].name}</Link>
          </> : null}
          <span>→</span>
          <span>{post.title}</span>
        </nav>

        <div className={styles.articleShell}>
          <article className={styles.article}>
            {post.featuredImage ? <img src={post.featuredImage} alt={post.featuredImageAlt || post.title} className={styles.heroImage} /> : null}

            <div className={styles.articleBody}>
              <div className={styles.metaRow}>
                {categories.map((category) => (
                  <span key={category.id} className={styles.tag}>{category.name}</span>
                ))}
              </div>

              <h1 className={styles.title}>{post.title}</h1>

              <div className={styles.metaRow}>
                <span>By {author?.name || "Class Takers Pro"}</span>
                <span>•</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span>•</span>
                <span>{readingTime} min read</span>
              </div>

              <p className={styles.excerpt}>{post.excerpt}</p>

              <div className={styles.content}>
                {post.contentHtml ? (
                  <div ref={contentRef} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                ) : post.sections?.map((section, index) => (
                  <section key={`${section.title}-${index}`} id={slugify(section.title)}>
                    {section.title ? <h2>{section.title}</h2> : null}
                    <p>{section.body}</p>
                  </section>
                ))}
              </div>
            </div>
          </article>

          {headings.length > 1 ? (
            <aside className={styles.toc}>
              <h3>Table of contents</h3>
              <ul>
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a href={`#${heading.id}`} className={activeSection === heading.id ? styles.tocLinkActive : undefined}>{heading.title}</a>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>

        {author ? (
          <div className={styles.authorCard}>
            <div>
              <div className={styles.authorLabel}>Author</div>
              <h3>{author.name}</h3>
              {author.bio ? <p>{author.bio}</p> : null}
            </div>
          </div>
        ) : null}

        <div className={styles.cta}>
          <h3>Need a custom plan for your coursework?</h3>
          <p>Talk to an academic expert and get personalized support for your class, exam, or assignment.</p>
          <Link href="/contact" className={styles.ctaButton}>Hire a tutor</Link>
        </div>

        {related.length ? (
          <section className={styles.related} aria-labelledby="related-articles-title">
            <div className={styles.relatedHeading}>
              <div>
                <span className={styles.relatedEyebrow}>KEEP READING</span>
                <h2 id="related-articles-title" className={styles.relatedHeader}>Related articles</h2>
              </div>
              <Link href="/blog" className={styles.allArticlesLink}>All articles <span aria-hidden="true">↗</span></Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <Link key={item.id} href={`/blog/${item.slug}`} className={styles.relatedCard}>
                  <span className={styles.relatedImage}>
                    {item.featuredImage ? <img src={item.featuredImage} alt={item.featuredImageAlt || item.title} /> : null}
                  </span>
                  <div className={styles.relatedCardBody}>
                    {item.categories?.[0] ? <span className={styles.relatedCategory}>{item.categories[0].name}</span> : null}
                    <h3>{item.title}</h3>
                    <span className={styles.relatedReadLink}>Read article <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
}
