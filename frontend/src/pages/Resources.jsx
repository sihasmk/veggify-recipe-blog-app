import React from "react";
import BlogCard from "../components/BlogCard";

const blogData = [
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 1, 2020",
    views: "2.1K views",
    imgSrc: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 2, 2020",
    views: "2.2K views",
    imgSrc:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 3, 2020",
    views: "2.3K views",
    imgSrc:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 4, 2020",
    views: "2.4K views",
    imgSrc:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Convenire",
  },
];

const Resources = () => {
  return (
    <section className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl text-secondary font-semibold py-10 sm:text-6xl sm:leading-relaxed">
        Resources
      </h1>

      <article className="px-6 sm:py-12">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Partem reprimque an pro</h2>
            <p className="text-sm mb-16">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          {/* Blog data */}
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogData.map((blog, index) => (
              <BlogCard blog={blog} key={index} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Resources;
