import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-sky-500 text-center mb-8">
        Products
      </h1>

      {/* Category Links */}
      <div className="flex justify-center gap-6 mb-10">
        <Link
          to="/product/men"
          className="px-6 py-3 bg-white border rounded-lg font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-500 transition"
        >
          Men
        </Link>

        <Link
          to="/product/women"
          className="px-6 py-3 bg-white border rounded-lg font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-500 transition"
        >
          Women
        </Link>
      </div>

      {/* Nested route will render here */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
