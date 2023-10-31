import React from "react";
import { useSwiper } from "swiper/react";

//import css and font
import styles from "./button.module.css";
import { PoppinsBold } from "@/fonts/font";

export const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="container grid grid-cols-2 md:max-w-[12vw] sm:max-w-[16vw] max-w-[16vw] mb-[4vh] md:mt-0 sm:mt-[-2vh] mt-[-4vh]">
      <div
        className={`${styles.circleNavButton} rounded-full mx-auto mb-[4vh]`}
      >
        <button
          className={`text-white text-center container py-1 ${styles.arrow}`}
          onClick={() => swiper.slidePrev()}
        >
          &lt;
        </button>
      </div>
      <div
        className={`${styles.circleNavButton} rounded-full mx-auto mb-[4vh]`}
      >
        <button
          className={`text-white text-center container py-1 ${styles.arrow}`}
          onClick={() => swiper.slideNext()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
