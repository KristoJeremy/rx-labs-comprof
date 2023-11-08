import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//Import components
import { NavigationBar } from "@/components/Navbar/navbar";
import { Background } from "@/components/backgroundBlur";
import { Hero } from "@/components/heroOffer";
import { Footer } from "@/components/footer";
import { SpecialOffer } from "@/components/specialOffer";
import { OfferWebDev } from "@/components/offerWebDev";
import { SocialManagement } from "@/components/socialManagement";

function index() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="absolute top-0 z-[52]">
        <SpecialOffer />
      </div>
      <div className="">
        <NavigationBar />
      </div>

      <div>
        <Background />
      </div>
      {/* COMPONENT START */}
      <div className="md:pt-[10rem] sm:pt-[6rem] sm:h-[100vh] h-[60vh]">
        <Hero />
      </div>

      
      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 md:py-[12vh] sm:py-[7vh] py-[5vh]">
        <OfferWebDev />
      </div>
{/* 
      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 md:py-[288vh] sm:py-[178vh] py-[200vh] mt-4">
        <SocialManagement />
      </div>
      <div className="w-full md:h-[200%] sm:h-[75vh] h-[60vh] absolute bg-[#53346A] z-[-10001] mt-8 sm:mt-12 mt-6 p-4"></div> */}



      <div className="sm:mt-[100vh] mt-[100vh]">{/* <Footer /> */}</div>
    </ThemeProvider>
  );
}

export default index;
