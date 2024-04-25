import { initializeApp } from "firebase/app";
import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/auth/AuthRoute";
import { firebaseConfig } from "./firebase/config";
import EntryTest from "./pages/EntryTest";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";

initializeApp(firebaseConfig);

function App() {
    return (
        <BrowserRouter>
            <Toaster position="bottom-right" />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/entry-test" element={<EntryTest />} />
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
