import { NavigationBar } from "@/components/Navbar/navbar";
import { ContactForm } from "@/components/Contact-us/contact";
import { UpperSec } from "@/components/Contact-us/section";
import React from "react";
function index() {
  return (
    //Navbar component will be imported here
    <>
      <div className="sticky top-0">
        <NavigationBar />
      </div>
      {/* <UpperSec /> */}
    </>
    //Footer component will be imported here
  );
}

export default index;
