import React from "react";
import HeroImg from "../assets/img/heroImg.svg";

const Hero = () => {
  return (
    <div className="hero-background" id="home">
      <section className=" from-primary to-secondary px-4 py-10 pt-[10rem] text-center text-white lg:py-0 lg:pt-[14rem]">
        <div className="container mx-auto">
          {/* Heading  */}
          <div className="text-center lg:px-6 lg:text-start">
            <div className="mb-8 text-center">
              <h1
                className="wow fadeInLeft mb-4 text-xl font-medium lg:mb-8 lg:text-5xl"
                data-wow-delay="0.3s"
              >
                A Digital Product Design Agency
              </h1>
              <p
                className="wow fadeInLeft text-base lg:text-xl"
                data-wow-delay="0.3s"
              >
                We are Creative and Professional Digital Agency
              </p>

              <button
                className="wow fadeInLeft focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mx-auto mt-8 w-36 rounded-full border border-white bg-white px-4 py-2 text-sm font-medium text-primary hover:border hover:border-white hover:bg-transparent hover:text-white focus:outline-none focus:ring-4 lg:block lg:px-5 lg:py-2.5"
                data-wow-delay="0.3s"
              >
                Get started
              </button>
            </div>
            {/* Heading  */}
          </div>

          <div>
            <img
              className="wow fadeInUp mx-auto"
              src={HeroImg}
              alt="Hero-img"
              data-wow-delay="0.5s"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
