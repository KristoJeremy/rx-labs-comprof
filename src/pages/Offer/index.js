import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//Import components
import { NavigationBar } from "@/components/Navbar/navbar";
import { Background } from "@/components/backgroundBlur";
import { Hero } from "@/components/heroOffer";
import { Footer } from "@/components/footer";
import { SpecialOffer } from "@/components/specialOffer";

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
      <div className="md:pt-[10rem] sm:pt-[6rem] sm:h-[45vh] h-[60vh]">
        <Hero />
      </div>
      <div className="">
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default index;
