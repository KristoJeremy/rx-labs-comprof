import React from "react";
import Image from "next/image";

///FONT & CSS
import { LatoReguler, PoppinsBold, PoppinsMedium } from "@/fonts/font";
import styles from "./serviceModal.module.css";

import pic1 from "../../../public/_service/web_dev.png";

export const ServiceModal = (props) => {
  return (
    <div className="container px-4 py-4">
      <div
        id="card"
        className={`${styles.card_size} ${styles.glassmorphism} overflow-hidden`}
      >
        <div className="grid md:grid-cols-3 max-h-full">
          <div className="col-span-1">
            <Image src={pic1} className={`${styles.image}`} />
          </div>
          <div className="col-span-2 md:p-6 grid md:grid-rows-3">
            <div
              className={`${styles.title} mt-[4.5rem]`}
              style={PoppinsBold.style}
            >
              Web Development
            </div>
            <div className={`${styles.desc} my-auto`} style={LatoReguler.style}>
              In web development, we masterfully utilize open-source platforms
              to create cost-effective, customized solutions. Our process starts
              with precise project analysis, aligning every detail with your
              vision. We're committed to delivering exceptional value by
              optimizing both affordability and functionality, making us your
              strategic partner for an efficient online presence.{" "}
            </div>
            <div className="my-auto">
              <button
                aria-label="Read more"
                type="button"
                className={`${styles.bt_tx} rounded-3xl px-8 py-2 text-center border-[1px]`}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
