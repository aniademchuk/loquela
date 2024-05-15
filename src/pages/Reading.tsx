import { Button, Card, Spinner, TextInput } from "flowbite-react";
import SideBar from "../components/SideBar";
import { useUser } from "../context/UserContext";
import React, { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import toast from "react-hot-toast";
import { formatUserLanguage } from "../helper/LangFormatter";
import { getLanguage } from "../helper/LocalStoreHelper";
import { formatUserLevel } from "../helper/LevelFormatter";

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
    const handleQuestionGeneration = async () => {
        setQuestionLoading(true);

        const data = {
            userLevel: formatUserLevel(userData.user_lang_level.english),
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
                toast.success("API call was successful");
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
            <Card>
                <div className="flex justify-center">
                    <Button onClick={handleQuestionGeneration}>Start</Button>
                </div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Question</h5>
                {questionLoading ? (
                    <Spinner />
                ) : (
                    <p className="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-wrap">{chatQuestion}</p>
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
                    <p className="font-normal text-gray-700 dark:text-gray-400">{chatAnswerReview}</p>
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
        </SideBar>
    );
};

export default Reading;
