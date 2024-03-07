import React from "react";
import LoginForm from "./components/LoginForm";

function App() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-[56px] text-red-600">
                    Welcome to Loquela!
                </h1>
                <h4 className="text-2xl">
                    Enjoy your best learning web application.
                </h4>
                <div className="mt-20 pl-20">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default App;
