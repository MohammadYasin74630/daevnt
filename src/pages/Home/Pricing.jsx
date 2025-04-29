import Tick from "../../assets/vector/check mark icon.svg?react"
import Button from "../../components/Button"

function Pricing() {
    return (
        <div className="bg-[#fefefe] pt-16 md:max-lg:pt-0 pb-32 -mt-0.5">

            <div className="w-10/12 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-11">
                <div className="text-black md:max-lg:col-span-2">
                    <h2 className="text-4xl font-bold">PRICING</h2>
                    <p className="max-w-[30ch] pt-5 text-gray-800">Join leading educators, researchers, and policymakers in a global dialogue on the future of learning.</p>
                </div>

                <div className="bg-[#F8F6FF] text-black text-center px-2 py-12">
                    <h3 className="text-2xl font-bold">Premium Pass</h3>
                    <p className="text-5xl pt-2 pb-3 font-medium">$99</p>

                    <p className="inline-flex gap-1 items-center">1 Visitor
                        <svg className={`size-6 scale-90`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </p>

                    <div className="mx-auto w-max ">

                        <div className="py-8 space-y-2">

                            <div className="flex gap-2 items-center">
                                <Tick />
                                <p>Access to all keynote sessions</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <Tick />
                                <p>Entry to exhibition area</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <Tick />
                                <p>No access to workshops</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <Tick />
                                <p>No networking lounge access</p>
                            </div>

                        </div>

                        <div className="text-white">
                            <Button>GET TICKET NOW</Button>
                        </div>

                    </div>
                </div>

                <div className="bg-[#7546FF] text-center px-2 py-12">
                    <h3 className="text-2xl font-bold">Ordinary Pass</h3>
                    <p className="text-5xl pt-2 pb-3 font-medium">$149</p>

                    <p className="inline-flex gap-1 items-center">1 Visitor
                        <svg className={`size-6 scale-90`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </p>

                    <div className="mx-auto w-max ">

                        <div className="py-8 space-y-2">

                            <div className="flex gap-2 items-center">
                                <Tick />
                                <p>Access to all keynote sessions</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <Tick />
                                <p>Entry to exhibition area</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <Tick />
                                <p>No access to workshops</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <Tick />
                                <p>No networking lounge access</p>
                            </div>

                        </div>

                        <div >
                            <Button secondary={true}>GET TICKET NOW</Button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricing