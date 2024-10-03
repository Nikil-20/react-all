import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
  return (
    <>
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">MyWebsite</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/state" className="text-white hover:text-gray-200">
              State Components
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-200">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Nav;
