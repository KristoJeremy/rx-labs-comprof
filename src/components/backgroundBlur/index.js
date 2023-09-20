import React from "react";

///CSS
import styles from "./background.module.css";

export const Background = () => {
  return (
    <div>
      <div className={`${styles.circle_1} rounded-full`}></div>
      <div className={`${styles.circle_2} rounded-full`}></div>
      <div className={`${styles.circle_3} rounded-full sm:max-h-[70%]`}></div>
      <div
        className={`${styles.circle_4} rounded-full lg:max-h-[40%] md:max-h-[10px] sm:max-h-[67%]`}
      ></div>
      {/* <div className={`${styles.circle_5} rounded-full`}></div> */}
    </div>
  );
};
