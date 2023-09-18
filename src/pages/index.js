import React from "react";

//Import components
import { NavigationBar } from "@/components/Navbar/navbar";
import { Background } from "@/components/backgroundBlur";
import { OurService } from "@/components/ourServices";
import { Hero } from "@/components/hero";
function index() {
  return (
    <>
      <div className="">
        <NavigationBar />
      </div>
      <div>
        <Background />
      </div>
      {/* COMPONENT START */}
      <div className="sm:pt-[10rem] sm:h-[100vh] h-[60vh]">
        <Hero />
      </div>
      <div>
        <OurService />
      </div>
      {/* COMPONENT END */}
    </>
  );
}

export default index;
