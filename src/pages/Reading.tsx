import { Button, Card, Spinner, TextInput } from "flowbite-react";
import SideBar from "../components/SideBar";
import { useUser } from "../context/UserContext";
import React, { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import toast from "react-hot-toast";
import { formatUserLanguage } from "../helper/LangFormatter";
import { getLanguage } from "../helper/LocalStoreHelper";

interface QuestionRequest {
    userLanguage: string;
}

interface AnswerReviewRequest {
    userLanguage: string;
    userLearnLanguage: string;
    userAnswer: string;
    question: string;
}

interface ChatResponse {
    result: string;
}

const Reading = () => {
    const { userData } = useUser();
    const [chatQuestion, setChatQuestion] = useState("");
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [chatAnswerReview, setChatAnswerReview] = useState<string>("");
    const [questionLoading, setQuestionLoading] = useState(false);
    const [answerReviewLoading, setAnswerReviewLoading] = useState(false);
    const functions = getFunctions();
    const generateQuestion = httpsCallable<unknown, string>(functions, "getReadingEng");
    const checkReadingAnswer = httpsCallable<unknown, string>(functions, "checkReadingAnswer");

    if (!userData) {
        return <Spinner />;
    }
    const handleQuestionGeneration = async () => {
        setQuestionLoading(true);
        const data = {
            userLanguage: "English",
        };
        await generateQuestion(data)
            .then((response) => {
                const result = response.data;
                setChatQuestion(result);
                toast.success("API call was successful");
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
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
                    <p className="font-normal text-gray-700 dark:text-gray-400">{chatQuestion}</p>
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
