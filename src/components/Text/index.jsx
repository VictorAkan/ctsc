
const sizes = {
    "20xl": "text-[2.38rem] font-medium md:text-[2.25rem] sm:text-[2.13rem]",
    xs: "text-[0.50rem] font-medium",
    lg: "text-[0.75rem] font-medium",
    "19xl": "text-[2.31rem] font-medium md:text-[2.19rem] sm:text-[2.06rem]", 
    "18xl": "text-[2.13rem] font-normal md:text-[2.00rem] sm:text-[1.88rem]",
    xl: "text-[0.88rem] font-medium",
    "14xl": "text-[1.88rem] font-normal md:text-[1.75rem] sm:text-[1.23rem]", 
    "15xl": "text-[1.94rem] font-medium md:text-[1.81rem] sm:text-[1.69rem]", 
    "17xl": "text-[2.06rem] font-medium md:text-[1.94rem] sm:text-[1.81rem]", 
    "16xl": "text-[2.00rem] font-normal md:text-[1.88rem] sm:text-[1.75rem]", 
    "9xl": "text-[1.38rem] font-medium",
    "10xl": "text-[1.44rem] font-medium md:text-[1.31rem]",
    "11xl": "text-[1.56rem] font-normal md:text-[1.44rem] sm:text-[1.31rem]", 
    "12xl": "text-[1.63rem] font-normal md:text-[1.50rem] sm:text-[1.38rem]", 
    "13xl": "text-[1.69rem] font-normal md:text-[1.56rem] sm:text-[1.44rem]", 
    "5xl": "text-[1.13rem] font-normal",
    "6xl": "text-[1.19rem] font-normal sm:text-[1.0rem]",
    "7xl": "text-[1.25rem] font-normal",
    "8xl": "text-[1.31rem] sm:text-[1rem] font-normal",
    "30xl": "text-[6.50rem] font-medium md:text-[3.00rem]",
    "2xl": "text-[0.94rem] font-normal",
    "3xl": "text-[1.00rem] font-medium",
    "4xl": "text-[1.06rem] font-normal",
    s: "text-[0.63rem] font-normal",
    "29xl": "text-[6.19rem] font-light md:text-[3.00rem]",
    "26xl": "text-[3.75rem] font-medium md:text-[3.25rem] sm:text-[1.88rem]", 
    "25xl": "text-[3.56rem] font-light md:text-[3.06rem] sm:text-[2.69rem]", 
    "28xl": "text-[4.38rem] font-normal md:text-[3.00rem]",
    "27xl": "text-[4.00rem] font-medium md:text-[3.00rem]",
    "22xl": "text-[3.13rem] font-medium md:text-[2.88rem] sm:text-[1.50rem]",
     md: "text-[0.69rem] font-normal",
    "21xl": "text-[2.50rem] font-normal md:text-[2.38rem] sm:text-[1.45rem]",
    "24xl": "text-[3.50rem] font-medium md:text-[3.00rem] sm:text-[2.63rem]",
    "23xl": "text-[3.25rem] font-normal md:text-[2.75rem] sm:text-[2.38rem]",
};

const Text = ({ children, className="", as, size="7xl", ...restProps }) => {
    const Component = as || "p";

    return (
        <Component className={`text-[#ffffff] font-['Poppins'] ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };