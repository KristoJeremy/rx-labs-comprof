import React from "react";

///COMPONENT
import { Background } from "@/components/background";
import { OurService } from "@/components/ourService";
function index() {
  return (
    <>
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
