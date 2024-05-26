import Navbar from "../components/layout/Navbar";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
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
