import React from "react";
import HeroImg from "../assets/img/heroImg.svg";

const Hero = () => {
  return (
    <div className="hero-background">
      <section className=" from-primary to-secondary px-4 py-10 text-center text-white lg:py-16">
        <div className="container mx-auto">
          {/* Heading  */}
          <div className="text-center lg:px-6 lg:text-start">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-xl font-medium lg:mb-8 lg:text-5xl">
                A Digital Product Design Agency
              </h1>
              <p className="text-base lg:text-xl">
                We are Creative and Professional Digital Agency
              </p>

              <button className="hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mx-auto mt-8 w-36 rounded-full bg-white px-4 py-2 text-sm font-medium text-primary focus:outline-none focus:ring-4 lg:block lg:px-5 lg:py-2.5">
                Get started
              </button>
            </div>
            {/* Heading  */}
          </div>

          <div>
            <img className="mx-auto" src={HeroImg} alt="Hero-img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
