import Illustration from "../form/illustration";
import LoginImage from "../../images/login.svg";
import Form from "../form";
import TextInput from "../form/text-input";
import Button from "../button";

function Login() {
    return (
        <>
            <h1 className="text-[2em] font-bold text-primary-color">Login to your account</h1>

            <div className="grid grid-cols-2 gap-4">
                <Illustration imageSrc={LoginImage} />
                <Form className="h-[330px]">
                    <TextInput type="email" placeholder="Enter email" icon={""} />
                    <TextInput type="password" placeholder="Enter password" icon={""} />
                    <Button type="submit" className="mt-8 h-[44px]" btnText="Login Now" />

                    <div className="mt-4 text-center">
                        Don&apos;t have an account? <a href="signup.html">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Login;
