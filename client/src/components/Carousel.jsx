import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Define responsive breakpoints
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const isLargeScreen = useMediaQuery({ query: "(max-width: 1280px)" });

  const getSlidesToShow = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 1;
    if (isLargeScreen) return 3;
    return 3; // For larger screens
  };

  const settings = {
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: getSlidesToShow(),
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const slideImages = [
    "https://yavuzceliker.github.io/sample-images/image-1.jpg",
    "https://yavuzceliker.github.io/sample-images/image-2.jpg",
    "https://yavuzceliker.github.io/sample-images/image-3.jpg",
    "https://yavuzceliker.github.io/sample-images/image-4.jpg",
    "https://yavuzceliker.github.io/sample-images/image-5.jpg",
  ];

  return (
    <div className="container mx-auto h-full">
      <Slider {...settings}>
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`px-5 transition-transform duration-300 ${
              activeSlide === index ? "scale-110" : "scale-75"
            }`}
          >
            <div className="rounded-md overflow-hidden h-[50vh] flex items-center justify-center">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom next and previous arrow components
const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white py-3 px-3 rounded-full shadow-lg border-[1px] focus:outline-none z-10"
    >
      <FaChevronRight />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white py-3 px-3 rounded-full shadow-2xl border-[1px] focus:outline-none z-10"
    >
      <FaChevronLeft />
    </button>
  );
};

export default Carousel;
