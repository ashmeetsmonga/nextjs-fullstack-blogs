import Image from "next/image";
import React from "react";

const FeaturedBlog = () => {
  return (
    <div className="relative h-[30rem] w-full">
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          src="/images/hero-image-1.jpg"
          alt="featured-blog-image"
          fill
          objectFit="cover"
        />
      </div>
      <div className="relative z-10 ml-5 flex h-4/5 w-1/2 flex-col justify-center gap-4 bg-white p-10 lg:ml-10 lg:w-1/3">
        <div>
          <div className="text-xs font-light uppercase text-gray-400 lg:text-lg">
            Featured Blog
          </div>
          <div className="font-semibold capitalize lg:text-4xl">
            World's most dangerous technology ever made
          </div>
        </div>
        <div className="flex w-full justify-between text-xs font-light text-gray-400 lg:text-sm">
          <p>Ralph Lauren</p>
          <p>01 Aug 2023</p>
        </div>
        <p className="text-xs font-light lg:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          nesciunt distinctio eum itaque alias quae nostrum odit nobis, at
          fugiat repellendus cupiditate dolor deleniti illo delectus corrupti
        </p>
      </div>
    </div>
  );
};

export default FeaturedBlog;
