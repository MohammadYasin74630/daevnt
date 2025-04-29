import NavBar from "./components/NavBar"
import About from "./pages/Home/About"
import Banner from "./pages/Home/Banner"
import FutureEvents from "./pages/Home/FutureEvents"
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
      </main>
      <div className="h-screen"></div>
    </>
  )
}

export default App
