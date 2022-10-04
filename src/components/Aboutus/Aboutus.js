import React from "react";
import political1 from "../../assets/political1.jpg";
import political2 from "../../assets/political2.jpg";
import pol1 from "../../assets/pol1.JPG";
import pol2 from "../../assets/pol2.JPG";
import pol3 from "../../assets/pol3.JPG";
import pol4 from "../../assets/pol4.JPG";
import ent1 from "../../assets/ent1.JPG";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutus overflow-x-hidden mx-4 md:mx-16 md:p-28">
      <div className="flex flex-col items-center justify-center p-4 md:p-0" id="about-us">
        <h1 className="mb-4 text-center text-2xl md:text-6xl">Who We Are?</h1>
        <p className="text-center md:my-8 md:w-8/12 md:text-xl">
          We at Nish PR and Advertising thrive to address your needs and provide
          customized services to help you scale new heights and reach millions.
          Through our domain expertise and experience we tend to provide unique
          and innovative solutions to your problems.
        </p>
      </div>
      <div className="flex flex-col p-4 items-center justify-center md:p-0 md:my-28">
        <h1 className="mb-4 text-center text-2xl md:text-6xl">Political PR</h1>
        <div className="flex flex-col w-full md:flex-row md:my-8">
          <img src={political2} className="md:w-5/12" alt="political2" />
          <p className="mt-4 md:mt-0 md:pl-12 md:pt-12 md:text-xl">
            We help you build your image. We help by making a positive change in
            perception of the public through thorough analysis. Getting the
            necessary (positive) exposure can be challenging, but we are here to
            take up the challenge for you and build this exposure for you.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full mt-16">
          <div className="p-4 md:pb-0 md:pl-0 md:pr-12 md:pt-12 md:text-xl ">
            <p>
              We keep our fingers on the pulse and react quickly. We take full
              responsibility to generate positive attention towards you. We stay
              true to our values and strive harder to make you excel.
            </p>
            <p className="font-bold text-2xl my-4">We take care of -</p>
            <ul className="fa-ul political-list">
              <li className="mb-2">News management</li>
              <li className="mb-2">Issue management</li>
              <li className="mb-2">Event management</li>
              <li className="mb-2">Evaluation management</li>
              <li className="mb-2">Digital Political PR</li>
            </ul>
          </div>
          <img src={political1} className="md:w-5/12" alt="political1" />
        </div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          className="md:mt-8 md:h-[500px]"
        >
          <div>
            <img
              src={pol1}
              // style={{ height: "500px", width: "auto" }}
              alt="poltical"
              className="h-[400px] md:h-[500px]"
            />
          </div>
          <div>
            <img
              src={pol2}
              // style={{ height: "500px", width: "auto" }}
              alt="poltical"
              className="h-[400px] md:h-[500px]"
            />
          </div>
          <div>
            <img
              src={pol3}
              // style={{ height: "500px", width: "auto" }}
              alt="poltical"
              className="h-[400px] md:h-[500px]"
            />
          </div>
          <div>
            <img
              src={pol4}
              // style={{ height: "500px", width: "auto" }}
              alt="poltical"
              className="h-[400px] md:h-[500px]"
            />
          </div>
        </Carousel>
      </div>
      <div className="flex flex-col items-center justify-center mt-8 md:my-28">
        <h1 className="mb-4 text-center text-2xl md:text-6xl">Entertainment PR</h1>
        <div className="flex flex-col md:flex-row w-full md:my-8">
          <img src={ent1} className="h-[300px] w-auto p-2 md:h-[500px] md:w-5/12" alt="ent1" />
          <p className="p-4 md:pb-0 md:pr-0 md:pl-12 md:pt-12 md:text-xl">
            We strive to help brands, personalities and projects to grow through
            building influence in the traditional, broadcast, print and online
            media space. The Entertainment public relations professionals on our
            PR team are adept at scouting and executing effective public
            relations opportunities for our clients. The expertise of our PR
            professionals in launching or redefining a brand or public
            personality is enviable and often emulated by other PR professionals
            in our industry.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center mt-8 md:mt-16"
        id="services"
      >
        <h1 className="mb-4 text-center text-2xl md:text-6xl">Our Services</h1>
        <ul className="fa-ul services-list text-xl md:w-9/12 md:my-8 md:text-center">
          <li className="m-4">Branding Solutions</li>
          <li className="m-4">Corporate Services</li>
          <li className="m-4">Advanced SEO</li>
          <li className="m-4">Web Development</li>
          <li className="m-4">Content Writing</li>
          <li className="m-4">Digital Marketing</li>
          <li className="m-4">E-Commerce Services</li>
        </ul>
      </div>
      <div
        className="flex flex-col items-center justify-center mt-8 md:mt-16"
        id="testimonials"
      >
        <h1 className="mb-4 text-center text-2xl md:text-6xl">Testimonials</h1>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          className="flex items-center justify-center md:mt-8 md:w-6/12"
        >
          <div className="p-4">
            <p className="text-justify">
              "Okhla Constituency at that time was one of the constituencies
              from where opposition was running its entire election campaign.
              <br /> Any change or rally or event could influence the election
              directly. In this situation an appropriate PR strategy was
              required for the candidate and this is where Shubham's skills were
              a game changer.
              <br />
              His knowledge of the field and caste helped us implementing right
              strategy at the right time and so the winning margin of the
              candidate was 71,000.
              <br />
              Also the nearby constituencies could benefit from his PR
              strategy."
            </p>
            <p className="font-bold">- Manish Agrawal</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Aboutus;
