import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[22px]",
};
const variants = {
    fill: {
        blue_gray_100_03: "bg-[#d9d9d9] text-[#253451]",
        black_900_01: "bg-[#000000] text-[#ffffff]",
        gray_50_01: "bg-[#fbf8f8] text-[#0b0000]",
        blue_gray_900_0c: "bg-[#2534510c] text-[#253451]",
        indigo_50: "bg-[#d8d7ff] text-[#000000]",
        blue_gray_900: "bg-[#253451] text-[#ffffff]",
        white_A700_01: "bg-[#ffffff] shadow-[0px_17.01px_23px_0px_#10122314]",
    },
    gradient: {
        indigo_800_indigo_800_00: "!bg-gradient-to-1 !from-[#10348f] !to-[#10348f00]",
    },
    outline: {
        blue_gray_900: "border-[#253451] border-2 border-solid text-[#253451]",
        blue_gray_100: "border-[#cac9d6] border border-solid text-[#19181f]",
    },
};
const sizes = {
    "3xl": "h-[3.44rem] px-[1.81rem] text-[1.69rem]",
    "9xl": "h-[5.38rem] px-[2.19rem] text-[1.38rem]",
    "7xl": "h-[5.06rem] sm:h-[4rem] pl-[1.44rem] pr-[1.13rem] text-[1.38rem]",
    "6xl": "h-[3.81rem] px-[2.00rem] text-[1.81rem]",
    "13xl": "h-[10.19rem] px-[2.94rem] sm!py-[1rem]",
    "8xl": "h-[5.13rem] px-[2.13rem] text-[3.13rem] md:text-[2rem]",
    xs: "h-[1.63rem] px-[0.81rem] text-[1.00rem]",
    "12xl": "h-[8.31rem] px-[2.06rem] sm:px-[2.06rem] text-[2.88rem] sm:text-[1.5rem]",
    "11xl": "h-[5.94rem] px-[1.38rem] sm:px-[1rem] text-[1.56rem] sm:text-[1.2rem]",
    "5xl": "h-[3.75rem] px-[2.19rem] text-[0.94rem]",
    "4xl": "h-[3.75rem] px-[2.19rem] text-[1.13rem]",
    "10xl": "h-[5.50rem] sm:h-[3rem] px-[2.19rem] text-[1.75rem]",
    xl: "h-[2.94rem] px-[1.81rem] text-[1.56rem]",
    md: "h-[2.63rem] px-[2.19rem] text-[1.56rem] sm:text-[0.8rem]",
    sm: "h-[1.81rem] px-[1.00rem] text-[0.81rem]",
    "2xl": "h-[3.00rem] px-[0.69rem] text-[1.31rem]",
    lg: "h-[2.69rem]",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "lg",
    color,
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center hover:-translate-y-1 transition ease-in-out duration-100 justify-center text-center cursor-pointer s-center ${(shape && shapes[shape]) || ""} ${(variant && variants[variant]?.[color]) || ""} ${(size && sizes[size]) || ""}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf([
        "3xl",
        "9xl",
        "7xl",
        "6xl",
        "13xl",
        "8xl",
        "xs",
        "12xl",
        "11xl",
        "5xl",
        "4xl",
        "10xl",
        "xl",
        "md",
        "sm",
        "2xl",
        "lg",
    ]),
    variant: PropTypes.oneOf(["fill", "gradient", "outline"]),
    color: PropTypes.oneOf([
        "blue_gray_100_03",
        "black_900_01",
        "gray_50_01",
        "blue_gray_900_0c",
        "indigo_50",
        "blue_gray_900",
        "white_A700_01",
        "indigo_800_indigo_800_00",
        "blue_gray_100",
    ]),
};

export { Button };