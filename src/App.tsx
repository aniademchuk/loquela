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
import UserSettings from "./pages/UserSettings";
import Progress from "./pages/Progress";
import Grammar from "./pages/Grammar";
import Writing from "./pages/Writing";
import Reading from "./pages/Reading";
import EverydayLesson from "./pages/EverydayLesson";
import Support from "./pages/Support";
import Recommendations from "./pages/Recommendations";

initializeApp(firebaseConfig);

function App() {
    return (
        <BrowserRouter>
            <Toaster position="bottom-right" />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/entry-test" element={<EntryTest />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/home"
                    element={
                        <AuthRoute>
                            <Home />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/progress"
                    element={
                        <AuthRoute>
                            <Progress />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/grammar"
                    element={
                        <AuthRoute>
                            <Grammar />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/writing"
                    element={
                        <AuthRoute>
                            <Writing />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/reading"
                    element={
                        <AuthRoute>
                            <Reading />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/everyday-lesson"
                    element={
                        <AuthRoute>
                            <EverydayLesson />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/recommendations"
                    element={
                        <AuthRoute>
                            <Recommendations />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/support"
                    element={
                        <AuthRoute>
                            <Support />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/user-settings"
                    element={
                        <AuthRoute>
                            <UserSettings />
                        </AuthRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
