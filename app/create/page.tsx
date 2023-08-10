"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUserStore } from "../store/userStore";
import { categories } from "../categories";
import { revalidatePath } from "next/cache";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("technology");
  const [body, setBody] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
    if (!title || !body) return toast.error("Please fill all fields");

    const toastID = toast.loading("Creating blog");
    try {
      const { data } = await axios.post("/api/auth/add-blog", {
        title,
        category,
        body,
      });
      toast.success("Blog created successfully", { id: toastID });
      router.push("/");
      router.refresh();
    } catch (e) {
      toast.error("Something went wrong", { id: toastID });
    }
  };

  return (
    <div className="flex w-full max-w-[1000px] flex-col items-center gap-4 lg:gap-6">
      <h1 className="text-2xl font-semibold lg:text-4xl">Create New Blog</h1>
      <input
        className="w-full rounded-sm bg-gray-100 p-4 text-xs outline-none focus:outline-none lg:w-4/5 lg:text-base"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded-sm bg-gray-100 p-3 text-xs capitalize outline-none focus:outline-none lg:w-4/5 lg:text-base"
      >
        {categories.map((category, idx) => (
          <option key={idx}>{category}</option>
        ))}
      </select>
      <div className="w-full">
        <ReactQuill value={body} onChange={setBody} theme="snow" />
      </div>
      <button
        onClick={onSubmit}
        className="mt-4 w-fit rounded-sm bg-black px-4 py-2 uppercase text-white"
      >
        Create New Blog
      </button>
    </div>
  );
};

export default CreatePage;
