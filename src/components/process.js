import React from "react";
import Process1 from "../assets/img/process1.svg";
import Process2 from "../assets/img/process2.svg";
import Process3 from "../assets/img/process3.svg";
import SearchPurple from "../assets/img/icons/search_purple.svg";
import Document from "../assets/img/icons/document.svg";
import Folder from "../assets/img/icons/folder.svg";

const Process = () => {
  return (
    <section class="bg-gradient-to-r from-primary to-secondary px-4 py-10 text-center text-white lg:py-16">
      <div className="container mx-auto">
        {/* Heading  */}
        <div class="text-center lg:px-6 lg:text-start">
          <div class="mb-8 text-center lg:mb-16">
            <h2 class="mb-4 text-xs font-bold uppercase tracking-widest text-white">
              How It Works
            </h2>
            <h1 class="mb-4 text-xl font-medium lg:mb-8 lg:text-5xl">
              Our Process
            </h1>
            <p class="text-base lg:text-xl">
              We know the best solution for all of your business ideas and we
              can help you solve all business problems
            </p>
          </div>
          {/* Heading  */}

          {/* Card 1  */}
          <div class="my-4 rounded-2xl bg-white p-5 text-center shadow-md hover:shadow-xl lg:my-8 lg:p-10 lg:text-left">
            <div className="flex flex-col items-center justify-between gap-x-5 lg:flex-row">
              <div className="mb-4 lg:mb-0">
                <img src={Process1} alt="chart-pic"></img>
              </div>

              <div>
                <img
                  className="mx-auto mb-4 rounded-2xl bg-[#DAE6FF] p-4 shadow-lg lg:mx-0"
                  src={SearchPurple}
                  alt="chart-icon"
                />
                <h3 class="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-2xl">
                  Business Audit
                </h3>
                <p className="max-w-3xl text-sm text-black lg:text-base">
                  An audit examines your business's financial records to verify
                  they are accurate. This is done through a systematic review of
                  your transactions.
                </p>
              </div>
            </div>
          </div>
          {/* Card 1  */}

          {/* Card 2  */}
          <div class="my-4 rounded-2xl bg-white p-5 text-center shadow-md hover:shadow-xl lg:my-8 lg:p-10 lg:text-left">
            <div className="flex flex-col items-center justify-between gap-x-5 lg:flex-row">
              <div className="mb-4 lg:mb-0">
                <img src={Process2} alt="chart-pic"></img>
              </div>

              <div>
                <img
                  className="mx-auto mb-4 rounded-2xl bg-[#E9E5FF] p-4 shadow-lg lg:mx-0"
                  src={Folder}
                  alt="chart-icon"
                />
                <h3 class="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-2xl">
                  Data Tracking
                </h3>
                <p className="max-w-3xl text-sm text-black lg:text-base">
                  The hardware and software, which when used together allows you
                  to know where something is at any point in time
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}

          {/* Card 3  */}
          <div class="my-4 rounded-2xl bg-white p-5 text-center shadow-md hover:shadow-xl lg:my-8 lg:p-10 lg:text-left">
            <div className="flex flex-col items-center justify-between gap-x-5 lg:flex-row">
              <div className="mb-4 lg:mb-0">
                <img src={Process3} alt="chart-pic"></img>
              </div>

              <div>
                <img
                  className="mx-auto mb-4 rounded-2xl bg-[#CEEDFF] p-4 shadow-lg lg:mx-0"
                  src={Document}
                  alt="chart-icon"
                />
                <h3 class="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-2xl">
                  Results
                </h3>
                <p className="max-w-3xl text-sm text-black lg:text-base">
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
