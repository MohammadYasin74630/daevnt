import NavBar from "./components/NavBar"
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
      </main>
      <div className="h-screen"></div>
    </>
  )
}

export default App
