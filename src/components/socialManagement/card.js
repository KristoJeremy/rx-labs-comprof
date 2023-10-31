import React from "react";

//Import css and font
import { LatoReguler, PoppinsBold } from "@/fonts/font";
import styles from "./card.module.css";
import engagement from "../../../public/_offers/engagement.png";
import Image from "next/image";


export const Card = ({ Heading, Paragraph }) => {
  return (
    <div className={`${styles.card} sm:py-[10vh] sm:px-[8vh] sm:mt-[6vh]`}>
      <div className="grid grid-cols-3 gap-[10vw]">
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

export const CardBot = ({ Heading, Paragraph }) => {
  return (
    <div className={`${styles.card} sm:py-[10vh] sm:px-[8vh] sm:mt-[6vh]`}>
      <div className="grid gap-[10vw]">
        <div>
          <div
            className={`text-center text-5xl font-['Poppins'] font-bold leading-[48px] text-[#f6f4f5]`}
            style={PoppinsBold.style}
          >
            {Heading}
          </div>
          <div
            className={`${styles.paragraph} grid gap-4 text-[#F4D6E5] sm:mt-[5vh]`}
            style={LatoReguler.style}
          >
            {Paragraph}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardMid = ({ Heading, Paragraph, Paragraph2 }) => {
    return (
      <div className={`${styles.card} sm:py-[10vh] sm:px-[8vh] sm:mt-[6vh]`}>
        <div className="grid gap-[10vw]">
          <div className="grid-rows-2 gap-[10vw]">
            <div
              className={`text-center text-5xl font-['Poppins'] font-bold leading-[48px] text-[#f6f4f5]`}
              style={PoppinsBold.style}
            >
              {Heading}
            </div>
            <div
              className={`${styles.paragraph} grid grid-cols-3 gap-4 text-[#F4D6E5] sm:mt-[5vh]`}
              style={LatoReguler.style}
            >
              {Paragraph}
            <Image
            src={engagement}
            alt="img1"/>

              <div className="text-justify text-xl font-['Lato'] text-[#f4d6e5] w-full">
                • Direct Communication Beyond Transactions
                <br />• Initiating Conversations and Responsiveness
                <br />• Deeper Connections
                <br />• Commitment to Improvement:
                <br />• Trust and Reliability
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
