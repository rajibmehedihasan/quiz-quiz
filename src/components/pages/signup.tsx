import Illustration from "../form/illustration";
import SignupImage from "../../images/signup.svg";
import SignupForm from "../form/signup";

function Signup() {
    return (
        <>
            <h1 className="text-[2em] font-bold text-primary-color">Create an account</h1>

            <div className="grid grid-cols-2 gap-4">
                <Illustration imageSrc={SignupImage} />
                <SignupForm />
            </div>
        </>
    );
}

export default Signup;
