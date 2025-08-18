import ArticleCard from "../../components/common/ArticleCard";
import TestimonialCarousel from "../../components/common/Carousel/TestimonialCarousel";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Newsletter from "../../components/common/Newsletter";
import article from "../../assets/images/article.png";
import article2 from "../../assets/images/article2.png";
import article3 from "../../assets/images/article3.png";
import { Arrowright } from "../../assets/icons";
import ListCard from "../../components/common/ListCard";
import FilterPanel from "../../components/common/FilterPanel";
import SearchFilterComponent from "../../components/common/FilterPanel";
import { getFacebookThumbnail, getYouTubeThumbnail } from "../../utils/videoUtils";
export default function Videos() {
  // const articles = [
  //   {
  //     image: article,
  //     title: "The New Fintech Disruptors: How Can You Benefit?",
  //     description:
  //       "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
  //   },
  //   {
  //     image: article2,
  //     title: "The New Fintech Disruptors: How Can You Benefit?",
  //     description:
  //       "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
  //   },
  //   {
  //     image: article3,
  //     title: "The New Fintech Disruptors: How Can You Benefit?",
  //     description:
  //       "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
  //   },
  //   {
  //     image: article,
  //     title: "The New Fintech Disruptors: How Can You Benefit?",
  //     description:
  //       "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
  //   },
  //   {
  //     image: article2,
  //     title: "The New Fintech Disruptors: How Can You Benefit?",
  //     description:
  //       "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
  //   },
  //   {
  //     image: article3,
  //     title: "The New Fintech Disruptors: How Can You Benefit?",
  //     description:
  //       "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
  //   },
  //   {
  //     image: article,
  //     title: "The New Fintech Disruptors: How Can You Benefit?",
  //     description:
  //       "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
  //   },
  //   {
  //     image: article2,
  //     title: "The New Fintech Disruptors: How Can You Benefit?",
  //     description:
  //       "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
  //   },
  //   {
  //     image: article3,
  //     title: "The New Fintech Disruptors: How Can You Benefit?",
  //     description:
  //       "Learning about the new Fintech Disruptors this 2022? Find out all the ways in which you can benefit from them!",
  //   },
  // ];



// Add thumbnails to video items
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

    // Videos
    {
      type: "video",
      title:
        "Olumide Lala, speaking about green bonds and the Nigerian economy",
      link: "https://web.facebook.com/share/v/155YM4uAyL/",
    },
    {
      type: "video",
      title:
        "Olumide Lala about Green Bonds in Africa in this interview with TopTV Mauritius",
      link: "https://m.facebook.com/129347690442933/videos/559965308824428/?__so__=permalink",
    },
    {
      type: "video",
      title:
        "Olumide Lala speaks with CNBC Africa on developing sustainable financial ecosystem in Nigeria",
      link: "https://www.youtube.com/watch?v=PjKB50v47-k",
    },
    {
      type: "video",
      title:
        "Green Growth Knowledge Partnership Webinar: Developing a Sustainable Finance Roadmap",
      link: "https://www.youtube.com/watch?v=2tdKqauqYAg",
    },
    {
      type: "video",
      title: "Finance seminar organised by the British Nigeria Law Forum",
      link: "https://www.youtube.com/watch?v=9XlF8s5NqMM&pp=ygUMT2x1bWlkZSBsYWxh",
    },
    {
      type: "video",
      title: "Demystifying Green Bonds for Nigerian Market and Economy",
      link: "https://www.youtube.com/watch?v=71sPXwzu95M&pp=ygUMT2x1bWlkZSBsYWxh",
    },
    {
      type: "video",
      title:
        "Mobilising Investment for NDC Implementation: A Roadmap to Green Bonds Readiness Webinar",
      link: "https://www.youtube.com/watch?v=LkQs1QDdnz4&pp=ygUMT2x1bWlkZSBsYWxh0gcJCccJAYcqIYzv",
    },
    {
      type: "video",
      title:
        "Just Energy Transition in Africa | Sustainability Professionals Institute of Nigeria",
      link: "https://www.youtube.com/watch?v=edZuJ9dZI14&pp=ygUMT2x1bWlkZSBsYWxh",
    },
    {
      type: "video",
      title:
        "Panel Session 3 at #EIF2024: Tackling Youth Unemployment Through the Green Economy",
      link: "https://youtu.be/jzTd0wB4FY0",
    },
    {
      type: "video",
      title: "Powering Decentralised Growth - Dr. Uzo Egbuche (PhD)",
      link: "https://www.youtube.com/watch?v=JlrtygBrq3Q&pp=ygUORHIgVXpvIEVnYnVjaGU%3D",
    },
    {
      type: "video",
      title:
        "Dr. Uzo Egbuche (PhD) speaks on a panel: Which commitment is desirable?",
      link: "https://www.youtube.com/watch?v=VOBMkZJ9bEo",
    },
  ];

// Add this to your video processing
const videoItems = newsAndVideos.filter(item => item.type === "video").map(video => {
  let thumbnail = null;
  
  if (video.link.includes("youtube.com") || video.link.includes("youtu.be")) {
    thumbnail = getYouTubeThumbnail(video.link);
  } else if (video.link.includes("facebook.com")) {
    thumbnail = getFacebookThumbnail(video.link);
  }

  return {
    image: thumbnail || '', // Will trigger fallback if empty
    title: video.title,
    description: video.source || (video.link.includes("youtube") ? "YouTube" : "Facebook"),
    link: video.link,
    type: "video"
  };
});

// For news items
const newsItems = newsAndVideos.filter(item => item.type === "news").map(news => ({
  image: news.image || '', // Add image if available
  title: news.title,
  description: news.source,
  link: news.link,
  type: "news"
}));
  const sampleData = {
    themes: ["Technology", "Healthcare", "Education", "Environment"],
    regions: ["North America", "Europe", "Asia", "South America"],
    sectors: ["Public", "Private", "Non-profit", "Government"],
    years: ["2024", "2023", "2022", "2021", "2020"],
  };

  const handleSearch = (filters) => {
    console.log("Search filters:", filters);
  };

  const handleFilter = (filters) => {
    console.log("Apply filters:", filters);
  };

  const handleReset = () => {
    console.log("Reset filters");
  };

  return (
    <div>
      <div className="bg-white text-white relative   lg:px-4  ">
        <Navbar status={true} />
        <div className=" lg:pt-[110px] pt-25 ">
          <div className="max-w-[1416px]  mx-auto">
            <h1 className="text-2xl text-gray-800 mb-5 font-primary px-4 lg:px-0">Videos</h1>
          </div>
          <hr className="" style={{ border: "0.5px solid #E1E1E1" }} />
        </div>
        <div className="">
          <SearchFilterComponent
            themes={sampleData.themes}
            regions={sampleData.regions}
            sectors={sampleData.sectors}
            years={sampleData.years}
            onSearch={handleSearch}
            onFilter={handleFilter}
            onReset={handleReset}
            placeholder="Search by keyword"
          />
        </div>
        <div className="bg-white pt-10">
          <div className="max-w-[1416px]  mx-auto lg:mb-[64px] px-4 lg:px-0">
            <h1 className="text-2xl text-gray-800 mb-5 font-primary">
              Our Press Releases
            </h1>
            <ListCard articles={videoItems} />

            <button
              onClick={handleSearch}
              className="py-3 mt-20 w-full text-black border border-gray-700 rounded-full transition-colors font-medium whitespace-nowrap"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
