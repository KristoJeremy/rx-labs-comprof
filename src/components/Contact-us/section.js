import React from "react";
// import { MapIntegration } from "../maps";
import { ContactForm } from "./contact";
import styles from "./section.module.css";
import img1 from "../../../public/laptop.png"
import Image from "next/image";

export const UpperSec = () => {
  return (
    <section id="upper-section" className="py-5">
      <div
        // className={`mt-5 container flex flex-wrap items-center justify-center mx-auto lg:mt-4 md:px-12 md:flex-row lg:max-w-[1300px] relative`}
        className={`${styles.box} container grid md:grid-cols-2 grid-cols-1 lg:max-w-[1300px] justify-center mx-auto md:px-8 px-0 md:gap-5`}
      >
        <ContactForm className="md:w-1/2" />
        <div className="md:mr-8 md:h-[100%] h-[40vh] md:mx-0 mx-4">
          <Image
          src={img1}
          alt="img1"
        //   className={`${styles.img_size}`}
           />
        </div>
      </div>
    </section>
  );
};
