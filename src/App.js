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
    <>
      <Router>
        <Header aboutRef={aboutRef} servicesRef={servicesRef} />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route
            path="/"
            element={<Home aboutRef={aboutRef} servicesRef={servicesRef} />}
          />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
