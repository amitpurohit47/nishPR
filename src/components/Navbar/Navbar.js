import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="ham-wrapper md:hidden">
        <div
          className={`ham ${navOpen ? "active" : ""}`}
          onClick={() => setNavOpen((state) => !state)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className="navbar hidden md:block md:fixed md:w-full">
        <ul className="fa-ul flex items-center justify-center my-4">
          <li className="mb-4 mx-4 uppercase">
            <Link
              className="text-white text-xl mb-8"
              to={"/"}
              onClick={() => setNavOpen(false)}
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <li className="mb-4 mx-4 uppercase">
            <Link
              className="text-white text-xl mb-8"
              to={"/about-us"}
              onClick={() => setNavOpen(false)}
              style={{ textDecoration: "none" }}
            >
              About Us
            </Link>
          </li>
          <li className="mb-4 mx-4 uppercase">
            <Link
              className="text-white text-xl mb-8"
              to={"/clients"}
              onClick={() => setNavOpen(false)}
              style={{ textDecoration: "none" }}
            >
              Clients
            </Link>
          </li>
          <li className="mb-4 mx-4 uppercase">
            <Link
              className="text-white text-xl mb-8"
              to={"/testimonials"}
              onClick={() => setNavOpen(false)}
              style={{ textDecoration: "none" }}
            >
              Testimonials
            </Link>
          </li>
          <li className="mb-4 mx-4 uppercase">
            <Link
              className="text-white text-xl mb-8"
              to={"/contact"}
              onClick={() => setNavOpen(false)}
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="navbar-mobile flex items-center justify-center md:hidden">
        <div className={`wrapper flex items-center justify-center ${navOpen ? "active" : ""}`}>
          <ul className="fa-ul">
            <li className="mb-4">
              <Link
                className="text-white text-5xl mb-8"
                to={"/"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className="text-white text-5xl mb-8"
                to={"/about-us"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                About Us
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className="text-white text-5xl mb-8"
                to={"/clients"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                Clients
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className="text-white text-5xl mb-8"
                to={"/testimonials"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                Testimonials
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className="text-white text-5xl mb-8"
                to={"/contact"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
