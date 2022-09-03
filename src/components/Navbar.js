import React from "react"

//react-router
import { Link } from "react-router-dom"

//react-bootstrap components
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"

//styles
import "../assets/styles/navbar.css"

const Header = ({ aboutRef, servicesRef }) => {
  const handleScrolltoAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const handleScrolltoServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
  }
  return (
    <>
      <Navbar bg="white" expand="md" className="navbar_main" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={require("../assets/logo-black.png")}
              height="46"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link as={Link} className="text-reset navbar_link" to="/">
                  Home
                </Nav.Link>

                <Nav.Link
                  className="text-reset navbar_link"
                  onClick={handleScrolltoAbout}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className="text-reset navbar_link"
                  onClick={handleScrolltoServices}
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="text-reset navbar_link"
                  to="/booking"
                >
                  Shop
                </Nav.Link>
              </Nav>
              <Form className="d-flex ps-4 me-5">
                <Link to="booking">
                  <Button variant="dark" size="lg">
                    Book now
                  </Button>
                </Link>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
