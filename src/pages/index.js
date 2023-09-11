import React from "react";

///COMPONENT
import { ServiceModal } from "@/components/serviceModal";
import { Background } from "@/components/backgroundBlur";

function index() {
  return (
    <>
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
