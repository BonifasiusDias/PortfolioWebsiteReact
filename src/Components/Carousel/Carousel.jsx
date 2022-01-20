import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import project1 from "../../Assets/Project1.jpg";
import project2 from "../../Assets/Project2.jpg";
import project3 from "../../Assets/Project3.jpg";
import project4 from "../../Assets/Project4.jpg";
import project5 from "../../Assets/Project5.jpg";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function () {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
    beforeChange: function (current, next) {},
    responsive: [
      {
        breakpoint: 766,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="md:my-4 lg:w-10/12 w-full lg:mx-auto relative -my-2 -ml-1">
      <div className="hidden md:block">
        <Slider {...settings}>
          <div className="bg-gray-300 h-full rounded-md">
            <img src={project1} alt="" className="rounded-md" />
          </div>
          <div className="bg-gray-300 h-full rounded-md">
            <img src={project2} alt="" className="rounded-md" />
          </div>
          <div className="bg-gray-300 h-full rounded-md">
            <img src={project3} alt="" className="rounded-md" />
          </div>
          <div className="bg-gray-300 h-full rounded-md">
            <img src={project4} alt="" className="rounded-md" />
          </div>
          <div className="bg-gray-300 h-full rounded-md">
            <img src={project5} alt="" className="rounded-md" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;
