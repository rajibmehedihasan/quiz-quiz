function TextInput(props: any) {
    const { icon, ...rest } = props;
    return (
        <div className="flex h-[50px] w-full items-center rounded-[5px] border border-[#e5e5e5] bg-white p-[2px]">
            <input
                className="h-full w-full border-0 bg-white py-1 px-3 font-medium outline-none"
                {...rest}
            />
            <span className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center">
                {icon}
            </span>
        </div>
    );
}

export default TextInput;
