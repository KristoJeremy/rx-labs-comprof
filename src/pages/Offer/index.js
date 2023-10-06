import React from "react";

//Import components
import { NavigationBar } from "@/components/Navbar/navbar";
import { Background } from "@/components/backgroundBlur";
import { Hero } from "@/components/heroOffer";
import { Footer } from "@/components/footer";

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
      <div className="">
        <Footer />
      </div>

      {/* COMPONENT END */}
    </>
  );
}

export default index;
