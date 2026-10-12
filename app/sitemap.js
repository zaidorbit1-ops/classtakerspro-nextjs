import { createSupabaseServerClient } from "../src/lib/supabase/server";

export const dynamic = "force-dynamic";

const pages = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/online-class", changeFrequency: "monthly", priority: 0.9 },
  { path: "/online-exams", changeFrequency: "monthly", priority: 0.9 },
  { path: "/online-course", changeFrequency: "monthly", priority: 0.9 },
  { path: "/online-assignment", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-condition", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://classtakerspro.com";
  const supabase = await createSupabaseServerClient();
  const now = new Date().toISOString();
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("slug, updated_at, published_at")
    .eq("status", "published")
    .lte("published_at", now);

  if (error) {
    throw new Error(`Unable to add published blog posts to the sitemap: ${error.message}`);
  }

  const staticEntries = pages.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
  const postEntries = (posts || []).map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.updated_at || post.published_at,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
