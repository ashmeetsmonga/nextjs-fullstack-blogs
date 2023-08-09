import { getBlogsByCategory } from "@/app/actions/getBlogsByCategory";
import Blog from "@/app/components/Blog";
import React, { FC } from "react";

interface BlogListProps {
  category: string;
}

const BlogList: FC<BlogListProps> = async ({ category }) => {
  const blogs = await getBlogsByCategory(category.replaceAll("%20", " "));
  return (
    <div className="flex max-w-[1400px] flex-col gap-4 lg:w-3/5 lg:gap-8">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
      {blogs.length === 0 && (
        <h1 className="text-center text-2xl font-light lg:text-3xl">
          No Blogs Found...
        </h1>
      )}
    </div>
  );
};

export default BlogList;
