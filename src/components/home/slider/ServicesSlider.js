import React from "react"
import Slider from "react-slick"
import Slide from "./Slide"
import { forwardRef } from "react"

//styles
import "./slider.css"

//data
import serviceTypes from "../../../api/data"

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

const ServicesSlider = forwardRef((props, ref) => {
  return (
    <div class="slider_main" ref={ref}>
      <h2 class="slider_title">Services</h2>
      <Slider {...settings} className="__slider">
        {serviceTypes.map((service) => {
          return (
            <Slide
              key={service.id}
              id={service.id}
              title={service.title}
              description="Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut."
              imgPath={service.img}
            />
          )
        })}
      </Slider>
    </div>
  )
})

export default ServicesSlider
