import Header from "../../src/component/header";
import Footer from "../../src/component/footer";
import BlogListPage from "../../src/blog/BlogListPage";
import { getBlogCategories, getPublishedPosts } from "../../src/lib/supabase/blog-public";

export const dynamic = "force-dynamic";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://classtakerspro.com";

export const metadata = {
  title: "Class Takers Pro Blog",
  description: "Study tips, course support guidance, and exam strategies for online learners.",
  alternates: { canonical: `${siteUrl}/blog` },
};

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const category = typeof params?.category === "string" ? params.category : "";
  const query = typeof params?.q === "string" ? params.q : "";
  const page = Number(params?.page || 1);
  const [{ posts, total, totalPages, currentPage }, categories] = await Promise.all([
    getPublishedPosts({ categorySlug: category, search: query, page, pageSize: 6 }),
    getBlogCategories(),
  ]);

  return (
    <>
      <Header />
      <BlogListPage
        posts={posts}
        categories={categories}
        selectedCategory={category}
        searchValue={query}
        page={currentPage}
        total={total}
        totalPages={totalPages}
        routePath="/blog"
      />
      <Footer />
    </>
  );
}
