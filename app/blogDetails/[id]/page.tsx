import { getBlogDetails } from "@/app/actions/getBlogDetails";
import { categories } from "@/app/categories";
import Image from "next/image";
import React from "react";

const BlogDetailsPage = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogDetails(params.id);

  return (
    <div className="flex w-full max-w-[1400px] flex-col items-center gap-4 lg:gap-8">
      <div className="relative h-[15rem] w-full rounded-sm lg:h-[30rem]">
        <Image
          src={`/images/${categories.indexOf(blog!.category)}.jpg`}
          alt="featured-blog-image"
          fill
          objectFit="cover"
          className="rounded-sm"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-4 lg:max-w-[1000px] lg:gap-8">
        <h1 className="text-center text-3xl font-semibold lg:text-5xl">
          {blog?.title}
        </h1>
        <div className="flex justify-center gap-4 text-sm font-light text-gray-400 lg:text-base">
          <div>{blog?.user?.name}</div>
          <div>{blog?.createdAt.toDateString()}</div>
        </div>
        <div
          className="text-sm font-light"
          dangerouslySetInnerHTML={{ __html: blog!.body }}
        />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
