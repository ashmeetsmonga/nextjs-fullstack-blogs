import { getBlogs } from "./actions/getBlogs";
import BlogList from "./components/BlogList";
import FeaturedBlog from "./components/FeaturedBlog";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <FeaturedBlog />
      <BlogList blogs={blogs} />
    </div>
  );
}
