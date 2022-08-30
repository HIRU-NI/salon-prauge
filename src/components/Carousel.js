import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"

const AppCarousel = () => {
  return (
    <Carousel indicators={false} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/carousel-image.png")}
          alt="First slide"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #020202 100%)",
          }}
        />
        <Carousel.Caption
          style={{ left: "9%", top: "20%", right: "60%", textAlign: "left" }}
        >
          <h1 style={{ fontFamily: "Playfair Display", fontSize: "50px" }}>
            Always make room for beauty in your life
          </h1>
          <br />
          <p style={{ fontSize: "18px" }}>
            At Prauge we are passionate about making people feel good while
            looking their best. Attending advanced education allows us to keep
            up with the latest trends and provide each guest with a unique &
            customizable result. For your convenience, Schedule your reservation
            today!
          </p>
          <br />
          <Button
            variant="outline-light fs-6"
            size="lg"
            style={{ borderRadius: 5, width: "163px", height: "53px" }}
          >
            Book Now
          </Button>{" "}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default AppCarousel
