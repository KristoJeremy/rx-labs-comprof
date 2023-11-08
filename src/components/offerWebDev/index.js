import React from "react";

//Import component
import { Card, CardMid, CardBot } from "./card";
import {Card1, Card2, Card3} from "@/components/socialManagement/card"

//Import font and css
import { PoppinsBold, LatoReguler } from "@/fonts/font";
import styles from "./card.module.css";

export const OfferWebDev = () => {
  const data1 = {
    heading: "TAILORED FOR YOUR BUSINESS NEEDS",
    par: "We listen to your client brief and craft designs that match your vision. Whether you're looking to create an online shop, a compelling company profile, or a versatile CMS, we've got you covered. Our web solutions are meticulously crafted to captivate your target audience, guaranteeing not only their undivided attention but also exceptional conversion rates.",
  };
  const data2 = {
    heading: "SEO OPTIMIZED",
    par: "Our commitment to search engine optimization goes beyond a one-time effort. We engage in a continuous optimization process, tirelessly working to elevate your website's visibility until it secures a prominent position at the pinnacle of Google search rankings.",
  };
  const data3 = {
    heading: "CONSULATION ABOUT YOUR SYSTEM",
    
  };

  return (
    <section id="offer-web-dev" className=" lg:mx-12">
      <div className="container justify-center items-center lg:max-w-[1300px]">
        <div
          className={`text-center text-[#F6F4F5] ${styles.title}`}
          style={PoppinsBold.style}
        >
          Web development
        </div>
        <div className="sm:mt-[7vh]">
          <Card Heading={data1.heading} Paragraph={data1.par} />
        </div>
        <div className="sm:mt-[7vh]">
          <CardMid Heading={data3.heading}/>
        </div>
        <div className="sm:mt-[7vh]">
          <CardBot Heading={data2.heading} Paragraph={data2.par} />
        </div>
      </div>

      <div className={` mt-400 container justify-center items-center lg:max-w-[1300px]`}>
        <div
          className={`text-center text-[#F6F4F5] ${styles.title}`}
          style={PoppinsBold.style}
        >
          SOCIAL MEDIA MANAGEMENT
        </div>
        <div className="sm:my-[10vh]">
          <Card1 /> 
        </div>
        <div className="sm:my-[10vh]">
          <Card2 /> 
        </div>
        <div className="sm:my-[10vh]">
          <Card3 /> 
        </div>
      </div>
    </section>
  );
};
