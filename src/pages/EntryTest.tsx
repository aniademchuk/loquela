import SideBar from "../components/SideBar";
import EnglishEntryTest from "../components/entryTests/EnglishEntryTest";
import { useUser } from "../context/UserContext";
import UkrainianEntryTest from "../components/entryTests/UkrainianEntryTest";
import { Spinner } from "flowbite-react";

const EntryTest = () => {
    const { userData } = useUser();

    if (!userData) return <Spinner />;

    return (
        <>
            <SideBar>
                <div className="flex flex-col px-[20px]">
                    {userData.users.learnLanguage === "English" && <EnglishEntryTest />}
                    {userData.users.learnLanguage === "Ukrainian" && <UkrainianEntryTest />}
                </div>
            </SideBar>
        </>
    );
};

export default EntryTest;
