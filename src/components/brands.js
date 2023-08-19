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

const Brands = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        {/* Heading  */}
        <div class="text-center lg:text-start lg:px-6">
          <div class="mb-8 text-center lg:mb-16">
            <h2 class="mb-4 tracking-widest font-bold text-limeGreen uppercase text-xs">
              Brands
            </h2>
            <h1 class="font-medium text-xl lg:text-5xl mb-4 lg:mb-8">
              We work with thousands of the world’s leading brands
            </h1>
          </div>
          {/* Heading  */}

          <div class="grid items-center gap-8 lg:gap-8 sm:grid-cols-2 lg:grid-cols-5">
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
