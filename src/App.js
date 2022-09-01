import Header from "./components/home/Header"
import Carousel from "./components/home/Carousel"
import ServicesSlider from "./components/home/slider/ServicesSlider"
import About from "./components/home/About"
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <ServicesSlider />
      <About />
    </>
  )
}

export default App
