import React, { FC } from "react";
import Blog from "./Blog";
import { Blog as BlogProps, User } from "@prisma/client";
import { BlogWithUser } from "@/types";

interface BlogListProps {
  blogs: BlogWithUser[];
}

const BlogList: FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="flex w-full max-w-[1400px] flex-col gap-2">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
