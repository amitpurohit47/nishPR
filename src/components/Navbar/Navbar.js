import React from "react";
import { useState } from "react";
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
      <nav className="navbar hidden md:block md:fixed md:w-full z-10">
        <ul className="fa-ul flex items-center justify-center my-4">
          <li className="mb-4 mx-4 uppercase">
            <a
              className="text-white text-xl mb-8"
              href={"#home"}
              onClick={() => setNavOpen(false)}
              style={{ textDecoration: "none" }}a
            >
              Home
            </a>
          </li>
          <li className="mb-4 mx-4 uppercase">
            <a
              className="text-white text-xl mb-8"
              href={"#about-us"}
              onClick={() => setNavOpen(false)}
              style={{ textDecoration: "none" }}
            >
              About Us
            </a>
          </li>
          <li className="mb-4 mx-4 uppercase">
            <a
              className="text-white text-xl mb-8"
              href={"#services"}
              onClick={() => setNavOpen(false)}
              style={{ textDecoration: "none" }}
            >
              Services
            </a>
          </li>
          <li className="mb-4 mx-4 uppercase">
            <a
              className="text-white text-xl mb-8"
              href={"#testimonials"}
              onClick={() => setNavOpen(false)}
              style={{ textDecoration: "none" }}
            >
              Testimonials
            </a>
          </li>
          <li className="mb-4 mx-4 uppercase">
            <a
              className="text-white text-xl mb-8"
              href={"#contact"}
              onClick={() => setNavOpen(false)}
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar-mobile flex items-center justify-center md:hidden">
        <div className={`wrapper flex items-center justify-center ${navOpen ? "active" : ""}`}>
          <ul className="fa-ul">
            <li className="mb-4">
              <a
                className="text-white text-5xl mb-8"
                href={"#home"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                Home
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-white text-5xl mb-8"
                href={"#about-us"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                About Us
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-white text-5xl mb-8"
                href={"#services"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                Services
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-white text-5xl mb-8"
                href={"#testimonials"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                Testimonials
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-white text-5xl mb-8"
                href={"#contact"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
