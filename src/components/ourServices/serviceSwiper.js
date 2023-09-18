import React from "react";
import Image from "next/image";

// Import font and css
import { LatoReguler, PoppinsBold, PoppinsMedium } from "@/fonts/font";
import styles from "./serviceSwiper.module.css";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
// import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// Import assets
// import pic1 from "../../../public/_service/web_dev.png";
// import pic2 from "../../../public/_service/ui_ux.png";
// import pic3 from "../../../public/_service/Social_Media.png";
function CreateModal() {
  const data = [
    {
      url: pic1,
      desc: "In web development, we masterfully utilize open-source platforms to create cost-effective, customized solutions. Our process starts with precise project analysis, aligning every detail with your vision. We're committed to delivering exceptional value by optimizing both affordability and functionality, making us your strategic partner for an efficient online presence.",
      title: "Web Development",
      alt: "Desktop screen showing codes",
    },
    {
      url: pic2,
      desc: "In the realm of UI/UX design for prototypes, we offer a comprehensive suite of services. Our process starts with a deep understanding of your project's goals and audience. We create interactive wireframes and mockups, conduct user research and testing, and ensure responsive design. We equip you with a compelling prototype and presentation resources for project support and success.",
      title: "UI/UX Design",
      alt: "Wireframing",
    },
    {
      url: pic3,
      desc: "Our social media management services are dedicated to enhancing engagement, expanding reach, and providing insightful reporting for your business. We start by understanding your goals and audience, then craft compelling content to boost engagement and track progress with detailed reports.",
      title: "Social Media Management",
      alt: "Smartphone home screen",
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
            className={`${styles.card_size} ${styles.glassmorphism}`}
          >
            <div className="grid grid-cols-3 max-h-full">
              <div className="col-span-1">
                <Image
                  src={data.url}
                  className={`${styles.image}`}
                  alt={data.alt}
                />
              </div>
              <div className="col-span-2 md:p-6 p-4 flex flex-col">
                <div
                  className={`${styles.title} text-[#f6f1f1] lg:mt-[95px] md:mt-[50px] sm:mt-[30px] mt-[25px] grow`}
                  style={PoppinsBold.style}
                >
                  {data.title}
                </div>
                <div
                  className={`${styles.desc}  grow`}
                  style={LatoReguler.style}
                >
                  {data.desc}
                </div>
                <div className="md:mt-[70px] mt-[5px] grow">
                  {/* <button
                    aria-label="Read more"
                    type="button"
                    className={`${styles.bt_tx} rounded-3xl md:px-[22px] px-[10px] md:py-2 py-1 text-center border-[1px]`}
                    style={PoppinsMedium.style}
                  >
                    Read More
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </>
  );
}

export const ServiceSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"} //Harusnya slidesPerView={"auto"}
        // width={720}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[]}
        className={`mySwiper`}
      >
        {CreateModal()}
      </Swiper>
    </>
  );
};
