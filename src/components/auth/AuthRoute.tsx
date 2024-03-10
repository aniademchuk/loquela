import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface AuthRouteProps {
    children: React.ReactNode;
}

const AuthRoute = ({ children }: AuthRouteProps) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                navigate("/login");
            }
        });
    }, [auth, navigate]);

    if (loading) return <h1>Loading</h1>;

    return <>{children}</>;
};

export default AuthRoute;
