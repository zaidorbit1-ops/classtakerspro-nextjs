import { notFound } from "next/navigation";
import Header from "../../../../src/component/header";
import Footer from "../../../../src/component/footer";
import BlogListPage from "../../../../src/blog/BlogListPage";
import { getBlogCategories, getBlogAuthorBySlug, getPublishedPosts } from "../../../../src/lib/supabase/blog-public";

export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://classtakerspro.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = await getBlogAuthorBySlug(slug);

  if (!author) {
    return { title: "Author not found", robots: { index: false, follow: false } };
  }

  return {
    title: `${author.name} | Class Takers Pro Blog`,
    description: author.bio || `Read articles written by ${author.name} on the Class Takers Pro blog.`,
    alternates: { canonical: `${siteUrl}/blog/author/${slug}` },
  };
}

export default async function Page({ params, searchParams }) {
  const { slug } = await params;
  const author = await getBlogAuthorBySlug(slug);
  if (!author) notFound();

  const paramsValues = await searchParams;
  const query = typeof paramsValues?.q === "string" ? paramsValues.q : "";
  const page = Number(paramsValues?.page || 1);
  const [{ posts, total, totalPages, currentPage }, categories] = await Promise.all([
    getPublishedPosts({ authorSlug: slug, search: query, page, pageSize: 6 }),
    getBlogCategories(),
  ]);

  return (
    <>
      <Header />
      <BlogListPage
        posts={posts}
        categories={categories}
        searchValue={query}
        page={currentPage}
        total={total}
        totalPages={totalPages}
        routePath={`/blog/author/${slug}`}
        pageTitle={`${author.name}'s articles`}
        pageDescription={author.bio || `Explore the latest published insights and study guidance from ${author.name}.`}
        emptyStateTitle={`No articles by ${author.name} yet.`}
        emptyStateDescription="Check back soon for new writing and practical learning guidance."
      />
      <Footer />
    </>
  );
}
