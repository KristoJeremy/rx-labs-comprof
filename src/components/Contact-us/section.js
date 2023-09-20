import React from "react";
// import { MapIntegration } from "../maps";
import { ContactForm } from "./contact";
import styles from "./section.module.css";
import img1 from "../../../public/laptop.png";
import Image from "next/image";

export const UpperSec = () => {
  return (
    <section id="upper-section" className="py-5 mx-auto">
      <div
        // className={`mt-5 container flex flex-wrap items-center justify-center mx-auto lg:mt-4 md:px-12 md:flex-row lg:max-w-[1300px] relative`}
        className={`${styles.box} container grid md:grid-cols-2 grid-cols-1 lg:max-w-[1000px] justify-center mx-auto md:px-8 px-0 md:gap-5`}
      >
        <ContactForm className="md:w-1/2" />
        <div className="md:mr-8 md:mx-auto mx-4 flex items-center justify-center">
          <div className="lg:h-full w-full relative md:h-[30vh]">
            <Image
              src={img1}
              alt="img1"
              className="object-cover w-full h-auto md:h-full mx-auto mb-4"
              //   className={`${styles.img_size}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
