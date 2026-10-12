export function sanitizeSlug(value = "") {
  return String(value)
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90) || "untitled-post";
}

export function readingTimeMinutes(sections = []) {
  const body = typeof sections === "string"
    ? sections.replace(/<[^>]*>/g, " ")
    : sections.map((section) => section.body || "").join(" ");
  const words = body.split(/\s+/).filter(Boolean).length;

  return Math.max(3, Math.ceil(words / 180));
}

export function mapPostRow(row, categories = []) {
  const categoryIds = categories.map((category) => category.id);
  const sections = Array.isArray(row.content_json?.sections)
    ? row.content_json.sections
    : [];
  const contentHtml = typeof row.content_html === "string" && row.content_html
    ? row.content_html
    : typeof row.content_json?.html === "string"
      ? row.content_json.html
      : "";

  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt || "",
    status: row.status,
    publishedAt: row.published_at,
    featuredImage: row.featured_image_url || "",
    featuredImageAlt: row.featured_image_alt || "",
    seoTitle: row.seo_title || "",
    metaDescription: row.meta_description || "",
    canonicalUrl: row.canonical_url || "",
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    robotsIndex: row.robots_index !== false,
    robotsFollow: row.robots_follow !== false,
    updatedAt: row.updated_at || row.published_at,
    authorId: row.author_id || "",
    author: row.author || null,
    categories,
    categoryIds,
    sections,
    contentHtml,
  };
}
