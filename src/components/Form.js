import { React, useState } from "react"

//react-bootstrap components
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"

import Flatpickr from "react-flatpickr"

//styles
import "flatpickr/dist/themes/dark.css"
import "../assets/styles/form.css"

//data
import serviceTypes from "../api/data"

const BookingForm = () => {
  const [service, setService] = useState("default")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleChangeService = (e) => {
    setService(e.target.value)
  }

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleChangeLastName = (e) => {
    setLastName(e.target.value)
  }

  return (
    <Form className="form_main">
      <Form.Group as={Col} controlId="formGridService" className="mb-4">
        <Form.Select defaultValue={service} onChange={handleChangeService}>
          <option value="default" diabled hidden>
            Select Service
          </option>
          {serviceTypes.map((service) => {
            return <option value={service.title}>{service.title}</option>
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formGridFirstName">
        <Form.Control
          defaultValue={firstName}
          placeholder="First Name*"
          onChange={handleChangeFirstName}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formGridLastName">
        <Form.Control
          defaultValue={lastName}
          placeholder="Last Name*"
          onChange={handleChangeLastName}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formGridEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formGridEmail">
        <Flatpickr
          data-enable-time
          className="flatpicker"
          defaultValue={new Date().toISOString()}
        />
      </Form.Group>

      <h3>Total: USD 25.00</h3>

      <Button type="submit" className="form_button">
        Pay Now
      </Button>
    </Form>
  )
}

export default BookingForm
