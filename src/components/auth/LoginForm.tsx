import { browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                return signInWithEmailAndPassword(auth, email, password);
            })
            .then(() => {
                navigate("/home");
            })
            .catch((error) => {
                if (error.code === "auth/invalid-credential") {
                    toast.error("Wrong email or password");
                }
            })
            .finally(() => setLoading(false));
    };

    return (
        <form className="max-w-md mx-auto" onSubmit={handleLogin}>
            <h1 className="text-4xl font-bold mt-20 mb-10">Log In</h1>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="example@gmail.com"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Your password
                </label>
                <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </div>
            <button
                type="submit"
                className={`mt-4 space-x-2 text-white ${email === "" || password === "" ? "bg-gray-600 cursor-not-allowed" : "bg-cyan-700 hover:bg-cyan-800"} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center`}
                disabled={email === "" && password === ""}
            >
                <span>Login</span> {loading && <Spinner />}
            </button>
        </form>
    );
};

export default LoginForm;
