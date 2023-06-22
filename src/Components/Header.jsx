import React from 'react';
import { LuNewspaper } from 'react-icons/lu';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">
        <LuNewspaper />
        <p>NEWS</p>
      </Link>
      <input type="text" />
      <button>
        <AiOutlineSearch />
      </button>
    </div>
  );
}
