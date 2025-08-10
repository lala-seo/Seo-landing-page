import ArticleCard from "../components/common/ArticleCard";
import TestimonialCarousel from "../components/common/Carousel/TestimonialCarousel";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Newsletter from "../components/common/Newsletter";
import article from "../assets/images/article.png";
import article2 from "../assets/images/article2.png";
import article3 from "../assets/images/article3.png";
import { Arrowright } from "../assets/icons";
import Seo from "../components/common/Seo";
import { SEO_CONFIG } from "../config/seoConfig";
export default function CareerPage() {
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

  const competencies = [
    {
      title: "Transaction Excellence",
      description: " Work on complex, high-impact deals across diverse markets",
    },
    {
      title: "Continuous Learning",
      description:
        "Develop expertise in emerging fields like climate finance and carbon markets",
    },
    {
      title: "Global Exposure",
      description:
        "Collaborate with international partners and leading institutions",
    },
    {
      title: "Purpose-Driven Work",
      description:
        "Create solutions that advance sustainable development goals",
    },
  ];
  return (
    <div>
      <Seo {...SEO_CONFIG.CAREERS} ogImage="/og-about.jpg" />

      <div className="bg-black text-white relative   ">
        <Navbar />
        <div className=" lg:pt-[156px] pt-30  px-4 md:px-8 lg:px-0 flex flex-col-reverse lg:flex-row  max-w-6xl  mx-auto pb-[80px] lg:h-[911px]  ">
          <div className="flex flex-col items-start">
            <p className="font-primary text-[32px] md:text-[40px] font-[400] leading-[102%] max-w-[548px] text-white  tracking-[-0.02em]">
              Build a Career Shaping Africa's Financial Future
            </p>
            <p className="mt-[24px] font-secondary text-[15px] font-[400] text-[#E0E0E0] leading-[156%] mb-[40px] max-w-[401px]">
              At Barton Heyman, we're looking for exceptional talent passionate
              about transaction excellence, sustainability, and financial
              innovation. Join a team that's structuring the deals transforming
            </p>
            <button className="px-[20px] py-[18px] border border-[#678E07] hover:bg-[#2E2E2E] hover:cursor-pointer transition-colors  text-white rounded-[20px] bg-[#1F1F1F] font-[600] text-[14px] font-secondary flex items-center gap-[16px]" style={{ width: "fit-content" }}>
              See Current Openings <Arrowright />
            </button>
          </div>
        </div>
        <div className="absolute lg:top-[541px] lg:left-0 lg:right-0 left-2 right-2 lg:w-full h-full bg-[url('/src/assets/images/career-banner.png')] max-h-[580px] bg-cover bg-center lg:max-w-[1116px] mx-auto "></div>
      </div>

      <div className="max-w-6xl mx-auto lg:mt-[338px] mt-[500px] p-4">
        <div className="">
          <div className="grid lg:grid-cols-3 lg:gap-16 gap-8">
            <div>
              <h2 className="text-3xl font-primary text-gray-800 lg:mb-12 mb-2  tracking-[-0.02em]">
                Why <br /> Barton Heyman
              </h2>
            </div>

            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-[16px]">
                {competencies.map((item, index) => (
                  <div key={index} className="bg-[#F9F8F8] p-6 rounded-lg ">
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
      </div>

      <div>
        <div className="max-w-6xl mx-auto lg:mt-[120px] lg:mb-[123px] my-[64px] p-4">
          <div
            className="py-[10px] px-[16px] bg-black text-white font-secondary font-[600] text-[12px] rounded-tr-[20px] rounded-br-[20px] "
            style={{ width: "fit-content" }}
          >
            Job Openings (0)
          </div>
          <p className="font-primary text-[32px] font-[400] text-black my-[24px]  tracking-[-0.02em]">No Current Openings</p>
          <p className="max-w-[433px] font-secondary font-[400] text-[15px] leading-[164%]" >If you would like to join our team, send your resume to:  <b>Careers@bartonheyman.com</b> </p>
        </div>
      </div>

      <div className="bg-[#191919] lg:pt-[120px] md:pt-4 pt-5">
        <p className="text-[#E0E0E0] font-secondary font-[400] text-[15px] text-center mb-[16px] ">
          {" "}
          TESTIMONIAL
        </p>
        <p className="text-white font-primary font-[400] lg:text-[40px] text-center lg:mb-[48px] text-[28px]">
          Reviews About Barton Heyman
        </p>
        <div className="lg:mb-[80px] border border-b overflow-hidden">
          <TestimonialCarousel />
        </div>
        <hr className="border border-[#282828]" />
        <div className="lg:pt-[64px] max-w-[1416px] mx-auto pb-[64px] lg:mb-[64px] px-4">
          <p className="font-[400] text-[15px] mt-10 font-secondary text-[#E0E0E0] mb-[12px]">
            LATEST ARTICLES
          </p>
          <p className="font-[400] text-[40px] text-white font-primary mb-[48px]">
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
