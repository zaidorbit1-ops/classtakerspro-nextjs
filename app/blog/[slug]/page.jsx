import { notFound } from "next/navigation";
import Header from "../../../src/component/header";
import Footer from "../../../src/component/footer";
import BlogDetailPage from "../../../src/blog/BlogDetailPage";
import { sanitizeBlogHtml } from "../../../src/lib/blog-content";
import { getPublishedPostBySlug, getRelatedPublishedPosts } from "../../../src/lib/supabase/blog-public";

export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://classtakerspro.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) return { title: "Blog post not found", robots: { index: false, follow: false } };

  const canonical = post.canonicalUrl || `${siteUrl}/blog/${post.slug}`;
  return {
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical },
    robots: { index: post.robotsIndex, follow: post.robotsFollow },
    openGraph: {
      title: post.ogTitle || post.seoTitle || post.title,
      description: post.ogDescription || post.metaDescription || post.excerpt,
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.featuredImage ? [{ url: post.featuredImage, alt: post.featuredImageAlt || post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.ogTitle || post.seoTitle || post.title,
      description: post.ogDescription || post.metaDescription || post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const postRecord = await getPublishedPostBySlug(slug);
  if (!postRecord) notFound();
  const post = {
    ...postRecord,
    contentHtml: postRecord.contentHtml ? sanitizeBlogHtml(postRecord.contentHtml) : "",
  };

  const relatedPosts = await getRelatedPublishedPosts(post, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: post.canonicalUrl || `${siteUrl}/blog/${post.slug}`,
    ...(post.featuredImage ? { image: [post.featuredImage] } : {}),
    ...(post.author ? { author: { "@type": "Person", name: post.author.name } } : {}),
    publisher: { "@type": "Organization", name: "Class Takers Pro", url: siteUrl },
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <BlogDetailPage post={post} relatedPosts={relatedPosts} />
      <Footer />
    </>
  );
}
