import React from "react";
import { useParams } from "react-router-dom";
import CategoryWrapper from "./CategoryWrapper";

const CategoryPage = () => {
  const { category } = useParams();
  return (
    <div className="px-6 lg:px-12 flex flex-col items-center justify-center w-full py-20">
      <h1 className="text-center text-3xl text-secondary font-semibold py-10 sm:text-6xl sm:leading-relaxed">
        {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
      </h1>
      <CategoryWrapper />
    </div>
  );
};

export default CategoryPage;
