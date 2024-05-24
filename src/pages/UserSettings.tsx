import SideBar from "../components/SideBar";
import NotificationsCard from "../components/user-settings/NotificationsCard";
import GeneralCard from "../components/user-settings/GeneralCard";
import { Spinner } from "flowbite-react";
import PasswordCard from "../components/user-settings/PasswordCard";
import { useUser } from "../context/UserContext";
import { getAuth } from "firebase/auth";
import DeleteUserAccountButton from "../components/user-settings/DeleteUserAccountButton";

const UserSettings = () => {
    const { userData, setUserData } = useUser();
    const auth = getAuth();

    if (!userData || !auth) {
        return <Spinner />;
    }

    return (
        <SideBar>
            <h1 className="text-4xl font-bold w-full text-center">User Settings Page</h1>
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
