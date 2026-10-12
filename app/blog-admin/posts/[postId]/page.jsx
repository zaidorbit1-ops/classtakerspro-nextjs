import BlogPostEditor from "../../../../src/blog/BlogPostEditor";

export default async function EditBlogPostPage({ params }) {
  const { postId } = await params;
  return <BlogPostEditor postId={postId} />;
}
