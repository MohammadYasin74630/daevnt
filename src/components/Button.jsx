
function Button({ color, children }) {
    return (
        <button className={`uppercase ${color ? `bg-[${color}]` : `bg-[#754dfa]`} self-center px-6 py-3 cursor-pointer active:scale-90 transition-[scale] max-md:mt-2 `}>{children}</button>
    )
}

export default Button