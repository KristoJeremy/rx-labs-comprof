import { NavigationBar } from "@/components/Navbar/navbar";
import React from "react";

///COMPONENT
import { Background } from "@/components/backgroundBlur";
import { OurService } from "@/components/ourService";
function index() {
  return (
    <>
      <NavigationBar />
      <div>
        <Background />
      </div>
      {/* COMPONENT START */}
      <div>
        <OurService />
      </div>
      {/* COMPONENT END */}
    </>
  );
}

export default index;
