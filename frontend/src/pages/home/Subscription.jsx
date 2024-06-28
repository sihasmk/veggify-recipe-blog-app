import React from "react";

const Subscription = () => {
  return (
    <div className="bg-white py-16 rounded-t-md mx-auto">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="md:w-1/2">
            <h1 className="text-3xl sm:text-4xl tracking-tight font-bold text-secondary leading-relaxed">
              Subscribe to our newsletter
            </h1>
            <p className="text-gray-600 text-lg leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              expedita voluptates, sequi accusamus amet saepe laudantium animi
              neque quam, deleniti sint, distinctio optio iste exercitationem
              non officiis. Beatae, quasi mollitia?
            </p>
          </div>
          <div className="sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              id="input"
              className="flex w-max flex-grow px-4 py-2 border bg-primary border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-btnColour focus:border-transparent transition"
              placeholder="Enter your email"
            />
            <button className="text-white bg-btnColour border-none hover:bg-btnHover px-4 py-2 rounded font-semibold transition ease-in">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Subscription;
