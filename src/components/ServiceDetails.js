import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import "../assets/styles/serviceDetails.css"

const ServiceDetails = () => {
  return (
    <>
      <Container fluid className="servicedetails_main">
        <Row className="servicedetails_row">
          <Col>
            <div class="servicedetails_content">
              <h1>Haircut</h1>
              <p>
                At Prauge we are passionate about making people feel good while
                looking their best. Attending advanced education allows us to
                keep up with the latest trends and provide each guest with a
                unique & customizable result. For your convenience, Schedule
                your reservation today!
              </p>
              <br />
              <Button variant="dark" size="lg">
                Make a Reservation
              </Button>
            </div>
          </Col>
          <Col className="servicedetails_image">
            <img
              src={require("../assets/services-image-3.png")}
              alt="ServiceImage"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ServiceDetails
