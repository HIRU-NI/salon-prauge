import Header from "./components/home/Header"
import Carousel from "./components/home/Carousel"
import ServicesSlider from "./components/home/slider/ServicesSlider"
import About from "./components/home/About"

import { useRef } from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)

  return (
    <>
      <Header aboutRef={aboutRef} servicesRef={servicesRef} />
      <Carousel />
      <ServicesSlider ref={servicesRef} />
      <About ref={aboutRef} />
    </>
  )
}

export default App
