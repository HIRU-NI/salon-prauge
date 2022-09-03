import { React, useEffect } from "react"

//react-router
import { Link, useLocation } from "react-router-dom"

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
  const location = useLocation()
  const { targetId } = location.state || {} //ID of the element to scroll to

  // const handleScrolltoAbout = async () => {
  //   await aboutRef.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //   })
  // }

  // const handleScrolltoServices = () => {
  //   servicesRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
  // }

  //scroll to specific elements from home page
  useEffect(() => {
    if (targetId === "about") {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
    if (targetId === "services") {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }, [targetId, aboutRef, servicesRef])

  return (
    <>
      <Navbar bg="white" expand="md" className="navbar_main" fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
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
                  as={Link}
                  to="/"
                  state={{ targetId: "about" }}
                  className="text-reset navbar_link"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="text-reset navbar_link"
                  to="/"
                  state={{ targetId: "services" }}
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="text-reset navbar_link"
                  to="/booking"
                  state={{ targetId: "" }}
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
