import React from "react"

//react-bootstrap components
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"

//react-router
import { Link } from "react-router-dom"

//styles
import "../../assets/styles/carousel.css"

const AppCarousel = () => {
  return (
    <Carousel indicators={false} controls={false} className="carousel_main">
      <Carousel.Item className="carousel_item">
        <img
          className="d-block w-100"
          src={require("../../assets/carousel-image.png")}
          alt="First slide"
        />
        <Carousel.Caption className="carousel_caption">
          <h1 class="carousel_title">
            Always make room for beauty in your life
          </h1>
          <br />
          <p class="carousel_text">
            At Prauge we are passionate about making people feel good while
            looking their best. Attending advanced education allows us to keep
            up with the latest trends and provide each guest with a unique &
            customizable result. For your convenience, Schedule your reservation
            today!
          </p>
          <br />
          <Link to="booking">
            <Button
              variant="outline-light fs-6"
              size="lg"
              style={{ borderRadius: 5, width: "163px", height: "53px" }}
            >
              Book Now
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default AppCarousel
