import Illustration from "../form/illustration";
import SignupImage from "../../images/signup.svg";
import Form from "../form";
import TextInput from "../form/text-input";
import Button from "../button";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <>
            <h1 className="text-[2em] font-bold text-primary-color">Create an account</h1>

            <div className="grid grid-cols-2 gap-4">
                <Illustration imageSrc={SignupImage} />
                <Form className="h-[500px]">
                    <TextInput type="text" placeholder="Enter name" icon={""} />
                    <TextInput type="email" placeholder="Enter email" icon={""} />
                    <TextInput type="password" placeholder="Enter password" icon={""} />
                    <TextInput type="password" placeholder="Confirm password" icon={""} />
                    <label className="mt-4">
                        <input type="checkbox" /> <span>I agree to the Terms &amp; Conditions</span>
                    </label>
                    <Button type="submit" className="mt-8 h-[44px]" btnText="Signup Now" />
                    <div className="mt-4 text-center">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Signup;
