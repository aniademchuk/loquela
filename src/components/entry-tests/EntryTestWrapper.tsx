import { Button, Card, Modal, Spinner } from "flowbite-react";
import React, { useState } from "react";
import QuestionCard from "../QuestionCard";
import { Question } from "../../interfaces/Question";
import { getFunctions, httpsCallable } from "firebase/functions";
import toast from "react-hot-toast";
import { UserMain } from "../../interfaces/user";
import { formatUserLevel } from "../../helper/LevelFormatter";
import { useTranslation } from "react-i18next";

type TestType = "english" | "german" | "ukrainian";

interface CalculateUserLangLevelRequest {
    testResult: number;
    testType: TestType;
}

interface EntryTestWrapperProps {
    entryTestType: TestType;
    questionsArray: Question[];
    testTitle: string;
    userData: UserMain;
    setUserData: React.Dispatch<React.SetStateAction<UserMain | null>>;
}

const EntryTestWrapper: React.FC<EntryTestWrapperProps> = ({
    entryTestType,
    testTitle,
    questionsArray,
    userData,
    setUserData,
}) => {
    const [result, setResult] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState(false);

    const { t } = useTranslation();

    const functions = getFunctions();
    const calcAndUpdateLangLevel = httpsCallable<CalculateUserLangLevelRequest, number>(
        functions,
        "calculateUserLangLevel"
    );

    const handleTestFinish = async () => {
        setLoading(true);
        const data: CalculateUserLangLevelRequest = {
            testType: entryTestType,
            testResult: result,
        };

        try {
            const response = await calcAndUpdateLangLevel(data);
            const level = response.data;

            const updatedUserData = getUpdatedUserData(userData, entryTestType, level);

            setUserData(updatedUserData);
        } catch (error) {
            toast.error(t("test.errorToast"));
        } finally {
            setLoading(false);
            setOpenModal(true);
        }
    };

    const getUpdatedUserData = (userData: UserMain, testType: TestType, level: number) => {
        switch (testType) {
            case "english":
                return {
                    ...userData,
                    user_lang_level: {
                        ...userData.user_lang_level,
                        english: level,
                    },
                };
            case "ukrainian":
                return {
                    ...userData,
                    user_lang_level: {
                        ...userData.user_lang_level,
                        ukrainian: level,
                    },
                };
            case "german":
                return {
                    ...userData,
                    user_lang_level: {
                        ...userData.user_lang_level,
                        german: level,
                    },
                };
            default:
                return userData;
        }
    };

    const getUserLevel = () => {
        switch (entryTestType) {
            case "english":
                return formatUserLevel(userData.user_lang_level.english);
            case "ukrainian":
                return formatUserLevel(userData.user_lang_level.ukrainian);
            case "german":
                return formatUserLevel(userData.user_lang_level.german);
            default:
                formatUserLevel(userData.user_lang_level.english);
        }
    };

    return (
        <React.Fragment>
            <p className="py-6 flex justify-center text-4xl font-medium text-gray-900">{testTitle}</p>
            <Card className="rounded-2xl border-cyan-600">
                {questionsArray.map((question, index) => (
                    <div key={index}>
                        <QuestionCard
                            key={index + question.question}
                            setResult={setResult}
                            description={question.description}
                            question={question.question}
                            options={question.options}
                            answer={question.answer}
                            points={question.points}
                        />
                        <hr />
                    </div>
                ))}
                <div className="mt-2 flex justify-center">
                    <button
                        onClick={handleTestFinish}
                        className="flex px-4 py-2 gap-3 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-lg items-center"
                    >
                        <span>{t("test.testButton")}</span>
                        {loading && <Spinner />}
                    </button>
                </div>
            </Card>
            <Modal show={openModal} size="lg" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center space-y-6">
                        <h3 className="mb-5 text-xl font-medium text-gray-700">
                            🎉 {t("test.congratulations")} 🎉 <div>{t("test.level")}</div>
                        </h3>
                        <div className="text-[50px] font-bold text-black">{getUserLevel()}</div>
                        <div className="flex justify-center content-center gap-4">
                            <Button onClick={() => setOpenModal(false)}>
                                <span className="text-lg">OK</span>
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default EntryTestWrapper;
