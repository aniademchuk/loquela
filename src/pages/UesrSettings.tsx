import SideBar from "../components/SideBar";
import { Card } from "flowbite-react";

const UserSettings = () => {
    return (
        <SideBar>
            <h1 className="text-4xl font-bold w-full text-center">User Settings Page</h1>
            <div className="px-8 py-4">
                <Card href="#" className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                        order.
                    </p>
                </Card>
            </div>
        </SideBar>
    );
};

export default UserSettings;
