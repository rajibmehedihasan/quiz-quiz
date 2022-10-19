interface Props {
    imageSrc: string;
}

function Illustration(props: Props) {
    const { imageSrc } = props;
    return (
        <div className="py-20 px-8 ">
            <img src={imageSrc} alt="Illustration image" />
        </div>
    );
}

export default Illustration;
