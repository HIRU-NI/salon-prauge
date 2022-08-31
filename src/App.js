import Header from "./components/home/Header"
import Carousel from "./components/home/Carousel"
import ServicesSlider from "./components/home/slider/ServicesSlider"
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <ServicesSlider />
    </>
  )
}

export default App
