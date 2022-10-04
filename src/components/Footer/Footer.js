import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center justify-center my-8" id="contact">
      <img src={logo} alt="logo" className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] my-2" />
      <p className="text-white my-2">&copy; Nish PR and Advertising</p>
      <div className=" mt-2 mb-4">
        <a href="mailto:contact@nishpr.info">
          <i className="fa fa-envelope text-white text-2xl mx-4" />
        </a>
        <a href="https://www.instagram.com/nish_pr_and_advertising/">
          <i className="fa fa-instagram text-white text-2xl mx-4"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086264211378">
          <i className="fa fa-facebook text-white text-2xl mx-4"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
