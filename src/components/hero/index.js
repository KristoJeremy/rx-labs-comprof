import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Import dependencies
import { useTypewriter } from "react-simple-typewriter";

// Import font and css
import { PoppinsBold, LatoBold, PoppinsSemiBold } from "@/fonts/font";
import styles from "./hero.module.css";
import { onBtnClick } from "@/helper/scroll";
// import { useEffect, useState } from "react";

// const MenuItem = ({ itemName, active }) => {
//   const [anchorTarget, setAnchorTarget] = useState(null);

//   useEffect(() => {
//     setAnchorTarget(document.getElementById(itemName));
//   }, [itemName]);

//   const handleClick = (event) => {
//     event.preventDefault();
//     anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
//   };
// };

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["ACCESSIBLE"],
    loop: {},
    typeSpeed: 400,
  });

  return (
    <section id="home-hero" className="py-5 lg:mx-12">
      <div className="container justify-center items-center lg:max-w-[1300px]">
        <div className="md:mt-[15vh] sm:mt-[10vh]">
          <div className="sm:mx-auto mx-[20px]">
            <div
              className={`${styles.title_line1} text-center text-white p-0`}
              style={LatoBold.style}
            >
              UNIVERSAL SOFTWARE SOLUTIONS
            </div>
            <div className="text-center md:mt-[10px] sm:mt-[8px] mt-[5px]">
              <span
                className={`${styles.title_line2} text-center text-white p-0 display:inline`}
                style={PoppinsBold.style}
              >
                MAKING TECH&nbsp;
              </span>
              <span
                className={`${styles.title_line3} text-center text-white p-0 display:inline `}
                style={PoppinsBold.style}
              >
                {text}
              </span>
            </div>
            <div className="mx-auto text-center lg:mt-[25px] md:mt-[20px] sm:mt-[15px] mt-[10px]">
              <button
                goto="upper-section"
                onClick={onBtnClick}
                aria-label="Contact Us"
                type="button"
                className={`${styles.bt_tx} md:rounded-[40px] sm:rounded-[30px] rounded-[25px] md:px-[50px] px-[15px] md:py-[10px] sm:px-[30px] sm:py-[6px] py-1 text-center border-[1px] hover:bg-[#DA1D9A]`}
                style={PoppinsSemiBold.style}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 sm:grid-rows-none sm:items-center items-end justify-center lg:gap-4 md:gap-2 gap-2 sm:mt-[15vh] mt-[3rem] md:mx-[30px] mx-[25px]">
            <div
              className={`${styles.heading} text-white items-center`}
              style={PoppinsBold.style}
            >
              About Us
            </div>
            <div className="lg:px-[15px] md:px-[10px] sm:px-[7px] px-[7px] lg:py-[7px] md:py-[5px] sm:py-[4px] py-[4px] sm:border-l-[2px] border-l-[1px]">
              <div
                className={`${styles.paragraph} grid sm:grid-cols-2 sm:grid-rows-none grid-rows-2 sm:items-start items-center text-white lg:gap-[26px] md:gap-[10px] sm:gap-[7px] gap-[7px]`}
              >
                <div>
                  RX Labs is a forward-thinking software house specializing in
                  website development, UI/UX design, and social media
                  management. We're committed to excellence and aim to boost
                  your online presence and drive business growth by crafting
                  dynamic digital solutions. Let us be your strategic partner in
                  connecting with your target audience.
                </div>
                <div>
                  We craft stunning websites with top-notch technology, ensure
                  seamless user experiences through UI/UX, and drive conversions
                  by boosting online presence and engagement. Partner with us
                  for increased brand recognition, customer loyalty, and
                  profitability.
                </div>
              </div>
            </div>
          </div>

          <div className=""></div>
        </div>
      </div>
    </section>
  );
};
