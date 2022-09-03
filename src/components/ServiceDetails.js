import React from "react"

//react-router
import { Link } from "react-router-dom"

//react-bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

//styles
import "../assets/styles/serviceDetails.css"

//data
import serviceTypes from "../api/data"

const ServiceDetails = ({ serviceId }) => {
  return (
    <>
      <Container fluid className="servicedetails_main">
        <Row className="servicedetails_row">
          <Col>
            <div class="servicedetails_content">
              <h1>
                {
                  serviceTypes.find((type) => {
                    return type.id === serviceId
                  }).title
                }
              </h1>
              <p>
                At Prauge we are passionate about making people feel good while
                looking their best. Attending advanced education allows us to
                keep up with the latest trends and provide each guest with a
                unique & customizable result. For your convenience, Schedule
                your reservation today!
              </p>
              <br />
              <Link to="../booking">
                <Button variant="dark" size="lg">
                  Make a Reservation
                </Button>
              </Link>
            </div>
          </Col>
          <Col className="servicedetails_image">
            <img
              src={
                serviceTypes.find((type) => {
                  return type.id === serviceId
                }).img
              }
              alt="ServiceImage"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ServiceDetails
