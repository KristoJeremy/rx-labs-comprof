import React from "react";

//import font and css
import styles from "./allInOne.module.css";
import {
  PoppinsBold,
  LatoBold,
  LatoReguler,
  PoppinsSemiBold,
} from "@/fonts/font";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Modal = () => {
  return (
    <div
      className={`${styles.card} mx-auto lg:py-[2rem] md:py-[3rem] sm:py-[3rem] py-[2.5rem]`}
    >
      <div
        className={`text-white ${styles.heading} text-center`}
        style={PoppinsBold.style}
      >
        SPECIAL OFFER
      </div>
      <div className="text-center lg:mx-[10vw] sm:mx-[12vw] mx-[10vw] lg:mt-[4vh] md:mt-[5vh] sm:mt-[3vh]">
        <span
          className={`display:inline ${styles.message} text-[#F4D6E5] m-0`}
          style={LatoReguler.style}
        >
          To celebrate our new package launch, we're&nbsp;
        </span>
        <span
          className={`display:inline ${styles.message} text-[#F03E7F] m-0`}
          style={LatoBold.style}
        >
          offering alimited-time 10% discount&nbsp;
        </span>
        <span
          className={`display:inline ${styles.message} text-[#F4D6E5] m-0`}
          style={LatoReguler.style}
        >
          and&nbsp;
        </span>
        <span
          className={`display:inline ${styles.message} text-[#F03E7F] m-0`}
          style={LatoBold.style}
        >
          free 1 month&nbsp;
        </span>
        <span
          className={`display:inline ${styles.message} text-[#F4D6E5] m-0`}
          style={LatoReguler.style}
        >
          social media management.
        </span>
      </div>
      <div className="lg:mt-[50px] md:mt-[4vh] sm:mt-[8vh] mt-[4vh] mx-auto text-center">
        <button
          aria-label="Contact Us"
          type="button"
          className={`${styles.bt_tx} md:rounded-[40px] sm:rounded-[30px] rounded-[25px] md:px-[50px] px-[15px] md:py-[10px] sm:px-[30px] sm:py-[6px] py-1 text-center border-[1px] hover:bg-[#DA1D9A]`}
          style={PoppinsSemiBold.style}
        >
          <span className="display:inline mr-[0.5vw]">Contact Us</span>
          <span className="display:inline ml-[0.5vw]">
            <WhatsAppIcon color="primary" />
          </span>
        </button>
      </div>
    </div>
  );
};
