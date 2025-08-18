// TestimonialCarousel.jsx
import React from "react";
import Slider from "react-slick";
import tony from "../../../assets/images/tony.png";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { ChevronLeft, ChevronRight, StarIcon } from "../../../assets/icons";

const testimonials = [
  {
    title: "Simply The Best",
    quote:
      "Anytime I reach out to Barton Heyman’s team with a question, I'll get an email back within 15 minutes max, letting me know they're on it. That kind of personal service is rare in any industry.",
    name: "John Doe",
    role: "Chairperson",
    // image: tony,
  },
  {
    title: "Simply The Best",
    quote:
      "Anytime I reach out to Barton Heyman’s team with a question, I'll get an email back within 15 minutes max, letting me know they're on it. That kind of personal service is rare in any industry.",
    name: "John Doe",

    role: "Chairperson",
    // image: tony,
  },
  {
    title: "Simply The Best",
    quote:
      "Anytime I reach out to Barton Heyman’s team with a question, I'll get an email back within 15 minutes max, letting me know they're on it. That kind of personal service is rare in any industry.",
    name: "John Doe",

    role: "Chairperson",
    // image: tony,
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-24px] sm:left-[-40px] md:left-[-60px] top-1/2 transform -translate-y-1/2 z-10 text-white p-3  sm:hidden md:hidden lg:block"
  >
    <ChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-24px] sm:right-[-40px] md:right-[-60px] top-1/2 transform -translate-y-1/2 z-10 text-white p-3 sm:hidden md:hidden lg:block"
  >
    <ChevronRight />
  </button>
);

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-[#1A1A1A] py-10">
      <div className="relative max-w-[1280px] mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col justify-between max-w-[404px] mx-auto">
                <div>
                  <div className="flex gap-[3.72px] mb-[22px]">
                    {[...Array(4)].map((_, i) => (
                      <StarIcon />
                    ))}
                  </div>
                  <h3 className="text-[18px] font-[400] font-primary text-[#3D3D3D] mb-2 tracking-[-0.02em]">
                    {t.title}
                  </h3>
                  <p className="text-[13px] font-[400] text-[#3D3D3D] font-secondary">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center mt-6 gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-[3.7px] object-cover"
                  />
                  <div>
                    <p className="font-[400] text-[14px] font-primary text-[#0C0C0C]">
                      {t.name}
                    </p>
                    <p className="text-[13px] font-[400] text-[#3D3D3D] font-secondary">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
