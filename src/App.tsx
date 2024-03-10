import React from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import AuthRoute from "./components/auth/AuthRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";

initializeApp(firebaseConfig);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route
                    path="/home"
                    element={
                        <AuthRoute>
                            <Home />
                        </AuthRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
