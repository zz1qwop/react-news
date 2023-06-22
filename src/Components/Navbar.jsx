import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <p>category</p>
      <div>
        <Link to="/business">business</Link>
        <Link to="/entertainment">entertainment</Link>
        <Link to="/general">general</Link>
        <Link to="/health">health</Link>
        <Link to="/science">science</Link>
        <Link to="/sports">sports</Link>
        <Link to="/technology">technology</Link>
      </div>
    </div>
  );
}
