import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PageNotFound = () => {
    const auth = getAuth();

    return (
        <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
            <div className="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 className="mb-4 text-4xl font-bold">404</h1>
                <p className="pt-2 text-gray-600">Oops! The page you are looking for could not be found.</p>
                <Link
                    to={auth.currentUser ? "/home" : "/"}
                    className="mt-8 inline-block rounded-xl bg-cyan-700 px-4 py-2 font-semibold text-white hover:bg-cyan-800"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
