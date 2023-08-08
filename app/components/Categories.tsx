import React from "react";
import { categories } from "../categories";

const Categories = () => {
  return (
    <div className="hidden w-1/4 lg:block">
      <h2 className="mb-6 text-3xl font-semibold">Categories</h2>
      <div className="flex flex-col gap-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="cursor-pointer text-lg font-light capitalize transition-transform hover:scale-105"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
