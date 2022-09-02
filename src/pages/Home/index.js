import React from "react"

//react-bootstrap components
import Carousel from "../../components/home/Carousel"
import ServicesSlider from "../../components/home/slider/ServicesSlider"
import About from "../../components/home/About"

const Home = ({ aboutRef, servicesRef }) => {
  return (
    <>
      <Carousel />
      <ServicesSlider ref={servicesRef} />
      <About ref={aboutRef} />
    </>
  )
}

export default Home
