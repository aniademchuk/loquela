import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

interface AuthRouteProps {
    children: React.ReactNode;
}

const AuthRoute = ({ children }: AuthRouteProps) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                navigate("/login");
                setLoading(false);
            }
        });
    }, [auth, navigate]);

    if (loading)
        return (
            <div className="flex items-center justify-center h-full" style={{ minHeight: "80vh" }}>
                <Spinner className="h-24 w-24" />
            </div>
        );

    return <>{children}</>;
};

export default AuthRoute;
