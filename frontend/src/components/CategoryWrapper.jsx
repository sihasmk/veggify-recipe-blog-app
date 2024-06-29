import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Flowbite React Components
import { Spinner } from "flowbite-react";

const CategoryWrapper = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "http://localhost:5000/api/all-categories"
        );
        setCategories(response.data);
      } catch (error) {
        setError(error.message || "Error loading categories...");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="flex gap-10 items-center justify-center">
      {categories.map((category) => {
        const style = {
          backgroundColor: category.bgColour,
          color: category.textColour,
          borderColor: category.textColour,
        };

        return (
          <Link
            className={`px-4 py-2 rounded-full font-semibold`}
            style={style}
            to={`/categories/${category.href}`}
            key={category._id}
          >
            {category.name.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryWrapper;
