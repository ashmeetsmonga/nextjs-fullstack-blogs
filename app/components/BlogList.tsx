import React, { FC } from "react";
import Blog from "./Blog";
import { getBlogs } from "../actions/getBlogs";

const BlogList = async () => {
  const blogs = await getBlogs();
  return (
    <div className="flex w-full max-w-[1400px] flex-col gap-2">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
