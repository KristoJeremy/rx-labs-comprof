import React, { useState } from "react";
import {
  LatoReguler,
  PoppinsMedium,
  PoppinsSemiBold,
  PoppinsBold,
} from "@/fonts/font";
import styles from "./form.module.css";
import img1 from "../../../public/laptop.png";
import Image from "next/image";

export const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    phonenum: "",
    message: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(values);

  return (
    <section className={`${styles.box} " py-5 w-full lg:w-1/2 md:w-1/3 mx-auto"`}>
    <div
        className="container grid md:grid-cols-2 grid-cols-1 lg:max-w-[1300px] justify-center mx-auto md:px-8 px-0 md:gap-5"
      >
      <div className="w-full">
        <h1
          className={`${styles.title} leading-none text-start lg:mb-2 mb-1 text-white mx-12`}
          style={PoppinsBold.style}
        >
          HAVE A PROJECT IN MIND?
        </h1>
        <form className={styles.forms} onSubmit={handleSubmit}>
          <div className="w-[100%]">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-0 ">
              <div className="md:my-0 mb-3 mx-12">
                <label
                  className={`${styles.font_label} mb-1 text-white`}
                  style={LatoReguler.style}
                >
                  Name
                </label>
                <input
                  type="text"
                  className={`bg-[#61455e] block px-0 w-full border-0 border-b-2 border-[#f6f4f5] border-opacity-50 focus:ring-0 focus:border-[#292550] text-white caret-white placeholder-[#C6B5B5] ${styles.font_input}`}
                  style={PoppinsMedium.style}
                  placeholder="Enter your name"
                  aria-label="name input"
                  name="name"
                  required
                  onChange={onChange}
                  pattern="^[A-Za-z0-9]{3,16}$"
                ></input>
                <span className={`${styles.errorMsg} text-red-600`}>
                  Username should be 3-16 characters and shouldn't include any
                  special character!
                </span>
              </div>
              <div className="mx-12">
                <label
                  className={`${styles.font_label} mb-1 text-white`}
                  style={LatoReguler.style}
                >
                  Email
                </label>
                <input
                  type="text"
                  className={`bg-[#61455e] block px-0 w-full border-0 border-b-2 border-[#f6f4f5] border-opacity-50 focus:ring-0 focus:border-[#292550] text-white caret-white placeholder-[#C6B5B5] ${styles.font_input}`}
                  style={LatoReguler.style}
                  placeholder="Enter your email"
                  aria-label="last name input"
                  name="email"
                  required
                  onChange={onChange}
                ></input>
                <span className={`${styles.errorMsg} text-red-600`}>
                  Username should be 3-16 characters and shouldn't include any
                  special character!
                </span>
              </div>
            </div>
            <div className="lg:my-5 md:my-4 my-3 mx-12">
              <label
                className={`${styles.font_label} block mb-1 text-white`}
                style={LatoReguler.style}
              >
                Company
              </label>
              <input
                type="company"
                className={`bg-[#61455e] block px-0 w-full border-0 border-b-2 border-[#f6f4f5] border-opacity-50 focus:ring-0 focus:border-[#292550] text-white caret-white placeholder-[#C6B5B5] ${styles.font_input}`}
                style={LatoReguler.style}
                placeholder="Enter your Company name"
                aria-label="company name input"
                name="company"
                required
                onChange={onChange}
              ></input>
              <span className={`${styles.errorMsg} text-red-600`}>
                It should be a valid email address!
              </span>
            </div>
            <div className="lg:my-5 md:my-4 my-3 mx-12">
              <label
                className={`${styles.font_label} block mb-1 text-white`}
                style={LatoReguler.style}
              >
                Phone Number
              </label>
              <input
                type="number"
                className={`bg-[#61455e] block px-0 w-full border-0 border-b-2 border-[#f6f4f5] border-opacity-50 focus:ring-0 focus:border-[#292550] text-white caret-white placeholder-[#C6B5B5] ${styles.font_input}`}
                style={LatoReguler.style}
                placeholder="Enter your phone number"
                aria-label="phone number input"
                name="phonenum"
                required
                onChange={onChange}
              ></input>
            </div>
            <div className="lg:my-5 md:my-4 my-3 mx-12">
              <label
                className={`${styles.font_label} block mb-1 text-white`}
                style={LatoReguler.style}
              >
                Message
              </label>
              <input
                type="text"
                className={`bg-[#61455e] block px-0 w-full border-0 border-b-2 border-[#f6f4f5] border-opacity-50 focus:ring-0 focus:border-[#292550] text-white caret-white placeholder-[#C6B5B5] ${styles.font_input}`}
                style={PoppinsMedium.style}
                placeholder="Enter your message"
                aria-label="message input"
                name="message"
                required
                onChange={onChange}
              ></input>
            </div>
            <button
              aria-label="sent message"
              type="submit"
              className={`${styles.button}  mx-12 text-white rounded-xl px-8 py-2 text-justify bg-[#B4862E] lg:my-6 md:my-4 my-3 hover:opacity-70`}
              style={PoppinsBold.style}
            >
              <div className={`${styles.wrapper}`}>Send</div>
            </button>
          </div>
        </form>
      </div>
      <div className="md:mr-8 md:h-[100%] h-[40vh] md:mx-0 mx-4">
            <Image
              src={img1}
              alt="img1"
              className="object-cover w-full h-full mx-auto mb-4"
            />
      </div>
    </div>
    </section>
  );
};
