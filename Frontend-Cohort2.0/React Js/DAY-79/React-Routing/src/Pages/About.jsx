import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-xl p-8">
        
        <h1 className="text-4xl font-bold text-sky-500 mb-4 text-center">
          About Us
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed text-center">
          Welcome to our platform 👋  
          We are focused on building clean, modern, and user-friendly web
          applications using React and Tailwind CSS.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-lg bg-sky-50">
            <h2 className="text-xl font-semibold text-sky-500">React</h2>
            <p className="text-gray-600 text-sm">
              Component-based UI
            </p>
          </div>

          <div className="p-4 rounded-lg bg-sky-50">
            <h2 className="text-xl font-semibold text-sky-500">Tailwind</h2>
            <p className="text-gray-600 text-sm">
              Utility-first CSS
            </p>
          </div>

          <div className="p-4 rounded-lg bg-sky-50">
            <h2 className="text-xl font-semibold text-sky-500">Routing</h2>
            <p className="text-gray-600 text-sm">
              Smooth navigation
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
