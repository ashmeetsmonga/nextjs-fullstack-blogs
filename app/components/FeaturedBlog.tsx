import Image from "next/image";
import React from "react";

const FeaturedBlog = () => {
  return (
    <div className="relative h-[30rem]">
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          src={"/images/hero-image.jpg"}
          alt="featured-blog-image"
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default FeaturedBlog;
