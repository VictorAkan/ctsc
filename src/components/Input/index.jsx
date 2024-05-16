import PropTypes from "prop-types";
import React from "react";

const shapes = {
    round: "rounded-[20px]",
};
const variants = {
    fill: {
        blue_gray_100_03: "bg-[#d9d9d9] text-[#3a3a3a]",
    },
    outline: {
        blue_gray_100: "border-[#cac9d6] border border-solid text-[#676576]",
    },
};
const sizes = {
    sm: "h-[5.56rem] px-[2.19rem] text-[1.38rem]",
    xs: "h-[3.75rem] pl-[1.13rem] pr-[2.19rem] text-[0.94rem]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name ="",
            placeholder = "",
            type = "text",
            children,
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "sm",
            color = "blue_gray_100_03",
            ...restProps
        },
        ref,
    ) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.value);
        };

        return (
            <>
                <label className={`${className} flex items-center justify-center cursor-text ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}>
                    {!!label && label}
                    {!!prefix && prefix}
                    <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
                    {!!suffix && suffix}
                </label>
            </>
        );
    },
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    onChange: PropTypes.func,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["sm", "xs"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf(["blue_gray-100_03", "blue_gray_100"]),
};

export { Input };