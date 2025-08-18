import React from "react";
import Navbar from "../../components/common/Navbar";
import { ArrowRight } from "lucide-react";
import Capital1 from "../../assets/images/capital1.png";
import Capital2 from "../../assets/images/capital3.png";
import Capital3 from "../../assets/images/capital2.png";
import Newsletter from "../../components/common/Newsletter";
import Footer from "../../components/common/Footer";
import Seo from "../../components/common/Seo";
import { SEO_CONFIG } from "../../config/seoConfig";
import { Arrowright } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const Capital = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] bg-black text-white">
      <Seo {...SEO_CONFIG.CAPITAL_MARKETS} ogImage="/og-about.jpg" />
      <Navbar />

      <div className="min-h-[80vh] flex items-center justify-center bg-black p-6">
        <div className="text-white space-y-6 max-w-3xl text-center flex items-center justify-center flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-primary tracking-[-0.02em]">
            Capital Markets Advisory | Green Bond Structuring & Sustainable
            Exchange Development
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-secondary">
            Barton Heyman designs next-generation capital market infrastructure,
            ESG frameworks, and green bond platforms that drive sustainable
            finance across African markets.
          </p>

          <button
            className="px-[20px] py-[18px] border border-[#678E07] hover:bg-[#2E2E2E] hover:cursor-pointer transition-colors  text-white rounded-[20px] bg-[#1F1F1F] font-[600] text-[14px] font-secondary flex items-center justify-center gap-[16px]"
            style={{ width: "fit-content" }}
            onClick={() =>
              navigate("/contact", {
                state: {
                  advisoryNeed: "Discuss Capital Markets solutions with us",
                },
              })
            }
          >
            Discuss Capital Markets solutions with us
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
            Our Capital Markets practice transforms financial infrastructure
            across frontier and emerging markets, creating the governance
            frameworks, technology platforms, and innovative instruments that
            drive sustainable investment. We combine deep regulatory knowledge
            with practical market-building experience to develop functioning,
            transparent capital markets.
          </h1>
          <div className="pb-10">
            <div className=" grid lg:grid-cols-2 gap-16 items-start py-10">
              <h2 className="text-2xl text-gray-800 mb-4 font-secondary">
                Focus Areas
              </h2>
              <div className="max-w-2xl">
                <ul className="text-[#282828] leading-relaxed font-secondary text-sm list-disc list-outside space-y-1">
                  <li>
                    <b>Market Design & Regulatory Frameworks</b> – Creating
                    enabling environments for sustainable finance
                  </li>
                  <li>
                    <b>Exchange Technology & Governance</b> – Building
                    efficient, trusted market infrastructure
                  </li>
                  <li>
                    <b>ESG, Green & Transition Bonds</b> – Developing new
                    instruments for sustainable capital formation
                  </li>
                  <li>
                    <b>Market Access & Liquidity</b> – Connecting domestic
                    markets with international investors
                  </li>
                  <li>
                    <b>Sustainable Finance Taxonomies</b> – Establishing clear
                    definitions and standards for green investments
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
                    <b className="">Regulatory & Legal Advisory</b> – Developing
                    frameworks that balance innovation with market integrity
                  </li>
                  <li>
                    <b>Green Bond Framework Development</b> – Creating compliant
                    green bond frameworks with international standards
                  </li>
                  <li>
                    <b>Exchange Platform Design</b> – Creating next-generation
                    trading, surveillance, and settlement systems
                  </li>
                  <li>
                    <b>Green/Social/Transition Bond Structuring</b> – Designing
                    compliant instruments with global recognition
                  </li>
                  <li>
                    <b>Market Participant Capacity Building</b> – Training
                    brokers, issuers, and regulators on best practices
                  </li>
                  <li>
                    <b>Cross-Border Market Integration</b> – Harmonizing systems
                    for regional capital flow optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center py-10">
            <div>
              <img
                src={Capital3}
                alt="Strategic team meeting"
                className="w-full h-[380px]  object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-primary text-gray-800 mb-6 tracking-[-0.02em]">
                Regional Exchange Technology <br /> Transformation
              </h2>
              <ul className="text-gray-600 leading-relaxed font-secondary text-sm list-disc list-outside space-y-1 pl-5">
                <li>
                  Led comprehensive technological upgrade for multi-country
                  exchange
                </li>
                <li>
                  Implemented ESG disclosure framework and specialised green
                  bond segment
                </li>
                <li>
                  Increased trading volumes by 300% within 18 months of launch
                </li>
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center py-10">
            <div>
              <h2 className="text-3xl font-primary text-gray-800 mb-6 tracking-[-0.02em]">
                National Green Bond Market <br /> Development Program
              </h2>
              <ul className="text-gray-600 leading-relaxed font-secondary text-sm list-disc list-outside space-y-1 pl-5">
                <li>
                  Designed regulatory framework for green bond issuance and
                  verification
                </li>
                <li>
                  Created capacity building program reaching 200+ market
                  participants
                </li>
                <li>
                  Facilitated inaugural green corporate bond raising $50M for
                  renewable energy
                </li>
              </ul>
            </div>
            <div>
              <img
                src={Capital2}
                alt="Strategic team meeting"
                className="w-full h-[380px]  object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center py-10">
            <div>
              <img
                src={Capital1}
                alt="Strategic team meeting"
                className="w-full h-[380px]  object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-primary text-gray-800 mb-6 tracking-[-0.02em]">
                Sovereign Wealth Fund ESG <br /> Integration
              </h2>
              <ul className="text-gray-600 leading-relaxed font-secondary text-sm list-disc list-outside space-y-1pl-5 ">
                <li>Structured ESG integration strategy across $104M AUM</li>
                <li>
                  Developed climate risk assessment methodology for portfolio
                  companies
                </li>
                <li>
                  Created specialized green infrastructure co-investment
                  platform
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Capital;
