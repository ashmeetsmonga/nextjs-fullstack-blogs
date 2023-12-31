"use client";

import { BlogWithUser } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { categories } from "../categories";

interface BlogProps {
  blog: BlogWithUser;
}

const Blog: FC<BlogProps> = ({ blog }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href={`/blogDetails/${blog.id}`}>
      <div className="flex w-full items-center justify-between gap-4 px-5 transition-transform hover:scale-105">
        <div className="relative aspect-square w-1/3 max-w-[200px] flex-shrink-0 rounded-sm">
          {!imageLoaded && (
            <div className="aspect-square w-full flex-shrink-0 animate-pulse bg-gray-300"></div>
          )}
          <Image
            src={`/images/${categories.indexOf(blog!.category)}.jpg`}
            alt="featured-blog-image"
            fill
            objectFit="cover"
            className="rounded-sm"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="flex w-full flex-col gap-1 lg:gap-2">
          <div className="text-xs font-light uppercase text-gray-400 lg:text-xl">
            {blog.category}
          </div>
          <div className="font-semibold capitalize lg:hidden lg:text-2xl">
            {blog.title.substring(0, 40)}
            {blog.title.length > 40 ? "..." : ""}
          </div>
          <div className="hidden font-semibold capitalize lg:block lg:text-2xl">
            {blog.title.substring(0, 80)}
            {blog.title.length > 80 ? "..." : ""}
          </div>
          <div className="flex gap-4 text-xs font-light text-gray-400 lg:text-sm">
            <p>{blog.user.name}</p>
            <p>{blog.createdAt.toDateString()}</p>
          </div>
          <div
            className="text-xs font-light lg:hidden lg:text-sm"
            dangerouslySetInnerHTML={{
              __html: blog.body.substring(0, 80) + "...",
            }}
          />
          <div
            className="hidden text-xs font-light lg:block lg:text-sm"
            dangerouslySetInnerHTML={{
              __html: blog.body.substring(0, 150) + "...",
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default Blog;
