"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiSolidPencil } from "react-icons/bi";

interface BioProps {
  bio: string | null | undefined;
}

const Bio: FC<BioProps> = ({ bio }) => {
  const [edit, setEdit] = useState(false);
  const [bioValue, setBioValue] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (bio) setBioValue(bio);
  }, []);

  const handleSubmit = async () => {
    setEdit(false);
    if (bioValue === bio) return;
    const toastID = toast.loading("Updating Bio");
    await axios
      .post("/api/auth/bio", { bio: bioValue })
      .then((data: any) => {
        toast.success(data.data.msg, { id: toastID });
        router.refresh();
      })
      .catch((e: any) => toast.error(e.response.data.msg, { id: toastID }));
  };

  return (
    <>
      {!edit && (
        <div className="flex">
          <div className="w-full">
            <p className="hidden text-sm font-light lg:block">
              {bio?.substring(0, 450) + (bio?.length! > 450 ? "..." : "")}
            </p>
            <p className="text-xs font-light lg:hidden">
              {bio?.substring(0, 150) + (bio?.length! > 150 ? "..." : "")}
            </p>
          </div>
          <div>
            <BiSolidPencil
              className="cursor-pointer"
              onClick={() => setEdit(true)}
            />
          </div>
        </div>
      )}
      {edit && (
        <>
          <textarea
            rows={5}
            className="w-full rounded-sm bg-gray-100 p-4 text-xs outline-none focus:outline-none"
            value={bioValue}
            onChange={(e) => setBioValue(e.target.value)}
          />
          <div className="flex w-full justify-center gap-2">
            <button
              onClick={handleSubmit}
              className="mt-4 w-fit rounded-full bg-black px-4 py-1 text-xs uppercase text-white"
            >
              Save
            </button>
            <button
              onClick={() => setEdit(false)}
              className="mt-4 w-fit rounded-full bg-black px-4 py-1 text-xs uppercase text-white"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Bio;
