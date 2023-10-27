import React from "react";

//import font and css
import { LatoReguler, LatoBold, PoppinsBold } from "@/fonts/font";
import styles from "./allInOne.module.css";

//import component
import { Modal } from "./modal";

export const AllInOne = () => {
  return (
    <section id="all-in-one" className="py-5 lg:mx-12">
      <div className="container justify-center items-center lg:max-w-[1300px]">
        <div className="lg:mt-[9vh]">
          <div className="text-center lg:mx-[10vw]">
            <span
              className={`display:inline text-[#F4D6E5] m-0 ${styles.msg_1}`}
              style={LatoReguler.style}
            >
              Unleashing the potential of these glorious benefits,&nbsp;
            </span>
            <span
              className={`display:inline text-[#E1AB20] m-0 ${styles.msg_1}`}
              style={LatoBold.style}
            >
              we deliver excellence in both&nbsp;
            </span>
            <span
              className={`display:inline text-[#F4D6E5] m-0 ${styles.msg_1}`}
              style={LatoReguler.style}
            >
              social media management and website development, all wrapped up in
              one dynamic package:
            </span>
          </div>
          <div
            className={`${styles.title} lg:mt-[2vh] md:mt-[2.5vh] sm:mt-[2vh] mt-[2.5vh] md:mx-[8vw] sm:mx-[10vw] mx-[14vw] text-center text-[#F6F4F5] border-b-4`}
            style={PoppinsBold.style}
          >
            ALL. IN. ONE
          </div>
          <div className="lg:mt-[8vh] md:mt-[7vh] sm:mt-[5vh] mt-[4vh] text-center lg:mx-[15vw] md:mx-[7vw] sm:mx-[6.5vw] mx-[7vw]">
            <span
              className={`display:inline text-[#F4D6E5] m-0 ${styles.msg_2}`}
              style={LatoReguler.style}
            >
              Why juggle multiple agencies when you can get the&nbsp;
            </span>
            <span
              className={`display:inline text-[#E1AB20] m-0 ${styles.msg_2}`}
              style={LatoBold.style}
            >
              complete digital suite&nbsp;
            </span>
            <span
              className={`display:inline text-[#F4D6E5] m-0 ${styles.msg_2}`}
              style={LatoReguler.style}
            >
              with us? From pixel-perfect web designs to winning social media
              strategies, we've got you covered.
            </span>
          </div>
          <div className="mt-[15vh]">
            <Modal />
          </div>
        </div>
      </div>
    </section>
  );
};
