interface Props {
    id?: string;
    className?: string;
    text?: string;
}
function CheckBox(props: Props) {
    const { id, className, text } = props;
    return (
        <label className={`checkbox ${className ?? ""}`} htmlFor={id}>
            <input className="mr-2" type="checkbox" id={id} /> {text}
        </label>
    );
}

export default CheckBox;
