import { Button, Card, Label, Spinner, Textarea } from "flowbite-react";
import SideBar from "../components/SideBar";
import { useUser } from "../context/UserContext";
import React, { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { formatUserLevel } from "../helper/LevelFormatter";
import { formatUserLanguage } from "../helper/LangFormatter";
import { getLanguage } from "../helper/LocalStoreHelper";
import toast from "react-hot-toast";
import NoTestCard from "../components/NoTestCard";

interface AnswerReviewRequest {
    userLanguage: string;
    userLearnLanguage: string;
    userAnswer: string;
    question: string;
}

interface GrammarQuestionRequest {
    userLevel: string;
    userLearnLanguage: string;
}

const Grammar = () => {
    const { userData } = useUser();
    const [chatTask, setChatTask] = useState<string>("");
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [questionLoading, setQuestionLoading] = useState(false);
    const [reviewLoading, setReviewLoading] = useState(false);

    const functions = getFunctions();
    const generateGrammarQuestion = httpsCallable<GrammarQuestionRequest, string>(functions, "getGrammarQuestion");
    const checkGrammarAnswer = httpsCallable<AnswerReviewRequest, string>(functions, "checkGrammarAnswer");

    if (!userData) {
        return <Spinner />;
    }

    const hasLevel =
        (userData.users.learnLanguage === "English" && userData.user_lang_level.english !== 0) ||
        (userData.users.learnLanguage === "German" && userData.user_lang_level.german !== 0) ||
        (userData.users.learnLanguage === "Ukrainian" && userData.user_lang_level.ukrainian !== 0);

    const handleQuestionGeneration = async () => {
        setQuestionLoading(true);

        const userLangLevels: { [key: string]: number } = {
            English: userData.user_lang_level.english,
            Ukrainian: userData.user_lang_level.ukrainian,
            German: userData.user_lang_level.german,
        };

        const userLevel = userLangLevels[userData.users.learnLanguage];

        const data: GrammarQuestionRequest = {
            userLevel: formatUserLevel(userLevel),
            userLearnLanguage: userData.users.learnLanguage,
        };

        console.log(data);

        await generateGrammarQuestion(data)
            .then((response) => {
                setChatTask(response.data);
            })
            .catch((error) => {
                toast.error(error.message);
            })
            .finally(() => setQuestionLoading(false));
    };

    const handleUserAnswerReview = async () => {
        setReviewLoading(true);

        const data: AnswerReviewRequest = {
            userLanguage: formatUserLanguage(getLanguage()),
            userLearnLanguage: userData.users.learnLanguage,
            userAnswer: userAnswer,
            question: chatTask,
        };

        await checkGrammarAnswer(data)
            .then((response) => {
                const container = document.getElementById("responseContainerGrammar");
                if (container) {
                    container.innerHTML = response.data;
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setReviewLoading(false);
            });
    };

    return (
        <SideBar>
            <h1 className="text-4xl font-bold w-full text-center">Grammar Page</h1>
            {hasLevel ? (
                <Card className="mt-12">
                    <div className="flex justify-center">
                        <Button onClick={handleQuestionGeneration}>Start</Button>
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Question</h5>
                    {questionLoading ? (
                        <Spinner />
                    ) : (
                        <p className="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-wrap">{chatTask}</p>
                    )}
                    {chatTask !== "" && (
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="Your message" />
                            </div>
                            <Textarea
                                id="comment"
                                placeholder="Leave a comment..."
                                required
                                rows={20}
                                onChange={(e) => setUserAnswer(e.target.value)}
                            />
                        </div>
                    )}
                    <div className="flex justify-center">
                        <Button onClick={handleUserAnswerReview} disabled={userAnswer === ""}>
                            Check the Answer!
                        </Button>
                    </div>

                    {reviewLoading && <Spinner />}
                    <div id="responseContainerGrammar" className="whitespace-pre-wrap list-disc"></div>

                    <Button
                        onClick={() => {
                            setChatTask("");
                            setUserAnswer("");
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

export default Grammar;
