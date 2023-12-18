// components/Carousel/Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Carousel/Carousel.css"

const Carousel = () => {
    const CustomPrevArrow = (props) => (
        <div {...props} className="custom-arrow custom-prev-arrow">
          {"<"}
        </div>
      );
    
      const CustomNextArrow = (props) => (
        <div {...props} className="custom-arrow custom-next-arrow">
          {">"}
        </div>
      );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Set slidesToShow to 1 for one image per slide
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
      };

          

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={require("../../images/1.png")} alt="Item 1" />
        </div>
        <div>
          <img src={require("../../images/2.png")} alt="Item 2" />
        </div>
        <div>
          <img src={require("../../images/management-dashboard-in-business-world.png")} alt="Item 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
