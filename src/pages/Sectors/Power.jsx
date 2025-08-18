import React from "react";
import Navbar from "../../components/common/Navbar";
import { ArrowRight } from "lucide-react";
import power from "../../assets/images/power.png";
import Newsletter from "../../components/common/Newsletter";
import Footer from "../../components/common/Footer";
import Seo from "../../components/common/Seo";
import { SEO_CONFIG } from "../../config/seoConfig";
import { Link, useNavigate } from "react-router-dom";
import { Arrowright } from "../../assets/icons";

const Power = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] bg-black text-white">
      <Seo {...SEO_CONFIG.POWER_RENEWABLES} ogImage="/og-about.jpg" />
      <Navbar />

      <div className="min-h-[80vh] flex items-center justify-center bg-black p-6">
        <div className="text-white space-y-6 max-w-3xl text-center flex items-center justify-center  flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-primary tracking-[-0.02em]">
            Power & Renewables Advisory | Green Bond Structuring & Carbon
            Markets Expertise
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-secondary">
            Barton Heyman's market-leading power & renewables practice
            structures bankable transactions in renewable energy, carbon
            credits, and climate finance across Africa's emerging markets.
          </p>

          <button
            className="px-[20px] py-[18px] border border-[#678E07] hover:bg-[#2E2E2E] hover:cursor-pointer transition-colors  text-white rounded-[20px] bg-[#1F1F1F] font-[600] text-[14px] font-secondary flex items-center justify-center gap-[16px]"
            style={{ width: "fit-content" }}
            onClick={() =>
              navigate("/contact", {
                state: {
                  advisoryNeed: "Discuss Power and Renewable Energy with Us",
                },
              })
            }
          >
            Discuss Power and Renewable Energy with Us
            <Arrowright />
          </button>
        </div>
      </div>

      <div className="bg-white pb-20 pt-8 px-8">
        <div className="max-w-[1024px] mx-auto">
          <h1 className="text-3xl text-gray-800 mb-5 font-primary tracking-[-0.02em]">
            Sector Overview
          </h1>
        </div>
        <hr className="" style={{ border: "0.5px solid #E1E1E1" }} />

        <div className="max-w-[1024px] mx-auto">
          <h1 className="text-2xl text-gray-800 mb-5 font-secondary py-10 lg:font-[400] lg:text-[20px] leading-[140%] ">
            With unprecedented expertise in green bond issuance, carbon credit
            monetization, and blended finance solutions, we unlock capital for
            projects that might otherwise remain unrealized.
          </h1>
          <div className="pb-10">
            <div className=" grid lg:grid-cols-2 gap-16 items-start py-10">
              <h2 className="text-2xl text-gray-800 mb-4 font-secondary">
                Focus Areas
              </h2>
              <div className="max-w-2xl">
                <ul className="text-[#282828] leading-relaxed font-secondary text-sm list-disc list-outside  space-y-1">
                  <li>
                    <b>Renewable Energy Project Finance</b> – Structuring
                    bankable deals for solar, wind, hydro, and biomass projects
                  </li>
                  <li>
                    <b>Green & Sustainability Bond Issuance</b> – Designing
                    frameworks, securing verification, and placing instruments
                  </li>
                  <li>
                    <b>Carbon Market Mechanisms</b> – Monetizing carbon credits
                    and structuring offset programs for maximum value
                  </li>
                  <li>
                    <b>Climate Finance Mobilisation</b> – Accessing concessional
                    funding and blending with commercial capital
                  </li>
                  <li>
                    <b>Energy Transition Pathways</b> – Creating financially
                    viable strategies for fossil fuel displacement
                  </li>
                </ul>
              </div>
            </div>

            <hr className="" style={{ border: "0.5px solid #E1E1E1" }} />

            <div className=" grid lg:grid-cols-2 gap-16 items-start py-10">
              <h2 className="text-2xl text-gray-800 mb-4 font-secondary">
                Service Offerings
              </h2>
              <div className="max-w-2xl">
                <ul className="text-[#282828] leading-relaxed font-secondary text-sm list-disc list-outside space-y-1">
                  <li>
                    <b>Transaction Structuring & Advisory</b> – Comprehensive
                    deal structuring from concept to financial close.
                  </li>
                  <li>
                    <b>Green Bond Framework Development</b> – Creating compliant
                    green bond frameworks with international standards
                  </li>
                  <li>
                    <b>Carbon Credit Origination & Trading</b> – Maximizing
                    returns from voluntary and compliance carbon markets
                  </li>
                  <li>
                    <b>Due Diligence & Risk Mitigation</b> – Identifying and
                    addressing commercial, technical, and ESG risks
                  </li>
                  <li>
                    <b>Off-taker & Regulatory Engagement</b> – Negotiating PPA
                    structures and regulatory compliance strategies
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center py-10">
            <div>
              <img
                src={power}
                alt="Strategic team meeting"
                className="w-full h-[380px]  object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-primary text-gray-800 mb-6 tracking-[-0.02em]">
                Nigeria Green Bonds Market Development Programme
              </h2>
              <p className="text-gray-600 leading-relaxed font-secondary text-sm list-disc list-outside space-y-1 pl-5">
                Both private and sovereign issuances. Advised the Federal
                Government, Access Bank, and North South Power on a cumulative
                $150M green bond issuance green bonds issuance. Our work helped
                Nigeria achieve a world first, as the first sovereign to be
                certified against the Climate Bonds Standards.{" "}
                <Link
                  className="font-bold underline text-black"
                  to="https://www.climatebonds.net/news-events/press-room/press-releases/nigeria-first-nation-issue-climate-bonds-certified-sovereign-green-bond"
                >
                  Learn More Here
                </Link>
              </p>

              <button
                className="bg-black mt-10 text-white px-6 py-3 rounded-full font-primary flex items-center gap-2 hover:bg-gray-800 transition-colors"
                onClick={() =>
                  navigate("/contact", {
                    state: {
                      advisoryNeed: "Discuss Your Renewable Energy Project",
                    },
                  })
                }
              >
                Discuss Your Renewable Energy Project
                <Arrowright />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Power;
