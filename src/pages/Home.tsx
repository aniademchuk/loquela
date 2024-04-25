import { getAuth } from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import { useState } from "react";
import SideBar from "../components/SideBar";
import LogoutButton from "../components/auth/LogoutButton";

const Home = () => {
    const auth = getAuth();
    const db = getDatabase();
    const user = auth.currentUser;
    const [name, setName] = useState<string>("");

    if (user) {
        const nameRef = ref(db);
        get(child(nameRef, `users/${user.uid}/name`)).then((snapshot) => {
            if (snapshot.exists()) {
                setName(snapshot.val());
            }
        });
    }

    return (
        <>
            <SideBar>
                <div className="flex flex-col text-center ">
                    <h1 className="mt-20 text-3xl">
                        Hey <span className="font-bold text-blue-600">{name}</span>. Welcome to Loquela!
                    </h1>
                    <div className="mt-10">
                        <LogoutButton />
                    </div>
                </div>
            </SideBar>
        </>
    );
};

export default Home;
