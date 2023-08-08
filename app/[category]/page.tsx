import React from "react";
import Blog from "../components/Blog";
import { getBlogsByCategory } from "../actions/getBlogsByCategory";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const blogs = await getBlogsByCategory(
    params.category.replaceAll("%20", " "),
  );

  return (
    <div className="flex w-full flex-col items-center gap-8 lg:gap-16">
      <h1 className="w-full text-center text-3xl font-semibold capitalize lg:text-6xl">
        {params.category.replaceAll("%20", " ")}
      </h1>
      <div className="flex max-w-[1400px] flex-col gap-4 lg:w-3/5 lg:gap-8">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
