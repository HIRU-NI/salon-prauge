import Header from "./components/home/Header"
import Home from "./pages/Home/index.js"

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
      <Home aboutRef={aboutRef} servicesRef={servicesRef} />
    </>
  )
}

export default App
