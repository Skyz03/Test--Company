import React from "react";
import StartIMG from "../assets/img/start.svg";

const Start = () => {
  return (
    <section class="bg-gradient-to-l from-primary to-secondary px-4 py-10 text-center text-white lg:py-16">
      <div className="container mx-auto">
        {/* Heading  */}
        <div className="flex flex-col-reverse items-center justify-center gap-4 lg:flex-row">
          <div class="text-center lg:pr-6 lg:text-start">
            <div class="mb-8 text-center lg:mb-16 lg:text-start">
              <h2 class="mb-4 text-xs font-bold uppercase tracking-widest text-white">
                start with us
              </h2>
              <h1 class="mb-4 text-xl font-medium lg:mb-8 lg:text-5xl">
                Start working faster today
              </h1>
              <p class="text-base lg:text-xl">
                We know the best solution for all of your business ideas and we
                can help you solve all business problems
              </p>

              <button class="mt-8 rounded-full bg-white px-8 py-4 font-semibold uppercase text-primary shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Get Started
              </button>
            </div>
          </div>
          {/* Heading  */}
          <div>
            <img src={StartIMG} alt="Start-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
