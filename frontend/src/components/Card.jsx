import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Flowbite React Components
import { Spinner } from "flowbite-react";

// React Icons
import { FaRegClock } from "react-icons/fa6";

// Required functions
import { calculateTotalTime } from "./../functions/calculateTotalTime";

const Card = ({ item }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const renderCategory = (menuId) => {
    const categoryObj = categories[menuId];
    const categoryStyle = {
      backgroundColor: categoryObj?.bgColour,
      color: categoryObj?.textColour,
      borderColor: categoryObj?.textColour,
    };

    return (
      <button
        className={`px-4 py-2 rounded-full font-semibold`}
        style={categoryStyle}
        to={`/categories/${categoryObj?.href}`}
      >
        {categoryObj?.name}
      </button>
    );
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="container relative mx-auto flex justify-center md:justify-start">
      <div className="absolute top-4 right-4 z-10 py-1 px-2 bg-gray-200 rounded-lg">
        {item?.more?.difficulty}
      </div>
      <div>
        <div className="bg-white relative shadow-lg hover:shadow-xl transition ease-in rounded-lg">
          <img src={item?.thumbnail_img} />
          <div className="py-6 px-5 rounded-lg bg-white">
            <Link to={`/items/${item?._id}`}>
              <h1 className="text-gray-700 font-bold text-2xl hover:text-gray-900 mb-8 hover:cursor-pointer">
                {item?.name}
              </h1>
            </Link>
            <div className="flex items-center justify-between flex-wrap">
              {renderCategory(item?.menuId)}
              <div className="flex items-center justify-between">
                <FaRegClock className="text-gray-700" />
                <span className="text-gray-700 pl-[6px]">
                  {calculateTotalTime(item)} minutes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
