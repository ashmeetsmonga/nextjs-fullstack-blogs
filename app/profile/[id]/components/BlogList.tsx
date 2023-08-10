import { getBlogsByUserID } from "@/app/actions/getBlogsByUserID";
import React, { FC } from "react";
import Blog from "./Blog";

interface BlogListProps {
  id: string;
}

const BlogList: FC<BlogListProps> = async ({ id }) => {
  const blogs = await getBlogsByUserID(id);
  return (
    <div className="flex max-w-[1400px] flex-col gap-4 lg:gap-8">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
