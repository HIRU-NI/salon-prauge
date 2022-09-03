import Header from "./components/Navbar"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Booking from "./pages/Booking"

import { useRef } from "react"
import { useLayoutEffect } from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Wrapper = ({ children }) => {
  const location = useLocation()
  const { targetId } = location.state || {}
  useLayoutEffect(() => {
    if (!targetId) document.documentElement.scrollTo(0, 0)
  }, [location.pathname, targetId])
  return children
}

function App() {
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)

  return (
    <Router>
      <Wrapper>
        <Header aboutRef={aboutRef} servicesRef={servicesRef} />

        <Routes>
          <Route
            path="/"
            element={<Home aboutRef={aboutRef} servicesRef={servicesRef} />}
          />
          <Route path="booking" element={<Booking />} />
          <Route path="service:id" element={<Service />} />
          <Route
            path="*"
            element={<Home aboutRef={aboutRef} servicesRef={servicesRef} />}
          />
        </Routes>
      </Wrapper>
    </Router>
  )
}

export default App
