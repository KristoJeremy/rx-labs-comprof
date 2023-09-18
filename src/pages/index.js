import React from "react";

//Import components
import { NavigationBar } from "@/components/Navbar/navbar";
import { Background } from "@/components/backgroundBlur";
import { OurService } from "@/components/ourServices";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";

function index() {
  return (
    <>
      <div className="sticky top-0">
        <NavigationBar />
      </div>
      {/* <UpperSec /> */}
      <div>
        <Background />
      </div>
      {/* COMPONENT START */}
      {/* <div className="sm:pt-[10rem] sm:h-[100vh] h-[60vh]">
        <Hero />
      </div> */}
      {/* <div>
        <OurService />
      </div>
      <div className="">
        <Footer />
      </div>

      {/* COMPONENT END */}
    </>
  );
}

export default index;
