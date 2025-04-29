import micro from "../../assets/vector/micro software.svg"
import globe from "../../assets/vector/globe event planner.svg"
import luxe from "../../assets/vector/luxe diamond.svg"
import prestige from "../../assets/vector/prestige platinum.svg"

function Brands() {
    return (
        <div className="w-10/12 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 py-20 xl:py-40">
            <div className="flex max-[500px]:flex-col mx-auto max-[500px]:text-center items-center gap-4 text-gray-200">
                <img className="w-16 h-16" src={micro} alt="micro software logo" />
                <p className="text-2xl max-w-[10ch] leading-tight">Micro Software</p>
            </div>

            <div className="flex max-[500px]:flex-col mx-auto max-[500px]:text-center items-center gap-4 text-gray-200">
                <img className="w-16 h-16" src={globe} alt="globe event planner logo" />
                <p className="text-2xl max-w-[10ch] leading-tight">Globe Event Planner</p>
            </div>

            <div className="flex max-[500px]:flex-col mx-auto max-[500px]:text-center items-center gap-4 text-gray-200">
                <img className="w-16 h-16" src={luxe} alt="luxe diamond logo" />
                <p className="text-2xl max-w-[10ch] leading-tight">Luxe Diamond</p>
            </div>

            <div className="flex max-[500px]:flex-col mx-auto max-[500px]:text-center items-center gap-4 text-gray-200">
                <img className="w-16 h-16" src={prestige} alt="prestige platinum logo" />
                <p className="text-2xl max-w-[10ch] leading-tight">Prestige Platinum</p>
            </div>
        </div>
    )
}

export default Brands