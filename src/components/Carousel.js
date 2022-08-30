import React from "react"
import Carousel from "react-bootstrap/Carousel"

const AppCarousel = () => {
  return (
    <Carousel indicators={false} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/carousel-image.png")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Always make room for beauty in your life</h5>
          <p>
            At Prauge we are passionate about making people feel good while
            looking their best. Attending advanced education allows us to keep
            up with the latest trends and provide each guest with a unique &
            customizable result. For your convenience, Schedule your reservation
            today!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default AppCarousel
