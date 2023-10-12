import React from "react";

//Import components
import { NavigationBar } from "@/components/Navbar/navbar";
import { Background } from "@/components/backgroundBlur";
import { JoinUs } from "@/components/Join-us/join";
// import { Hero } from "@/components/heroCareer";
import { Hero } from "@/components/heroCareer";
import { AnimationCard } from "@/components/animationCard/animationCard";



function index() {
  return (
    <>
      <div className="z-50">
        <NavigationBar />
      </div>

      <div>
        <Background />
      </div>


      {/* COMPONENT START */}
      <div className="sm:pt-[10rem] sm:h-[100vh] h-[60vh]">
        <Hero />
      </div>

      <div className="z-0">
        <JoinUs />
      </div>
      <div className="z-0">
        <AnimationCard />
      </div>

      {/* COMPONENT END */}
    </>
  );
}
export default index;
