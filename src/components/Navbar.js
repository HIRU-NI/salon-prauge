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

const Header = ({ aboutRef, servicesRef }) => {
  const handleScrolltoAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const handleScrolltoServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
  }
  return (
    <>
      <Navbar bg="white" expand="sm" className="mb-3 px-5">
        <Container fluid>
          <Navbar.Brand href="/" className="ms-5 ps-5">
            <img
              src={require("../assets/logo-black.png")}
              height="60"
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
                <Nav.Link as={Link} className="px-5 fs-5 text-reset" to="/">
                  Home
                </Nav.Link>

                <Nav.Link
                  className="px-5 fs-5 text-reset"
                  onClick={handleScrolltoAbout}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className="px-5 fs-5 text-reset"
                  onClick={handleScrolltoServices}
                >
                  Services
                </Nav.Link>
                <Nav.Link className="px-5 fs-5 text-reset" href="#action2">
                  Shop
                </Nav.Link>
              </Nav>
              <Form className="d-flex ps-4 me-5">
                <Link to="booking">
                  <Button variant="dark fs-5" size="lg">
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
