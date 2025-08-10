import {
  Arrowright,
  AssetIcon,
  Customizable,
  InvestmentOpportunity,
  OngoingSupport,
  PlanningIcon,
  SalesIcon,
} from "../assets/icons";
import Navbar from "../components/common/Navbar";
import greenFigure from "../assets/images/green-field.png";
import discover from "../assets/images/discover.png";
import windTurbine from "../assets/images/wind-turbine.png";
import funding from "../assets/images/funding.png";
import marketing from "../assets/images/marketing.png";
import article from "../assets/images/article.png";
import article2 from "../assets/images/article2.png";
import article3 from "../assets/images/article3.png";
import Newsletter from "../components/common/Newsletter";
import Footer from "../components/common/Footer";
import TestimonialCarousel from "../components/common/Carousel/TestimonialCarousel";
import ArticleCard from "../components/common/ArticleCard";
import { Helmet } from "react-helmet-async";
import Seo from "../components/common/Seo";
import { SEO_CONFIG } from "../config/seoConfig";
export default function Home() {
  const featureData = [
    {
      title: "Transaction Excellence",
      description:
        "Over five decades of expertise structuring investment-grade deals across Africa's most challenging markets",
    },
    {
      title: "Climate Finance Innovation",
      description:
        "Pioneering green bonds, carbon credit monetization, and ESG-linked financial instruments",
    },
    {
      title: "Market Transformation",
      description:
        "Building the infrastructure and governance frameworks for tomorrow's sustainable capital markets",
    },
  ];

  const secureData = [
    {
      icon: PlanningIcon,
      title: "Personalized Financial Planning",
      description: "Tailored strategies to meet your individual needs.",
    },
    {
      icon: InvestmentOpportunity,
      title: "Exclusive Investment Opportunities",
      description: "Access to unique and profitable ventures.",
    },
    {
      icon: OngoingSupport,
      title: "Ongoing Support",
      description: "Regular portfolio reviews and expert guidance.",
    },
  ];

  const advancedTech = [
    {
      icon: SalesIcon,
      title: "Trading Platforms",
      description: "Globally connected systems for efficient trade execution.",
    },
    {
      icon: AssetIcon,
      title: "Asset Management Applications",
      description: "Streamlined solutions for portfolio management.",
    },
    {
      icon: Customizable,
      title: "Customizable Solutions",
      description: "Tailored to meet specific institutional needs.",
    },
  ];

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

  return (
    <div>
          <Seo {...SEO_CONFIG.HOME} />
      <div className="min-h-[80vh] bg-black text-white">
        <Navbar />
        <div className="pt-[120px] px-4 md:px-8 lg:px-0 flex flex-col-reverse lg:flex-row justify-between items-center max-w-[1116px] mx-auto pb-[80px]">
          <div className="flex flex-col items-start">
            <h1 className="font-primary text-[32px] md:text-[40px] font-[400] leading-[102%] max-w-[548px] tracking-[-0.02em]">
              Strategic Advisory Driving Africa's Sustainable Energy Future
            </h1>
            <p className="mt-[24px] font-secondary text-[15px] font-[400] text-[#E0E0E0] leading-[156%] mb-[40px] max-w-[401px]">
              Mobilising capital, structuring complex transactions, and
              accelerating the energy transition across power, renewables, and
              climate finance markets.
            </p>
            <button className="px-[20px] py-[18px] border border-[#678E07] hover:bg-[#2E2E2E] hover:cursor-pointer transition-colors rounded-[20px] bg-[#1F1F1F] font-[600] text-[14px] font-secondary flex items-center gap-[16px]">
              Schedule Strategic Consultation <Arrowright />
            </button>
          </div>
          <div className="mb-8 lg:mb-0">
            <img
              loading="lazy"
              src={greenFigure}
              className="w-full max-w-[434px] h-auto"
              alt="Sustainable energy solutions visualization"
            />
          </div>
        </div>
        <hr className="border border-[#282828] w-full" />

        <div className="bg-black text-white">
          <div className="max-w-[1416px]  mx-auto flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-[#282828]">
            {featureData.map((item, index) => (
              <div
                key={index}
                className="flex-1 p-4 lg:py-[48px] lg:px-[67px]  text-start"
              >
                <p className="font-primary font-[400] text-[20px] leading-[140%]">
                  {item.title}
                </p>
                {item.description && (
                  <p className="text-[#E0E0E0] font-secondary text-[14px] mt-[8px] leading-[148%]">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-20 px-4">
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="font-primary font-[400] text-[28px] md:text-[40px] leading-[102%] mb-[16px]  tracking-[-0.02em]">
            Discover Our Legacy and Values
          </h2>
          <p className="font-secondary text-[#3D3D3D] text-[14px] md:text-[16px] leading-[156%]">
            Founded in 2011, Barton Heyman has established itself as a leader in
            financial and advisory services, committed to integrity, client
            focus, and innovation. Our mission is to empower clients with
            sustainable financial solutions.
          </p>
        </div>

        <div className="mt-[48px] flex justify-center mb-[64px]">
          <img
            loading="lazy"
            src={discover}
            className="w-full max-w-[890px] h-auto"
            alt="discover"
          />
        </div>

        <hr className="border border-[#E1E1E1]" />

        <div className="my-[64px] max-w-[1114px] mx-auto flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <p className="font-primary text-[28px] md:text-[32px] leading-[112%]  tracking-[-0.02em]">
              Expert Investment Management Strategies Tailored to Your <br />{" "}
              Financial Goals
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-[#3D3D3D] font-secondary leading-[156%]">
              At Barton Heyman, we understand that every investor has unique
              objectives. Our investment management services are designed to
              provide customized strategies that align with your specific
              financial goals and risk tolerance. We leverage our expertise to
              optimize portfolio performance.
            </p>
            <p className="text-[#3D3D3D] font-secondary leading-[156%] mt-6">
              Benefit from our expert analysis and market insights for informed
              decisions. We manage risk effectively through diversification and
              diligent monitoring.
            </p>
          </div>
        </div>
      </div>

      <div className="py-[64px] bg-black text-white mb-[120px]">
        <div className="max-w-[1116px] mx-auto">
          <p className="font-primary text-[28px] md:text-[32px] leading-[112%] mb-[24px] px-4 lg:px-0 lg:max-w-[546px]  tracking-[-0.02em]">
            Strategic Advisory for Renewable Energy Projects in EMEA, UK, and US
          </p>
          <p className="font-secondary text-[15px] text-[#E0E0E0] leading-[156%] mb-[48px] px-4 lg:px-0  lg:max-w-[1001px]">
            Barton Heyman provides clients with seamless access to global stock
            exchanges, ensuring efficient trade execution and competitive
            pricing. We leverage advanced technology to enhance trading
            experiences, offering real-time market data and dedicated support
            from experienced brokerage professionals.
          </p>

          <div className="flex flex-col lg:flex-row gap-[20px]">
            {[
              {
                image: funding,
                label: "Funding",
                text: "Expert guidance on funding opportunities for renewable projects.",
              },
              {
                image: marketing,
                label: "Market",
                text: "In-depth knowledge of the renewable energy sector.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative w-full">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.label}
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 w-full h-full p-[24px]">
                  <p className="py-[6px] px-[12px] bg-white rounded-[8px] font-secondary font-[600] text-[15px] text-[#0C0C0C] mb-[15px] w-fit">
                    {item.label}
                  </p>
                  <p className="font-secondary text-[16px] text-white max-w-[332px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[120px] mb-[80px] text-center px-4">
            <p className="font-primary text-[28px] md:text-[40px] leading-[112%] max-w-[620px] mx-auto mb-[24px] tracking-[-0.02em]">
              Secure Your Future with Strategic Wealth Management
            </p>
            <p className="font-secondary text-[15px] text-[#E0E0E0] leading-[156%] max-w-[620px] mx-auto">
              At Barton Heyman, we understand that wealth management is more
              than just investments; it’s about securing your future. Our
              personalized approach ensures your financial strategies align with
              your unique goals and aspirations. We provide comprehensive
              solutions to help you grow and protect your assets.
            </p>
          </div>
        </div>
        <hr className="border border-[#282828]" />

        <div className="max-w-[1426px] mx-auto flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-[#282828] ">
          {secureData.map((item, index) => (
            <div
              key={index}
              className="flex-1 lg:py-[48px] lg:px-[67px] p-4  text-start"
            >
              <div className="h-[48px] w-[48px] rounded-full bg-[#3091CA] mb-[24px] flex items-center justify-center">
                {item.icon && <item.icon />}
              </div>
              <p className="font-primary font-[400] text-[20px] leading-[140%] tracking-[-0.02em]">
                {item.title}
              </p>
              {item.description && (
                <p className="text-[#E0E0E0] font-secondary text-[14px] mt-[8px] leading-[148%]">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <hr className="border border-[#282828]" />
      </div>

      <div>
        <div className="my-[64px] max-w-[1114px] mx-auto flex flex-col md:flex-row gap-12 mb-[64px] px-4">
          <div className="w-full md:w-1/2">
            <p className="font-primary text-[28px] md:text-[32px] leading-[112%] lg:max-w-[468px] tracking-[-0.02em]">
              Advanced Technology Solutions for Financial Institutions
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-[#3D3D3D] font-secondary leading-[156%]">
              Barton Heyman delivers cutting-edge technology solutions designed
              to enhance operational efficiency and improve client experiences.
              Our innovative platforms and applications are tailored to meet the
              specific needs of financial institutions, ensuring a competitive
              edge in today’s dynamic market.
            </p>
          </div>
        </div>
        <div className=" flex justify-center mb-[64px] px-4">
          <img
            loading="lazy"
            src={windTurbine}
            className="w-full max-w-[1344px] h-auto"
            alt="windTurbine"
          />
        </div>
        <hr className="border border-[#E1E1E1] w-full" />

        <div className="">
          <div className="max-w-[1416px] mx-auto flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-[#E1E1E1]">
            {advancedTech.map((item, index) => (
              <div key={index} className="flex-1 lg:p-[48px] p-4 text-start">
                <div className="h-[48px] w-[48px] rounded-full bg-[#678E07] mb-[24px] flex items-center justify-center">
                  {item.icon && <item.icon />}
                </div>
                <p className="font-primary font-[400] text-[20px] leading-[140%] text-[#0C0C0C]">
                  {item.title}
                </p>
                {item.description && (
                  <p className="text-[#3D3D3D] font-[400]  font-secondary text-[14px] mt-[8px] leading-[148%]">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <hr className="border border-[#E1E1E1] w-full" />
      </div>

      <div className="bg-[#191919] mt-[64px] lg:pt-[120px] md:pt-4 pt-5">
        <p className="text-[#E0E0E0] font-secondary font-[400] text-[15px] text-center mb-[16px] ">
          {" "}
          TESTIMONIAL
        </p>
        <p className="text-white font-primary font-[400] lg:text-[40px] text-center lg:mb-[48px] text-[28px] tracking-[-0.02em]">
          Reviews About Barton Heyman
        </p>
        <div className="lg:mb-[80px] border border-b overflow-hidden">
          <TestimonialCarousel />
        </div>
        <hr className="border border-[#282828]" />
        <div className="lg:pt-[64px] max-w-[1416px] mx-auto pb-[64px] lg:mb-[64px] px-4 lg:px-0">
          <p className="font-[400] text-[15px] font-secondary text-[#E0E0E0] mb-[12px]">
            LATEST ARTICLES
          </p>
          <p className="font-[400] text-[40px] text-white font-primary mb-[48px]  tracking-[-0.02em]">
            Latest News & Articles
          </p>
          <ArticleCard articles={articles} />
        </div>
        <hr className="border border-[#282828]" />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}
