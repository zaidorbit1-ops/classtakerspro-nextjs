import { mapPostRow } from "../blog-data";
import { createSupabaseServerClient } from "./server";

const postColumns = "*";

async function enrichPosts(supabase, rows) {
  if (!rows.length) return [];
  const postIds = rows.map((post) => post.id);
  const [{ data: links, error: linksError }, { data: authors, error: authorsError }] = await Promise.all([
    supabase
      .from("blog_post_categories")
      .select("post_id, category:blog_categories(id, name, slug, description)")
      .in("post_id", postIds),
    supabase
      .from("blog_authors")
      .select("id, name, slug, bio, avatar_url, website_url")
      .eq("is_active", true),
  ]);

  if (linksError) throw new Error(`Unable to load blog categories: ${linksError.message}`);
  if (authorsError) throw new Error(`Unable to load blog authors: ${authorsError.message}`);

  const categoriesByPost = new Map();
  for (const link of links || []) {
    if (!link.category) continue;
    const postCategories = categoriesByPost.get(link.post_id) || [];
    postCategories.push(link.category);
    categoriesByPost.set(link.post_id, postCategories);
  }

  const authorsById = new Map((authors || []).map((author) => [author.id, author]));
  return rows.map((post) => ({
    ...mapPostRow(post, categoriesByPost.get(post.id) || []),
    author: authorsById.get(post.author_id) || null,
  }));
}

export async function getBlogCategories() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_categories")
    .select("id, name, slug, description")
    .eq("is_active", true)
    .order("name");
  if (error) throw new Error(`Unable to load blog categories: ${error.message}`);
  return data || [];
}

export async function getBlogCategoryBySlug(slug) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_categories")
    .select("id, name, slug, description")
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();
  if (error) throw new Error(`Unable to load selected category: ${error.message}`);
  return data || null;
}

export async function getBlogAuthors() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("blog_authors").select("id, name, slug, bio, avatar_url, website_url").eq("is_active", true).order("name");
  if (error) throw new Error(`Unable to load blog authors: ${error.message}`);
  return data || [];
}

export async function getBlogAuthorBySlug(slug) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_authors")
    .select("id, name, slug, bio, avatar_url, website_url")
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();
  if (error) throw new Error(`Unable to load selected author: ${error.message}`);
  return data || null;
}

export async function getPublishedPosts({ categorySlug = "", authorSlug = "", search = "", page = 1, pageSize = 6 } = {}) {
  const supabase = await createSupabaseServerClient();
  const normalizedPage = Number.isFinite(Number(page)) ? Math.max(1, Math.floor(Number(page))) : 1;
  let categoryId = "";
  let authorId = "";

  if (categorySlug) {
    const category = await getBlogCategoryBySlug(categorySlug);
    if (!category) return { posts: [], total: 0, totalPages: 1, currentPage: normalizedPage };
    categoryId = category.id;
  }

  if (authorSlug) {
    const author = await getBlogAuthorBySlug(authorSlug);
    if (!author) return { posts: [], total: 0, totalPages: 1, currentPage: normalizedPage };
    authorId = author.id;
  }

  let filteredPostIds = null;
  if (categoryId) {
    const { data: links, error: linksError } = await supabase
      .from("blog_post_categories")
      .select("post_id")
      .eq("category_id", categoryId);
    if (linksError) throw new Error(`Unable to filter blog posts by category: ${linksError.message}`);
    filteredPostIds = (links || []).map((link) => link.post_id);
    if (!filteredPostIds.length) return { posts: [], total: 0, totalPages: 1, currentPage: normalizedPage };
  }

  let query = supabase
    .from("blog_posts")
    .select(postColumns, { count: "exact" })
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });
  if (filteredPostIds) query = query.in("id", filteredPostIds);
  if (authorId) query = query.eq("author_id", authorId);

  const safeSearch = search.trim().replace(/[^a-zA-Z0-9\s-]/g, " ").replace(/\s+/g, " ").slice(0, 100);
  if (safeSearch) {
    query = query.or(`title.ilike.%${safeSearch}%,excerpt.ilike.%${safeSearch}%`);
  }

  const start = (normalizedPage - 1) * pageSize;
  const { data, count, error } = await query.range(start, start + pageSize - 1);
  if (error) throw new Error(`Unable to load published posts: ${error.message}`);

  const total = count || 0;
  return {
    posts: await enrichPosts(supabase, data || []),
    total,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
    currentPage: normalizedPage,
  };
}

export async function getPublishedPostBySlug(slug) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(postColumns)
    .eq("slug", slug)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .maybeSingle();
  if (error) throw new Error(`Unable to load blog post: ${error.message}`);
  if (!data) return null;

  return (await enrichPosts(supabase, [data]))[0];
}

export async function getRelatedPublishedPosts(post, limit = 3) {
  const supabase = await createSupabaseServerClient();
  let relatedIds = [];
  if (post.categoryIds?.length) {
    const { data: links, error: linksError } = await supabase
      .from("blog_post_categories")
      .select("post_id")
      .in("category_id", post.categoryIds)
      .neq("post_id", post.id);
    if (linksError) throw new Error(`Unable to load related article categories: ${linksError.message}`);
    relatedIds = [...new Set((links || []).map((link) => link.post_id))];
  }

  let query = supabase
    .from("blog_posts")
    .select(postColumns)
    .neq("id", post.id)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false })
    .limit(limit);
  if (relatedIds.length) query = query.in("id", relatedIds);

  const { data, error } = await query;
  if (error) throw new Error(`Unable to load related blog posts: ${error.message}`);
  if (!data?.length && relatedIds.length) {
    const { data: recentPosts, error: recentPostsError } = await supabase
      .from("blog_posts")
      .select(postColumns)
      .neq("id", post.id)
      .eq("status", "published")
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false })
      .limit(limit);
    if (recentPostsError) throw new Error(`Unable to load recent articles: ${recentPostsError.message}`);
    return enrichPosts(supabase, recentPosts || []);
  }
  return enrichPosts(supabase, data || []);
}
