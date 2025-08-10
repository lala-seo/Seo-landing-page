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
export default function Press() {
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
            <div className="bg-white text-white relative   ">
                <Navbar status={true} />
                <div className=" lg:pt-[110px] pt-25 ">
                    <div className="max-w-[1416px]  mx-auto">
                        <h1 className="text-2xl text-gray-800 mb-5 font-primary">Press Releases</h1>
                    </div>
                    <hr className='' style={{ border: "0.5px solid #E1E1E1", }} />
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
                        <h1 className="text-2xl text-gray-800 mb-5 font-secondary">Our Press Releases</h1>
                        <ListCard articles={articles} />

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
