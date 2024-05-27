import { Spinner } from "flowbite-react";
import SideBar from "../components/layout/SideBar";
import { useUser } from "../context/UserContext";
import React from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { AnswerReviewRequest, DescriptionData, ReadingQuestionRequest } from "../interfaces/AiRequests";
import ExerciseWrapper from "../components/layout/ExerciseWrapper";

const descriptionData: DescriptionData = {
    mainHeading: "Welcome to Reading Practice!",
    smallDescription:
        "Whether you are a beginner or an advanced learner, we have something for everyone. You'll receive engaging reading texts generated by AI, tailored to your proficiency level.",
    paragraphs: [
        "For advanced levels, you'll get comprehensive reading texts designed to challenge and enhance your understanding. Beginners will receive simpler texts and a few sentences to help build their foundational skills.",
        "We recommend practicing each given topic diligently and not skipping any questions. To maximize your learning, avoid copying text directly when answering questions. Instead, type everything manually to better practice and understand the material.",
        "Submit your answers to receive a comprehensive review of what you did correctly and areas where you can improve.",
        "We wish you good luck and lots of fun on your journey to improving your reading skills!",
    ],
};

const Reading = () => {
    const { userData, setUserData } = useUser();

    const functions = getFunctions();
    const getReadingQuestion = httpsCallable<ReadingQuestionRequest, string>(functions, "getReadingQuestion");
    const checkReadingAnswer = httpsCallable<AnswerReviewRequest, string>(functions, "checkReadingAnswer");

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
                pageType="reading"
                userData={userData}
                setUserData={setUserData}
                generateQuestion={getReadingQuestion}
                generateAnswerReview={checkReadingAnswer}
                descriptionData={descriptionData}
            />
        </SideBar>
    );
};

export default Reading;
