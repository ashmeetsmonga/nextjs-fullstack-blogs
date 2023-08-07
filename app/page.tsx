import { Suspense } from "react";
import { getBlogs } from "./actions/getBlogs";
import BlogList from "./components/BlogList";
import FeaturedBlog from "./components/FeaturedBlog";
import BlogListLoader from "./components/BlogListLoader";
import FeaturedBlogLoader from "./components/FeaturedBlogLoader";

export default async function Home() {
  return (
    <div className="flex w-full max-w-[1400px] flex-col gap-4 lg:gap-8">
      <Suspense fallback={<FeaturedBlogLoader />}>
        <FeaturedBlog />
      </Suspense>
      <Suspense fallback={<BlogListLoader />}>
        <BlogList />
      </Suspense>
    </div>
  );
}
