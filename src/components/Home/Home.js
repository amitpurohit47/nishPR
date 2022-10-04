import React from "react";
import logo from "../../assets/logo.png";
import video from "../../assets/nishpr_landing.mp4";
import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <video src={video} muted autoPlay loop className="video-wrapper"></video>

      <div className="home-wrapper flex flex-col items-center justify-center">
        <div className="logo-wrapper my-4">
          <img
            src={logo}
            alt="logo"
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
          />
        </div>
        <p className="text-white text-center text-xs md:text-justify md:text-xl uppercase" style={{ letterSpacing: "3px" }}>
          Experience can succeed your future
        </p>
        <div className="home-animation text-center captilaize mt-4">
          <span>Public Relation</span>
          <span>Advertisement</span>
          <span>Marketing</span>
          <span>Events</span>
          <span>Public Relation</span>
        </div>
        <p className="uppercase text-white tracking-[0.25em]">done right</p>
        <a
          href={"#contact"}
          className="text-black home-contact uppercase tracking-wide my-4"
        >
          get in touch
        </a>
        <div className="mouse mt-4"></div>
      </div>
    </div>
  );
};

export default Home;
