import Marquee from "react-fast-marquee";

function TextSlider() {
    return (
        <>
            <Marquee className="bg-[#7546FF] py-2">
                <div className="inline-flex items-center gap-4 mr-4">
                    <h3 className="text-5xl font-medium">Creative & Innovative</h3>
                    <span className=" w-5 h-5 rounded-full bg-[#FFD6B3] "></span>
                </div>

                <div className="inline-flex items-center gap-4 mr-4">
                    <h3 className="text-5xl font-medium">Online Conference</h3>
                    <span className=" w-5 h-5 rounded-full bg-[#FFD6B3] "></span>
                </div>

                <div className="inline-flex items-center gap-4 mr-4">
                    <h3 className="text-5xl font-bold [-webkit-text-stroke-width:1px] [-webkit-text-fill-color:#754dfa]">Nextgen Conference Experience</h3>
                    <span className=" w-5 h-5 rounded-full bg-[#FFD6B3] "></span>
                </div>
            </Marquee>
        </>
    )
}


export default TextSlider