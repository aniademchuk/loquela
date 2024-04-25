import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (usr) => {
            if (usr) {
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
