import RegisterForm from "../components/auth/RegisterForm";
import Navbar from "../components/Navbar";

const Register = () => {
    return (
        <div className="flex flex-col text-center">
            <Navbar />
            <div className="mt-10">
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
