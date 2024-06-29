import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "./Card";

// Flowbite React Components
import { Spinner } from "flowbite-react";

import CategoryWrapper from "./CategoryWrapper";
import axios from "axios";

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [categoryObj, setCategoryObj] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);

      try {
        let itemsResponse;

        itemsResponse = await axios.get(
          `http://localhost:5000/api/categories/${category}`
        );

        setItems(itemsResponse.data);
      } catch (error) {
        setError(error.message || "Error loading category...");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [category]);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-12 flex flex-col items-center justify-center w-full py-20">
      <h1 className="text-center text-3xl text-secondary font-semibold py-10 sm:text-6xl sm:leading-relaxed">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <CategoryWrapper />

      {/* Display Results */}
      <ul className="grid lg:grid-cols-4 gap-8 mt-12 md:grid-cols-3 sm:grid-cols-1">
        {items.map((item) => {
          return <Card key={item._id} item={item}></Card>;
        })}
      </ul>
    </div>
  );
};

export default CategoryPage;
