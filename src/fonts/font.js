import { Poppins, Lato } from "next/font/google";

export const PoppinsMedium = Poppins({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export const PoppinsSemiBold = Poppins({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

export const PoppinsBold = Poppins({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export const PoppinsLightItalic = Poppins({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
  style: "italic",
});

export const LatoReguler = Lato({
  subsets: ["latin"],
  weight: "400",
});

export const LatoBold = Lato({
  subsets: ["latin"],
  weight: "700",
});
