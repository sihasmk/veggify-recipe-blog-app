import React from "react";

const ErrorPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex items-center justify-center py-8 px-4 mx-auto h-screen w-screen lg:py-16 lg:px-6">
        <div className="mx-auto text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-notFound-600 dark:text-notFound-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <a
            href="/"
            className="inline-flex text-white bg-notFound-600 hover:bg-notFound-800 focus:ring-4 focus:outline-none focus:ring-notFound-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-notFound-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
