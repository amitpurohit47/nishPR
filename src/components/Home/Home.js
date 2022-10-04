import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import video from "../../assets/nishpr_landing.mp4";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
            <video src={video} muted autoPlay loop className="video-wrapper"></video>
        {/* <div className="home-overlay"></div> */}
        
      <div className="home-wrapper flex flex-col items-center justify-center">
        <div className="logo-wrapper my-4">
          <img src={logo} alt="logo" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]" />
        </div>
        <p className="text-white uppercase tracking-wide">Experience can succeed your future</p>
        <div className="home-animation text-center captilaize mt-4">
          <span>Public Relation</span>
          <span>Advertisement</span>
          <span>Marketing</span>
          <span>Events</span>
          <span>Public Relation</span>
        </div>
        <p className="uppercase text-white tracking-[0.25em]">done right</p>
        <Link
          to={"/contact-us"}
          className="text-black home-contact uppercase tracking-wide my-4"
        >
          get in touch
        </Link>
        <div className="mouse mt-4"></div>
      </div>
    </div>
  );
};

export default Home;
