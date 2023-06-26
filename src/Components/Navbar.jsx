import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="sticky top-0 sm:top-8 flex flex-col justify-between w-full sm:w-1/6 sm:h-80 sm:mr-8 p-2 sm:p-4 rounded-md bg-gray-100">
      <p className="text-center sm:text-left mb-2 sm:mb-0 h-1/6 text-2xl text-gray-700 font-bold">
        category
      </p>
      <div className="grid grid-cols-3 text-center sm:text-left sm:flex sm:flex-col sm:h-5/6 sm:justify-around text-sm sm:text-lg text-gray-500">
        <Link
          to="/business"
          className="hover:text-gray-600 hover:font-semibold hover:scale-y-110"
        >
          business
        </Link>
        <Link
          to="/entertainment"
          className="hover:text-gray-600 hover:font-semibold hover:scale-y-110"
        >
          entertainment
        </Link>
        <Link
          to="/health"
          className="hover:text-gray-600 hover:font-semibold hover:scale-y-110"
        >
          health
        </Link>
        <Link
          to="/science"
          className="hover:text-gray-600 hover:font-semibold hover:scale-y-110"
        >
          science
        </Link>
        <Link
          to="/sports"
          className="hover:text-gray-600 hover:font-semibold hover:scale-y-110"
        >
          sports
        </Link>
        <Link
          to="/technology"
          className="hover:text-gray-600 hover:font-semibold hover:scale-y-110"
        >
          technology
        </Link>
      </div>
    </div>
  );
}
