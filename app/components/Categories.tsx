import React from "react";
import { categories } from "../categories";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="hidden w-1/4 lg:block">
      <h2 className="mb-6 text-3xl font-semibold capitalize">Categories</h2>
      <div className="flex flex-col gap-6">
        {categories.map((category, idx) => (
          <Link href={`/${category}`}>
            <div
              key={idx}
              className="cursor-pointer text-lg font-light capitalize transition-transform hover:scale-105"
            >
              {category}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
