import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const LatestRecipes = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/all-items");
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="px-5 lg:px-10 py-16">
      <h1 className="text-4xl font-bold sm:leading-relaxed mb-2">
        Latest Recipes
      </h1>
      <div className="grid lg:grid-cols-4 gap-8 md:grid-cols-2 sm:grid-cols-1">
        {items.length > 0 ? (
          items.slice(0, 4).map((item) => <Card key={item._id} item={item} />)
        ) : (
          <h1 className="text-3xl font-bold text-center w-full">
            No items found
          </h1>
        )}
      </div>
      <div className="sm:w-44 mx-auto mt-12 items-center">
        <Link to="/categories/all">
          <button className="text-white bg-btnColour border-none hover:bg-btnHover px-4 py-2 rounded font-semibold transition ease-in">
            View all Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestRecipes;
