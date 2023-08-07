import Image from "next/image";
import React from "react";
import { getFeatureBlog } from "../actions/getFeatureBlog";
import parse from "html-react-parser";

const FeaturedBlog = async () => {
  const featureBlog = await getFeatureBlog();
  return (
    <div className="relative h-[30rem] w-full px-5">
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          src="/images/hero-image-1.jpg"
          alt="featured-blog-image"
          fill
          objectFit="cover"
          className=""
        />
      </div>
      <div className="relative z-10 flex h-1/2 flex-col justify-center gap-2 bg-white p-10 lg:ml-10 lg:h-4/5 lg:w-1/3 lg:gap-4">
        <div>
          <div className="text-base font-light uppercase text-gray-400 lg:text-lg">
            Featured Blog
          </div>
          <div className="text-2xl font-semibold capitalize lg:text-4xl">
            {featureBlog?.title.substring(0, 40)}
            {featureBlog?.title.length! > 40 ? "..." : ""}
          </div>
        </div>
        <div className="flex gap-4 text-xs font-light text-gray-400 lg:text-sm">
          <p>{featureBlog?.user.name}</p>
          <p>{featureBlog?.user.createdAt.toDateString()}</p>
        </div>
        <div className="text-xs font-light lg:text-sm">
          {featureBlog!.body.length > 200
            ? parse(featureBlog!.body.substring(0, 200) + "...")
            : parse(featureBlog!.body.substring(0, 200))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
