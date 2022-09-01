import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import "./slide.css"

const Slide = ({ title, description, imgPath }) => {
  return (
    <Card className="slide_main">
      <Card.Img variant="top" src={imgPath} className="slide_img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="light"
          className="slide_btn"
          style={{ color: "#b99a5f" }}
        >
          MAKE A RESERVATION
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Slide
