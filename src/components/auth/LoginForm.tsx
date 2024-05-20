import { browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogin = (event: any) => {
        event.preventDefault();
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
            });
    };

    return (
        <form className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold mt-12 mb-20">Login to Your Account</h1>
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
                className={`mt-4 text-white ${email === "" || password === "" ? "bg-gray-600 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                onClick={(event) => handleLogin(event)}
                disabled={email === "" && password === ""}
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
