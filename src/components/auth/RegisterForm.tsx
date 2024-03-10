import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const validateCredentials = (email: string, name: string, pass1: string, pass2: string, termsAccepted: boolean) => {
    return email !== "" && name !== "" && pass1 !== "" && pass1 === pass2 && termsAccepted;
};

const RegisterForm = () => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
    const auth = getAuth();
    const navigate = useNavigate();
    const db = getDatabase();

    const handleRegister = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();

        if (validateCredentials(email, name, password, confirmPassword, termsAccepted)) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    set(ref(db, "users/" + user.uid), {
                        email: user.email,
                        name: name,
                    }).then();

                    navigate("/home");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode);
                    console.log(errorMessage);
                });
        } else {
            if (password !== confirmPassword) {
                toast.error("Passwords don't match.");
            }
            if (!termsAccepted) {
                toast.error("Please accept terms and conditions.");
            }
        }
    };

    return (
        <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@flowbite.com"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Your name
                </label>
                <input
                    type="name"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Boris Kalbasov"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
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
                    onChange={(event) => setPassword(event.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">
                    Repeat password
                </label>
                <input
                    type="password"
                    id="repeat-password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input
                        id="terms"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        onChange={(event) => setTermsAccepted(event.target.checked)}
                        required
                    />
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">
                    I agree with the{" "}
                    <Link to="/" className="text-blue-600 hover:underline">
                        terms and conditions
                    </Link>
                </label>
            </div>
            <button
                type="button"
                className={`text-white ${termsAccepted ? "bg-blue-700 hover:bg-blue-800" : "bg-gray-600 cursor-not-allowed"} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                onClick={(event) => handleRegister(event)}
                disabled={!termsAccepted}
            >
                Register new account
            </button>
        </form>
    );
};

export default RegisterForm;
