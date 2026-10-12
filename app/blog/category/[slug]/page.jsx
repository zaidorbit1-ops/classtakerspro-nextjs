import { notFound } from "next/navigation";
import Header from "../../../../src/component/header";
import Footer from "../../../../src/component/footer";
import BlogListPage from "../../../../src/blog/BlogListPage";
import { getBlogCategories, getBlogCategoryBySlug, getPublishedPosts } from "../../../../src/lib/supabase/blog-public";

export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://classtakerspro.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getBlogCategoryBySlug(slug);

  if (!category) {
    return { title: "Category not found", robots: { index: false, follow: false } };
  }

  return {
    title: `${category.name} | Class Takers Pro Blog`,
    description: category.description || `Explore ${category.name} insights from the Class Takers Pro blog.`,
    alternates: { canonical: `${siteUrl}/blog/category/${slug}` },
  };
}

export default async function Page({ params, searchParams }) {
  const { slug } = await params;
  const category = await getBlogCategoryBySlug(slug);
  if (!category) notFound();

  const paramsValues = await searchParams;
  const query = typeof paramsValues?.q === "string" ? paramsValues.q : "";
  const page = Number(paramsValues?.page || 1);
  const [{ posts, total, totalPages, currentPage }, categories] = await Promise.all([
    getPublishedPosts({ categorySlug: slug, search: query, page, pageSize: 6 }),
    getBlogCategories(),
  ]);

  return (
    <>
      <Header />
      <BlogListPage
        posts={posts}
        categories={categories}
        selectedCategory={slug}
        searchValue={query}
        page={currentPage}
        total={total}
        totalPages={totalPages}
        routePath={`/blog/category/${slug}`}
        pageTitle={`${category.name} insights`}
        pageDescription={category.description || `Explore guidance, inspiration, and practical support across ${category.name.toLowerCase()}.`}
        emptyStateTitle={`No ${category.name.toLowerCase()} articles yet.`}
        emptyStateDescription="Try another category or browse the latest study tips from Class Takers Pro."
      />
      <Footer />
    </>
  );
}
