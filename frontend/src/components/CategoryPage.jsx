import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Flowbite React Components
import { Card } from "flowbite-react";

import CategoryWrapper from "./CategoryWrapper";
import axios from "axios";

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `http://localhost:5000/api/categories/${category}`
        );
        setItems(response.data);
      } catch (error) {
        setError(error.message || "Error loading category...");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [category]);

  return (
    <div className="px-6 lg:px-12 flex flex-col items-center justify-center w-full py-20">
      <h1 className="text-center text-3xl text-secondary font-semibold py-10 sm:text-6xl sm:leading-relaxed">
        {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
      </h1>
      <CategoryWrapper />

      {/* Display Results */}
      <ul className="grid lg:grid-cols-5 gap-8 mt-12 md:grid-cols-3 sm:grid-cols-1">
        {items.map((item) => (
          <Card
            key={item._id}
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={item.thumbnail_img}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.instructions}
            </p>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
