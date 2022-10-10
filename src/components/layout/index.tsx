import Header from "../header";

interface Props {
    children?: JSX.Element[] | JSX.Element;
}

function Layout(props: Props) {
    return (
        <>
            <Header />
            <div className="w-full py-16">
                <div className="container">{props.children}</div>
            </div>
        </>
    );
}

export default Layout;
