import React from "react"

//react-bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//styles
import "../assets/styles/booking.css"

const BookingForm = ({ serviceId }) => {
  return (
    <>
      <Container fluid className="booking_main">
        <Row className="booking_row">
          <Col>
            <div class="booking_content">
              <h1>Booking details</h1>
            </div>
          </Col>
          <Col className="booking_image">
            <img
              src={require("../assets/services-image-1.png")}
              alt="ServiceImage"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BookingForm
