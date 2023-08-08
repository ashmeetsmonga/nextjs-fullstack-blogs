import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 lg:gap-8">
      <div className="relative h-[15rem] w-full animate-pulse bg-gray-400 px-5 lg:h-[30rem]"></div>
      <div className="flex w-full animate-pulse flex-col items-center gap-4 lg:max-w-[1000px]">
        <div className="h-8 w-full bg-gray-400"></div>
        <div className="h-8 w-4/5 bg-gray-400"></div>
        <div className="mt-4 h-2 w-1/2 bg-gray-200"></div>
        <div className="mt-4 flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-2">
            <div className="h-3 w-full bg-gray-300"></div>
            <div className="h-3 w-4/5 bg-gray-300"></div>
            <div className="h-3 w-3/5 bg-gray-300"></div>
            <div className="h-3 w-4/5 bg-gray-300"></div>
            <div className="h-3 w-2/5 bg-gray-300"></div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="h-3 w-full bg-gray-300"></div>
            <div className="h-3 w-4/5 bg-gray-300"></div>
            <div className="h-3 w-3/5 bg-gray-300"></div>
            <div className="h-3 w-4/5 bg-gray-300"></div>
            <div className="h-3 w-2/5 bg-gray-300"></div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="h-3 w-full bg-gray-300"></div>
            <div className="h-3 w-4/5 bg-gray-300"></div>
            <div className="h-3 w-3/5 bg-gray-300"></div>
            <div className="h-3 w-4/5 bg-gray-300"></div>
            <div className="h-3 w-2/5 bg-gray-300"></div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="h-3 w-full bg-gray-300"></div>
            <div className="h-3 w-4/5 bg-gray-300"></div>
            <div className="h-3 w-3/5 bg-gray-300"></div>
            <div className="h-3 w-4/5 bg-gray-300"></div>
            <div className="h-3 w-2/5 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
