import RegisterForm from "../components/auth/RegisterForm";
import Navbar from "../components/Navbar";

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="mt-10">
                <RegisterForm />
            </div>
        </>
    );
};

export default Register;
