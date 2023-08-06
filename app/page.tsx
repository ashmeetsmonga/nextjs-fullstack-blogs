import { Suspense } from "react";
import { getBlogs } from "./actions/getBlogs";
import BlogList from "./components/BlogList";
import FeaturedBlog from "./components/FeaturedBlog";
import BlogListLoader from "./components/BlogListLoader";

export default async function Home() {
  return (
    <div className="flex w-full max-w-[1400px] flex-col gap-2">
      <FeaturedBlog />
      <Suspense fallback={<BlogListLoader />}>
        <BlogList />
      </Suspense>
    </div>
  );
}
