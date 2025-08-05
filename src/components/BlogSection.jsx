import React from "react";

const blogs = [
  {
    title: " 5 Ways AI is Transforming Healthcare",
    author: "John William",
    date: "Feb 25, 24",
    image:
      "https://miro.medium.com/v2/resize:fit:1024/1*T550w5hXmGgSIaP0sHkX_g.png",
  },
  {
    title: "AI vs ML: Understanding the Difference",
    author: "John William",
    date: "Feb 25, 24",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQFiSrsuerO2-w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1701924659330?e=2147483647&v=beta&t=clfM8jZl45CVLc_dzuynbrIfIM5fs8bT44VFmtuTVzQ",
  },
  {
    title: "Building Ethical AI Models",
    author: "John William",
    date: "Feb 25, 24",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQHxSa2u4d79fw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711039285970?e=2147483647&v=beta&t=St736Huw4K2E62Bm9YMD7YrusjWHArCwCBVwda9JfEQ",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-medium text-sm">
          📰 Blog & Latest News
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          Latest News & Blog
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow border hover:shadow-md transition-all duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.121 17.804A13.937 13.937 0 0112 15c2.632 0 5.07.76 7.121 2.066M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {blog.author}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
                  </svg>
                  {blog.date}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-4 text-gray-800">
                {blog.title}
              </h3>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-1 rounded transition-all">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
