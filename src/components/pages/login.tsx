import Illustration from "../form/illustration";
import LoginImage from "../../images/login.svg";
import LoginForm from "../form/login";

function Login() {
    return (
        <>
            <h1 className="text-[2em] font-bold text-primary-color">Login to your account</h1>

            <div className="grid grid-cols-2 gap-4">
                <Illustration imageSrc={LoginImage} />
                <LoginForm />
            </div>
        </>
    );
}

export default Login;
