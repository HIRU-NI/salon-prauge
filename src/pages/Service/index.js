import React from "react"
import ServiceDetails from "../../components/ServiceDetails"

import { useParams } from "react-router-dom"

const Service = () => {
  const { id } = useParams()
  return (
    <>
      <ServiceDetails serviceId={id} />
    </>
  )
}

export default Service
