import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "./index";
import TextInput from "./text-input";
import Button from "../button";
import { useAuth } from "../../contexts/AuthContext";

function LoginForm() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { email, password } = data;

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to Login!!!");
        }
    };
    return (
        <Form
            className="h-[330px]"
            onSubmit={(e: React.FormEvent<HTMLInputElement>) => {
                handleSubmit(e);
            }}
        >
            <TextInput
                name="email"
                type="email"
                placeholder="Enter email"
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                }}
                icon={""}
            />
            <TextInput
                name="password"
                type="password"
                placeholder="Enter password"
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                }}
                icon={""}
            />
            <Button type="submit" className="mt-8 h-[44px]" btnText="Login Now" />

            <div className="mt-4 text-center">
                Don&apos;t have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
}

export default LoginForm;
