import React from "react";
import Process1 from "../assets/img/process1.svg";
import Process2 from "../assets/img/process2.svg";
import Process3 from "../assets/img/process3.svg";
import SearchPurple from "../assets/img/icons/search_purple.svg";
import Document from "../assets/img/icons/document.svg";
import Folder from "../assets/img/icons/folder.svg";

const Process = () => {
  return (
    <section class="py-10 px-4 lg:py-16 text-center text-white bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto">
        {/* Heading  */}
        <div class="text-center lg:text-start lg:px-6">
          <div class="mb-8 text-center lg:mb-16">
            <h2 class="mb-4 tracking-widest font-bold text-white uppercase text-xs">
              How It Works
            </h2>
            <h1 class="font-medium text-xl lg:text-5xl mb-4 lg:mb-8">
              Our Process
            </h1>
            <p class="text-base lg:text-xl">
              We know the best solution for all of your business ideas and we
              can help you solve all business problems
            </p>
          </div>
          {/* Heading  */}

          {/* Card 1  */}
          <div class="text-center lg:text-left bg-white shadow-md hover:shadow-xl p-5 lg:p-10 rounded-2xl my-4 lg:my-8">
            <div className="flex flex-col items-center justify-between gap-x-5 lg:flex-row">
              <div className="mb-4 lg:mb-0">
                <img src={Process1} alt="chart-pic"></img>
              </div>

              <div>
                <img
                  className="mx-auto lg:mx-0 p-4 bg-[#DAE6FF] rounded-2xl mb-4 shadow-lg"
                  src={SearchPurple}
                  alt="chart-icon"
                />
                <h3 class="mb-3 font-bold tracking-tight text-gray-900 text-lg lg:text-2xl">
                  Business Audit
                </h3>
                <p className="text-sm lg:text-base text-black max-w-3xl">
                  An audit examines your business's financial records to verify
                  they are accurate. This is done through a systematic review of
                  your transactions.
                </p>
              </div>
            </div>
          </div>
          {/* Card 1  */}

          {/* Card 2  */}
          <div class="text-center lg:text-left bg-white shadow-md hover:shadow-xl p-5 lg:p-10 rounded-2xl my-4 lg:my-8">
            <div className="flex flex-col items-center justify-between gap-x-5 lg:flex-row">
              <div className="mb-4 lg:mb-0">
                <img src={Process2} alt="chart-pic"></img>
              </div>

              <div>
                <img
                  className="mx-auto lg:mx-0 p-4 bg-[#E9E5FF] rounded-2xl mb-4 shadow-lg"
                  src={Folder}
                  alt="chart-icon"
                />
                <h3 class="mb-3 font-bold tracking-tight text-gray-900 text-lg lg:text-2xl">
                  Data Tracking
                </h3>
                <p className="text-sm lg:text-base text-black max-w-3xl">
                  The hardware and software, which when used together allows you
                  to know where something is at any point in time
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}

          {/* Card 3  */}
          <div class="text-center lg:text-left bg-white shadow-md hover:shadow-xl p-5 lg:p-10 rounded-2xl my-4 lg:my-8">
            <div className="flex flex-col items-center justify-between gap-x-5 lg:flex-row">
              <div className="mb-4 lg:mb-0">
                <img src={Process3} alt="chart-pic"></img>
              </div>

              <div>
                <img
                  className="mx-auto lg:mx-0 p-4 bg-[#CEEDFF] rounded-2xl mb-4 shadow-lg"
                  src={Document}
                  alt="chart-icon"
                />
                <h3 class="mb-3 font-bold tracking-tight text-gray-900 text-lg lg:text-2xl">
                  Results
                </h3>
                <p className="text-sm lg:text-base text-black max-w-3xl">
                  An audit examines your business's financial records to verify
                  they are accurate. This is done through a systematic review of
                  your transactions.
                </p>
              </div>
            </div>
          </div>
          {/* Card 3  */}
        </div>
      </div>
    </section>
  );
};

export default Process;
