import React from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"

const Header = () => {
  return (
    <>
      <Navbar bg="white" expand="sm" className="mb-3 px-5 py-3">
        <Container fluid>
          <Navbar.Brand href="/" className="ms-5">
            <img
              src={require("../assets/logo-black.png")}
              height="45"
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
                <Nav.Link className="px-3 fs-5 text-reset" href="#action1">
                  Home
                </Nav.Link>
                <Nav.Link className="px-3 fs-5 text-reset" href="#action2">
                  About
                </Nav.Link>
                <Nav.Link className="px-3 fs-5 text-reset" href="#action2">
                  Services
                </Nav.Link>
                <Nav.Link className="px-3 fs-5 text-reset" href="#action2">
                  Shop
                </Nav.Link>
              </Nav>
              <Form className="d-flex ps-3 me-5">
                <Button variant="dark fs-5">Book now</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
