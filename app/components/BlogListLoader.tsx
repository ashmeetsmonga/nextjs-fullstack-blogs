import React from "react";

const BlogListLoader = () => {
  return (
    <div className="flex w-full animate-pulse flex-col">
      <div className="flex w-full gap-4 p-5">
        <div className="aspect-square w-1/4 max-w-[200px] flex-shrink-0 bg-gray-300"></div>
        <div className="flex w-full flex-col justify-center gap-2">
          <div className="h-4 w-1/5 bg-gray-300"></div>
          <div className="h-4 w-2/5 bg-gray-300"></div>
          <div className="h-4 w-1/5 bg-gray-300"></div>
          <div className="h-4 w-full bg-gray-300"></div>
        </div>
      </div>
      <div className="flex w-full gap-4 p-5">
        <div className="aspect-square w-1/4 max-w-[200px] flex-shrink-0 bg-gray-300"></div>
        <div className="flex w-full flex-col justify-center gap-2">
          <div className="h-4 w-1/5 bg-gray-300"></div>
          <div className="h-4 w-2/5 bg-gray-300"></div>
          <div className="h-4 w-1/5 bg-gray-300"></div>
          <div className="h-4 w-full bg-gray-300"></div>
        </div>
      </div>
      <div className="flex w-full gap-4 p-5">
        <div className="aspect-square w-1/4 max-w-[200px] flex-shrink-0 bg-gray-300"></div>
        <div className="flex w-full flex-col justify-center gap-2">
          <div className="h-4 w-1/5 bg-gray-300"></div>
          <div className="h-4 w-2/5 bg-gray-300"></div>
          <div className="h-4 w-1/5 bg-gray-300"></div>
          <div className="h-4 w-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogListLoader;
