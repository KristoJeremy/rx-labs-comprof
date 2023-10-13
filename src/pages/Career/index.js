import React from "react";

//Import components
import { NavigationBar } from "@/components/Navbar/navbar";
import { Background } from "@/components/backgroundBlur";
import { JoinUs } from "@/components/Join-us/join";
// import { Hero } from "@/components/heroCareer";
import { Hero } from "@/components/heroCareer";
import { Footer } from "@/components/footer";
import { AboutWorking } from "@/components/aboutUsTeam";


function index() {
  return (
    <>
      <div className="z-50">
        <NavigationBar />
      </div>

      <div>
        <Background />
      </div>

      <div className="z-0">
        <JoinUs />
      </div>
      {/* COMPONENT START */}
      <div className="sm:pt-[10rem] sm:h-[100vh] h-[60vh]">
        <Hero />
      </div>
      <div className="md:mt-[25vh] md:h-[100vh] ">
        <div className="">
          <div className="absolute z-[10]  left-1/2 transform -translate-x-1/2  md:py-[12vh] sm:py-[7vh] py-[5vh]">
            <AboutWorking />
          </div>
          <div className="w-full md:h-full sm:h-[75vh] h-[60vh] absolute bg-[#53346A] z-[-10001]"></div>
        </div>
      </div>
      <div className="sm:mt-[100vh] mt-[100vh]">
        <Footer />
      </div>

      {/* COMPONENT END */}
    </>
  );
}
export default index;
