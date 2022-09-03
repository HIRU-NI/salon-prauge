import Header from "./components/home/Header"
import Home from "./pages/Home"
import Service from "./pages/Service"

import { useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)

  return (
    <Router>
      <Header aboutRef={aboutRef} servicesRef={servicesRef} />

      <Routes>
        <Route
          path="/"
          element={<Home aboutRef={aboutRef} servicesRef={servicesRef} />}
        />
        <Route path="service:id" element={<Service />} />
        <Route
          path="*"
          element={<Home aboutRef={aboutRef} servicesRef={servicesRef} />}
        />
      </Routes>
    </Router>
  )
}

export default App
