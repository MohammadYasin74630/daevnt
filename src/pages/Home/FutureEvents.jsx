import Button from "../../components/Button"

function FutureEvents() {
    return (
        <>
            <div className="max-w-7xl w-10/12 mx-auto my-16 lg:my-32 ">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium mb-1 mx-2">Future Events</h2>

                <div className="[overflow-x:overlay]">

                    <div className="grid grid-cols-4 items-center border-b border-gray-600 py-9 mx-2 min-w-3xl">
                        <div className="w-[30ch] pr-4">
                            <h3 className="text-xl leading-tight">
                                <a className="hover:underline" href="#">The Future of AI Trends & Innovations</a>
                            </h3>
                            <p className="text-sm mt-1">Location: <span className="text-gray-200">Main Auditorium, TechHub Conference Center</span></p>
                        </div>

                        <div className="text-center w-max ml-auto">
                            <time datetime="2025-03-25"> <span className="text-7xl font-medium">25</span> <br /> March 2025</time>
                        </div>

                        <div className="ml-auto">
                            <time datetime="2025-03-25 10:00" >10:00 AM</time> - <time datetime="2025-03-25 12:00">12:00 PM</time>
                        </div>

                        <div className="ml-auto">
                            <Button>BUY TICKET</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 items-center border-b border-gray-600 py-9 mx-2 min-w-3xl">
                        <div className="w-[30ch] pr-4">
                            <h3 className="text-xl leading-tight">
                                <a className="hover:underline" href="#">Cybersecurity Protecting Data & Privacy</a>
                            </h3>
                            <p className="text-sm mt-1">Location: <span className="text-gray-200">Room A2, TechHub Conference Center</span></p>
                        </div>

                        <div className="text-center w-max ml-auto">
                            <time datetime="2025-03-27"> <span className="text-7xl font-medium">27</span> <br /> March 2025</time>
                        </div>

                        <div className="ml-auto">
                            <time datetime="2025-03-27 10:00" >10:00 AM</time> - <time datetime="2025-03-27 12:00">12:00 PM</time>
                        </div>

                        <div className="ml-auto">
                            <p>Free</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 items-center border-b border-gray-600 py-9 mx-2 min-w-3xl">
                        <div className="w-[30ch] pr-4">
                            <h3 className="text-xl leading-tight">
                                <a className="hover:underline" href="#">Blockchain & Web3 Beyond Cryptocurrency</a>
                            </h3>
                            <p className="text-sm mt-1">Location: <span className="text-gray-200">Innovation Stage, TechHub Conference Center</span></p>
                        </div>

                        <div className="text-center w-max ml-auto">
                            <time datetime="2025-03-15"> <span className="text-7xl font-medium">15</span> <br /> March 2025</time>
                        </div>

                        <div className="ml-auto">
                            <time datetime="2025-03-15 10:00" >10:00 AM</time> - <time datetime="2025-03-15 12:00">12:00 PM</time>
                        </div>

                        <div className="ml-auto">
                            <p>Sold Out</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FutureEvents