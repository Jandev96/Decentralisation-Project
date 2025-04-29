import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start">
          {/* Hamburger for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-circle btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <Link to="/" className="btn btn-ghost text-xl ml-2">
            Project Name
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ResearchDesign">Research Design</Link></li>
            <li><Link to="/Decentralisation">Decentralisation</Link></li>
            <li><Link to="/gramapanchayathBackground">Panchayat Background</Link></li>
            <li><Link to="/DataAnalysis">Data Analysis</Link></li>
            <li><Link to="/conclusion">Conclusion</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right button */}
        <div className="navbar-end hidden lg:flex">
          <a className="btn">Get Involved</a>
        </div>
      </div>

      {/* Slide-in mobile menu */}
      <div
        className={`fixed top-0 z-50 left-0 h-full w-64 bg-base-100  shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden pt-20`}
      >
        <ul className="menu p-4">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/ResearchDesign" onClick={() => setIsOpen(false)}>Research Design</Link></li>
          <li><Link to="/Decentralisation" onClick={() => setIsOpen(false)}>Decentralisation</Link></li>
          <li><Link to="/gramapanchayathBackground" onClick={() => setIsOpen(false)}>Panchayat Background</Link></li>
          <li><Link to="/DataAnalysis" onClick={() => setIsOpen(false)}>Data Analysis</Link></li>
          <li><Link to="/conclusion" onClick={() => setIsOpen(false)}>Conclusion</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
