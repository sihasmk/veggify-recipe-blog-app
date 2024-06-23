import React from "react";
import { Link } from "react-router-dom";

const CategoryWrapper = () => {
  const categories = [
    {
      name: "ENTREES",
      href: "/categories/entrees",
      bgColour: "#d1cd82",
      textColour: "#6b6612",
    },
    {
      name: "BREAKFAST",
      href: "/categories/breakfast",
      bgColour: "#79c97c",
      textColour: "#18611b",
    },
    {
      name: "LUNCH",
      href: "/categories/lunch",
      bgColour: "#6b8bd1",
      textColour: "#102757",
    },
    {
      name: "DESSERTS",
      href: "/categories/desserts",
      bgColour: "#d18cca",
      textColour: "#7a2072",
    },
    {
      name: "SIDES",
      href: "/categories/sides",
      bgColour: "#cc967a",
      textColour: "#733e22",
    },
    {
      name: "DRINKS",
      href: "/categories/drinks",
      bgColour: "#c98c89",
      textColour: "#910500",
    },
  ];

  return (
    <div className="flex gap-10">
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
            to={category.href}
            key={category.name}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryWrapper;
