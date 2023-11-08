import React from "react";

//Import css and font
import { LatoReguler, PoppinsBold } from "@/fonts/font";
import styles from "./card.module.css";

export const Card = ({ Heading, Paragraph }) => {
  return (
    <div className={`${styles.card} sm:py-[10vh] sm:px-[8vh] sm:mt-[6vh]`}>
      <div className="grid grid-cols-2 gap-[10vw]">
        <div>
          <div
            className={`${styles.heading} text-[#F6F4F5]`}
            style={PoppinsBold.style}
          >
            {Heading}
          </div>
          <div
            className={`${styles.paragraph} text-[#F4D6E5] sm:mt-[5vh]`}
            style={LatoReguler.style}
          >
            {Paragraph}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardMid = ({ Heading, Paragraph }) => {
  return (
    <section className={`${styles.card2} shadow-sm flex flex-col px-20 rounded-[30px] max-md:px-5`}>
       <div className="self-center flex w-full max-w-[1060px] flex-col mt-28 mb-24 max-md:max-w-full max-md:my-10">
        <h1 className="text-neutral-100 text-center text-5xl font-bold leading-[49.95px] self-center whitespace-nowrap max-md:max-w-full max-md:text-4xl">
          CONSULATION ABOUT YOUR SYSTEM
        </h1>
        <div className="self-stretch mt-28 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col mt-1.5 max-md:mt-10">
                <h2 className="text-white text-xl font-semibold tracking-wide self-stretch">
                  Client Consultation. <br /> Analyze. <br /> Collaborate.
                </h2>
                <p className="text-stone-200 text-base tracking-wide self-stretch mt-6">
                  We assess your needs collaboratively to ensure a clear project understanding.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col mt-1.5 max-md:mt-10">
                <h2 className="text-white text-xl font-semibold tracking-wide self-stretch">
                  Creative Exploration. Ideation. Conceptualization.
                </h2>
                <p className="text-stone-200 text-base tracking-wide self-stretch mt-5">
                  Our Strategic Planners and Creative Team synergize to shape innovative digital strategies.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:mt-10">
                <h2 className="text-white text-xl font-semibold tracking-wide self-stretch">
                  Campaign Kickoff. Activation and Launch.
                </h2>
                <p className="text-stone-200 text-base tracking-wide self-stretch mt-6">
                  We launch the digital campaign, igniting brand activation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3bb5486-b95f-444b-87cc-80b6f5bad861?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"
          className="aspect-[9.06] object-contain object-center w-full overflow-hidden self-center mt-7 max-md:max-w-full"
          alt="Consultation Image"
        />
        <div className="self-center w-[599px] max-w-full mt-9">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:mt-10">
                <h2 className="text-white text-xl font-semibold tracking-wide self-stretch">
                  Inception. Define. <br /> Specify.
                </h2>
                <p className="text-stone-200 text-base tracking-wide self-stretch mt-5">
                  We assess your needs collaboratively to ensure a clear project understanding.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:mt-10">
                <h2 className="text-white text-xl font-semibold tracking-wide self-stretch">
                  Presentation and Negotiation. Client Engagement.
                </h2>
                <p className="text-stone-200 text-base tracking-wide self-stretch mt-5">
                  We schedule client meetings to present and refine our digital brand ideas collaboratively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CardBot = ({ Heading, Paragraph }) => {
  return (
    <section className={` ${styles.card2} shadow-sm pl-24 pr-28 rounded-[30px] max-md:px-5`}>
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
        <div className="flex flex-col mt-28 max-md:max-w-full max-md:mt-10">
          <h1 className="text-neutral-100 text-5xl font-bold leading-[49.95px] self-stretch max-md:max-w-full max-md:text-4xl">
            SEO OPTIMIZED
          </h1>
          <p className="text-yellow-500 text-justify text-xl tracking-wide self-stretch mt-10 max-md:max-w-full">
            <span className="text-pink-200">Our commitment to </span>
            <span className="text-yellow-500">search engine optimization</span>
            <span className="text-pink-200"> goes beyond a one-time effort. We engage in a continuous optimization process, tirelessly working to</span>
            <span className="text-yellow-500"> elevate your website's visibility</span>
            <span className="text-pink-200"> until it secures a prominent position at the pinnacle of Google search rankings.</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
        <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8801345c-6e53-4e01-8a71-5c26f13502fb?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"
            className="aspect-[24.6] object-contain object-center w-[123px] stroke-[5px] stroke-amber-100 overflow-hidden max-w-full self-start"
            alt="SEO Image"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b6061d68-0226-4bbc-b8fb-a8b13063dba4?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6061d68-0226-4bbc-b8fb-a8b13063dba4?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6061d68-0226-4bbc-b8fb-a8b13063dba4?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6061d68-0226-4bbc-b8fb-a8b13063dba4?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6061d68-0226-4bbc-b8fb-a8b13063dba4?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6061d68-0226-4bbc-b8fb-a8b13063dba4?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6061d68-0226-4bbc-b8fb-a8b13063dba4?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6061d68-0226-4bbc-b8fb-a8b13063dba4?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"className="aspect-[2.32] object-contain object-center w-full overflow-hidden self-stretch mt-2.5 max-md:max-w-full"
            alt="SEO Image"
          />
          <div className="flex w-[387px] max-w-full grow flex-col self-end">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/74dca1dd-71cb-403a-a369-fd7a0d61d0b8?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dca1dd-71cb-403a-a369-fd7a0d61d0b8?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dca1dd-71cb-403a-a369-fd7a0d61d0b8?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dca1dd-71cb-403a-a369-fd7a0d61d0b8?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dca1dd-71cb-403a-a369-fd7a0d61d0b8?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dca1dd-71cb-403a-a369-fd7a0d61d0b8?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dca1dd-71cb-403a-a369-fd7a0d61d0b8?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dca1dd-71cb-403a-a369-fd7a0d61d0b8?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"className="aspect-[1.68] object-contain object-center w-full overflow-hidden self-end"
              alt="SEO Image"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/87697cbf-8751-4fed-b1c6-b40a15eee076?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"
              className="aspect-[24.6] object-contain object-center w-[123px] stroke-[5px] stroke-amber-100 overflow-hidden max-w-full grow mt-2.5 self-end"
              alt="SEO Image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};