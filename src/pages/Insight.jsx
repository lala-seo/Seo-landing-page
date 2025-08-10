import { ArrowRight, Download } from "lucide-react";
import Banner1 from "../assets/images/green-field.png";
import Navbar from "../components/common/Navbar";
import ArticleCard from "../components/common/ArticleCard";
import article from "../assets/images/article.png";
import article2 from "../assets/images/article2.png";
import article3 from "../assets/images/article3.png";
import Newsletter from "../components/common/Newsletter";
import Footer from "../components/common/Footer";
import { Arrowright } from "../assets/icons";
import Seo from "../components/common/Seo";
import { SEO_CONFIG } from "../config/seoConfig";
export default function Insights() {
  const articles = [
    {
      image: article,
      title: "The New Fintech Disruptors: How Can You Benefit?",
      description:
        "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
    },
    {
      image: article2,
      title: "The New Fintech Disruptors: How Can You Benefit?",
      description:
        "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
    },
    {
      image: article3,
      title: "The New Fintech Disruptors: How Can You Benefit?",
      description:
        "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
    },
  ];

  const articles2 = [
    {
      id: 1,
      title:
        "Institutional Capacity Building on Green Bonds and Green Finance for Capital Market Operators",
      description:
        "Olumide Lala speaks about how the transition to a green economy is essential for Nigeria’s sustainable development, and how green finance is a critical component of this transition.",
      image: article, // replace with your actual image source
    },
    {
      id: 2,
      title: "Carbon Credit Pricing: Understanding Valuation Drivers",
      description:
        "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
      image: article, // replace with your actual image source
    },
    {
      id: 3,
      title: "Technology Enablers for ESG Data Integration",
      description:
        "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
      image: article, // replace with your actual image source
    },

    {
      id: 4,
      title: "Transition Finance",
      description:
        "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
      image: article, // replace with your actual image source
    }, // ...more articles
  ];
  const articles3 = [
    {
      id: 1,
      title: "The Nigerian Green Tagging Banking Review",
      description:
        "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
      image: article, // replace with your actual image source
    },
    {
      id: 2,
      title:
        "West African Economic and Monetary Union (WAEMU) Green Bond Scoping Report",
      description:
        "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
      image: article, // replace with your actual image source
    },
    {
      id: 3,
      title: "Why Nigeria Needs to Utilise The Green Bonds Market",
      description:
        "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
      image: article, // replace with your actual image source
    },

    {
      id: 4,
      title: "Africa Green Bond Toolkit",
      description:
        "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
      image: article, // replace with your actual image source
    }, // ...more articles
  ];

  return (
    <div>
      <Seo {...SEO_CONFIG.INSIGHTS} ogImage="/og-about.jpg" />

      <Navbar />
      <div className="min-h-[80vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[#3091CA] flex items-center justify-center p-4">
          <div className="w-full max-w-md aspect-[434/448] bg-white mt-20 md:mt-0 rounded-lg flex items-center justify-center">
            <img
              src={Banner1}
              alt="Wind"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-6 md:p-20">
          <div className="text-white space-y-6 max-w-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-primary">
              Financial Insights | Climate Finance, Carbon Markets & ESG
              Investment Analysis
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-secondary">
              Access expert analysis, market reports, and thought leadership on
              sustainable finance, carbon markets, green bonds, and Africa's
              energy transition landscape.
            </p>

            <button
              className="px-[20px] py-[18px] border border-[#678E07] hover:bg-[#2E2E2E] hover:cursor-pointer transition-colors  text-white rounded-[20px] bg-[#1F1F1F] font-[600] text-[14px] font-secondary flex items-center justify-center gap-[16px]"
              style={{ width: "fit-content" }}
            >
              Sign up to Newsletter
              <Arrowright />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white pb-20 pt-8   mx-auto">
        <div className="max-w-[1416px] mx-auto px-4 lg:px-0">
          <div className="">
            <h1 className="text-3xl text-gray-800 mb-5 font-primary   tracking-[-0.02em]">
              Market Pulse - Monthly Insights on Sustainable Finance
            </h1>
          </div>
        </div>
        <hr className="px-4" style={{ border: "0.5px solid #E1E1E1" }} />
        <div className="max-w-[1416px] mx-auto">
          <p className="my-[48px] font-[400] text-[15px] font-secondary max-w-[553px] px-4 lg:px-0">
            Our monthly newsletter delivers concise analysis of emerging trends,
            recent transactions, and regulatory developments across our core
            sectors.
          </p>
          <div>
            <div className="text-blue ">
              <ArticleCard
                articles={articles}
                title="black"
                text="#0C0C0C"
                fill="#0C0C0C"
              />
            </div>
            <div className="px-4">
              <button className="border border-[#0C0C0C] h-[48px] w-full rounded-[20px] lg:mt-[64px] font-secondary font-secondary font-[600] text-[14px] ">
                Subscribe to Market Pulse
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className=" mx-auto" style={{ border: "0.5px solid #E1E1E1" }} />
      {/* <div className=" "> */}
      <div className="mt-[48px]  mb-[64px] max-w-[1345px] mx-auto px-4 lg:px-0">
        <div
          className="bg-[#678E07] px-[16px] py-[10px] rounded-tr-[20px] rounded-br-[20px] font-[600] text-[12px] font-secondary text-white"
          style={{ width: "fit-content" }}
        >
          Articles
        </div>
        <p className="font-primary font-[400] text-[32px] my-[24px]   tracking-[-0.02em]">
          Expert Analysis & Commentary
        </p>
        <p className="max-w-[433px] text-[#282828] font-[400]  text-[15px] leading-[156%]">
          In-depth examinations of critical issues shaping sustainable finance
          and energy transition in Africa and beyond.
        </p>

        <div className="my-[40px]">
          <div className="w-full">
            {/* For large screens - 2 columns */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              {articles2.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-[24px] border rounded-[8px]"
                >
                  <div className="py-[20px] pl-[16px]">
                    <p className="font-[400] text-[20px] md:text-[24px] font-primary leading-[140%] text-black text-start underline">
                      {item.title}
                    </p>
                    <p className="mt-4 mb-4 font-secondary font-[400] text-[14px] md:text-[15px] text-[#0C0C0C] leading-[148%] text-start">
                      {item.description}
                    </p>
                    <p className="flex items-center gap-2 text-black font-secondary font-[400] text-[15px]">
                      Read More <Arrowright fill="#0C0C0C" />
                    </p>
                  </div>
                  <div className="p-[10px]">
                    <img
                      src={item.image}
                      alt=""
                      className="max-w-[270px] max-h-[237px] object-cover rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* For small screens - horizontal scroll */}
            <div
              className="flex md:hidden gap-4 overflow-x-auto pt-2 pb-4 "
              style={{ scrollbarWidth: "none " }}
            >
              {articles2.map((item) => (
                <div
                  key={item.id}
                  className="max-w-[299px] flex-shrink-0  flex-col-reverse flex items-center justify-between gap-[16px] border rounded-[8px] p-[12px]"
                >
                  -
                  <div className="">
                    <p className="font-[400] text-[18px] font-primary leading-[140%] text-black text-start underline">
                      {item.title}
                    </p>
                    <p className="mt-3 mb-3 font-secondary font-[400] text-[14px] text-[#0C0C0C] leading-[148%] text-start">
                      {item.description}
                    </p>
                    <p className="flex items-center gap-2 text-black font-secondary font-[400] text-[14px]">
                      Read More <Arrowright fill="#0C0C0C" />
                    </p>
                  </div>
                  <div className="w-full h-[274px]">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-[274px] object-cover rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="border border-[#0C0C0C] h-[48px] w-full rounded-[20px] mt-[40px] font-secondary font-secondary font-[600] text-[14px]">
            View All articles
          </button>
        </div>
      </div>
      {/* </div> */}
      <hr
        className=" max-w-[1345px] mx-auto"
        style={{ border: "0.5px solid #E1E1E1" }}
      />
      <div className="mt-[48px] mb-[120px]  max-w-[1345px] mx-auto px-4 lg:px-0">
        <div
          className="bg-[#3091CA] px-[16px] py-[10px] rounded-tr-[20px] rounded-br-[20px] font-[600] text-[12px] font-secondary text-white"
          style={{ width: "fit-content" }}
        >
          White Papers
        </div>
        <p className="font-primary font-[400] text-[32px] my-[24px]   tracking-[-0.02em]">
          Comprehensive Research & Analysis
        </p>
        <p className="max-w-[433px] text-[#282828] font-[400]  text-[15px] leading-[156%]">
          Authoritative, data-driven publications exploring complex challenges
          and innovative solutions in sustainable finance.
        </p>

        <div className="my-[40px]">
          <div className="w-full">
            {/* For large screens - 2 columns */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              {articles3.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-[24px] border rounded-[8px]"
                >
                  <div className="py-[20px] pl-[16px]">
                    <p className="font-[400] text-[20px] md:text-[24px] font-primary leading-[140%] text-black text-start underline">
                      {item.title}
                    </p>
                    <p className="mt-4 mb-4 font-secondary font-[400] text-[14px] md:text-[15px] text-[#0C0C0C] leading-[148%] text-start">
                      {item.description}
                    </p>
                    <p className="flex items-center gap-2 text-black font-secondary font-[400] text-[15px]">
                      Read More <Arrowright fill="#0C0C0C" />
                    </p>
                  </div>
                  <div className="p-[10px]">
                    <img
                      src={item.image}
                      alt=""
                      className="max-w-[270px] max-h-[237px] object-cover rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* For small screens - horizontal scroll */}
            <div
              className="flex md:hidden gap-4 overflow-x-auto pt-2 pb-4"
              style={{ scrollbarWidth: "none " }}
            >
              {articles3.map((item) => (
                <div
                  key={item.id}
                  className="max-w-[299px] flex-shrink-0  flex-col-reverse flex items-center justify-between gap-[16px] border rounded-[8px] p-[12px]"
                >
                  -
                  <div className="">
                    <p className="font-[400] text-[18px] font-primary leading-[140%] text-black text-start underline">
                      {item.title}
                    </p>
                    <p className="mt-3 mb-3 font-secondary font-[400] text-[14px] text-[#0C0C0C] leading-[148%] text-start">
                      {item.description}
                    </p>
                    <p className="flex items-center gap-2 text-black font-secondary font-[400] text-[14px]">
                      Read More <Arrowright fill="#0C0C0C" />
                    </p>
                  </div>
                  <div className="w-full h-[274px]">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-[274px] object-cover rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="border border-[#0C0C0C] h-[48px] w-full rounded-[20px] mt-[40px] font-secondary font-secondary font-[600] text-[14px] flex items-center justify-center gap-2">
            <Download /> Download White Papers
          </button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
