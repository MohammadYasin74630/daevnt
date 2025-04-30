import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ScrollButton from "./components/ScrollButton"
import About from "./pages/Home/About"
import Banner from "./pages/Home/Banner"
import Benifits from "./pages/Home/Benifits"
import Blogs from "./pages/Home/Blogs"
import Brands from "./pages/Home/Brands"
import FutureEvents from "./pages/Home/FutureEvents"
import Pricing from "./pages/Home/Pricing"
import TextSlider from "./pages/Home/TextSlider"


function App() {

  return (
    <>
      <NavBar />
      <main>
        <Banner />
        <TextSlider />
        <FutureEvents />
        <About />
        <Brands />
        <Benifits />
        <Pricing />
        <Blogs />
      </main>
      <Footer />
      <ScrollButton />
    </>
  )
}

export default App
