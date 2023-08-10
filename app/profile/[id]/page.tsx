import { getUserDetails } from "@/app/actions/getUserDetails";
import React from "react";
import BlogList from "./components/BlogList";

const ProfilePage = async ({ params }: { params: { id: string } }) => {
  const userDetails = await getUserDetails(params.id);

  return (
    <div className="jus flex w-full flex-col items-center">
      <div className="flex w-full max-w-[1000px] items-center">
        <div className="flex w-1/3 shrink-0 justify-center">
          <div className="rounded-full bg-black px-7 py-8 text-4xl text-white lg:px-12 lg:py-16 lg:text-9xl">
            {userDetails
              ?.name!.split(" ")
              .slice(0, 2)
              .map((word) => word[0])}
          </div>
        </div>
        <div className="flex w-full flex-col gap-1 lg:gap-2">
          <div className="flex w-full flex-col">
            <h1 className="text-3xl font-semibold tracking-tight lg:text-7xl lg:tracking-tighter">
              {userDetails?.name}
            </h1>
            <p className="-mt-1 text-sm text-gray-400 lg:text-lg">
              {userDetails?.email}
            </p>
          </div>
          <p className="hidden text-sm font-light lg:block">
            {userDetails?.bio?.substring(0, 450) +
              (userDetails?.bio?.length! > 450 ? "..." : "")}
          </p>
          <p className="text-xs font-light lg:hidden">
            {userDetails?.bio?.substring(0, 150) +
              (userDetails?.bio?.length! > 150 ? "..." : "")}
          </p>
        </div>
      </div>
      <div className="mt-10 lg:mt-16">
        <BlogList id={params.id} />
      </div>
    </div>
  );
};

export default ProfilePage;
