import upArrow from "../assets/vector/top.svg"

function ScrollButton() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="cursor-pointer sticky bottom-0 z-20">
            <button className="bg-white w-12 h-12 flex items-center justify-center rounded-full absolute right-5 bottom-5 shadow cursor-pointer active:scale-90 transition-[scale] " type="button" onClick={scrollToTop}>
                <img src={upArrow} alt="upward arrow icon" />
            </button>
        </div>
    )
}

export default ScrollButton