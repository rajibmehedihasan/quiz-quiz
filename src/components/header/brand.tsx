import { Link } from "react-router-dom";

interface Props {
    brandSrc: string;
    brandAlt: string;
    brandText: string;
}

function Brand(props: Props) {
    const { brandSrc, brandAlt, brandText } = props;
    return (
        <Link to="/" className="flex items-center">
            <img className="mr-2.5 w-8" src={brandSrc} alt={brandAlt} />
            <span className="block text-[18px] font-bold leading-[19px]">{brandText}</span>
        </Link>
    );
}

export default Brand;
