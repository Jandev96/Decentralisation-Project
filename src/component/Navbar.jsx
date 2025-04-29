import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Mobile & Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            onClick={toggleDropdown}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/ResearchDesign" onClick={() => setIsOpen(false)}>Research Design</Link></li>
              <li><Link to="/Decentralisation" onClick={() => setIsOpen(false)}>Decentralisation</Link></li>
              <li><Link to="/gramapanchayathBackground" onClick={() => setIsOpen(false)}>Panchayat Background</Link></li>
              <li><Link to="/data-analysis" onClick={() => setIsOpen(false)}>Data Analysis</Link></li>
              <li><Link to="/conclusion" onClick={() => setIsOpen(false)}>Conclusion</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          )}
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Project Name</Link>
      </div>

      {/* Desktop Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ResearchDesign">Research Design</Link></li>
          <li><Link to="/Decentralisation">Decentralisation</Link></li>
          <li><Link to="/gramapanchayathBackground">Panchayat Background</Link></li>
          <li><Link to="/data-analysis">Data Analysis</Link></li>
          <li><Link to="/conclusion">Conclusion</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Right button */}
      <div className="navbar-end">
        <a className="btn">Get Involved</a>
      </div>
    </div>
  );
}

export default Navbar;
