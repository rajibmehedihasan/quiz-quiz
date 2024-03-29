import Header from "../header";

interface Props {
    children?: JSX.Element[] | JSX.Element;
}

function Layout(props: Props) {
    return (
        <>
            <Header />
            <div className="w-full py-16">
                <div className="mx-auto my-8 w-[90%]">{props.children}</div>
            </div>
        </>
    );
}

export default Layout;
