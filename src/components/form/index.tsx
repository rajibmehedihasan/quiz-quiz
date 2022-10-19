interface Props {
    children: JSX.Element[] | JSX.Element;
    className: string;
}

function Form(props: Props) {
    const { className, ...rest } = props;
    return (
        <form className={`grid grid-cols-1 py-8 ${className}`} {...rest}>
            {props.children}
        </form>
    );
}

export default Form;
