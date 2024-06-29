import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={blog.imgSrc} alt="" />
      <div className="p-5">
        <h6 className="uppercase text-gray-700 mb-2">{blog.category}</h6>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {blog.title}
        </h5>

        <div className="flex items-center justify-between">
          <span className="text-gray-700">{blog.date}</span>
          <span className="text-gray-700">{blog.views}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
