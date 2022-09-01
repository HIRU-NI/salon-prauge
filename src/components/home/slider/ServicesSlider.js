import React from "react"
import Slider from "react-slick"
import Slide from "./Slide"
import "./slider.css"

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const ServicesSlider = () => {
  return (
    <div class="slider_main">
      <h2 class="slider_title">Services</h2>
      <Slider {...settings} className="__slider">
        <Slide
          title="Haircut"
          description="Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
          imgPath={require("../../../assets/services-image-1.png")}
        />
        <Slide
          title="Hair Styling"
          description="Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
          imgPath={require("../../../assets/services-image-2.png")}
        />
        <Slide
          title="Makeup"
          description="Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
          imgPath={require("../../../assets/services-image-3.png")}
        />
        <Slide
          title="Haircut"
          description="Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
          imgPath={require("../../../assets/services-image-1.png")}
        />
        <Slide
          title="Hair Styling"
          description="Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
          imgPath={require("../../../assets/services-image-2.png")}
        />
        <Slide
          title="Makeup"
          description="Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
          imgPath={require("../../../assets/services-image-3.png")}
        />
      </Slider>
    </div>
  )
}

export default ServicesSlider
