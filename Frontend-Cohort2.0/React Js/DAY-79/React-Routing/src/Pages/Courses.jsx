import React, { useState } from "react";

const Courses = () => {
  // simple state (two-way binding)
  const [search, setSearch] = useState("");

  const courses = [
    {
      title: "React Basics",
      desc: "Learn components, props, state and hooks",
    },
    {
      title: "React Routing",
      desc: "Learn BrowserRouter, Link and routes",
    },
    {
      title: "Tailwind CSS",
      desc: "Build responsive UI using Tailwind",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-sky-500 text-center mb-6">
        Our Courses
      </h1>

      {/* Search (Two-way binding example) */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>

      {/* Courses */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses
          .filter((course) =>
            course.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {course.desc}
              </p>
              <button className="text-sky-500 font-medium hover:underline">
                View Course →
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Courses;
