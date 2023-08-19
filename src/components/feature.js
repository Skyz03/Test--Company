import React from "react";
import Chart from "../assets/img/icons/chart.svg";
import Bag from "../assets/img/icons/bag.svg";
import Discount from "../assets/img/icons/discount.svg";
import Graph from "../assets/img/icons/graph.svg";
import Search from "../assets/img/icons/search.svg";
import User from "../assets/img/icons/user.svg";

const Feature = () => {
  return (
    <div className="feature-background">
      <section className="container mx-auto">
        <div className="mx-auto max-w-screen-xl py-8 text-center lg:px-6 lg:py-16 lg:text-start">
          <div className="mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-limeGreen dark:text-white">
              Features
            </h2>
            <p className="text-xl font-medium lg:max-w-md lg:text-5xl">
              We are hero to help you with
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
            {/* Card 1  */}
            <div className="rounded-2xl bg-white p-5 text-center text-gray-500 shadow-md hover:shadow-xl dark:text-gray-400 lg:p-10 lg:text-left">
              <img
                className="mx-auto mb-4 rounded-2xl bg-[#FFE7DB] p-4 shadow-lg lg:mx-0"
                src={Chart}
                alt="chart-icon"
              />
              <h3 className="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-2xl">
                Grow your business
              </h3>
              <p className="text-sm lg:text-base">
                The magic wand for success is in figuring out how to bring in
                the profits and ensure the capacity needed to sustain that
                growth for posterity.
              </p>
            </div>
            {/* Card 1  */}

            {/* Card 2  */}
            <div className="rounded-2xl bg-white p-5 text-center text-gray-500 shadow-md hover:shadow-xl dark:text-gray-400 lg:p-10 lg:text-left">
              <img
                className="mx-auto mb-4 rounded-2xl bg-[#E7F2EF] p-4 shadow-lg lg:mx-0"
                src={Discount}
                alt="chart-icon"
              />
              <h3 className="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-2xl">
                Drive more sales
              </h3>
              <p className="text-sm lg:text-base">
                A potential customer, once lost, is hard to retain back. But
                keeping some critical factors in mind, we can, for sure, use
                these loyalty programs as customer retention tools.
              </p>
            </div>
            {/* Card 2  */}

            {/* Card 3  */}
            <div className="rounded-2xl bg-white p-5 text-center text-gray-500 shadow-md hover:shadow-xl dark:text-gray-400 lg:p-10 lg:text-left">
              <img
                className="mx-auto mb-4 rounded-2xl bg-[#FAF3D8] p-4 shadow-lg lg:mx-0"
                src={User}
                alt="chart-icon"
              />
              <h3 className="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-2xl">
                Handle by Expert
              </h3>
              <p className="text-sm lg:text-base">
                We know how we can develop deep, trust-based relationships with
                our clients, and work together more collaboratively
              </p>
            </div>
            {/* Card 3  */}

            {/* Card 4  */}
            <div className="rounded-2xl bg-white p-5 text-center text-gray-500 shadow-md hover:shadow-xl dark:text-gray-400 lg:p-10 lg:text-left">
              <img
                className="mx-auto mb-4 rounded-2xl bg-[#C0F2EF] p-4 shadow-lg lg:mx-0"
                src={Search}
                alt="chart-icon"
              />
              <h3 className="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-2xl">
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
            <div className="rounded-2xl bg-white p-5 text-center text-gray-500 shadow-md hover:shadow-xl dark:text-gray-400 lg:p-10 lg:text-left">
              <img
                className="mx-auto mb-4 rounded-2xl bg-[#EDE7F2] p-4 shadow-lg lg:mx-0"
                src={Graph}
                alt="chart-icon"
              />
              <h3 className="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-2xl">
                Business Audit
              </h3>
              <p className="text-sm lg:text-base">
                An audit examines your business's financial records to verify
                they are accurate. This is done through a systematic review of
                your transactions.{" "}
              </p>
            </div>
            {/* Card 5  */}

            {/* Card 6  */}
            <div className="rounded-2xl bg-white p-5 text-center text-gray-500 shadow-md hover:shadow-xl dark:text-gray-400 lg:p-10 lg:text-left">
              <img
                className="mx-auto mb-4 rounded-2xl bg-[#D8F0FA] p-4 shadow-lg lg:mx-0"
                src={Bag}
                alt="chart-icon"
              />
              <h3 className="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-2xl">
                Data tracking
              </h3>
              <p className="text-sm lg:text-base">
                The hardware and software, which when used together allows you
                to know where something is at any point in time
              </p>
            </div>
            {/* Card 6  */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
