import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import Image from 'next/image';

import slide_image_1 from '../../../public/animationimg/img1.png';
import slide_image_2 from '../../../public/animationimg/img2.png';
import slide_image_3 from '../../../public/animationimg/img3.png';

// Initialize Swiper
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Card() {
  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        className="swiper_container"
      >
        <SwiperSlide>
          <Image src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}

export const AnimationCard = () => {
  return (
    <section>
      {Card()}
      <div id="NewRootRoot" className="flex flex-col w-full">
        <div className="shadow-[3px_4px_4px_0px_rgba(64,_56,_69,_0.25)] bg-[rgba(66,_66,_70,_0.5)] flex flex-col justify-end gap-6 h-[635px] shrink-0 items-center py-32">
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
  );
};








// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import Image from 'next/image';

// import slide_image_1 from '../../../public/animationimg/img1.png';
// import slide_image_2 from '../../../public/animationimg/img2.png';
// import slide_image_3 from '../../../public/animationimg/img3.png';

// function Card() {
//   return (
//         <>
//         <SwiperSlide>
//           <Image src={slide_image_1} alt="slide_image" className="" />
//         </SwiperSlide>
//         <SwiperSlide>
//               <Image src={slide_image_2} alt="slide_image" className="" />
//         </SwiperSlide>
//         <SwiperSlide>
//               <Image src={slide_image_3} alt="slide_image" className="" />
//         </SwiperSlide><div className="slider-controler">
//               <div className="swiper-button-prev slider-arrow">
//                   <ion-icon name="arrow-back-outline"></ion-icon>
//               </div>
//               <div className="swiper-button-next slider-arrow">
//                   <ion-icon name="arrow-forward-outline"></ion-icon>
//               </div>
//               <div className="swiper-pagination"></div>
//           </div></>
//   );
// }

// export const AnimationCard = () => {
//   return (
//     <section>
//       <div id="NewRootRoot" className="flex flex-col w-full">
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         {Card()}
//       </Swiper>
//         <div className="shadow-[3px_4px_4px_0px_rgba(64,_56,_69,_0.25)] bg-[rgba(66,_66,_70,_0.5)] flex flex-col justify-end gap-6 h-[635px] shrink-0 items-center py-32">
//           <div className="text-center text-5xl font-['Poppins'] font-bold text-white">
//             Let's Begin Our Journey Together!
//           </div>
//           <div className="text-center text-xl font-['Lato'] text-[#c9a1b6] w-3/5">
//             Ready to embark on an exciting career journey with us? Join RX Labs and be
//             a part of something extraordinary. Your future starts here!
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };








// import React, { useState, useEffect, useRef } from "react";
// import {
//     LatoReguler,
//     PoppinsMedium,
//     PoppinsSemiBold,
//     PoppinsBold,
//   } from "@/fonts/font";

// // Import dependencies

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// // import 'swiper/swiper-bundle.min.css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import Image from "next/image";

// import slide_image_1 from '../../../public/animationimg/img1.png';
// import slide_image_2 from '../../../public/animationimg/img2.png';
// import slide_image_3 from '../../../public/animationimg/img3.png';

// function Card(){
// return(
//     <div className="container">
//         <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             loop={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//             }}
//             pagination={{ el: '.swiper-pagination', clickable: true }}
//             navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//             clickable: true,
//             }}
//             modules={[EffectCoverflow, Pagination, Navigation]}
//             className="swiper_container"
//         >
//             <SwiperSlide>
//             <Image src={slide_image_1} alt="slide_image" />
//             </SwiperSlide>
//             <SwiperSlide>
//             <Image src={slide_image_2} alt="slide_image" />
//             </SwiperSlide>
//             <SwiperSlide>
//             <Image src={slide_image_3} alt="slide_image" />
//             </SwiperSlide>
//             <div className="slider-controler">
//             <div className="swiper-button-prev slider-arrow">
//                 <ion-icon name="arrow-back-outline"></ion-icon>
//             </div>
//             <div className="swiper-button-next slider-arrow">
//                 <ion-icon name="arrow-forward-outline"></ion-icon>
//             </div>
//             <div className="swiper-pagination"></div>
//             </div>
//         </Swiper>
//     </div>
// )
// }

// export const AnimationCard = ()=> {
//     return(
//     <section>
//         {Card()}
//             <div id="NewRootRoot" className="flex flex-col w-full">
//                 <div className="shadow-[3px_4px_4px_0px_rgba(64,_56,_69,_0.25)] bg-[rgba(66,_66,_70,_0.5)] flex flex-col justify-end gap-6 h-[635px] shrink-0 items-center py-32">
//                     <div className="text-center text-5xl font-['Poppins'] font-bold text-white"
//                     style={PoppinsBold.style}>
//                         Let's Begin Our Journey Together!
//                     </div>
//                     <div className="text-center text-xl font-['Lato'] text-[#c9a1b6] w-3/5"
//                     style={LatoReguler.style}>
//                     Ready to embark on an exciting career journey with us? Join RX Labs and be
//                     a part of something extraordinary. Your future starts here!
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
