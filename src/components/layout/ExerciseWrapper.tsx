import { UserMain } from "../../interfaces/user";
import { getFunctions, httpsCallable, HttpsCallable } from "firebase/functions";
import { AnswerReviewRequest, DescriptionData } from "../../interfaces/AiRequests";
import React, { Dispatch, SetStateAction, useState } from "react";
import { formatUserLevel } from "../../helper/LevelFormatter";
import { formatUserLanguage } from "../../helper/LangFormatter";
import { getLanguage } from "../../helper/LocalStoreHelper";
import toast from "react-hot-toast";
import { Button, Card, Label, Spinner, Textarea, Tooltip } from "flowbite-react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import NoEntryTestResultsCard from "../NoEntryTestResultsCard";

interface UpdatePracticeDataResponse {
    daily_streak: number;
    total_lessons: number;
    total_days_learning: number;
}

type Page = "writing" | "reading" | "grammar";

interface ExerciseWrapperProps {
    pageType: Page;
    userData: UserMain;
    setUserData: Dispatch<SetStateAction<UserMain | null>>;
    generateQuestion: HttpsCallable<any, string>;
    generateAnswerReview: HttpsCallable<AnswerReviewRequest, string>;
    descriptionData: DescriptionData;
}

const ExerciseWrapper: React.FC<ExerciseWrapperProps> = ({
    pageType,
    userData,
    setUserData,
    generateQuestion,
    generateAnswerReview,
    descriptionData,
}) => {
    const functions = getFunctions();
    const updatePracticeData = httpsCallable<void, UpdatePracticeDataResponse>(functions, "updatePracticeData");

    const [chatTask, setTask] = useState<string>("");
    const [userAnswer, setUserAnswer] = useState<string>("");
    const localStorageKey = `showDetails-${pageType}`;

    const [showDetails, setShowDetails] = useState<boolean>(() => {
        const savedState = localStorage.getItem(localStorageKey);
        return savedState !== null ? JSON.parse(savedState) : true;
    });

    const [exerciseCard, setExerciseCard] = useState<{ triggered: boolean; loading: boolean }>({
        triggered: false,
        loading: false,
    });

    const [reviewCard, setReviewCard] = useState<{ triggered: boolean; loading: boolean }>({
        triggered: false,
        loading: false,
    });

    const hasLevel =
        (userData.users.learnLanguage === "English" && userData.user_lang_level.english !== 0) ||
        (userData.users.learnLanguage === "German" && userData.user_lang_level.german !== 0) ||
        (userData.users.learnLanguage === "Ukrainian" && userData.user_lang_level.ukrainian !== 0);

    const handleToggleDetails = () => {
        setShowDetails((prevState) => {
            const newState = !prevState;
            localStorage.setItem(localStorageKey, JSON.stringify(newState));
            return newState;
        });
    };

    const handleQuestionGeneration = async () => {
        setExerciseCard(() => ({
            triggered: true,
            loading: true,
        }));

        setReviewCard({
            triggered: false,
            loading: false,
        });

        const userLangLevels: { [key: string]: number } = {
            English: userData.user_lang_level.english,
            Ukrainian: userData.user_lang_level.ukrainian,
            German: userData.user_lang_level.german,
        };

        const userLevel = userLangLevels[userData.users.learnLanguage];

        let data;

        if (pageType === "writing") {
            data = {
                userLevel: formatUserLevel(userLevel),
                userLanguage: formatUserLanguage(getLanguage()),
                userLearnLanguage: userData.users.learnLanguage,
            };
        } else {
            data = {
                userLevel: formatUserLevel(userLevel),
                userLearnLanguage: userData.users.learnLanguage,
            };
        }

        await generateQuestion(data)
            .then((response) => {
                setTask(response.data);
                toast.success("Exercise generated successfully, if you don't see it, please scroll down.", {
                    duration: 5000,
                });
            })
            .catch(() => {
                toast.error("Something went wrong, please contact support or try again.");
            })
            .finally(() =>
                setExerciseCard((prevState) => ({
                    ...prevState,
                    loading: false,
                }))
            );
    };

    const handleUserAnswerReview = async () => {
        await updatePracticeData().then((response) => {
            const data = response.data;
            const newUserData: UserMain = {
                ...userData,
                user_practice_stats: {
                    total_lessons: data.total_lessons,
                    total_days_learning: data.total_days_learning,
                    daily_streak: data.daily_streak,
                },
            };

            setUserData(newUserData);
        });

        setReviewCard({
            triggered: true,
            loading: true,
        });

        const data: AnswerReviewRequest = {
            userLanguage: formatUserLanguage(getLanguage()),
            userLearnLanguage: userData.users.learnLanguage,
            userAnswer: userAnswer,
            question: chatTask,
        };

        await generateAnswerReview(data)
            .then((response) => {
                const container = document.getElementById("responseContainerWriting");
                if (container) {
                    container.innerHTML = response.data;
                }
                toast.success("Review generated successfully, if you don't see it, please scroll down.", {
                    duration: 5000,
                });
            })
            .catch(() => {
                toast.error("Something went wrong, please contact support or try again.");
            })
            .finally(() => {
                setReviewCard((prevState) => ({
                    ...prevState,
                    loading: false,
                }));
            });
    };

    return (
        <div className="flex flex-col gap-10">
            <Card className="mt-4 rounded-2xl">
                <h3 className="flex flex-row text-xl items-center font-bold justify-center gap-3">
                    {descriptionData.mainHeading}
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <Tooltip content={`${showDetails ? "Hide Details" : "Show Details"}`} style="light">
                        <button className="mt-1 border border-gray-700 rounded-lg p-1" onClick={handleToggleDetails}>
                            <FaRegCircleQuestion size={20} />
                        </button>
                    </Tooltip>
                </h3>
                <div className="text-center">{descriptionData.smallDescription}</div>
                <div className={showDetails ? "block space-y-3 text-center" : "hidden"}>
                    {descriptionData.paragraphs.map((paragraph, index) => (
                        <div key={paragraph + index}>{paragraph}</div>
                    ))}
                    <div className="pt-6 font-semibold text-cyan-700">
                        Note: You can hide these details by clicking the question mark next to the heading.
                    </div>
                </div>
                {hasLevel && (
                    <div className="flex justify-center">
                        <Button onClick={handleQuestionGeneration} className="mt-4" disabled={exerciseCard.loading}>
                            <span className="text-[15px]">Start the Exercise 🔥</span>
                        </Button>
                    </div>
                )}
            </Card>
            {!hasLevel && <NoEntryTestResultsCard />}
            {exerciseCard.triggered && (
                <Card className="rounded-2xl">
                    <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900">Exercise</h5>
                    {exerciseCard.loading ? (
                        <div className="flex justify-center py-2">
                            <Spinner className="h-12 w-12" />
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {descriptionData.taskDescription && <p>{descriptionData.taskDescription}</p>}
                            <p className="text-md font-normal text-justify whitespace-pre-wrap">{chatTask}</p>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="comment" value="Your answer:" />
                                </div>
                                <Textarea
                                    id="comment"
                                    placeholder="Leave a comment..."
                                    required
                                    rows={4}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-center">
                                <Button
                                    onClick={handleUserAnswerReview}
                                    disabled={userAnswer === "" || reviewCard.loading}
                                >
                                    <span>Check the Answer!</span>
                                </Button>
                            </div>
                        </div>
                    )}
                </Card>
            )}
            {reviewCard.triggered && (
                <Card className="rounded-2xl">
                    <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900">Detailed Review</h5>
                    {reviewCard.loading && (
                        <div className="flex justify-center py-2">
                            <Spinner className="h-12 w-12" />
                        </div>
                    )}
                    <div id="responseContainerWriting" className="whitespace-pre-wrap list-disc"></div>
                    {!reviewCard.loading && (
                        <div className="flex justify-center mt-4 font-semibold text-cyan-600">
                            Note: If you want to practice more, simply press the start exercise button again.
                        </div>
                    )}
                </Card>
            )}
        </div>
    );
};

export default ExerciseWrapper;
