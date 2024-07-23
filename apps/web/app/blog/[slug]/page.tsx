import BlogPostContent from "../../components/BlogPostContent";

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <BlogPostContent slug={params.slug} />;
}
