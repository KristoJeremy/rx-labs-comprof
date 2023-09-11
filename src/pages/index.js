import { NavigationBar } from "@/components/Navbar/navbar";
import React from "react";
import { ServiceModal } from "@/components/serviceModal";
import { Background } from "@/components/backgroundBlur";

function index() {
  return (
    <>
     <NavigationBar />
      <div>
        <Background />
      </div>
      {/* COMPONENT START */}
      <div>
        <ServiceModal />
      </div>
      {/* COMPONENT END */}

    </>
  );
}

export default index;
