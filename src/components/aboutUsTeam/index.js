import React from "react";

// Import component
import { AboutUsSwiper } from "./aboutUsSwiper";

// Import font and css
import { PoppinsBold, LatoReguler } from "@/fonts/font";
import styles from "./aboutTeam.module.css";

export const AboutWorking = () => {
  return (
    <section id="working-with-us">
      <div className="container">
        <div className="text-center">
          <div
            className={`${styles.heading} text-white`}
            style={PoppinsBold.style}
          >
            What They Say About Working with Us
          </div>
          <div
            className={`${styles.paragraph} text-[#DBABC4]`}
            style={LatoReguler.style}
          >
            Discover the stories of our talented teams here at RX Labs.
          </div>
        </div>
      </div>
      <div className="mt-[8vh]">
        <AboutUsSwiper />
      </div>
    </section>
  );
};
