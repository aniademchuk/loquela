import { Button, Card, Spinner, TextInput } from "flowbite-react";
import SideBar from "../components/SideBar";
import { useUser } from "../context/UserContext";
import React, { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import toast from "react-hot-toast";
import { formatUserLanguage } from "../helper/LangFormatter";
import { getLanguage } from "../helper/LocalStoreHelper";
import { formatUserLevel } from "../helper/LevelFormatter";
import NoTestCard from "../components/NoTestCard";

interface AnswerReviewRequest {
    userLanguage: string;
    userLearnLanguage: string;
    userAnswer: string;
    question: string;
}

interface QuestionRequest {
    userLevel: string;
    userLearnLanguage: string;
}

const Reading = () => {
    const { userData } = useUser();
    const [chatQuestion, setChatQuestion] = useState("");
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [chatAnswerReview, setChatAnswerReview] = useState<string>("");
    const [questionLoading, setQuestionLoading] = useState(false);
    const [answerReviewLoading, setAnswerReviewLoading] = useState(false);
    const functions = getFunctions();
    const generateQuestion = httpsCallable<QuestionRequest, string>(functions, "getReadingQuestion");
    const checkReadingAnswer = httpsCallable<AnswerReviewRequest, string>(functions, "checkReadingAnswer");

    if (!userData) {
        return <Spinner />;
    }

    const hasLevel =
        (userData.users.learnLanguage === "English" && userData.user_lang_level.english !== 0) ||
        (userData.users.learnLanguage === "German" && userData.user_lang_level.german !== 0) ||
        (userData.users.learnLanguage === "Ukrainian" && userData.user_lang_level.ukrainian !== 0);

    const handleQuestionGeneration = async () => {
        setQuestionLoading(true);

        const userLangLevels = {
            English: userData.user_lang_level.english,
            Ukrainian: userData.user_lang_level.ukrainian,
            German: userData.user_lang_level.german,
        };

        const userLevel = userLangLevels[formatUserLanguage(getLanguage())] || userData.user_lang_level.english;

        const data = {
            userLevel: formatUserLevel(userLevel),
            userLearnLanguage: userData.users.learnLanguage,
        };

        await generateQuestion(data)
            .then((response) => {
                setChatQuestion(response.data);
            })
            .catch((error) => {
                toast.error(error.message);
            })
            .finally(() => setQuestionLoading(false));
    };

    const handleUserAnswerReview = async () => {
        setAnswerReviewLoading(true);

        const data: AnswerReviewRequest = {
            userLanguage: formatUserLanguage(getLanguage()),
            userLearnLanguage: userData.users.learnLanguage,
            userAnswer: userAnswer,
            question: chatQuestion,
        };

        await checkReadingAnswer(data)
            .then((response) => {
                setChatAnswerReview(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setAnswerReviewLoading(false);
            });
    };

    return (
        <SideBar>
            <h1 className="text-4xl font-bold w-full text-center">Reading Page</h1>
            {hasLevel ? (
                <Card className="mt-12">
                    <div className="flex justify-center">
                        <Button onClick={handleQuestionGeneration}>Start</Button>
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Question</h5>
                    {questionLoading ? (
                        <Spinner />
                    ) : (
                        <p className="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-wrap">
                            {chatQuestion}
                        </p>
                    )}
                    {chatQuestion !== "" && (
                        <TextInput value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
                    )}
                    <div className="flex justify-center">
                        <Button onClick={handleUserAnswerReview} disabled={userAnswer === ""}>
                            Check the Answer!
                        </Button>
                    </div>

                    {answerReviewLoading ? (
                        <Spinner />
                    ) : (
                        <p className="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-wrap">
                            {chatAnswerReview}
                        </p>
                    )}

                    <Button
                        onClick={() => {
                            setChatQuestion("");
                            setUserAnswer("");
                            setChatAnswerReview("");
                        }}
                    >
                        Practice more!
                    </Button>
                </Card>
            ) : (
                <NoTestCard />
            )}
        </SideBar>
    );
};

export default Reading;
