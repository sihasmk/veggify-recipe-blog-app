import React from "react";

const FeaturedSection = () => {
  return (
    <div className="flex flex-col overflow-hidden md:flex-row sm:my-20 my-4 md:gap-20 justify-between items-center gap-12 px-5 lg:px-10">
      <div className="relative">
        <div className="absolute top-4 left-4 py-1 px-2 text-secondary bg-gray-200 font-semibold">
          FEATURED RECIPE
        </div>
        <img
          className="rounded-md"
          src="https://hips.hearstapps.com/hmg-prod/images/chicken-alfredo-index-64ee1026c82a9.jpg"
          alt=""
        />
      </div>
      <div className="text-start sm:w-1/2">
        <h1 className="text-4xl font-bold sm:leading-relaxed mb-2">
          Pineapple + Smoked Jackfruit Pizza
        </h1>
        <p className="leading-7 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          veritatis cumque rem eveniet quaerat qui sint architecto odio! Sit
          consequuntur et quia animi nam distinctio quisquam inventore, dolor ea
          accusamus.
        </p>
        <button className="text-secondary bg-btnColour border-none hover:bg-btnHover px-4 py-2 rounded font-semibold transition ease-in">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
