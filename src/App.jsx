import NavBar from "./components/NavBar"
import Banner from "./pages/Home/Banner"


function App() {

  return (
    <>
      <NavBar />
      <main>
        <Banner />
      </main>
      <div className="h-screen"></div>
    </>
  )
}

export default App
