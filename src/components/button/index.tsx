import React from "react";
interface Props {
    btnText: string;
    className?: string;
}

function Button(props: any) {
    const { btnText, className, ...rest } = props;
    return (
        <button
            className={`flex cursor-pointer items-center justify-center gap-[10px] rounded-lg border-0 bg-[#00ff84] py-[0.6rem] px-5 text-[15px] font-semibold uppercase text-primary-color hover:bg-primary-color hover:text-white ${className}`}
            {...rest}
        >
            {btnText}
        </button>
    );
}

export default Button;

// background: var(--successGreen);
// color: var(--fontPrimary);
// padding: 0.6rem 1.2rem;
// font-weight: 600;
// font-size: 15px;
// text-transform: uppercase;
// display: flex;
// justify-content: center;
// align-items: center;
// gap: 10px;
// border-radius: 8px;
// cursor: pointer;
// border: 0px;
