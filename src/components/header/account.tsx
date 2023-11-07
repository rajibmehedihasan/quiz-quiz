import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AccountIcon from "../../images/account.svg";

function Account() {
    const { currentUser, logout } = useAuth();
    return (
        <div className="flex items-center gap-2 text-xs font-bold">
            {currentUser ? (
                <>
                    <img src={AccountIcon} alt="Account Icon" />{" "}
                    <span>{currentUser.displayName} </span>{" "}
                    <button className="border-0 p-0" onClick={logout}>
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            )}

            {/* <span className="material-icons-outlined" title="Logout">
                logout
            </span> */}
        </div>
    );
}

export default Account;
