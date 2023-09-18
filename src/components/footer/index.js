import React from "react";
import Link from "next/link";

//Import font and css
import { PoppinsSemiBold } from "@/fonts/font";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <section id="footer" className="py-5 md:mx-[120px] mx-auto">
      <div className="container grid md:grid-cols-2 md:grid-rows-none">
        <div className="inline-flex md:justify-start justify-center">
          <Link href="/">
            <div
              className={`${styles.menu_tx} text-[#C9BCC2] md:mx-[8px] mx-[10px]`}
              style={PoppinsSemiBold.style}
            >
              HOME
            </div>
          </Link>
          <Link href="/">
            <div
              className={`${styles.menu_tx} text-[#C9BCC2] md:mx-[8px] mx-[10px]`}
              style={PoppinsSemiBold.style}
            >
              ABOUT
            </div>
          </Link>
          <Link href="/">
            <div
              className={`${styles.menu_tx} text-[#C9BCC2] md:mx-[8px] mx-[10px]`}
              style={PoppinsSemiBold.style}
            >
              SERVICES
            </div>
          </Link>
          <Link href="/">
            <div
              className={`${styles.menu_tx} text-[#C9BCC2] md:mx-[8px] mx-[10px]`}
              style={PoppinsSemiBold.style}
            >
              VALUES
            </div>
          </Link>
          <Link href="/">
            <div
              className={`${styles.menu_tx} text-[#C9BCC2] md:mx-[8px] mx-[10px]`}
              style={PoppinsSemiBold.style}
            >
              CONTACT US
            </div>
          </Link>
        </div>
        <div
          className={`${styles.copyright} text-[#C9BCC2] md:mt-0 mt-[10px]`}
          style={PoppinsSemiBold.style}
        >
          Copyright @ 2023 RXLabs. All rights reserved.
        </div>
      </div>
    </section>
  );
};
