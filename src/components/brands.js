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

// LINKS, AOS, ACCESIBILITY

const Brands = () => {
  return (
    <section className="py-8">
      <div
        className="wow bounceInDown center container mx-auto"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
        data-wow-offset="100"
      >
        {/* Heading  */}
        <div class="text-center lg:px-6 lg:text-start">
          <div class="mb-8 text-center lg:mb-16">
            <h2 class="mb-4 text-xs font-bold uppercase tracking-widest text-limeGreen">
              Brands
            </h2>
            <h1 class="mb-4 text-xl font-medium lg:mb-8 lg:text-5xl">
              We work with thousands of the world’s leading brands
            </h1>
          </div>
          {/* Heading  */}

          <div class="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            <div>
              <img className="mx-auto" src={MAZ} alt="brands-img" />
            </div>
            <div>
              <img className="mx-auto" src={ATL} alt="brands-img" />
            </div>
            <div>
              <img className="mx-auto" src={SMA} alt="brands-img" />
            </div>
            <div>
              <img className="mx-auto" src={QAN} alt="brands-img" />
            </div>
            <div>
              <img className="mx-auto" src={BUY} alt="brands-img" />
            </div>
            <div>
              <img className="mx-auto" src={NIT} alt="brands-img" />
            </div>
            <div>
              <img className="mx-auto" src={CSSM} alt="brands-img" />
            </div>
            <div>
              <img className="mx-auto" src={POP} alt="brands-img" />
            </div>
            <div>
              <img className="mx-auto" src={TAL} alt="brands-img" />
            </div>
            <div>
              <img className="mx-auto" src={CIVI} alt="brands-img" />
            </div>
          </div>

          <p class="mt-8 text-center text-sm text-[#424A4D]">
            You're going to be in good company. We work with world's leading
            brands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brands;
