import React from "react";
import { useState } from "react";

// import css and font
import styles from "./faq.module.css";
import { PoppinsSemiBold, PoppinsBold, LatoReguler } from "@/fonts/font";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const data = [
    {
      header: "What are 3 types of web development?",
      desc: "Web development encompasses three main categories: front-end development, back-end development, and full-stack development. \n\nFront-end development is all about designing, building, and testing the visual elements of a web or mobile application. Front-end developers focus on creating user interfaces, ensuring they look good and function well. They work with a variety of programming languages, design tools, and testing frameworks to deliver an optimal user experience. \n\nBack-end development, on the other hand, deals with the behind-the-scenes aspects of web applications. Back-end developers design, code, and test the systems that handle user requests and interact with databases. They collaborate closely with front-end developers to ensure the seamless functioning of websites and apps. \n\nFull-stack development, a growing trend in today's world, involves the end-to-end process of developing a web application. It includes both front-end and back-end development, using diverse programming languages and frameworks to create applications efficiently and flexibly. This approach streamlines the development process, allowing developers to handle every aspect of a project from start to finish.",
    },
    {
      header: "What are the process of website development?",
      desc: "Website development involves four distinct stages: Research, Design, Development, and Testing. \n\nIn the Research phase, you gather insights by studying online content, exploring various websites, and seeking input from peers and family to shape your website's design and functionality. \n\nThe Design stage follows, where you craft the website's layout, create graphics, logos, and content, ensuring it aligns with your brand's identity. \n\nDevelopment is the next step, involving the coding and implementation of features like pages, menus, and widgets, with rigorous testing to verify proper functionality. \n\nFinally, the Testing phase ensures that the website functions flawlessly by engaging users and identifying and addressing any potential issues before making it accessible to the public.",
    },
    {
      header: "Who needs web development services?",
      desc: "Web development services are sought after by a wide array of clients. Small businesses utilize them to create a digital footprint, while larger corporations rely on web development for intricate websites that support multifaceted operations. Nonprofits often use web development to boost their cause and facilitate donations, governments for efficient public services, and entrepreneurs for personal branding. Educational institutions and healthcare organizations depend on web development for effective communication and patient resources, while e-commerce businesses leverage it for their online sales platforms. \n\nIn this diverse landscape, web development plays a pivotal role in shaping the digital presence of various entities, serving both business and societal needs. It enables them to engage with their audiences, convey essential information, and conduct online transactions, ultimately driving their goals and objectives in the digital age.",
    },
    {
      header: "What is the Importance of Web Development?",
      desc: "Web development is crucial for modern businesses, enabling them to establish a strong online presence that's essential for branding and marketing. A well-designed website offers a consistent user experience, setting tech-savvy businesses apart from competitors. Neglecting web development can deter potential customers, as a poorly designed website can undermine genuine interest in products or services. \n\nBeyond aesthetics, web development fosters customer relationships by creating user-friendly, feature-rich websites that inspire trust and loyalty. It also drives lead generation and sales growth by improving online discoverability, critical for reaching new markets. Effective web development enhances website traffic, engagement, and conversion rates, building brand loyalty and providing insights into the business that competitors may lack. In today's digital landscape, web development is not just a technicality but a strategic asset that businesses cannot afford to ignore.",
    },
    {
      header: "What is social media management services?",
      desc: "Social media management is the continuous endeavor of formulating and scheduling content with the aim of expanding and fostering an audience presence on various social media platforms. This comprehensive endeavor encompasses elements such as crafting a strategy for social media content, maintaining a positive online reputation, overseeing community engagement and programming, executing strategies for paid social media campaigns, and managing and developing team members. \n\nThe advantages of social media management extend well beyond simply enhancing brand recognition and staying abreast of the latest online trends. It serves as a pivotal means to establish deeper, more personalized connections with target audiences on a larger scale. The relationships cultivated on social media have the potential to foster trust in a brand, evoke a sense of affinity, and most importantly, foster customer loyalty.",
    },
    {
      header: "What are the benefits of managing social media?",
      desc: "Social media offers valuable insights into customer preferences and sentiments, with data from platforms like Twitter, Facebook, and Instagram. By actively engaging and listening on social media, you can gather customer information to inform business decisions, with tools like Hootsuite Insights providing real-time data and brand-related conversation tracking. A strong social media presence increases brand awareness and fosters loyalty. \n\nCost-effective targeted ads and real-time performance monitoring are additional benefits, aiding lead generation, sales, and customer retention. Social media is a platform for providing rich customer experiences, boosting website traffic, improving search engine ranking, and staying ahead of competitors. It also supports content sharing, geotargeting, and nurturing customer relationships through ongoing dialogue and engagement.",
    },
    {
      header: "Why do I need a social media management?",
      desc: "A wide range of businesses can benefit from social media managers, who excel in online presence management. This includes small and medium-sized enterprises, startups, e-commerce ventures, creative agencies, influencers, non-profit organizations, and businesses in the hospitality and tourism industry. These professionals are instrumental in building brand recognition, driving customer engagement, generating leads, and boosting sales for businesses of all sizes. \n\nSocial media managers are especially valuable for startups looking to establish their brand, online retailers aiming to enhance product visibility and attract customers, and creative agencies incorporating social media into marketing campaigns. They also strengthen the online presence of influencers, assist non-profit organizations in raising awareness and funds, and drive customer engagement and marketing efforts in the hospitality and tourism sector. While these are just a few examples, the decision to hire a social media manager depends on the unique needs and goals of each business, determining the extent to which it proves a valuable investment.",
    },
  ];

  const toggleDescription = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="FAQ" className=" lg:mx-12">
      <div className="text-center">
        <div className={`${styles.main_header}`} style={PoppinsBold.style}>
          Have Any Questions?
        </div>
        <div
          className={`${styles.main_paragraph} lg:w-[50vw] md:w-[70vw] sm:w-[70vw] w-[75vw] mx-auto lg:mb-[10vh] md:mb-[7vh] sm:mb-[5vh] mb-[4vh] md:mt-0 sm:mt-[2vh] mt-[1vh]`}
        >
          Are you seeking assistance with a specific project or do you have
          inquiries about our software house agency's capabilities and services?
        </div>
      </div>
      <div className="container justify-center items-center lg:max-w-[1300px]">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              activeIndex === index ? styles.expanded : ""
            }`}
          >
            <div
              onClick={() => toggleDescription(index)}
              style={{
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className={`${styles.header_tx} ml-[4vw] sm:w-full w-[80%]`}
                style={PoppinsSemiBold.style}
              >
                {item.header}
              </div>
              <div className={`${styles.active_index} mr-[4vw]`}>
                {activeIndex === index ? "+" : "-"}
              </div>
            </div>
            <div
              className={`${styles.desc} md:mx-[4.7vw] sm:mx-[5vw] mx-[5.5vw]`}
            >
              {activeIndex === index && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.desc.replace(/\n/g, "<br>"),
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
