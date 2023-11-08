import React from "react";

//Import component
import { Card1, Card2, Card3 } from "./card";

//Import font and css
import { PoppinsBold, LatoReguler } from "@/fonts/font";
import styles from "./card.module.css";


export const SocialManagement = () => {
  const data1 = {
    heading: "BRAND",
    par: "Maintaining a consistently engaging social media presence plays a pivotal role in establishing strong brand recognition and cultivating trust among your target audience. By consistently delivering valuable content, meaningful interactions, and timely updates across various social platforms, your brand becomes a reliable and trustworthy presence in the minds of your customers, ensuring lasting positive impressions and loyalty.",
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
    <section id="social-media-management" className=" lg:mx-12">
      <div className="container justify-center items-center lg:max-w-[1300px]">
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
