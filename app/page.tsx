import BlogList from "./components/BlogList";
import FeaturedBlog from "./components/FeaturedBlog";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <FeaturedBlog />
      <BlogList />
    </div>
  );
}
