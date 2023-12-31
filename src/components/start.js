import React from "react";
import StartIMG from "../assets/img/start.svg";

const Start = () => {
  return (
    <section
      className="bg-gradient-to-l from-primary to-secondary px-4 py-10 text-center text-white lg:py-16"
      id="start"
    >
      <div className="container mx-auto">
        {/* Heading  */}
        <div className="flex flex-col-reverse items-center justify-center gap-4 lg:flex-row">
          <div className="text-center lg:pr-6 lg:text-start">
            <div className="mb-8 text-center lg:mb-16 lg:text-start">
              <h2
                className="wow fadeInLeft mb-4 text-xs font-bold uppercase tracking-widest text-white"
                data-wow-delay="0.3s"
              >
                start with us
              </h2>
              <h1
                className="wow fadeInLeft mb-4 text-xl font-medium lg:mb-8 lg:text-5xl"
                data-wow-delay="0.3s"
              >
                Start working faster today
              </h1>
              <p
                className="wow fadeInLeft text-base lg:text-xl"
                data-wow-delay="0.3s"
              >
                We know the best solution for all of your business ideas and we
                can help you solve all business problems
              </p>

              <button
                className="wow fadeInLeft mt-8 rounded-full border border-white bg-white px-8  py-4 font-semibold uppercase text-primary shadow-md hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                data-wow-delay="0.3s"
              >
                Get Started
              </button>
            </div>
          </div>
          {/* Heading  */}
          <div>
            <img
              src={StartIMG}
              className="wow fadeInRight"
              alt="Start-img"
              data-wow-delay="0.3s"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
