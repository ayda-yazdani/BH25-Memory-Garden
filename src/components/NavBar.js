import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Memory Garden</Link>
        <div className="flex gap-4">
          <Link to="/upload" className="hover:underline">Upload</Link>
          <Link to="/garden" className="hover:underline">Garden</Link>
          <Link to="/exercise" className="hover:underline">Exercises</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;