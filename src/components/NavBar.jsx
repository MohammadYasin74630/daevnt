import dots from "../assets/vector/nav dots.svg"

function NavBar() {
  return (
    <>
      <nav className="sm:flex max-xl:justify-around justify-between gap-8 items-center py-4 bg-opacity-0 absolute z-40 w-full max-w-7xl left-1/2 -translate-x-1/2 text-center xl:pr-13">
        <div className="md:inline-flex items-center gap-4 ">
          <img className="mx-auto" src="/logo.svg" alt="logo" />
          <h1 className="text-2xl font-semibold">Daevnt</h1>
        </div>

        <div className="inline-flex gap-3 md:gap-8 items-center">
          <a href="#">Home</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
          <a href="#">
            <img className="w-6 max-[300px]:hidden" src={dots} alt="" />
          </a>
        </div>
      </nav>
    </>
  )
}

export default NavBar