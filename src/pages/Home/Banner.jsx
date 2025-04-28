import bg from "../../assets/images/background.png"
import speakerMan from '../../assets/images/speaker image.png'

function Banner() {
  return (
    <>
      <header className="h-[100vmax] md:h-[100vmin] relative max-sm:mb-32 sm:mb-6">
        <img className="absolute -z-10 max-lg:h-full object-cover" src={bg} alt="" />
        <img className="h-full pt-20 mx-auto object-contain" src={speakerMan} alt="asian looking man in blue shirt with mike in the collar" />

        <div className="absolute w-10/12 left-1/2 -translate-x-1/2 bottom-10 h-2/5 md:h-2/4 p-4">
          <div className="relative h-full">
            <h2 className="">Start Registration:</h2>
            <time className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium" dateTime='2025-03-25 20:00'>25 March 2025</time>

            <div className="md:flex justify-between absolute bottom-0 w-full">
              <p className="text-xxl md:text-2xl lg:text-4xl xl:text-5xl uppercase font-extrabold leading-snug">Join Ultimate <br /> Online Conference Experience</p>

              <button className="uppercase bg-[#754dfa] self-center px-6 py-3 cursor-pointer active:scale-90 transition-[scale] max-md:mt-2 ">Get Ticket</button>
            </div>
          </div>
        </div>

        <div className="sm:flex gap-2 justify-center p-4 [background:radial-gradient(#ffffff33,transparent)] backdrop-blur-sm sm:[writing-mode:vertical-rl] sm:absolute top-0 right-0 sm:h-full sm:rotate-180">
          <p className="px-4">Social: FB . IN . TW. DR</p>
          <p className="sm:border-x border-gray-600 px-4">+1-416-8241228</p>
          <p className="px-4">Info@daevnt.org.world</p>
        </div>
      </header>
    </>
  )
}

export default Banner