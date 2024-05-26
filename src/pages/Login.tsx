import Navbar from "../components/layout/Navbar";
import LoginForm from "../components/auth/LoginForm";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/home");
            }
        });
    }, [auth, navigate]);

    return (
        <>
            <Navbar />
            <div className="mt-10 text-center">
                <LoginForm />
            </div>
        </>
    );
};

export default Login;
