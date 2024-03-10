import { getAuth, signOut } from "firebase/auth";

const LogoutButton = () => {
    const auth = getAuth();
    const handleLogout = () => {
        signOut(auth)
            .then(() => console.log("Success"))
            .catch((err) => console.log(err.message));
    };

    return (
        <button
            onClick={handleLogout}
            className="px-4 py-2 w-40 rounded-2xl bg-blue-600 hover:bg-blue-800 text-white text-2xl"
        >
            Log Out
        </button>
    );
};

export default LogoutButton;
