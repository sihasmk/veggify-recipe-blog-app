import React from "react";

// React Icons
import { MdOutlineSearch } from "react-icons/md";

const Hero = () => {
  return (
    <div className="px-5 xl:px-10 md:w-1/2 mb-10">
      <h1 className="text-5xl xl:text-6xl mt-6 mb-10 font-bold text-secondary text-center leading-normal xl:leading-relaxed">
        A blog template made for food
        <span className="text-btnColour"> influencers</span>
      </h1>
      <form
        action="/search"
        className="flex items-center border border-gray-300 rounded-lg overflow-hidden mt-8"
      >
        <button className="p-2">
          <MdOutlineSearch className="text-gray-500" />
        </button>
        <input
          type="search"
          name="query"
          id="search"
          className="w-full py-2 px-3 text-gray-700 focus:outline-none border-none"
          placeholder="Search for a recipe..."
          required=""
        />
      </form>
    </div>
  );
};

export default Hero;
