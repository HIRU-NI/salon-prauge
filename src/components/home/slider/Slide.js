import React from "react"

//react-router
import { Link } from "react-router-dom"

//react-bootstrap components
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

//styles
import "./slide.css"

const Slide = ({ id, title, description, imgPath }) => {
  return (
    <Card className="slide_main">
      <Card.Img variant="top" src={imgPath} className="slide_img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`service${id}`}>
          <Button
            variant="light"
            className="slide_btn"
            style={{ color: "#b99a5f" }}
          >
            MAKE A RESERVATION
          </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Slide
