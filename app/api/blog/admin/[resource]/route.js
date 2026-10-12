import { sanitizeBlogHtml } from "../../../../../src/lib/blog-content";
import { mapPostRow } from "../../../../../src/lib/blog-data";
import { apiError, requireBlogAdmin } from "../../../../../src/lib/supabase/blog-admin";

const resourceTables = {
  categories: "blog_categories",
  authors: "blog_authors",
};

function responseError(message, status = 400) {
  return Response.json({ error: message }, { status });
}

function validateText(value, label, maxLength) {
  if (typeof value !== "string" || !value.trim() || value.trim().length > maxLength) {
    return `${label} is required and must be at most ${maxLength} characters.`;
  }

  return null;
}

function postContent(body) {
  const sections = Array.isArray(body.sections)
    ? body.sections.filter((section) => typeof section?.title === "string" && typeof section?.body === "string")
    : [];
  if (typeof body.contentHtml !== "string" || (!body.contentHtml && sections.length)) {
    return { contentHtml: "", contentJson: { sections } };
  }
  if (body.contentHtml.length > 500_000) return { error: "Article content must be 500 KB or smaller." };
  const contentHtml = sanitizeBlogHtml(body.contentHtml);
  return { contentHtml, contentJson: { html: contentHtml } };
}

async function readPostRelations(supabase, posts) {
  if (!posts.length) return [];

  const postIds = posts.map((post) => post.id);
  const [{ data: links, error: linksError }, { data: authors, error: authorsError }] = await Promise.all([
    supabase
      .from("blog_post_categories")
      .select("post_id, category:blog_categories(id, name, slug, description)")
      .in("post_id", postIds),
    supabase.from("blog_authors").select("id, name, slug, bio, avatar_url, website_url"),
  ]);

  if (linksError) throw new Error(`Unable to load post categories: ${linksError.message}`);
  if (authorsError) throw new Error(`Unable to load post authors: ${authorsError.message}`);

  const categoriesByPost = new Map();
  for (const link of links || []) {
    if (!link.category) continue;
    const values = categoriesByPost.get(link.post_id) || [];
    values.push(link.category);
    categoriesByPost.set(link.post_id, values);
  }

  const authorsById = new Map((authors || []).map((author) => [author.id, author]));
  return posts.map((post) => ({
    ...mapPostRow(post, categoriesByPost.get(post.id) || []),
    author: authorsById.get(post.author_id) || null,
  }));
}

export async function GET(request, { params }) {
  try {
    const { resource } = await params;
    const { supabase, response } = await requireBlogAdmin();
    if (response) return response;

    if (resource === "posts") {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("updated_at", { ascending: false });
      if (error) throw new Error(`Unable to load blog posts: ${error.message}`);
      return Response.json({ items: await readPostRelations(supabase, data || []) });
    }

    const table = resourceTables[resource];
    if (!table) return responseError("Unknown blog resource.", 404);

    const { data, error } = await supabase.from(table).select("*").order("name", { ascending: true });
    if (error) throw new Error(`Unable to load ${resource}: ${error.message}`);
    const items = resource === "authors"
      ? (data || []).map((author) => ({
          ...author,
          avatarUrl: author.avatar_url,
          websiteUrl: author.website_url,
        }))
      : data || [];
    return Response.json({ items });
  } catch (error) {
    return apiError(error);
  }
}

export async function POST(request, { params }) {
  try {
    const { resource } = await params;
    const { supabase, user, response } = await requireBlogAdmin();
    if (response) return response;
    const body = await request.json();

    if (resource === "posts") {
      const titleError = validateText(body.title, "Title", 180);
      const slugError = validateText(body.slug, "Slug", 120);
      if (titleError || slugError) return responseError(titleError || slugError);
      if (!["draft", "published"].includes(body.status)) return responseError("Status must be draft or published.");

      const content = postContent(body);
      if (content.error) return responseError(content.error);
      const { contentHtml, contentJson } = content;
      const postValues = {
        title: body.title.trim(),
        slug: body.slug.trim(),
        excerpt: typeof body.excerpt === "string" ? body.excerpt.trim() : "",
        content_json: contentJson,
        content_html: contentHtml || null,
        featured_image_url: typeof body.featuredImage === "string" ? body.featuredImage.trim() : null,
        featured_image_alt: typeof body.featuredImageAlt === "string" ? body.featuredImageAlt.trim() : "",
        author_id: body.authorId || null,
        status: body.status,
        published_at: body.status === "published" ? body.publishedAt || new Date().toISOString() : null,
        seo_title: typeof body.seoTitle === "string" ? body.seoTitle.trim() : "",
        meta_description: typeof body.metaDescription === "string" ? body.metaDescription.trim() : "",
        created_by: user.id,
        updated_by: user.id,
      };
      const { data: post, error } = await supabase.from("blog_posts").insert(postValues).select("*").single();
      if (error) {
        if (error.code === "23505") return responseError("That post slug is already in use.", 409);
        throw new Error(`Unable to create post: ${error.message}`);
      }

      const categoryIds = Array.isArray(body.categoryIds) ? [...new Set(body.categoryIds)] : [];
      if (categoryIds.length) {
        const { error: categoryError } = await supabase
          .from("blog_post_categories")
          .insert(categoryIds.map((categoryId) => ({ post_id: post.id, category_id: categoryId })));
        if (categoryError) {
          await supabase.from("blog_posts").delete().eq("id", post.id);
          throw new Error(`Unable to assign post categories: ${categoryError.message}`);
        }
      }

      return Response.json({ item: (await readPostRelations(supabase, [post]))[0] }, { status: 201 });
    }

    const table = resourceTables[resource];
    if (!table) return responseError("Unknown blog resource.", 404);

    const nameError = validateText(body.name, "Name", 120);
    const slugError = validateText(body.slug, "Slug", 120);
    if (nameError || slugError) return responseError(nameError || slugError);

    const values = resource === "categories"
      ? { name: body.name.trim(), slug: body.slug.trim(), description: body.description || null }
      : {
          name: body.name.trim(),
          slug: body.slug.trim(),
          bio: body.bio || null,
          website_url: body.websiteUrl || null,
          avatar_url: body.avatarUrl || null,
        };
    const { data, error } = await supabase.from(table).insert(values).select("*").single();
    if (error) {
      if (error.code === "23505") return responseError("That slug is already in use.", 409);
      throw new Error(`Unable to create ${resource.slice(0, -1)}: ${error.message}`);
    }
    return Response.json({ item: data }, { status: 201 });
  } catch (error) {
    return apiError(error);
  }
}

export async function PATCH(request, { params }) {
  try {
    const { resource } = await params;
    const { supabase, user, response } = await requireBlogAdmin();
    if (response) return response;
    const body = await request.json();

    if (!body.id) return responseError("An item id is required.");

    if (resource === "posts") {
      const titleError = validateText(body.title, "Title", 180);
      const slugError = validateText(body.slug, "Slug", 120);
      if (titleError || slugError) return responseError(titleError || slugError);
      if (!["draft", "published"].includes(body.status)) return responseError("Status must be draft or published.");

      const content = postContent(body);
      if (content.error) return responseError(content.error);
      const { contentHtml, contentJson } = content;
      const values = {
        title: body.title.trim(),
        slug: body.slug.trim(),
        excerpt: typeof body.excerpt === "string" ? body.excerpt.trim() : "",
        content_json: contentJson,
        content_html: contentHtml || null,
        featured_image_url: typeof body.featuredImage === "string" ? body.featuredImage.trim() : null,
        featured_image_alt: typeof body.featuredImageAlt === "string" ? body.featuredImageAlt.trim() : "",
        author_id: body.authorId || null,
        status: body.status,
        published_at: body.status === "published" ? body.publishedAt || new Date().toISOString() : null,
        seo_title: typeof body.seoTitle === "string" ? body.seoTitle.trim() : "",
        meta_description: typeof body.metaDescription === "string" ? body.metaDescription.trim() : "",
        updated_by: user.id,
      };
      const { data: post, error } = await supabase.from("blog_posts").update(values).eq("id", body.id).select("*").single();
      if (error) {
        if (error.code === "23505") return responseError("That post slug is already in use.", 409);
        throw new Error(`Unable to update post: ${error.message}`);
      }

      const { error: removeError } = await supabase.from("blog_post_categories").delete().eq("post_id", post.id);
      if (removeError) throw new Error(`Unable to replace post categories: ${removeError.message}`);
      const categoryIds = Array.isArray(body.categoryIds) ? [...new Set(body.categoryIds)] : [];
      if (categoryIds.length) {
        const { error: addError } = await supabase
          .from("blog_post_categories")
          .insert(categoryIds.map((categoryId) => ({ post_id: post.id, category_id: categoryId })));
        if (addError) throw new Error(`Unable to assign post categories: ${addError.message}`);
      }
      return Response.json({ item: (await readPostRelations(supabase, [post]))[0] });
    }

    const table = resourceTables[resource];
    if (!table) return responseError("Unknown blog resource.", 404);
    const nameError = validateText(body.name, "Name", 120);
    const slugError = validateText(body.slug, "Slug", 120);
    if (nameError || slugError) return responseError(nameError || slugError);

    const values = resource === "categories"
      ? { name: body.name.trim(), slug: body.slug.trim(), description: body.description || null }
      : {
          name: body.name.trim(),
          slug: body.slug.trim(),
          bio: body.bio || null,
          website_url: body.websiteUrl || null,
          avatar_url: body.avatarUrl || null,
        };
    const { data, error } = await supabase.from(table).update(values).eq("id", body.id).select("*").single();
    if (error) {
      if (error.code === "23505") return responseError("That slug is already in use.", 409);
      throw new Error(`Unable to update ${resource.slice(0, -1)}: ${error.message}`);
    }
    return Response.json({ item: data });
  } catch (error) {
    return apiError(error);
  }
}

export async function DELETE(request, { params }) {
  try {
    const { resource } = await params;
    const { supabase, response } = await requireBlogAdmin();
    if (response) return response;
    const id = new URL(request.url).searchParams.get("id");
    if (!id) return responseError("An item id is required.");

    if (resource === "posts") {
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) throw new Error(`Unable to delete post: ${error.message}`);
      return Response.json({ success: true });
    }

    const table = resourceTables[resource];
    if (!table) return responseError("Unknown blog resource.", 404);
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) {
      if (error.code === "23503") return responseError("This item is still used by blog content and cannot be deleted.", 409);
      throw new Error(`Unable to delete ${resource.slice(0, -1)}: ${error.message}`);
    }
    return Response.json({ success: true });
  } catch (error) {
    return apiError(error);
  }
}
