import React from "react";

//Import css and font
import { LatoReguler, PoppinsBold } from "@/fonts/font";
import styles from "./card.module.css";
import engagement from "../../../public/_offers/engagement.png";
import Image from "next/image";
import sls1 from "../../../public/_offers/sls1.png";
import sls2 from "../../../public/_offers/sls2.png";
import br from "../../../public/_offers/br.png";
import br1 from "../../../public/_offers/br1.png";
import br3 from "../../../public/_offers/br3.png";
import br4 from "../../../public/_offers/br4.png";
import br5 from "../../../public/_offers/br5.png";
import br6 from "../../../public/_offers/br6.png";


export const Card1 = ({ Heading, Paragraph }) => {
  return (
    <section className={` ${styles.card2} shadow-sm flex flex-col pl-20 pr-14 rounded-[30px] max-md:px-5`}>
    <div className="self-stretch ml-3.5 mt-24 mb-20 max-md:max-w-full max-md:my-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col max-md:max-w-full max-md:mt-9">
            <h1 className="text-neutral-100 text-5xl font-bold leading-[49.95px] whitespace-nowrap self-start max-md:max-w-full max-md:text-4xl">
              BRANDING
            </h1>
            <p className="text-yellow-500 text-justify text-xl mt-14 self-start max-md:max-w-full max-md:mt-10">
              <span className="text-pink-200">Maintaining a</span>{" "}
              <span className="text-yellow-500">
                consistently engaging social media
              </span>{" "}
              <span className="text-pink-200">
                presence plays a pivotal role in establishing strong brand recognition and cultivating trust among your target audience. By consistently delivering valuable content,{" "}
              </span>{" "}
              <span className="text-yellow-500">
                meaningful interactions
              </span>{" "}
              <span className="text-pink-200">
                , and timely updates across various social platforms, your brand becomes a reliable and trustworthy presence in the minds of your customers, ensuring lasting positive impressions and loyalty.
              </span>
            </p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e714f383-b7ec-4ed4-8f39-bd3114db434d?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"
              className="aspect-[44] object-contain object-center w-[220px] stroke-[5px] stroke-amber-100 overflow-hidden max-w-full grow mt-7 self-start"
              alt="Branding Image"
            />
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col max-md:max-w-full max-md:mt-9">
            <div className="self-stretch max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[100%] max-md:w-full max-md:ml-0">
                  <Image
                    src={br}
                    loading="lazy"
                    // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff372a5d-b9e2-4ca3-a909-96f889b9a6a5?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff372a5d-b9e2-4ca3-a909-96f889b9a6a5?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff372a5d-b9e2-4ca3-a909-96f889b9a6a5?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff372a5d-b9e2-4ca3-a909-96f889b9a6a5?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff372a5d-b9e2-4ca3-a909-96f889b9a6a5?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff372a5d-b9e2-4ca3-a909-96f889b9a6a5?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff372a5d-b9e2-4ca3-a909-96f889b9a6a5?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff372a5d-b9e2-4ca3-a909-96f889b9a6a5?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"className="aspect-square object-contain object-center w-full overflow-hidden grow max-md:mt-1"
                    alt="Image 1"
                  />
                </div>
                <div className="flex flex-col items-stretch w-[100%] ml-5 max-md:w-full max-md:ml-0">
                  <Image
                    src={br1}
                    loading="lazy"
                    // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4bd0effa-6f8d-4253-8756-81fea4484a77?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bd0effa-6f8d-4253-8756-81fea4484a77?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bd0effa-6f8d-4253-8756-81fea4484a77?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bd0effa-6f8d-4253-8756-81fea4484a77?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bd0effa-6f8d-4253-8756-81fea4484a77?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bd0effa-6f8d-4253-8756-81fea4484a77?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bd0effa-6f8d-4253-8756-81fea4484a77?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bd0effa-6f8d-4253-8756-81fea4484a77?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"
                    className="aspect-[0.99] object-contain object-center w-full overflow-hidden grow max-md:mt-1"
                    alt="Image 2"
                  />
                </div>
                <div className="flex flex-col items-stretch w-[100%] ml-5 max-md:w-full max-md:ml-0">
                  <Image
                    src={br3}
                    loading="lazy"
                    // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8514bba-861b-4760-86ae-f402dab6fac0?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8514bba-861b-4760-86ae-f402dab6fac0?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8514bba-861b-4760-86ae-f402dab6fac0?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8514bba-861b-4760-86ae-f402dab6fac0?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8514bba-861b-4760-86ae-f402dab6fac0?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8514bba-861b-4760-86ae-f402dab6fac0?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8514bba-861b-4760-86ae-f402dab6fac0?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8514bba-861b-4760-86ae-f402dab6fac0?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"
                    className="aspect-[1.01] object-contain object-center w-full overflow-hidden grow max-md:mt-1"
                    alt="Image 3"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch mt-1.5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[100%] max-md:w-full max-md:ml-0">
                  <Image
                    src={br4}
                    loading="lazy"
                    // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/12f28fcb-671c-4f11-91c0-af98b1791037?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/12f28fcb-671c-4f11-91c0-af98b1791037?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12f28fcb-671c-4f11-91c0-af98b1791037?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/12f28fcb-671c-4f11-91c0-af98b1791037?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/12f28fcb-671c-4f11-91c0-af98b1791037?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12f28fcb-671c-4f11-91c0-af98b1791037?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/12f28fcb-671c-4f11-91c0-af98b1791037?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/12f28fcb-671c-4f11-91c0-af98b1791037?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"
                    className="aspect-square object-contain object-center w-full overflow-hidden grow max-md:mt-1"
                    alt="Image 4"
                  />
                </div>
                <div className="flex flex-col items-stretch w-[100%] ml-5 max-md:w-full max-md:ml-0">
                  <Image
                    src={br5}
                    loading="lazy"
                    // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a420655-8f77-4492-838b-d577bd65cfb9?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a420655-8f77-4492-838b-d577bd65cfb9?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a420655-8f77-4492-838b-d577bd65cfb9?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a420655-8f77-4492-838b-d577bd65cfb9?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a420655-8f77-4492-838b-d577bd65cfb9?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a420655-8f77-4492-838b-d577bd65cfb9?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a420655-8f77-4492-838b-d577bd65cfb9?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a420655-8f77-4492-838b-d577bd65cfb9?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"
                    className="aspect-[0.99] object-contain object-center w-full overflow-hidden grow max-md:mt-1"
                    alt="Image 5"
                  />
                </div>
                <div className="flex flex-col items-stretch w-[100%] ml-5 max-md:w-full max-md:ml-0">
                  <Image
                    src={br6}
                    loading="lazy"
                    // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/775f6aef-8ab3-4d9c-b762-74b336034469?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/775f6aef-8ab3-4d9c-b762-74b336034469?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/775f6aef-8ab3-4d9c-b762-74b336034469?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/775f6aef-8ab3-4d9c-b762-74b336034469?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/775f6aef-8ab3-4d9c-b762-74b336034469?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/775f6aef-8ab3-4d9c-b762-74b336034469?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/775f6aef-8ab3-4d9c-b762-74b336034469?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/775f6aef-8ab3-4d9c-b762-74b336034469?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"
                    className="aspect-[1.01] object-contain object-center w-full overflow-hidden grow max-md:mt-1"
                    alt="Image 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[0%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0294fe8e-3963-43e6-8a7b-ed9f03488af5?apiKey=d2d30d00a1014470a346c5ebaa2eb8da&"
            className="aspect-[0.01] object-contain object-center w-full -rotate-90 stroke-[5px] stroke-amber-100 overflow-hidden grow max-md:mt-9"
            alt="Image 7"
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export const Card3 = ({ Heading, Paragraph }) => {
  return (
    <section className={` ${styles.card2} shadow-sm flex flex-col px-20 rounded-[30px] max-md:px-5`}>
      <div className="self-center flex w-full max-w-[981px] flex-col mt-20 mb-24 max-md:max-w-full max-md:my-10">
        <h1 className="text-neutral-100 text-center text-5xl font-bold leading-[49.95px] self-center max-w-[400px] max-md:text-4xl">
          SALES &amp; LEADS
        </h1>
        <p className="text-yellow-500 text-justify text-xl self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          <span className="text-pink-200">
            Social media platforms offer far more than simply sharing pictures; they serve as a pivotal and versatile tool for effectively generating leads and driving significant sales growth. Through strategic utilization and engagement, these platforms empower businesses to tap into a{" "}
          </span>
          <span className="text-yellow-500">vast and engaged audience</span>
          <span className="text-pink-200">, turning online presence into tangible business success.</span>
        </p>
        <div className="self-center w-[940px] max-w-full mt-12 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
              <Image src={sls1}
              className="aspect-[1.26] object-contain object-center w-[374px] overflow-hidden max-w-full my-auto max-md:mt-10" />
            </div>
            <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
              <Image src={sls2}
              className="aspect-[1.26] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Card2 = ({ Heading, Paragraph, Paragraph2 }) => {
    return (
      <div className={` ${styles.card2} shadow-sm flex flex-col pl-20 pr-20 rounded-[30px] max-md:px-5`}>
      <div className="text-neutral-100 text-5xl font-bold leading-[49.95px] self-center whitespace-nowrap mt-20 max-md:text-4xl max-md:mt-10">
        ENGAGEMENT
      </div>
      <div className="self-stretch mt-16 mb-24 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[36%] max-md:w-full max-md:ml-0">
            <div className="text-yellow-500 text-justify text-xl w-[362px] max-w-[362px] my-auto max-md:mt-10">
              <span className=" text-pink-200">
                At the heart of our approach lies a{" "}
              </span>
              <span className="text-yellow-500">
                commitment to direct
              </span>
              <span className=" text-pink-200"> and </span>
              <span className="text-yellow-500">
                meaningful communication
              </span>
              <span className=" text-pink-200">
                {" "}
                that extends far beyond mere transactions. We proactively
                initiate conversations, ensuring responsiveness to every query,
                fostering deeper connections with our customers. This commitment
                underscores our dedication to constant improvement and
                establishes a foundation of trust and reliability. It's through
                these principles that we cultivate lasting, meaningful
                relationships with our valued patrons.
              </span>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
            <Image
              src={engagement}
              srcSet="..."
              className="aspect-[0.81] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
            />
          </div>{" "}
          <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-pink-200 text-justify text-xl w-[309px] max-w-[297px] my-auto max-md:mt-10">
              <ul>
                <li>Direct Communication Beyond Transactions</li>
                <li>Initiating Conversations and Responsiveness</li>
                <li>Deeper Connections</li>
                <li>Commitment to Improvement:</li>
                <li>Trust and Reliability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };


{/* <div className={`${styles.card} sm:py-[10vh] sm:px-[8vh] sm:mt-[6vh]`}>
<div className="grid gap-[10vw]">
  <div className="grid-rows-2 gap-[10vw]">
    <div
      className={`text-center text-5xl font-['Poppins'] font-bold leading-[48px] text-[#f6f4f5]`}
      style={PoppinsBold.style}
    >
      {Heading}
    </div>
    <div
      className={`${styles.paragraph} grid grid-cols-3 gap-4 text-[#F4D6E5] sm:mt-[5vh]`}
      style={LatoReguler.style}
    >
      {Paragraph}
    <Image
    src={engagement}
    alt="img1"
    className="w-full h-full object-cover"
    />

      <div className="text-justify text-xl font-['Lato'] text-[#f4d6e5] w-full">
        • Direct Communication Beyond Transactions
        <br />• Initiating Conversations and Responsiveness
        <br />• Deeper Connections
        <br />• Commitment to Improvement:
        <br />• Trust and Reliability
        </div>
    </div>
  </div>
</div>
</div> */}