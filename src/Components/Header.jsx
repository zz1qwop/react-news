import React from 'react';
import { LuNewspaper } from 'react-icons/lu';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex w-full mt-8 mb-14">
      <Link
        to="/"
        className="flex items-center text-4xl text-gray-700 mr-8 font-bold "
      >
        <LuNewspaper className="mr-2" />
        <p>NEWS</p>
      </Link>
      <div className="flex w-full justify-center">
        <input
          type="text"
          className="bg-white border border-slate-300 rounded-md text-sm w-9/12 mr-4 px-4 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
        />
        <button>
          <AiOutlineSearch className="text-2xl text-gray-700" />
        </button>
      </div>
    </div>
  );
}
