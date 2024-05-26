import { Spinner } from "flowbite-react";
import SideBar from "../components/layout/SideBar";
import { useUser } from "../context/UserContext";
import React from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { AnswerReviewRequest, DescriptionData, WritingQuestionRequest } from "../interfaces/AiRequests";
import ExerciseWrapper from "../components/layout/ExerciseWrapper";

const descriptionData: DescriptionData = {
    mainHeading: "Practice Your Writing Skills!",
    smallDescription:
        "Whether you are a beginner translating simple words and sentences or an advanced learner writing texts, articles, and letters, we have something for everyone.",
    paragraphs: [
        "Each task is generated by ChatGPT, providing you with unique and engaging topics. We recommend practicing each given topic to broaden your imagination and expand your active vocabulary. While some topics might seem out of context, they are designed to challenge you and improve your writing abilities. If a suggested topic doesn't suit your preference, you can easily regenerate a new one.",
        "Submit your answers to receive a comprehensive review of what you did correctly and areas where you can improve.",
        "We wish you good luck and lots of fun on your journey to improving your language level skills!",
    ],
};

const Writing = () => {
    const { userData } = useUser();

    const functions = getFunctions();
    const getWritingQuestion = httpsCallable<WritingQuestionRequest, string>(functions, "getWritingQuestion");
    const checkWritingAnswer = httpsCallable<AnswerReviewRequest, string>(functions, "checkWritingAnswer");

    if (!userData) {
        return (
            <div className="flex items-center justify-center h-full" style={{ minHeight: "80vh" }}>
                <Spinner className="h-24 w-24" />
            </div>
        );
    }

    return (
        <SideBar>
            <ExerciseWrapper
                pageType="writing"
                userData={userData}
                generateQuestion={getWritingQuestion}
                generateAnswerReview={checkWritingAnswer}
                descriptionData={descriptionData}
            />
        </SideBar>
    );
};

export default Writing;
