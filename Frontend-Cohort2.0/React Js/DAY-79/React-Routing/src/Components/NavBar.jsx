import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-sky-500">
          MyApp
        </h1>

        {/* Links */}
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-sky-500 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-sky-500 transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/courses"
              className="hover:text-sky-500 transition duration-300"
            >
              Courses
            </Link>
          </li>

          <li>
            <Link
              to="/product"
              className="hover:text-sky-500 transition duration-300"
            >
              Product
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
