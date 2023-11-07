import Account from "./account";
import Brand from "./brand";
import Logo from "../../images/logo-bg.png";

function Header() {
    return (
        <header className="header fixed z-[999] w-full bg-white py-3.5 shadow">
            <div className="mx-[30px]">
                <div className="flex items-center justify-between">
                    <Brand brandSrc={Logo} brandText="Quiz App" brandAlt="Quiz App" />
                    <Account />
                </div>
            </div>
        </header>
    );
}

export default Header;
