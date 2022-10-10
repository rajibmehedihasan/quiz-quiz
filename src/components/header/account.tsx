import AccountIcon from "../../images/account.svg";

function Account() {
    return (
        <div className="flex items-center text-xs gap-2 font-bold">
            <img src={AccountIcon} alt="Account Icon" />
            <a href="signup.html">Signup</a>
            {/* <span className="material-icons-outlined" title="Logout">
                logout
            </span> */}
        </div>
    );
}

export default Account;
