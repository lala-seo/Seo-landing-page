import ArticleCard from "../../components/common/ArticleCard";
import TestimonialCarousel from "../../components/common/Carousel/TestimonialCarousel";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Newsletter from "../../components/common/Newsletter";
import article from "../../assets/images/photo3.png";
import article2 from "../../assets/images/photo1.png";
import article3 from "../../assets/images/photo2.png";
import article4 from "../../assets/images/article.png";
import PhotoCard from "../../components/common/PhotoCard";
import { Arrowright } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import {
  getFacebookThumbnail,
  getYouTubeThumbnail,
} from "../../utils/videoUtils";
export default function News() {
  const navigate = useNavigate();

  const newsAndVideos = [
    {
      type: "news",
      title: "REA signs deal with Barton Heyman Ltd, others.",
      link: "https://www.vanguardngr.com/2025/07/rea-signs-deals-with-8-firms-to-supply-5731mw-offgrid-electricity/",
      source: "Vanguard",
    },
    {
      type: "news",
      title:
        "REA strikes deal with NCOs to enhance security infrastructure in prisons nationwide",
      link: "https://www.thisdaylive.com/2025/07/29/rea-strikes-deal-with-ncos-to-enhance-security-infrastructure-in-prisons-nationwide/",
      source: "ThisDay",
    },
    {
      type: "news",
      title:
        "REA establishes Renewable Asset Management Company, targets N500bn funding",
      link: "https://leadership.ng/rea-establishes-renewable-asset-management-company-targets-n500bn-funding/",
      source: "Leadership",
    },
  ];

  return (
    <div>
      <div className="bg-white text-white relative lg:px-4  ">
        <Navbar status={true} />
        <div className=" lg:pt-[110px] pt-25 ">
          <div className="max-w-[1416px]  mx-auto">
            <h1 className="text-2xl text-gray-800 mb-5 font-primary px-4 lg:px-0">
              In The News
            </h1>
          </div>
          <hr className="" style={{ border: "0.5px solid #E1E1E1" }} />
        </div>
        <div className="bg-white pt-10">
          <div className="max-w-[1416px]  mx-auto mb-[64px] px-4 lg:px-0">
            <h1 className="text-[15px] font-[500] text-[#3D3D3D] mb-[40px] font-secondary">
              Read the latest news on where we've been featured across broadcast
              and trade media. 
            </h1>

            <div className="my-[40px]">
              {newsAndVideos.map((item, index) => (
                <div key={index} className="mb-[24px]">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="mb-[12px] font-[400] text-[20px] leading-[140%] text-[#678E07] font-primary tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="font-secondary font-[400] text-[14px] text-black capitalize">
                      {item.type === "news" ? item.source : "Watch Video"}
                    </p>
                  </a>
                </div>
              ))}
            </div>

            {/* <PhotoCard articles={articles} /> */}

            <button
              className="px-[20px] py-[18px] border border-[#678E07] hover:bg-[#2E2E2E] hover:cursor-pointer transition-colors rounded-[20px] bg-[#1F1F1F] font-[600] text-[14px] font-secondary flex items-center gap-[16px]"
              onClick={() => navigate("/contact")}
            >
              Press enquiries: contact us <Arrowright />
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
