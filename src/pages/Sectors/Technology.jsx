import React from "react";
import Navbar from "../../components/common/Navbar";
import { ArrowRight } from "lucide-react";
import Capital1 from "../../assets/images/capital1.png";
import Capital2 from "../../assets/images/capital3.png";
import Capital3 from "../../assets/images/capital2.png";
import Newsletter from "../../components/common/Newsletter";
import Footer from "../../components/common/Footer";
import { Link } from "react-router-dom";
import { Arrowright } from "../../assets/icons";

const Technology = () => {
  return (
    <div className="h-[100vh] bg-black text-white">
      <Navbar />

      <div className="min-h-[80vh] flex items-center justify-center bg-black p-6">
        <div className="text-white space-y-6 max-w-3xl text-center  flex items-center justify-center flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-primary tracking-[-0.02em]  ">
     Financial Technology Advisory | ESG Data Integration & Market Infrastructure Systems 
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-secondary">
  Barton Heyman implements transformative technology solutions for capital markets, climate finance tracking, and ESG data integration across Africa's financial ecosystem.

          </p>
          <button
            className="px-[20px] py-[18px] border border-[#678E07] hover:bg-[#2E2E2E] hover:cursor-pointer transition-colors  text-white rounded-[20px] bg-[#1F1F1F] font-[600] text-[14px] font-secondary flex items-center justify-center gap-[16px]"
            style={{ width: "fit-content" }}
          >
            Discuss Your Technology Project
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
           Our Technology practice bridges the gap between financial innovation and practical implementation, delivering market infrastructure systems, ESG data platforms, and digital transformation initiatives that modernize Africa's financial landscape. We specialize in solutions that enhance transparency, streamline compliance, and unlock new capital flows.

          </h1>
          <div className="pb-10">
            <div className=" grid lg:grid-cols-2 gap-16 items-start py-10">
              <h2 className="text-2xl text-gray-800 mb-4 font-secondary">
                Focus Areas
              </h2>
              <div className="max-w-2xl">
                <ul className="text-[#282828] leading-relaxed font-secondary text-sm list-disc list-outside space-y-1 ">
                  <li>
                    <b>Market Infrastructure Systems</b> – Trading, clearing, settlement, and surveillance platforms

                  </li>
                  <li>
                    <b>ESG Data Integration & Analytics</b> – Environmental, social, and governance data management

                  </li>
                  <li>
                    <b>Climate Risk Assessment Tools</b> –Quantifying and managing climate exposure

                  </li>
                  <li>
                    <b>Digital Asset Infrastructure</b> –Tokenization and blockchain applications for sustainable finance

                  </li>
                  <li>
                    <b>Regulatory Technology (RegTech)</b> –Compliance automation and reporting solutions

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
                <ul className="text-[#282828] leading-relaxed font-secondary text-sm list-disc list-outside space-y-1 ">
                  <li>
                    <b>Technology Strategy & Architecture</b> – AAligning technology investments with business objectives

                  </li>
                  <li>
                    <b>Vendor Selection & Implementation</b> –Ensuring seamless operation within existing environments

                  </li>
                  <li>
                    <b>ESG & Climate Data Solutions</b> – Designing data
                    collection, validation, and reporting frameworks
                  </li>
                  <li>
                    <b>Systems Integration & Deployment</b> – Ensuring seamless
                    operation within existing environments
                  </li>
                  <li>
                    <b>Capacity Building & Knowledge Transfer</b> –Developing sustainable in-house capabilities

                  </li>
                </ul>
              </div>
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
              <h2 className="text-3xl font-primary text-gray-800 mb-6 tracking-[-0.02em] ">
                Multi-Asset Exchange Technology Platform
              </h2>
              <p className="text-gray-600 leading-relaxed font-secondary text-sm list-disc list-outside space-y-1 pl-5 lg:pl-0">
                Creating an Innovative Trading Environment with FIX <Link className="font-bold text-black" to="Learn more here">Learn more here</Link>
               
              </p>
            </div>
          </div>
          {/* <div className="grid lg:grid-cols-2 gap-16 items-center py-10">
            <div> 
              <h2 className="text-3xl font-primary text-gray-800 mb-6 tracking-[-0.02em] ">
                National ESG Data Repository
              </h2>
              <ul className="text-gray-600 leading-relaxed font-secondary text-sm list-disc list-outside space-y-1 pl-5">
                <li>
                  Created centralised ESG data platform for listed companies
                </li>
                <li>
                  Implemented automated scoring and benchmarking capabilities
                </li>
                <li>
                  Enabled investors to screen and analyze sustainability
                  performance
                </li>
              </ul>
            </div>
            <div>
              <img
                src={Capital1}
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
              <h2 className="text-3xl font-primary text-gray-800 mb-6 tracking-[-0.02em] ">
                Climate Finance Tracking System
              </h2>
              <ul className="text-gray-600 leading-relaxed font-secondary text-sm list-disc list-outside space-y-1 pl-5">
                <li>
                  Developed blockchain-based verification system for climate
                  finance flows
                </li>
                <li>
                  Created transparent monitoring for conditional NDC commitments
                </li>
                <li>
                  Enabled real-time tracking of adaptation and mitigation
                  financing
                </li>
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center py-10 ">
            <div>
              <h2 className="text-3xl font-primary text-gray-800 mb-6 tracking-[-0.02em] ">
                Resources Center Whitepapers:
              </h2>
              <ul className="text-gray-600 leading-relaxed font-secondary text-sm list-disc list-outside space-y-1 pl-5">
                <li>Creating an Innovative Trading Environment with FIX</li>
                <li>
                  FIX Technology: Three Years on the Nigerian Capital Markets
                </li>
              </ul>
              <button className="bg-black mt-10 text-white px-6 py-3 rounded-full font-primary flex items-center gap-2 hover:bg-gray-800 transition-colors">
   Explore Technology Solutions with us

                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div>
              <img
                src={Capital1}
                alt="Strategic team meeting"
                className="w-full h-[380px]  object-cover rounded-lg"
              />
            </div>
          </div> */}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Technology;
