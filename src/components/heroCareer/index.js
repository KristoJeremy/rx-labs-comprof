import React from "react";
import { PoppinsBold, PoppinsSemiBold, PoppinsLightItalic } from "@/fonts/font";
import styles from "./hero.module.css";

export const Hero = () => {
  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };
  return (
    <section id="career-hero" className="py-5 lg:mx-12">
      <div className="container justify-center items-center lg:max-w-[1300px]">
        <div className="lg:mt-[6.5vh] md:mt-[7vh] sm:mt-[7vh] mt-[7vh]">
          <div className="sm:mx-auto mx-[20px]">
            <div className="text-center md:mt-[10px] sm:mt-[8px] mt-[5px]">
              <div
                className={`${styles.title_line2} text-center text-white p-0 lg:w-[50vw] sm:w-[70vw] w-[80vw] container`}
                style={PoppinsBold.style}
              >
                Unleash you potential with us.
              </div>
              <div
                className={`${styles.message} text-center text-[#DBABC4] p-0 lg:w-[50vw] sm:w-[60vw] w-[70vw] container lg:mt-[4vh] md:mt-[3vh] sm:mt-[2vh] mt-[1.5vh]`}
                style={PoppinsLightItalic.style}
              >
                Discover a world of opportunities and innovation. We're more
                than just a workplace; we're a community.
              </div>
            </div>
            <div className="mx-auto text-center lg:mt-[8vh] md:mt-[6vh] sm:mt-[5vh] mt-[3vh]">
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

          <div className=""></div>
        </div>
      </div>
    </section>
  );
};
