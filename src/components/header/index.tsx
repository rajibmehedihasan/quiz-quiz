import Account from "./account";
import Brand from "./brand";
import Logo from "../../images/logo-bg.png";

function Header() {
    return (
        <header className="header bg-white fixed shadow w-full z-[999] py-3.5">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Brand brandSrc={Logo} brandText="Quiz App" brandAlt="Quiz App" />
                    <Account />
                </div>
            </div>
        </header>
    );
}

export default Header;
