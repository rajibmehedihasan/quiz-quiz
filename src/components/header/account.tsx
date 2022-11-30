import { Link } from "react-router-dom";
import AccountIcon from "../../images/account.svg";

function Account() {
    return (
        <div className="flex items-center gap-2 text-xs font-bold">
            <img src={AccountIcon} alt="Account Icon" />
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            {/* <span className="material-icons-outlined" title="Logout">
                logout
            </span> */}
        </div>
    );
}

export default Account;
