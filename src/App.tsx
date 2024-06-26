import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { HashRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/auth/AuthRoute";
import EntryTest from "./pages/EntryTest";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/welcome/Welcome";
import UserSettings from "./pages/UserSettings";
import Progress from "./pages/Progress";
import Grammar from "./pages/Grammar";
import Writing from "./pages/Writing";
import Reading from "./pages/Reading";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/config";
import { useTranslation } from "react-i18next";
import { getLanguage } from "./helper/LocalStoreHelper";
import PageNotFound from "./pages/PageNotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

initializeApp(firebaseConfig);

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(getLanguage()).then();
    }, [i18n]);

    return (
        <HashRouter>
            <Toaster position="bottom-right" />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
                    path="/test"
                    element={
                        <AuthRoute>
                            <EntryTest />
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
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
