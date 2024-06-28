import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";

const NewsLetter = () => {
  return (
    <div className="w-full md:w-2/3 mx-auto flex flex-col mt-12">
      <h1 className="text-4xl text-center font-semibold text-secondary">
        Sign up for my weekly newsletter!
      </h1>
      <p className="mt-6 text-gray-600 text-center leading-normal font-light">
        Weekly emails with my latest recipes, cooking tips and tricks and
        product recommendations! <br /> You'll be setup in 10 minutes.
      </p>

      <div className="mt-6 mb-40 flex flex-col md:flex-row items-center justify-center w-full md:px-4 gap-4">
        <input
          type="text"
          id="input"
          className="flex flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-btnColour focus:border-transparent transition"
          placeholder="Name"
        />
        <input
          type="text"
          id="input"
          className="flex flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-btnColour focus:border-transparent transition"
          placeholder="Email"
        />
        <button className="text-white bg-btnColour border-none hover:bg-btnHover px-4 py-2 rounded font-semibold transition ease-in">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
