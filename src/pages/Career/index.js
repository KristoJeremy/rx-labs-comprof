import React from "react";

//Import components
import { NavigationBar } from "@/components/Navbar/navbar";
import { Background } from "@/components/backgroundBlur";
import { JoinUs } from "@/components/Join-us/join";
// import { Hero } from "@/components/heroCareer";

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
      {/* <div className="sm:pt-[10rem] sm:h-[100vh] h-[60vh]">
        <Hero />
      </div> */}

      {/* COMPONENT END */}
    </>
  );
}

export default index;