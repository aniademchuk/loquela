import SideBar from "../components/SideBar";
import NotificationsCard from "../components/preferences/NotificationsCard";
import GeneralCard from "../components/preferences/GeneralCard";

const UserSettings = () => {
    return (
        <SideBar>
            <h1 className="text-4xl font-bold w-full text-center">User Settings Page</h1>
            <div className="my-10 flex flex-col gap-10">
                <GeneralCard />
                <NotificationsCard />
            </div>
        </SideBar>
    );
};

export default UserSettings;
