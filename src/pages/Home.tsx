import SideBar from "../components/SideBar";
import LogoutButton from "../components/auth/LogoutButton";
import { useUser } from "../context/UserContext";
import { Spinner } from "flowbite-react";

const Home = () => {
    const { userData } = useUser();

    if (!userData) return <Spinner />;

    return (
        <>
            <SideBar>
                <div className="flex flex-col text-center ">
                    <h1 className="mt-20 text-3xl">
                        Hey <span className="font-bold text-blue-600">{userData.users.fullName}</span>. Welcome to
                        Loquela!
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
