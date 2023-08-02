import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="flex w-full items-center justify-between gap-4 p-5">
      <div className="relative aspect-square w-1/4 max-w-[200px] flex-shrink-0">
        <Image
          src="/images/hero-image-1.jpg"
          alt="featured-blog-image"
          fill
          objectFit="cover"
        />
      </div>
      <div className="flex w-full flex-col lg:gap-2">
        <div className="text-xs font-light uppercase text-gray-400 lg:text-xl">
          Nature
        </div>
        <div className="font-semibold capitalize lg:text-4xl">
          World's Most Dangerous
        </div>
        <div className="flex gap-4 text-xs font-light text-gray-400 lg:text-sm">
          <p>Ralph Lauren</p>
          <p>01 Aug 2023</p>
        </div>
        <div className="text-xs font-light lg:text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          molestias qui,
        </div>
      </div>
    </div>
  );
};

export default Blog;
