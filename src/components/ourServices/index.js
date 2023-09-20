import React from "react";

// Import components
import { ServiceSwiper } from "./serviceSwiper";

// Import font and css
import { PoppinsBold } from "@/fonts/font";
import styles from "./serviceSwiper.module.css";

export const OurService = () => {
  return (
    <section id="our-service" className="md:py-7 py-4">
      <div className="container items-center justify-center lg:max-w-[1560px] max-w-full">
        <div>
          <div
            className={`${styles.title} text-center text-white md:mb-[64px] mb-[25px]`}
            style={PoppinsBold.style}
          >
            OUR SERVICES
          </div>
          <ServiceSwiper />
        </div>
      </div>
    </section>
  );
};
