import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Learn <span className="text-sky-500">React</span> the Right Way
        </h1>

        {/* Sub text */}
        <p className="text-lg text-gray-600 mb-8">
          Build modern, fast, and scalable web applications using
          React, Tailwind CSS, and React Router.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <button className="bg-sky-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-600 transition">
            Get Started
          </button>

          <button className="border border-sky-500 text-sky-500 px-6 py-3 rounded-lg font-medium hover:bg-sky-50 transition">
            View Courses
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;
