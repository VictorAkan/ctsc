
const sizes = {
    "3xl": "text-[3.38rem] font-bold md:text-[2.88rem] sm:text-[2.5ørem]", 
    "2xl": "text-[2.06rem] font-semibold md:text-[1.94rem] sm:text-[1.81rem]", 
    xl: "text-[2.00rem] font-semibold md:text-[1.88rem] sm:text-[1.75rem]", 
    "4xl": "text-[4.38rem] font-bold md:text-[3.00rem]",
    md: "text-[1.56rem] font-semibold md:text-[1.44rem] sm:text-[1.31rem]",
    s: "text-[1.50rem] font-semibold md:text-[1.38rem]",
    xs: "text-[1.25rem] font-bold",
    lg: "text-[1.88rem] font-semibold md:text-[1.75rem] sm:text-[1.63rem]",
};

    const Heading = ({ children, className = "", size = "xl", as, ...restProps }) => {
        const Component = as || "h6";
        return (
            <Component className={`text-[#ffffff] font-['Poppins'] ${className} ${sizes[size]}`} {...restProps}>
                {children}
            </Component>
        );
    };
export { Heading };