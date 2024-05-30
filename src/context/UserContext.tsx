import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { UserMain } from "../interfaces/user";
import { getAuth } from "firebase/auth";
import { get, getDatabase, ref } from "firebase/database";
import toast from "react-hot-toast";
import { getFunctions, httpsCallable } from "firebase/functions";
import { useTranslation } from "react-i18next";

const UserContext = createContext<
    { userData: UserMain | null; setUserData: React.Dispatch<React.SetStateAction<UserMain | null>> } | undefined
>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<UserMain | null>(null);
    const auth = getAuth();
    const db = getDatabase();
    const functions = getFunctions();
    const checkUserStreak = httpsCallable(functions, "checkUserStreak");
    const { t } = useTranslation();

    const fetchUserData = useCallback(async (userId: string) => {
        await checkUserStreak();

        const userMain: Partial<UserMain> = {};

        const fetchSubObject = async (key: keyof UserMain) => {
            const dataRef = ref(db, `${key}/${userId}`);
            const snapshot = await get(dataRef);
            if (snapshot.exists()) {
                userMain[key] = snapshot.val();
            } else {
                toast.error(t("contextError"));
            }
        };

        await Promise.all([
            fetchSubObject("users"),
            fetchSubObject("user_practice_stats"),
            fetchSubObject("user_lang_level"),
            fetchSubObject("user_reminders"),
        ]);

        setUserData(userMain as UserMain);
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                fetchUserData(user.uid).then();
            } else {
                setUserData(null);
            }
        });

        return () => unsubscribe();
    }, [auth, fetchUserData]);

    return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
