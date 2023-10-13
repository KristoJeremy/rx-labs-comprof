import React, { useState } from "react";
import {
  PoppinsBold,
  PoppinsSemiBold,
  LatoBold,
  LatoReguler,
} from "@/fonts/font";
import styles from "./modal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Modal = ({ onVerify }) => {
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    setVerified(true);
    onVerify();
  };

  return (
    <div className={`${verified ? "hidden" : ""}`}>
      <div className="lg:p-[18vh] lg:py-[18vh] sm:py-[30vh] py-[30vh] items-center justify-center mx-auto my-auto w-[100vw] h-[100vh] fixed z-[50]">
        <div
          className={`${styles.card} rounded-md items-center mx-auto md:py-[20px] md:px-[25px] sm:py-[10px] sm:px-[15px] py-[20px] px-[20px]`}
        >
          <div className="flex justify-end z-[60]">
            <button onClick={handleVerify}>
              <CloseIcon color="primary" />
            </button>
          </div>
          <div
            className={`text-white ${styles.heading} text-center lg:mt-[4vh] md:mt-[1vh] md:mt-0]`}
            style={PoppinsBold.style}
          >
            SPECIAL OFFER
          </div>
          <div className="text-center lg:mx-[12vw] md:mx-[12vw] lg:mt-[5vh] md:mt-[5vh] sm:mt-[3vh]">
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
          <div className="lg:mt-[100px] md:mt-[4vh] sm:mt-[8vh] mt-[4vh] mx-auto text-center">
            <button
              aria-label="Contact Us"
              type="button"
              className={`${styles.bt_tx} md:rounded-[40px] sm:rounded-[30px] rounded-[25px] md:px-[50px] px-[15px] md:py-[10px] sm:px-[30px] sm:py-[6px] py-1 text-center border-[1px] hover:bg-[#DA1D9A]`}
              style={PoppinsSemiBold.style}
              onClick={handleVerify}
            >
              <span className="display:inline mr-[0.5vw]">Contact Us</span>
              <span className="display:inline ml-[0.5vw]">
                <WhatsAppIcon color="primary" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
