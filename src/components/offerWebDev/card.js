import React from "react";

//Import css and font
import { LatoReguler, PoppinsBold } from "@/fonts/font";
import styles from "./card.module.css";

export const Card = ({ Heading, Paragraph }) => {
  return (
    <div className={`${styles.card} sm:py-[10vh] sm:px-[8vh] sm:mt-[6vh]`}>
      <div className="grid grid-cols-2 gap-[10vw]">
        <div>
          <div
            className={`${styles.heading} text-[#F6F4F5]`}
            style={PoppinsBold.style}
          >
            {Heading}
          </div>
          <div
            className={`${styles.paragraph} text-[#F4D6E5] sm:mt-[5vh]`}
            style={LatoReguler.style}
          >
            {Paragraph}
          </div>
        </div>
      </div>
    </div>
  );
};
