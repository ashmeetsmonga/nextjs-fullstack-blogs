import { BlogWithUser } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface BlogProps {
  blog: BlogWithUser;
}

const Blog: FC<BlogProps> = ({ blog }) => {
  return (
    <Link href={`/blogDetails/${blog.id}`}>
      <div className="flex w-full items-center justify-between gap-4 px-5 transition-transform hover:scale-105">
        <div className="relative aspect-square w-1/4 max-w-[200px] flex-shrink-0 rounded-sm">
          <Image
            src="/images/hero-image-1.jpg"
            alt="featured-blog-image"
            fill
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <div className="flex w-full flex-col lg:gap-2">
          <div className="text-xs font-light uppercase text-gray-400 lg:text-xl">
            Nature
          </div>
          <div className="font-semibold capitalize lg:text-4xl">
            {blog.title.substring(0, 20)}
          </div>
          <div className="flex gap-4 text-xs font-light text-gray-400 lg:text-sm">
            <p>{blog.user.name}</p>
            <p>{blog.createdAt.toDateString()}</p>
          </div>
          <div
            className="text-xs font-light lg:text-sm"
            dangerouslySetInnerHTML={{ __html: blog.body.substring(0, 100) }}
          />
        </div>
      </div>
    </Link>
  );
};

export default Blog;
