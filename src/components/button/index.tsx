import React from "react";
interface Props {
    btnText: string;
    btnIcon?: string;
    className?: string;
}

function Button(props: any) {
    const { btnText, className, btnIcon, ...rest } = props;
    return (
        <button
            className={`group flex cursor-pointer items-center justify-center gap-[10px] rounded-lg border-0 bg-[#00ff84] py-[0.6rem] px-5 text-[15px] font-semibold uppercase text-primary-color hover:bg-primary-color hover:text-white ${className}`}
            {...rest}
        >
            {btnText}
            {btnIcon && (
                <img className="h-6 w-6 group-hover:invert " src={btnIcon} alt="Button Icon" />
            )}
        </button>
    );
}

export default Button;
