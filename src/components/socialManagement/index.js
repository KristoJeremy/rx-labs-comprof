import React from "react";

//Import component
import { Card, CardMid, CardBot } from "./card";

//Import font and css
import { PoppinsBold, LatoReguler } from "@/fonts/font";
import styles from "./card.module.css";


export const SocialManagement = () => {
  const data1 = {
    heading: "BRAND",
    par: "We listen to your client brief and craft designs that match your vision. Whether you're looking to create an online shop, a compelling company profile, or a versatile CMS, we've got you covered. Our web solutions are meticulously crafted to captivate your target audience, guaranteeing not only their undivided attention but also exceptional conversion rates.",
  };
  const data2 = {
    heading: "SALES & LEADS",
    par: "Social media platforms offer far more than simply sharing pictures; they serve as a pivotal and versatile tool for effectively generating leads and driving significant sales growth. Through strategic utilization and engagement, these platforms empower businesses to tap into a vast and engaged audience, turning online presence into tangible business success.",
  };
  const data3 = {
    heading: "ENGAGEMENT",
    par: "At the heart of our approach lies a commitment to direct and meaningful communication that extends far beyond mere transactions. We proactively initiate conversations, ensuring responsiveness to every query, fostering deeper connections with our customers. This commitment underscores our dedication to constant improvement and establishes a foundation of trust and reliability. It's through these principles that we cultivate lasting, meaningful relationships with our valued patrons.",
    par2: "Test"
    
    
  };

  return (
    <section id="offer-web-dev" className=" lg:mx-12">
      <div className="container justify-center items-center lg:max-w-[1300px]">
        <div
          className={`text-center text-[#F6F4F5] ${styles.title}`}
          style={PoppinsBold.style}
        >
          SOCIAL MEDIA MANAGEMENT
        </div>
        <div className="sm:mt-[7vh]">
          <Card Heading={data1.heading} Paragraph={data1.par} />
          <CardMid Heading={data3.heading} Paragraph={data3.par} Paragraph2={data3.par2}/>
          <CardBot Heading={data2.heading} Paragraph={data2.par} />
        </div>
      </div>
    </section>
  );
};
