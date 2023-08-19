import React from "react";
import Chart from "../assets/img/icons/chart.svg";
import Bag from "../assets/img/icons/bag.svg";
import Discount from "../assets/img/icons/discount.svg";
import Graph from "../assets/img/icons/graph.svg";
import Search from "../assets/img/icons/search.svg";
import User from "../assets/img/icons/user.svg";

const Feature = () => {
  return (
    <section class="container mx-auto bg-white dark:bg-gray-900">
      <div class="py-8 px-4 lg:py-16 max-w-screen-xl text-center lg:text-start lg:px-6">
        <div class="mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 tracking-widest font-bold text-limeGreen dark:text-white uppercase text-xs">
            Features
          </h2>
          <p class="font-medium text-xl lg:text-5xl lg:max-w-md">
            We are hero to help you with
          </p>
        </div>
        <div class="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {/* Card 1  */}
          <div class="text-center lg:text-left text-gray-500 dark:text-gray-400 shadow-md hover:shadow-xl p-5 lg:p-10 rounded-2xl">
            <img
              className="mx-auto lg:mx-0 p-4 bg-[#FFE7DB] rounded-2xl mb-4 shadow-lg"
              src={Chart}
              alt="chart-icon"
            />
            <h3 class="mb-3 font-bold tracking-tight text-gray-900 text-lg lg:text-2xl">
              Grow your business
            </h3>
            <p className="text-sm lg:text-base">
              The magic wand for success is in figuring out how to bring in the
              profits and ensure the capacity needed to sustain that growth for
              posterity.
            </p>
          </div>
          {/* Card 1  */}

          {/* Card 2  */}
          <div class="text-center lg:text-left text-gray-500 dark:text-gray-400 shadow-md hover:shadow-xl p-5 lg:p-10 rounded-2xl">
            <img
              className="mx-auto lg:mx-0 p-4 bg-[#E7F2EF] rounded-2xl mb-4 shadow-lg"
              src={Discount}
              alt="chart-icon"
            />
            <h3 class="mb-3 font-bold tracking-tight text-gray-900 text-lg lg:text-2xl">
              Drive more sales
            </h3>
            <p className="text-sm lg:text-base">
              A potential customer, once lost, is hard to retain back. But
              keeping some critical factors in mind, we can, for sure, use these
              loyalty programs as customer retention tools.
            </p>
          </div>
          {/* Card 2  */}

          {/* Card 3  */}
          <div class="text-center lg:text-left text-gray-500 dark:text-gray-400 shadow-md hover:shadow-xl p-5 lg:p-10 rounded-2xl">
            <img
              className="mx-auto lg:mx-0 p-4 bg-[#FAF3D8] rounded-2xl mb-4 shadow-lg"
              src={User}
              alt="chart-icon"
            />
            <h3 class="mb-3 font-bold tracking-tight text-gray-900 text-lg lg:text-2xl">
              Handle by Expert
            </h3>
            <p className="text-sm lg:text-base">
              We know how we can develop deep, trust-based relationships with
              our clients, and work together more collaboratively
            </p>
          </div>
          {/* Card 3  */}

          {/* Card 4  */}
          <div class="text-center lg:text-left text-gray-500 dark:text-gray-400 shadow-md hover:shadow-xl p-5 lg:p-10 rounded-2xl">
            <img
              className="mx-auto lg:mx-0 p-4 bg-[#C0F2EF] rounded-2xl mb-4 shadow-lg"
              src={Search}
              alt="chart-icon"
            />
            <h3 class="mb-3 font-bold tracking-tight text-gray-900 text-lg lg:text-2xl">
              UX Research
            </h3>
            <p className="text-sm lg:text-base">
              UX research is the systematic study of target users and their
              requirements, to add realistic contexts and insights to design
              processes.
            </p>
          </div>
          {/* Card 4  */}

          {/* Card 5  */}
          <div class="text-center lg:text-left text-gray-500 dark:text-gray-400 shadow-md hover:shadow-xl p-5 lg:p-10 rounded-2xl">
            <img
              className="mx-auto lg:mx-0 p-4 bg-[#EDE7F2] rounded-2xl mb-4 shadow-lg"
              src={Graph}
              alt="chart-icon"
            />
            <h3 class="mb-3 font-bold tracking-tight text-gray-900 text-lg lg:text-2xl">
              Business Audit
            </h3>
            <p className="text-sm lg:text-base">
              An audit examines your business's financial records to verify they
              are accurate. This is done through a systematic review of your
              transactions.{" "}
            </p>
          </div>
          {/* Card 5  */}

          {/* Card 6  */}
          <div class="text-center lg:text-left text-gray-500 dark:text-gray-400 shadow-md hover:shadow-xl p-5 lg:p-10 rounded-2xl">
            <img
              className="mx-auto lg:mx-0 p-4 bg-[#D8F0FA] rounded-2xl mb-4 shadow-lg"
              src={Bag}
              alt="chart-icon"
            />
            <h3 class="mb-3 font-bold tracking-tight text-gray-900 text-lg lg:text-2xl">
              Data tracking
            </h3>
            <p className="text-sm lg:text-base">
              The hardware and software, which when used together allows you to
              know where something is at any point in time
            </p>
          </div>
          {/* Card 6  */}
        </div>
      </div>
    </section>
  );
};

export default Feature;
