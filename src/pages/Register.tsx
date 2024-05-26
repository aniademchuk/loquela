import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
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
                <RegisterForm />
            </div>
        </>
    );
};

export default Register;
