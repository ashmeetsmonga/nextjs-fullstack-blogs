import React, { Suspense } from "react";
import Blog from "../components/Blog";
import { getBlogsByCategory } from "../actions/getBlogsByCategory";
import BlogList from "./components/BlogList";
import BlogListLoader from "../components/BlogListLoader";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  return (
    <div className="flex w-full flex-col items-center gap-8 lg:gap-16">
      <h1 className="w-full text-center text-3xl font-semibold capitalize lg:text-6xl">
        {params.category.replaceAll("%20", " ")}
      </h1>
      <Suspense fallback={<BlogListLoader />}>
        <BlogList category={params.category} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
