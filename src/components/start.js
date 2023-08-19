import React from "react";
import StartIMG from "../assets/img/start.svg";

const Start = () => {
  return (
    <section class="py-10 px-4 lg:py-16 text-center text-white bg-gradient-to-l from-primary to-secondary">
      <div className="container mx-auto">
        {/* Heading  */}
        <div className="flex flex-col-reverse justify-center items-center lg:flex-row justify gap-4">
          <div class="text-center lg:text-start lg:pr-6">
            <div class="mb-8 text-center lg:text-start lg:mb-16">
              <h2 class="mb-4 tracking-widest font-bold text-white uppercase text-xs">
                start with us
              </h2>
              <h1 class="font-medium text-xl lg:text-5xl mb-4 lg:mb-8">
                Start working faster today
              </h1>
              <p class="text-base lg:text-xl">
                We know the best solution for all of your business ideas and we
                can help you solve all business problems
              </p>

              <button class="py-4 px-8 mt-8 bg-white text-primary uppercase font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
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
