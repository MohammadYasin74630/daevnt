import placeholderRev1 from "../../assets/images/placeholder 1 reversed.png"
import placeholderRev2 from "../../assets/images/placeholder 2 reversed.png"
import placeholderRev3 from "../../assets/images/placeholder 3 reversed.png"

function Blogs() {
    return (
        <div className="w-10/12 max-w-7xl mx-auto my-20">
            <h2 className="text-4xl font-bold py-10">RECENT BLOG</h2>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-around">

                <div>

                    <img src={placeholderRev1} alt="A man working on a laptop while sitting at a table, appearing engaged in his task" />
                    <h3 className="text-xl py-4 hover:underline leading-6">
                        <a href="#">Beyond the Stage: How Conferences Inspire Innovation & Collaboration</a>
                    </h3>
                    <div className="grid grid-cols-2 items-center gap-2">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-[#7546FF] rounded-full"></span>
                            <p>EventTrends</p>
                        </div>

                        <time dateTime="2025-02-12">12 Feb 2025</time>
                    </div>

                </div>

                <div>

                    <img src={placeholderRev2} alt="A bearded man wearing glasses sits at a desk, focused on his laptop" />
                    <h3 className="text-xl py-4 hover:underline leading-6">
                        <a href="#">Beyond the Stage: How Conferences Inspire Innovation & Collaboration</a>
                    </h3>
                    <div className="grid grid-cols-2 items-center gap-2">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-[#7546FF] rounded-full"></span>
                            <p>EventTrends</p>
                        </div>

                        <time dateTime="2025-02-03">03 Feb 2025</time>
                    </div>

                </div>

                <div>

                    <img src={placeholderRev3} alt="A woman in glasses is at a table, engaged with her laptop" />
                    <h3 className="text-xl py-4 hover:underline leading-6">
                        <a href="#">The Ultimate Guide to Engaging & Immersive Event Experiences</a>
                    </h3>
                    <div className="grid grid-cols-2 items-center gap-2">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-[#7546FF] rounded-full"></span>
                            <p>TechSummit</p>
                        </div>

                        <time dateTime="2025-02-03">03 Feb 2025</time>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Blogs