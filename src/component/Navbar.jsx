import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar shadow-sm ">
      {/* Left section: Hamburger menu for mobile */}
      <div className="navbar-start overflow-hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-100  shadow overflow-hidden"
          >
            <li><Link className='py-5' to="/">Home</Link></li>
            <li><Link className='py-5' to="/ResearchDesign">Research Design</Link></li>
            <li><Link className='py-5'   to="/Decentralisation">Decentralisation</Link></li>
            <li><Link className='py-5' to="/gramapanchayathBackground">Panchayat Background</Link></li>
            <li><Link className='py-5' to="/data-analysis">Data Analysis</Link></li>
            <li><Link className='py-5' to="/conclusion">Conclusion</Link></li>
            <li><Link className='py-5' to="/contact">Contact</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Project Name</a>
      </div>

      {/* Center section: Horizontal menu for desktop */}
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

      {/* Right section: Button */}
      <div className="navbar-end">
        <a className="btn">Get Involved</a>
      </div>
    </div>
  );
}

export default Navbar;
