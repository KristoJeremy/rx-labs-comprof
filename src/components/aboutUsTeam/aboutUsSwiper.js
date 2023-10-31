import React from "react";

// Import component
import { SwiperNavButton } from "./swiperNavButton";

// Import font and css
import { PoppinsBold, LatoReguler } from "@/fonts/font";
import styles from "./aboutSwiper.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay, Navigation, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export function CreateModal() {
  const data = [
    {
      name: "Kristo Jeremy",
      desc: "At RX Labs, being a Front-End Developer is an adventure in itself. The diverse team and the chance to bring innovative designs to life keep me motivated and passionate about what I do",
      role: "Frontend Developer",
    },
    {
      name: "Michael Baptiswa",
      desc: "Working at RX Labs as a Front-End Developer has been a game-changer for me. The collaborative environment and the opportunity to work on cutting-edge projects make every day an exciting learning experience.",
      role: "Frontend Developer",
    },
    {
      name: "Rafli Wasis Anggito",
      desc: "RX Labs isn't just a workplace; it's a creative family. As a UI/UX Designer, I've had the chance to grow both personally and professionally, shaping intuitive user experiences that make a real impact.",
      role: "UI/UX Designer",
    },
  ];
  return (
    <>
      {data.map((data, index) => (
        <SwiperSlide key={index} className={`${styles.swiper_slide} container`}>
          <div className="grid place-items-center h-full">
            <div className={`${styles.circle} rounded-full`}></div>
          </div>
          <div
            id="card"
            className={`${styles.card_size} ${styles.glassmorphism} mt-[4rem]`}
          >
            <div className="text-center grid grid-rows-3">
              <div
                className={` row-span-2 md:py-[3vh] sm:py-[1.5vh] lg:px-[3vw] sm:px-[4vw] py-[1.3vh] px-[4vw]`}
              >
                <div
                  className={`${styles.desc} lg:mt-[7vh] md:mt-[6vh] sm:mt-[6vh] mt-[6vh] lg:min-h-[13vh] md:min-h-[9vh] sm:min-h-[6.5vh] min-h-[4.5vh]`}
                  style={LatoReguler.style}
                >
                  {data.desc}
                </div>
              </div>
              <div className="row-span-1 lg:mt-[3vh] sm:mt-[2vh] mt-[2vh]">
                <div className={`${styles.name}`} style={PoppinsBold.style}>
                  {data.name}
                </div>
                <div
                  className={`${styles.role} md:mt-1 sm:mt-0  mt-[-0.5vh]`}
                  style={LatoReguler.style}
                >
                  {data.role}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </>
  );
}

export const AboutUsSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"} //Harusnya slidesPerView={"auto"}
        // width={720}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, A11y]}
        className={`mySwiper`}
      >
        {CreateModal()}
        <div className="mt-[9vh]">
          <SwiperNavButton />
        </div>
      </Swiper>
    </>
  );
};
