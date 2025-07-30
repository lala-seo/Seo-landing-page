import React from 'react';
import Navbar from '../components/common/Navbar';
import { ArrowRight } from 'lucide-react';
import Banner1 from "../assets/images/about1.jpg";
import Banner2 from "../assets/images/about2.jpg";
import Newsletter from '../components/common/Newsletter';
import Footer from '../components/common/Footer';


const AboutUsPage = () => {

    const competencies = [
        {
            title: "Transaction Structuring",
            description: "Architecting Complex Deals That Align Stakeholder Interests Across Diverse Jurisdictions"
        },
        {
            title: "Climate Finance Innovation",
            description: "Pioneering Green Bonds, Sustainability-Linked Loans, And Carbon Market Mechanisms"
        },
        {
            title: "Value Maximisation",
            description: "Optimising Asset Performance Through Strategic Financial Engineering And ESG Integration"
        },
        {
            title: "Market Development",
            description: "Building Governance Frameworks And Technology Infrastructure For Efficient Capital Markets"
        }
    ];

    return (
        <div className="h-[100vh] bg-black text-white">
            <Navbar />
            <div className="min-h-screen flex flex-col md:flex-row">

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
                            With Over 50 Years Of Combined Expertise, Barton Heyman's Team Structures Transformative Deals In Green Finance, Carbon Markets, And Energy Transition Across Africa And Beyond.
                        </p>

                        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors font-secondary">
                            Explore Open Opportunities
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white pb-20 pt-8 px-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl text-gray-800 mb-5 font-primary">Welcome To Barton Heyman</h1>
                </div>
                <hr className='' style={{ border: "0.5px solid #E1E1E1", }} />

                <div className="max-w-5xl mx-auto">
                    <div className="py-20">
                        <div className=" grid lg:grid-cols-2 gap-16 items-start mb-18">
                            <h2 className="text-2xl text-gray-800 mb-4 font-primary">Our Heritage</h2>
                            <div className="max-w-2xl">
                                <p className="text-gray-600 leading-relaxed font-secondary text-sm">
                                    Founded In 2011, Barton Heyman Has Evolved Into Africa's Premier Transaction Structuring And Advisory Firm, With A Distinguished Legacy Of Closing Landmark Deals Across The Continent's Most Dynamic Sectors. Our Team Brings Unparalleled Expertise In Mobilising Capital For Transformative Projects That Advance Sustainable Development While Delivering Exceptional Returns.
                                </p>
                            </div>
                        </div>

                        <div className=" grid lg:grid-cols-2 gap-16 items-start ">
                            <h2 className="text-2xl text-gray-800 mb-4 font-primary">Our Purpose</h2>
                            <div className="max-w-2xl">
                                <p className="text-gray-600 leading-relaxed font-secondary text-sm">
                                    We Exist To Bridge Critical Financing Gaps In Africa's Infrastructure Landscape By Structuring Bankable Transactions, Developing Innovative Financial Instruments, And Connecting Global Investors With High-Impact Opportunities. Our Deep Understanding Of Local Markets, Combined With International Best Practices, Enables Us To Unlock Value Where Others See Only Challenges.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <blockquote className="text-xl text-gray-700 font-primary max-w-4xl mx-auto">
                            "Financial Institutions Must Be Able To Deliver An Easy To Navigate, A Seamless Digital Platform That Goes Far Beyond A Miniaturized Online Banking Offering." – Jim Marous
                        </blockquote>
                    </div>
                </div>
                <hr className='' style={{ border: "0.5px solid #E1E1E1", }} />

                <div className="max-w-5xl mx-auto">
                    <div className="py-20">
                        <div className="grid lg:grid-cols-3 gap-16">
                            <div>
                                <h2 className="text-3xl font-primary text-gray-800 mb-12">Our Core Competencies</h2>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {competencies.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#F9F8F8] p-6 rounded-lg "
                                        >
                                            <h3 className="text-lg font-primary text-gray-800 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 text-sm font-secondary">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center py-10">
                        <div>
                            <h2 className="text-3xl font-primary text-gray-800 mb-6">Strategic Approach</h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 font-secondary">
                                At Barton Heyman, We Recognise That Sustainable Finance Requires More Than Traditional Advisory Models. Our Methodology Integrates Deep Sector Knowledge, Financial Innovation, And A Commitment To Long-Term Partnerships. We Don't Simply Advise—We Co-Create Solutions Alongside Our Clients, Regulators, And Investment Partners.
                            </p>

                            <button className="bg-black text-white px-6 py-3 rounded-full font-primary flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                Request Strategy Session
                                <ArrowRight className="w-4 h-4" />
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
            <Newsletter />
            <Footer />
        </div>
    );
};

export default AboutUsPage;
