import React from "react";

//Import components
import { NavigationBar } from "@/components/Navbar/navbar";
import { Background } from "@/components/backgroundBlur";
import { OurService } from "@/components/ourServices";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { UpperSec } from "@/components/Contact-us/section";

function index() {
  return (
    <>
      <div className="">
        <NavigationBar />
      </div>
      {/* <div className="sticky top-0">
        <NavigationBar />
      </div> */}
    <div className="mt-8">
      <div>
        <UpperSec />
      </div>
    </div>
    <div className="my-10">
      <Background />
    </div>
      {/* COMPONENT START */}
      <div className="sm:pt-[10rem] sm:h-[100vh] h-[60vh]">
        <Hero />
      </div>
      <div>
        <OurService />
      </div>
      {/* <div className="mt-[10vh]">
        <UpperSec />
      </div> */}
      <div className="">
        <Footer />
      </div>
      {/* COMPONENT END */}
    </>
  );
}

export default index;
