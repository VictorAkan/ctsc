export const SignUpModal = ({ open, onClose, children }) => {
    return (
        // backdrop
        <div onClick={onClose} className={`
            fixed inset-0 z-10 flex justify-center items-center transition-colors
            ${open ? "visible bg-black/20" : "invisible"}        
        `}>
            <div onClick={(e) => e.stopPropagation()} className={`
                bg-[#f6fbf9] rounded-[54.31px] sm:rounded-xl sm:p-4 shadow p-10 transition-all
                ${open ? "scale-100 opacity-200" : "scale-125 opacity-0"}
            `}>
                {children}
            </div>
        </div>
    )
}