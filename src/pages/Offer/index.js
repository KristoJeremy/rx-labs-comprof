import React from "react";

//Import components
import { NavigationBar } from "@/components/Navbar/navbar";
import { Background } from "@/components/backgroundBlur";
import { Hero } from "@/components/heroOffer";
import { Footer } from "@/components/footer";
import { AboutWorking } from "@/components/aboutUsTeam";

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
      <div className="md:pt-[10rem] sm:pt-[6rem] sm:h-[45vh] h-[60vh]">
        <Hero />
      </div>
      <div className="md:mt-[25vh] md:h-[100vh] ">
        <div className="">
          <div className="absolute z-[10] container py-[12vh]">
            <AboutWorking />
          </div>
          <div className="w-full h-full absolute bg-[#53346A] z-[-10001]"></div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>

      {/* COMPONENT END */}
    </>
  );
}

export default index;
