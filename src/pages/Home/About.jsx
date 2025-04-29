import img1 from "../../assets/images/placeholder 1.png"
import img2 from "../../assets/images/placeholder 2.png"
import img3 from "../../assets/images/placeholder 3.png"
import tick from "../../assets/vector/check mark icon.svg"

function About() {
    return (
        <>
            <div className="grid lg:grid-cols-2 gap-4 xl:gap-8 items-center w-10/12 max-w-7xl mx-auto">
                <div className="md:max-lg:grid grid-cols-3 md:max-lg:h-64 overflow-hidden">
                    <img className="md:mt-4 max-w-screen w-full h-full object-cover" src={img1} alt="A woman with glasses is engaged with her laptop at a table, participating in a conference event" />
                    <div className="lg:flex col-span-2 md:max-xl:grid grid-cols-2 lg:max-xl:h-64">
                        <img className="mr-4 mt-4 max-w-screen w-full lg:max-xl:w-1/2 h-full object-cover" src={img2} alt="A man in formal attire sitting at a table with a laptop, participating in a conference session" />
                        <img className=" mt-4 max-w-screen w-full lg:max-xl:w-1/2 h-full object-cover" src={img3} alt="A bearded man with glasses sits at a table, working on a laptop during a conference session" />
                    </div>
                </div>

                <div className="p-4 mt-4">
                    <h2 className="mb-2">About the Conference</h2>
                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight">Where Innovation Meets Virtual Experiences</p>

                    <dl className="py-6 xl:py-10">
                        <div className="inline-flex gap-5">
                            <img src={tick} alt="tick mark icon" />
                            <dt className="text-lg">Expert keynote speakers</dt>
                        </div>
                        <dd className="ml-10 text-gray-300 pt-2 pb-5 max-w-[43ch]">Hear from thought leaders and industry pioneers as they share their expertise, trends, and strategies to keep you ahead of the curve.</dd>

                        <div className="inline-flex gap-5">
                            <img src={tick} alt="tick mark icon" />
                            <dt className="text-lg">Education Programs</dt>
                        </div>
                        <dd className="ml-10 text-gray-300 pt-2 pb-5 max-w-[43ch]">Engage in interactive sessions, workshops, and masterclasses designed to expand your skills and knowledge in your field.</dd>

                        <div className="inline-flex gap-5">
                            <img src={tick} alt="tick mark icon" />
                            <dt className="text-lg">Notes & Highlights</dt>
                        </div>
                        <dd className="ml-10 text-gray-300 pt-2 pb-5 max-w-[43ch]">Stay informed with key takeaways, session summaries, and exclusive insights to ensure you never miss a moment of valuable content.</dd>
                    </dl>

                    <p className="text-2xl font-medium max-w-[30ch]">Join us as we redefine conference for the 21st century!</p>
                </div>
            </div>
        </>
    )
}

export default About