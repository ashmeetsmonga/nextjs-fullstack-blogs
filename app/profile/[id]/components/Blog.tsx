"use client";

import { categories } from "@/app/categories";
import { useUserStore } from "@/app/store/userStore";
import { Blog } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";

interface BlogProps {
  blog: Blog;
  userID: string;
}

const Blog: FC<BlogProps> = ({ blog, userID }) => {
  const user = useUserStore((state) => state.user);
  const [canDeleteBlog, setCanDeleteBlog] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (user) setCanDeleteBlog(user.id === userID);
  }, [user]);

  const onDelete = () => {
    const toastID = toast.loading("Deleting blog");
    axios
      .delete(`/api/auth/delete_blog?id=${blog.id}`)
      .then((data) => {
        toast.success(data.data.msg, { id: toastID });
        router.refresh();
      })
      .catch((e) => toast.error(e.response.data.msg, { id: toastID }));
  };

  return (
    <div className="relative transition-transform hover:scale-105">
      <Link
        className="flex w-full items-center justify-between gap-4 px-5"
        href={`/blogDetails/${blog.id}`}
      >
        <div className="relative aspect-square w-1/3 max-w-[200px] flex-shrink-0 rounded-sm">
          <Image
            src={`/images/${categories.indexOf(blog!.category)}.jpg`}
            alt="featured-blog-image"
            fill
            objectFit="cover"
            className="rounded-sm"
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
      </Link>
      {canDeleteBlog && (
        <div
          onClick={onDelete}
          className="absolute right-0 top-0 z-50 cursor-pointer transition-all hover:text-red-500"
        >
          <AiFillDelete />
        </div>
      )}
    </div>
  );
};

export default Blog;
