import SideBar from "../components/layout/SideBar";
import { useUser } from "../context/UserContext";
import { Spinner } from "flowbite-react";
import React from "react";
import EntryTestWrapper from "../components/entry-tests/EntryTestWrapper";
import { englishTestQuestions } from "../constants/EnglishTestQuestions";
import { ukrainianTestQuestions } from "../constants/UkrainianTestQuestions";
import { germanTestQuestions } from "../constants/GermanTestQuestions";

const EntryTest = () => {
    const { userData, setUserData } = useUser();

    if (!userData) {
        return (
            <div className="flex items-center justify-center h-full" style={{ minHeight: "80vh" }}>
                <Spinner className="h-24 w-24" />
            </div>
        );
    }

    return (
        <>
            <SideBar>
                <div className="flex flex-col px-[20px]">
                    {userData.users.learnLanguage === "English" && (
                        <EntryTestWrapper
                            entryTestType="english"
                            questionsArray={englishTestQuestions}
                            testTitle="English Entry Test:"
                            userData={userData}
                            setUserData={setUserData}
                        />
                    )}
                    {userData.users.learnLanguage === "Ukrainian" && (
                        <EntryTestWrapper
                            entryTestType="ukrainian"
                            questionsArray={ukrainianTestQuestions}
                            testTitle="Тест на знання української мови:"
                            userData={userData}
                            setUserData={setUserData}
                        />
                    )}
                    {userData.users.learnLanguage === "German" && (
                        <EntryTestWrapper
                            entryTestType="german"
                            questionsArray={germanTestQuestions}
                            testTitle="Deutsch Einstufungstest:"
                            userData={userData}
                            setUserData={setUserData}
                        />
                    )}
                </div>
            </SideBar>
        </>
    );
};

export default EntryTest;
