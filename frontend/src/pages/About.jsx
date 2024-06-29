import React from "react";

const About = () => {
  return (
    <div className="px-6 lg:px-12 py-20">
      <div className="mb-16">
        <h1 className="text-center text-3xl text-secondary font-semibold py-10 sm:text-6xl sm:leading-relaxed">
          About
        </h1>
        <p className="text-secondary text-center max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          deleniti aut mollitia ad quibusdam magnam at itaque, quas ipsa facilis
          assumenda quidem optio explicabo. Et sunt placeat error perspiciatis
          quasi!
        </p>
      </div>

      <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-700">
                Favourite Recipes.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-between items-center mx-auto px-6 py-20">
        <blockquote className="text-xl w-8/12 italic font-semibold text-gray-900 dark:text-white">
          <svg
            className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p>
            "At Veggify, we believe that great food is the foundation of
            happiness and well-being. Our recipes are crafted with care and
            passion, ensuring they bring joy and flavor to your table. Trust in
            our expertise and let our carefully tested recipes guide you to
            culinary success. With Veggify, you can be confident that every meal
            will be delicious and satisfying."
          </p>
        </blockquote>

        <button className="text-white bg-btnColour border-none hover:bg-btnHover px-4 py-2 rounded font-semibold transition-all ease-in">
          Call now
        </button>
      </div>
    </div>
  );
};

export default About;
