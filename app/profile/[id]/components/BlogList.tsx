import { getBlogsByUserID } from "@/app/actions/getBlogsByUserID";
import React from "react";
import Blog from "./Blog";

const BlogList = async ({ id }: { id: string }) => {
  const blogs = await getBlogsByUserID(id);
  return (
    <div className="flex max-w-[1400px] flex-col gap-4 lg:gap-8">
      {blogs.map((blog) => (
        <Blog key={blog.id} userID={id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
