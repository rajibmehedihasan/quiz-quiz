import React from "react";
// import { Link } from "react-router-dom";

interface Props {
    brandSrc: string;
    brandAlt: string;
    brandText: string;
}

function Brand(props: Props) {
    const { brandSrc, brandAlt, brandText } = props;
    return (
        <a href="index.html" className="flex items-center">
            <img className="w-8 mr-2.5" src={brandSrc} alt={brandAlt} />
            <span className="block font-bold text-[18px] leading-[19px]">{brandText}</span>
        </a>
    );
}

export default Brand;
