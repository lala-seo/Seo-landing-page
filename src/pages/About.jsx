import React from "react";
import Navbar from "../components/common/Navbar";
import { ArrowRight } from "lucide-react";
import Banner1 from "../assets/images/about1.jpg";
import olumide from "../assets/images/olumide.jpeg";
import anthony from "../assets/images/anthony.png";
import Banner2 from "../assets/images/strategy-approach.png";
import Newsletter from "../components/common/Newsletter";
import Footer from "../components/common/Footer";
import { Arrowright, LinkedinIcon, XIcon } from "../assets/icons";
import Seo from "../components/common/Seo";
import { SEO_CONFIG } from "../config/seoConfig";

const AboutUsPage = () => {
  const competencies = [
    {
      title: "Transaction Structuring",
      description:
        "Architecting Complex Deals That Align Stakeholder Interests Across Diverse Jurisdictions",
    },
    {
      title: "Climate Finance Innovation",
      description:
        "Pioneering Green Bonds, Sustainability-Linked Loans, And Carbon Market Mechanisms",
    },
    {
      title: "Value Maximisation",
      description:
        "Optimising Asset Performance Through Strategic Financial Engineering And ESG Integration",
    },
    {
      title: "Market Development",
      description:
        "Building Governance Frameworks And Technology Infrastructure For Efficient Capital Markets",
    },
  ];
  
  const teamMembers = [
    {
      name: "Olumide Lala",
      role: "Managing Partner",
      description:
        "With over 30 years of executive experience, Olumide specializes in ESG advisory, climate finance, and the development of funding models for Micro, Small, and Medium Enterprises (MSMEs). His extensive background includes regulatory alignment strategies, financial product innovation, and the structuring of pre-seed funds for financial institutions, central banks, and Development Finance Institutions (DFIs) across Europe and Africa.",
      image: olumide,
    },
    {
      name: "Anthony Feyitimi (FCA)",
      role: "Senior Partner",

      description:
        "A strategic finance executive with over 15 years of proven success in rapid market entry, transformation leadership, and cross-border operations across Africa and the Middle East. He has successfully led multi-million dollar capital raising initiatives across various industries (maritime, aviation, logistics and financial technology) and established profitable operations in more than four countries, driving rapid revenue growth and operational efficiency.",
      image: anthony,
    },

    {
      name: "Uzoamaka Egbuche (PhD)",
      role: "",

      description:
        "Brings over 25 years of experience in Sustainable Finance and Sustainability Consulting. Her expertise lies in advising public and private sectors, financial institutions, and investors on sustainable finance, ESG risks, Sustainable Development Goals (SDGs), and carbon finance mechanisms. Uzoamaka has worked with local and international corporates, such as the World Bank, Heinrich Boell Foundation (HBS), the African Development Bank, the International Union for the Conservation of Nature, the Federal Ministry of Environment, the National Environmental Standards and Regulations Enforcement Agency (NESREA) and several private sectors clients and volunteers as the lead facilitator; Sustainability Policy Commission for the Nigerian Economic Summit Group. ",
      image: "",
    },
  ];

  return (
    <div className="h-[100vh] bg-black text-white">
      <Seo {...SEO_CONFIG.ABOUT} ogImage="/og-about.jpg" />
      <Navbar />
      <div className="min-h-[80vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[#678E07] flex items-center justify-center p-4">
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
              Africa's Leading Sustainable Finance Advisory Firm
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-secondary">
              With over 50 years of combined expertise of our partners, Barton
              Heyman's team structures transformative deals in green finance,
              carbon markets, and energy transition across Africa and beyond
            </p>

            <button className="px-[20px] py-[18px] border border-[#678E07] hover:bg-[#2E2E2E] hover:cursor-pointer transition-colors rounded-[20px] bg-[#1F1F1F] font-[600] text-[14px] font-secondary flex items-center gap-[16px] ">
              Request Strategy Session
              <Arrowright />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white pb-20 pt-8 px-8">
        <div className="max-w-[1115px] mx-auto">
          <h1 className="text-3xl text-gray-800 mb-5 font-primary   tracking-[-0.02em]">
            Welcome To Barton Heyman
          </h1>
        </div>
        <hr className="" style={{ border: "0.5px solid #E1E1E1" }} />

        <div className="max-w-[1115px] mx-auto">
          <div className="py-20">
            <div className=" grid lg:grid-cols-2 gap-16 items-start mb-18">
              <h2 className="text-2xl text-gray-800 mb-4 font-secondary">
                Our Heritage
              </h2>
              <div className="max-w-2xl">
                <p className="text-gray-600 leading-relaxed font-secondary text-sm">
                  Founded in 2011, Barton Heyman has evolved into one of
                  Africa's leading transaction structuring and advisory firms,
                  with a distinguished legacy of closing landmark deals across
                  the continent's most dynamic sectors. Our team brings
                  unparalleled expertise in mobilising capital for
                  transformative projects that advance sustainable development
                  while delivering exceptional returns.
                </p>
              </div>
            </div>

            <div className=" grid lg:grid-cols-2 gap-16 items-start ">
              <h2 className="text-2xl text-gray-800 mb-4 font-secondary">
                Our Purpose
              </h2>
              <div className="max-w-2xl">
                <p className="text-gray-600 leading-relaxed font-secondary text-sm">
                  We exist to bridge critical financing gaps in Africa's
                  infrastructure landscape by structuring bankable transactions,
                  developing innovative financial instruments, and connecting
                  global investors with high-impact opportunities. Our deep
                  understanding of local markets, combined with international
                  best practices, enables us to unlock value where others see
                  only challenges.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="text-center mb-10">
            <blockquote className="text-[24px] font-[400] text-[#0C0C0C] font-primary max-w-[1001px] mx-auto ">
              "Financial Institutions Must Be Able To Deliver An Easy To
              Navigate, A Seamless Digital Platform That Goes Far Beyond A
              Miniaturized Online Banking Offering." – Jim Marous
            </blockquote>
          </div> */}
        </div>
        <hr className="" style={{ border: "0.5px solid #E1E1E1" }} />

        <div className="max-w-[1115px] mx-auto">
          <div className="py-20">
            <div className="grid lg:grid-cols-3 gap-16">
              <div>
                <h2 className="text-3xl font-primary text-gray-800 mb-12   tracking-[-0.02em]">
                  Our Core Competencies
                </h2>
              </div>

              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-[16px]">
                  {competencies.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#F9F8F8] p-6 rounded-lg  lg:pr-[86px]"
                    >
                      <h3 className="text-lg font-primary text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm font-secondary">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center py-10">
            <div>
              <h2 className="text-3xl font-primary text-gray-800 mb-6   tracking-[-0.02em]">
                Strategic Approach
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 font-secondary">
                At Barton Heyman, we recognise that sustainable finance requires
                more than traditional advisory models. Our methodology
                integrates deep sector knowledge, financial innovation, and a
                commitment to long-term partnerships. We don't simply advise, we
                co-create solutions alongside our clients, regulators, and
                investment partners.
              </p>

              <button className="px-[20px] py-[18px] border border-[#678E07] hover:bg-[#2E2E2E] hover:cursor-pointer transition-colors rounded-[20px] bg-[#1F1F1F] font-[600] text-[14px] font-secondary flex items-center gap-[16px]">
                Request Strategy Session
                <Arrowright />
              </button>
            </div>

            <div>
              <img
                src={Banner2}
                alt="Strategic team meeting"
                className="w-full h-[380px]  object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="" style={{ border: "0.5px solid #E1E1E1" }} />
      <div className="flex flex-col lg:flex-row lg:items-start justify-start lg:gap-[190px] gap-6 mx-4 lg:mx-[48px] my-[48px]">
        {/* Section title */}
        <div
          className="bg-[#3091CA] px-4 py-2 rounded-tr-[20px] rounded-br-[20px] font-[600] text-[12px] font-secondary"
          style={{ width: "fit-content" }}
        >
          Meet the Team
        </div>

        {/* Team members */}
        <div className="flex-1">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start justify-between w-full max-w-full md:max-w-[1003px] mb-6 border-b border-[#E1E1E1] pb-6"
            >
              {/* Text section */}
              <div className="w-full md:max-w-[555px]">
                <h1 className="font-[400] text-[20px] md:text-[24px] text-[#0C0C0C] font-primary   tracking-[-0.02em]">
                  {member.name}
                </h1>
                <h2 className="text-[#3D3D3D] font-[400] text-[14px] md:text-[15px] font-secondary">
                  {member.role}
                </h2>
                <p className="text-[#3D3D3D] font-[400] text-[14px] md:text-[15px] font-secondary mt-4 md:mt-10">
                  {member.description}
                </p>
                <div className="mt-[41px] flex items-start gap-[16px]">
                  <button className="border-none ">
                    <LinkedinIcon />
                  </button>
                  <button className="border-none ">
                    <XIcon />
                  </button>
                </div>
              </div>

              {/* Image section */}
              <figure className="mt-4 md:mt-0">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full max-w-[320px] h-auto md:w-[320px] md:h-[320px] object-cover rounded-lg"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
