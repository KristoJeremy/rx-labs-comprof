import React from "react";

//Import components
import { NavigationBar } from "@/components/Navbar/navbar";
import { Background } from "@/components/backgroundBlur";
import { OurService } from "@/components/ourServices";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/Contact-us/contact";

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
      <div className="sm:pt-[10rem] sm:h-[100vh] h-[60vh]">
        <Hero />
      </div>
      <div>
        <OurService />
      </div>
      <div className="flex items-center justify-center mt-[10vh]">
        <ContactForm />
      </div>
      <div className="">
        <Footer />
      </div>
      {/* COMPONENT END */}
    </>
  );
}

export default index;
