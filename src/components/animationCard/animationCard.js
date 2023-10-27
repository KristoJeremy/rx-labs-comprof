import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import styles from "./animation.module.css";

import slide_image_1 from '../../../public/animationimg/img1.png';
import slide_image_2 from '../../../public/animationimg/img2.png';
import slide_image_3 from '../../../public/animationimg/img3.png';

// Initialize Swiper

function Card() {
  const data = [
    {
      url: slide_image_2,
    },
    {
      url: slide_image_1,
    },
    {
      url: slide_image_3,
    },
  ];
  return (
    <>
      {data.map((data, index) => (
        <SwiperSlide
          key={index}
          className={`${styles.swiper_slide} md:py-6 py-4`}
        >
          <div
            id="card"
            className={`${styles.card_size}`}
          >
                <Image
                  src={data.url}
                  className="object-fit"
                  // alt={data.alt}
                />
          </div>
        </SwiperSlide>
      ))}
    </>
  );
}

export const AnimationCard = () => {
  return (
    <>
  <div className="flex justify-center">
    <section className="flex justify-center">
      <div className="flex flex-col w-2/3 justify-center relative">
        <div className="shadow-[3px_4px_4px_0px_rgba(64,_56,_69,_0.25)] bg-[rgba(66,_66,_70,_0.5)] flex flex-col justify-end gap-6 h-[700px] items-center py-5">
          <div className="w-full aspect-w-16 aspect-h-9">
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className={`mySwiper absolute inset-0 overflow-visible`}
              style={{ zIndex: 0 }}
            >
              {Card()}
            </Swiper>
          </div>
          <div className="text-center text-5xl font-['Poppins'] font-bold text-white">
            Let's Begin Our Journey Together!
          </div>
          <div className="text-center text-xl font-['Lato'] text-[#c9a1b6] w-3/5">
            Ready to embark on an exciting career journey with us? Join RX Labs and be
            a part of something extraordinary. Your future starts here!
          </div>
        </div>
      </div>
    </section>
  </div>
</>

  );
};
