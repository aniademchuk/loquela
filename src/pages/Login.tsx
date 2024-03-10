import Navbar from "../components/Navbar";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="mt-10">
                <LoginForm />
            </div>
        </>
    );
};

export default Login;
