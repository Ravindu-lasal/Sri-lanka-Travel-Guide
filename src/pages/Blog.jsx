// src/pages/Blog.jsx
import React from "react";

const featuredBlog = {
  id: 1,
  title: "Top 10 Places to Visit in Sri Lanka",
  description:
    "Discover the must-visit destinations in Sri Lanka, from ancient ruins to golden beaches.",
  image:
    "https://images.unsplash.com/photo-1583240641670-5cb91861e6a6?w=1000&h=600&fit=crop",
};

const popularBlogs = [
  {
    id: 2,
    title: "Best Sri Lankan Food You Must Try",
    description:
      "Taste authentic Sri Lankan cuisine – from spicy curries to sweet tropical fruits.",
    image:
      "https://images.unsplash.com/photo-1603077742305-66f0da6bb1a8?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Guide to Sri Lanka’s Train Journey",
    description:
      "Experience one of the most scenic train rides in the world, from Kandy to Ella.",
    image:
      "https://images.unsplash.com/photo-1600831636886-f1b46d6e5b92?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Wildlife Adventures in Sri Lanka",
    description:
      "Explore Yala and Udawalawe parks to see elephants, leopards, and rare birds.",
    image:
      "https://images.unsplash.com/photo-1550953575-81dffb4a8be9?w=800&h=500&fit=crop",
  },
];

const sideBlogs = [
  { id: 5, title: "5 Budget Travel Tips for Sri Lanka" },
  { id: 6, title: "Surfing Hotspots on the East Coast" },
  { id: 7, title: "Cultural Festivals You Shouldn’t Miss" },
  { id: 8, title: "Solo Travel Guide for Sri Lanka" },
];

function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-10">
        {/* Featured Blog */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={featuredBlog.image}
            alt={featuredBlog.title}
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900">
              {featuredBlog.title}
            </h2>
            <p className="text-gray-600 mt-3">{featuredBlog.description}</p>
            <button className="mt-4 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600">
              Read More →
            </button>
          </div>
        </div>

        {/* Popular Blogs */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Popular Blogs</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {popularBlogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg">{blog.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">
                    {blog.description}
                  </p>
                  <button className="mt-3 text-yellow-600 font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Other Blogs</h3>
        <div className="bg-gray-50 rounded-xl p-5 shadow space-y-4">
          {sideBlogs.map((blog) => (
            <div
              key={blog.id}
              className="border-b last:border-0 pb-2 last:pb-0"
            >
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-600 font-medium"
              >
                {blog.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

