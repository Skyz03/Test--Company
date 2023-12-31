import React from "react";
import ATL from "../assets/img/brands/atlassian.png";
import BUY from "../assets/img/brands/buy.png";
import CIVI from "../assets/img/brands/civi.png";
import CSSM from "../assets/img/brands/cssmania.png";
import MAZ from "../assets/img/brands/mazda.png";
import NIT from "../assets/img/brands/nitro.png";
import POP from "../assets/img/brands/pop.png";
import QAN from "../assets/img/brands/qantas.png";
import SMA from "../assets/img/brands/smashing.png";
import TAL from "../assets/img/brands/talent.png";

const imgArray = [
  {
    id: "1",
    link: MAZ,
  },
  {
    id: "2",
    link: ATL,
  },
  {
    id: "3",
    link: SMA,
  },
  {
    id: "4",
    link: QAN,
  },
  {
    id: "5",
    link: BUY,
  },
  {
    id: "6",
    link: NIT,
  },
  {
    id: "7",
    link: CSSM,
  },
  {
    id: "8",
    link: POP,
  },
  {
    id: "9",
    link: TAL,
  },
  {
    id: "8",
    link: CIVI,
  },
];

const Brands = () => {
  return (
    <section className="py-8" id="brand">
      <div className="center container mx-auto">
        {/* Heading  */}
        <div className="text-center lg:px-6 lg:text-start">
          <div className="mb-8 text-center lg:mb-16">
            <h2
              className="wow fadeInLeft mb-4 text-xs font-bold uppercase tracking-widest text-limeGreen"
              data-wow-delay="0.3s"
            >
              Brands
            </h2>
            <h1
              className="wow fadeInLeft mb-4 text-xl font-medium lg:mb-8 lg:text-5xl"
              data-wow-delay="0.3s"
            >
              We work with thousands of the world’s leading brands
            </h1>
          </div>
          {/* Heading  */}

          <div className="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {imgArray.map((item) => (
              <div>
                <img
                  src={item.link}
                  alt="brands-img"
                  className="wow bounceIn mx-auto"
                  data-wow-duration="2000"
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#424A4D]">
            You're going to be in good company. We work with world's leading
            brands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brands;
