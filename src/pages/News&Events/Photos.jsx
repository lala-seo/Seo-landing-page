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
export default function Photos() {
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
 
    const sampleData = {
        themes: ['Technology', 'Healthcare', 'Education', 'Environment'],
        regions: ['North America', 'Europe', 'Asia', 'South America'],
        sectors: ['Public', 'Private', 'Non-profit', 'Government'],
        years: ['2024', '2023', '2022', '2021', '2020']
    };
    
    const handleSearch = (filters) => {
        console.log('Search filters:', filters);
    };

    const handleFilter = (filters) => {
        console.log('Apply filters:', filters);
    };

    const handleReset = () => {
        console.log('Reset filters');
    };
      
    return (
        <div>
            <div className="bg-white text-white relative   lg:px-4  ">
                <Navbar status={true} />
                <div className=" lg:pt-[110px] pt-25 ">
                    <div className="max-w-[1416px]  mx-auto">
                        <h1 className="text-2xl text-gray-800 mb-5 font-primary">Photos</h1>
                    </div>
                    <hr className='' style={{ border: "0.5px solid #E1E1E1", }} />
                </div>
                <div className="bg-white pt-10">
                    <div className="max-w-[1416px]  mx-auto lg:mb-[64px] px-4 lg:px-0">
               <h1 className="text-[15px] font-[500] text-[#3D3D3D] mb-[40px] font-secondary">Browse our photo gallery to see highlights from our events and the impact of our work in sustainable finance. </h1>
                        <PhotoCard articles={articles} />

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
