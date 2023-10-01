import React from "react";

// Import fonts and css
import { PoppinsBold, LatoReguler } from "@/fonts/font";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section id="offer-hero" className="py-5 lg:mx-12">
      <div className="container justify-center items-center lg:max-w-[1300px]">
        <div className="text-center">
          <div
            className={`${styles.heading} text-white`}
            style={PoppinsBold.style}
          >
            OFFERS
          </div>
          <div
            className={`${styles.paragraph} sm:text-[#F4D6E5] text-[#D3BDC8] lg:w-[65vw] sm:w-[75vw] w-[75vw] container mt-[2vh]`}
            style={LatoReguler.style}
          >
            Explore a world of customized, advanced digital solutions tailored
            just for you. Our expertise and innovative approach bring your
            unique needs to life, from bespoke software development to
            data-driven insights. Join us in a digital journey that unlocks
            endless possibilities.
          </div>
        </div>
      </div>
    </section>
  );
};
