import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "./index";
import TextInput from "./text-input";
import Button from "../button";
import { useAuth } from "../../contexts/AuthContext";

function SignupForm() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isChecked: false,
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { signUp } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setData({
            ...data,
            isChecked,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { email, password, username, confirmPassword } = data;

        if (password !== confirmPassword) {
            setError("Password don't Match");
        }

        try {
            setError("");
            setLoading(true);
            await signUp(email, password, username);
            navigate("/"); // Return the promise
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create an account!");
        }
    };

    return (
        <Form
            className="h-[500px]"
            onSubmit={(e: React.FormEvent<HTMLInputElement>) => {
                e.preventDefault(); // Remove the nested function call
                handleSubmit(e);
            }}
        >
            <TextInput
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                }}
                value={data.username}
                name="username"
                type="text"
                placeholder="Enter name"
                icon={""}
                required
            />
            <TextInput
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                }}
                value={data.email}
                name="email"
                type="email"
                placeholder="Enter email"
                icon={""}
                required
            />
            <TextInput
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                }}
                value={data.password}
                name="password"
                type="password"
                placeholder="Enter password"
                icon={""}
                required
            />
            <TextInput
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                }}
                value={data.confirmPassword}
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                icon={""}
                required
            />
            <label className="mt-4">
                <input
                    type="checkbox"
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange(e);
                    }}
                />{" "}
                <span>I agree to the Terms &amp; Conditions</span>
            </label>
            <Button type="submit" className="mt-8 h-[44px]" btnText="Signup Now" />
            <div className="mt-4 text-center">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
}

export default SignupForm;
