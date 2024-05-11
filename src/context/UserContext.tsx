import React, { createContext, useContext, useEffect, useState } from "react";
import { UserMain } from "../interfaces/user";
import { getAuth } from "firebase/auth";
import { get, getDatabase, ref } from "firebase/database";

const UserContext = createContext<
    { userData: UserMain | null; setUserData: React.Dispatch<React.SetStateAction<UserMain | null>> } | undefined
>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<UserMain | null>(null);
    const auth = getAuth();
    const db = getDatabase();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                fetchUserData(user.uid).then();
            } else {
                setUserData(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    const fetchUserData = async (userId: string) => {
        const userMain: Partial<UserMain> = {};

        const fetchSubObject = async (key: keyof UserMain) => {
            const dataRef = ref(db, `${key}/${userId}`);
            const snapshot = await get(dataRef);
            if (snapshot.exists()) {
                userMain[key] = snapshot.val();
            } else {
                console.log(`No data available for ${key}`);
            }
        };

        await Promise.all([
            fetchSubObject("users"),
            fetchSubObject("user_practice_stats"),
            fetchSubObject("user_lang_level"),
            fetchSubObject("user_reminders"),
        ]);

        setUserData(userMain as UserMain);
    };

    return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};