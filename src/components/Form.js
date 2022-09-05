import { React } from "react"

import { useFormik } from "formik"

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

const validate = (values) => {
  const errors = {}
  if (!values.service) {
    errors.service = "Required"
  }
  if (!values.first) {
    errors.first = "Required"
  } else if (values.first.length > 15) {
    errors.first = "Must be 15 characters or less"
  }

  if (!values.last) {
    errors.last = "Required"
  } else if (values.last.length > 20) {
    errors.last = "Must be 20 characters or less"
  }

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  return errors
}

const BookingForm = () => {
  const formik = useFormik({
    initialValues: {
      service: "",
      first: "",
      last: "",
      email: "",
      date: new Date().toISOString(),
    },
    validate,
    onSubmit: (values) => {
      fetch("/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
        }),
      })
        .then((res) => {
          if (res.ok) return res.json()
          return res.json().then((json) => Promise.reject(json))
        })
        .then(({ url }) => {
          window.location = url
        })
        .catch((e) => {
          console.log(e.error)
        })
    },
  })

  return (
    <Form className="form_main" onSubmit={formik.handleSubmit}>
      <Form.Group as={Col} controlId="formGridService" className="mb-4">
        <Form.Select
          defaultValue={formik.values.service}
          id="service"
          name="service"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.service}
          aria-describedby="servicetHelpBlock"
          className={formik.errors.service ? "form_error_input" : ""}
        >
          <option value="" diabled hidden>
            Select Service
          </option>
          {serviceTypes.map((service) => {
            return <option value={service.title}>{service.title}</option>
          })}
        </Form.Select>
        {formik.errors.service ? (
          <Form.Text id="serviceHelpBlock" className="form_error">
            {formik.errors.service}
          </Form.Text>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-4" controlId="formGridFirstName">
        <Form.Control
          defaultValue={formik.values.first}
          placeholder="First Name*"
          id="first"
          name="first"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first}
          aria-describedby="firstHelpBlock"
          className={formik.errors.first ? "form_error_input" : ""}
        />
        {formik.errors.first ? (
          <Form.Text id="firstHelpBlock" className="form_error">
            {formik.errors.first}
          </Form.Text>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-4" controlId="formGridLastName">
        <Form.Control
          defaultValue={formik.values.first}
          placeholder="Last Name*"
          id="last"
          name="last"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.last}
          aria-describedby="lastHelpBlock"
          className={formik.errors.last ? "form_error_input" : ""}
        />
        {formik.errors.last ? (
          <Form.Text id="lastHelpBlock" className="form_error">
            {formik.errors.last}
          </Form.Text>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-4" controlId="formGridEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          aria-describedby="emailHelpBlock"
          className={formik.errors.email ? "form_error_input" : ""}
        />
        {formik.errors.email ? (
          <Form.Text id="emailHelpBlock" className="form_error">
            {formik.errors.email}
          </Form.Text>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-4" controlId="formGridEmail">
        <Flatpickr
          data-enable-time
          id="date"
          name="date"
          onChange={formik.handleChange}
          defaultValue={formik.values.date}
          onBlur={formik.handleBlur}
          value={formik.values.date}
          aria-describedby="dateHelpBlock"
          className={`flatpicker ${
            formik.errors.date ? "form_error_input" : ""
          }`}
        />
        {formik.errors.date ? (
          <Form.Text id="dateHelpBlock" className="form_error">
            {formik.errors.date}
          </Form.Text>
        ) : null}
      </Form.Group>
      <h3>Total: USD 25.00</h3>
      <Button type="submit" className="form_button">
        Pay Now
      </Button>{" "}
    </Form>
  )
}

export default BookingForm
