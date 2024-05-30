import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { getFunctions, httpsCallable } from "firebase/functions";
import { RegisterUser } from "../../interfaces/user";
import { Spinner } from "flowbite-react";
import { useTranslation } from "react-i18next";

const validateCredentials = (
    email: string,
    fullName: string,
    pass1: string,
    pass2: string,
    learnLanguage: string,
    timezone: string,
    termsAccepted: boolean
) => {
    if (pass1 !== pass2) {
        toast.error("Passwords don't match");
        return false;
    }

    if (!termsAccepted) {
        toast.error("Accept terms and conditions");
        return false;
    }

    if (!email || !fullName || !pass1 || !timezone || !learnLanguage) {
        toast.error("Missing some user data. Please double check input values.");
        return false;
    }

    return true;
};

const RegisterForm = () => {
    const [user, setUser] = useState<RegisterUser>({
        email: "",
        password: "",
        fullName: "",
        learnLanguage: "English",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [secureCode, setSecureCode] = useState<string>("");
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const { t } = useTranslation();

    const functions = getFunctions();
    const register = httpsCallable(functions, "registerUser");

    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        if (
            validateCredentials(
                user.email,
                user.fullName,
                password,
                confirmPassword,
                user.learnLanguage,
                user.timezone,
                termsAccepted
            )
        ) {
            setUser((prevState) => ({ ...prevState, password }));
            register({ ...user, password, secureCode })
                .then(() => {
                    toast.success("User registered successfully.");
                    navigate("/login");
                })
                .catch((err) => {
                    toast.error("User register failed: " + err.message);
                })
                .finally(() => setLoading(false));
        }
    };

    return (
        <form className="max-w-md mx-auto" onSubmit={handleRegister}>
            <div className="mb-5">
                <h1 className="text-4xl font-bold my-12">{t("registerForm.title")}</h1>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    {t("registerForm.email")}
                </label>
                <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                    placeholder="example@gmail.com"
                    onChange={(event) => {
                        setUser((prevState) => ({ ...prevState, email: event.target.value }));
                    }}
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    {t("registerForm.name")}
                </label>
                <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                    placeholder="Mykhailo Lebigovich"
                    onChange={(event) => {
                        setUser((prevState) => ({ ...prevState, fullName: event.target.value }));
                    }}
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    {t("registerForm.password")}
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(event) => setPassword(event.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">
                    {t("registerForm.repeatPassword")}
                </label>
                <input
                    type="password"
                    id="repeat-password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">
                    {t("registerForm.secureCode")}
                </label>
                <input
                    type="text"
                    id="secure-dev-code"
                    onChange={(event) => setSecureCode(event.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                    required
                />
            </div>
            <div className="flex items-start mt-6 mb-5">
                <div className="flex items-center h-5">
                    <input
                        id="terms"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300"
                        onChange={(event) => setTermsAccepted(event.target.checked)}
                        required
                    />
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">
                    {t("registerForm.terms1")}{" "}
                    <Link to="/" className="text-cyan-600 hover:underline">
                        {t("registerForm.terms2")}
                    </Link>
                </label>
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className={`flex flex-row mt-4 space-x-2 text-white ${termsAccepted ? "bg-cyan-700 hover:bg-cyan-800" : "bg-gray-600 cursor-not-allowed"} focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                    disabled={!termsAccepted || loading}
                >
                    <span className="text-[16px]">{t("registerForm.button")}</span> {loading && <Spinner />}
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
