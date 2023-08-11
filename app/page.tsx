import { Suspense } from "react";
import BlogList from "./components/BlogList";
import FeaturedBlog from "./components/FeaturedBlog";
import BlogListLoader from "./components/BlogListLoader";
import FeaturedBlogLoader from "./components/FeaturedBlogLoader";
import Categories from "./components/Categories";

export default async function Home() {
  return (
    <div className="flex w-full max-w-[1400px] flex-col gap-4 lg:gap-8">
      <Suspense fallback={<FeaturedBlogLoader />}>
        <FeaturedBlog />
      </Suspense>
      <div className="flex justify-between">
        <Suspense fallback={<BlogListLoader />}>
          <BlogList />
        </Suspense>
        <Categories />
      </div>
    </div>
  );
}
