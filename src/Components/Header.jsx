import React, { useState } from 'react';
import { LuNewspaper } from 'react-icons/lu';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (search === '') return;
    navigate(`search/${search}`, { state: { search } });
    setSearch('');
  };
  return (
    <div className="w-5/6 flex sm:w-full mt-8 mb-8 sm:mb-14">
      <Link
        to="/"
        className="flex items-center text-4xl text-gray-700 mr-8 font-bold "
      >
        <LuNewspaper className="mr-2" />
        <p>NEWS</p>
      </Link>
      <form className="flex w-full justify-center" onSubmit={handleForm}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white border border-slate-300 rounded-md text-sm w-9/12 mr-4 px-4 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
        />
        <button type="submit">
          <AiOutlineSearch className="text-2xl text-gray-700" />
        </button>
      </form>
    </div>
  );
}
