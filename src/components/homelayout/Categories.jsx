import React, { use } from "react";
import { NavLink } from "react-router";
const categoriPromise = fetch("/category.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriPromise);
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 max-w-3xl mx-auto py-6">
      {categories.map((category, index) => (
        <NavLink
          to={`/category/${category.id}`}
          key={index}
          className="bg-base-200 px-4 py-2 rounded-lg shadow-sm hover:bg-base-300 cursor-pointer transition-all text-center min-w-[100px]"
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
