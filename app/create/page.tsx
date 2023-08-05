"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="flex flex-col items-center gap-4 lg:gap-6">
      <h1 className="text-2xl font-semibold lg:text-4xl">Create New Blog</h1>
      <input
        className="w-full rounded-sm bg-gray-100 p-4 text-xs outline-none focus:outline-none lg:w-1/2 lg:text-base"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill
        value={body}
        onChange={setBody}
        className="w-full lg:w-1/2"
        theme="snow"
      />
      <button className="mt-4 w-fit rounded-sm bg-black px-4 py-2 uppercase text-white">
        Login
      </button>
    </div>
  );
};

export default CreatePage;
