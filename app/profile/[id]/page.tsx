import { getUserDetails } from "@/app/actions/getUserDetails";
import React from "react";

const ProfilePage = async ({ params }: { params: { id: string } }) => {
  const userDetails = await getUserDetails(params.id);

  return (
    <div className="jus flex w-full flex-col items-center">
      <div className="flex w-full max-w-[1000px] items-center">
        <div className="flex w-1/3 shrink-0 justify-center">
          <div className="rounded-full bg-black px-7 py-8 text-4xl text-white lg:px-12 lg:py-16 lg:text-9xl">
            {userDetails?.name!.split(" ").map((word) => word[0])}
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-col">
            <h1 className="text-3xl font-semibold leading-snug lg:text-7xl">
              {userDetails?.name}
            </h1>
            <p className="-mt-2 text-sm text-gray-400 lg:text-lg">
              {userDetails?.email}
            </p>
          </div>
          <p className="hidden text-base font-light lg:block">
            {userDetails?.bio?.substring(0, 450) +
              (userDetails?.bio?.length! > 450 ? "..." : "")}
          </p>
          <p className="text-xs font-light lg:hidden">
            {userDetails?.bio?.substring(0, 150) +
              (userDetails?.bio?.length! > 150 ? "..." : "")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
