import SideBar from "../components/layout/SideBar";
import NotificationsCard from "../components/user-settings/NotificationsCard";
import GeneralCard from "../components/user-settings/GeneralCard";
import { Spinner } from "flowbite-react";
import PasswordCard from "../components/user-settings/PasswordCard";
import { useUser } from "../context/UserContext";
import { getAuth } from "firebase/auth";
import DeleteUserAccountButton from "../components/user-settings/DeleteUserAccountButton";
import { useTranslation } from "react-i18next";
import React from "react";

const UserSettings = () => {
    const { userData, setUserData } = useUser();
    const auth = getAuth();
    const { t } = useTranslation();

    if (!userData || !auth) {
        return (
            <div className="flex items-center justify-center h-full" style={{ minHeight: "80vh" }}>
                <Spinner className="h-24 w-24" />
            </div>
        );
    }

    return (
        <SideBar>
            <h1 className="text-4xl font-bold w-full text-center">{t("settings.title")}</h1>
            <div className="my-10 flex flex-col gap-10">
                <GeneralCard userData={userData} setUserData={setUserData} />
                <PasswordCard auth={auth} />
                <NotificationsCard userData={userData} setUserData={setUserData} />
                <DeleteUserAccountButton />
            </div>
        </SideBar>
    );
};

export default UserSettings;
