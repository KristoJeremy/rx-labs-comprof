import React from "react";
import { useSwiper } from "swiper/react";

//import css
import styles from "./button.module.css";

export const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="container grid grid-cols-2 max-w-[8vw] mb-[4vh]">
      <div
        className={`${styles.circleNavButton} rounded-full mx-auto mb-[4vh]`}
      >
        <button
          className="text-white text-center container py-1"
          onClick={() => swiper.slidePrev()}
        >
          &lt;
        </button>
      </div>
      <div
        className={`${styles.circleNavButton} rounded-full mx-auto mb-[4vh]`}
      >
        <button
          className="text-white text-center container py-1"
          onClick={() => swiper.slideNext()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
