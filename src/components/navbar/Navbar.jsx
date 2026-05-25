import React from "react";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
      <div className="navbar justify-around shadow-sm bg-black/50 fixed top-0 z-50 text-white backdrop-blur-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu3Line />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#hero-section">Home</a>
              </li>
              <li>
                <a href="#about-me-section">About</a>
              </li>
              <li>
                <a href="#skills-section">Skills</a>
              </li>

              <li>
                <a href="#contact-form">Contact</a>
              </li>
            </ul>
          </div>
          <span className="text-2xl font-bold text-green-400 px-3 py-1 rounded-lg   hover:shadow-blue-400/30 transition">
            Akash <span className=" font-bold text-white">Mia</span>
          </span>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#hero-section">Home</a>
            </li>
            <li>
              <a href="#about-me-section">About</a>
            </li>
            <li>
              <a href="#skills-section">Skills</a>
            </li>

            <li>
              <a href="#contact-form">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
