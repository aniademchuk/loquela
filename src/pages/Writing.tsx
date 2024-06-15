import { Spinner } from "flowbite-react";
import SideBar from "../components/layout/SideBar";
import { useUser } from "../context/UserContext";
import React from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { AnswerReviewRequest, DescriptionData, WritingQuestionRequest } from "../interfaces/AiRequests";
import ExerciseWrapper from "../components/layout/ExerciseWrapper";
import { useTranslation } from "react-i18next";

const descriptionDataEN: DescriptionData = {
    mainHeading: "Practice Your Writing Skills!",
    smallDescription:
        "Whether you are a beginner translating simple words and sentences or an advanced learner writing texts, articles, and letters, we have something for everyone.",
    paragraphs: [
        "Each task is generated by ChatGPT, providing you with unique and engaging topics. We recommend practicing each given topic to broaden your imagination and expand your active vocabulary. While some topics might seem out of context, they are designed to challenge you and improve your writing abilities. If a suggested topic doesn't suit your preference, you can easily regenerate a new one.",
        "Submit your answers to receive a comprehensive review of what you did correctly and areas where you can improve.",
        "We wish you good luck and lots of fun on your journey to improving your language level skills!",
    ],
};

const descriptionDataDE: DescriptionData = {
    mainHeading: "Üben Sie Ihre Schreibfähigkeiten!",
    smallDescription:
        "Egal, ob Sie Anfänger sind und einfache Wörter und Sätze übersetzen oder fortgeschrittener Lernender sind und Texte, Artikel und Briefe schreiben, wir haben für jeden etwas dabei.",
    paragraphs: [
        "Jede Aufgabe wird von ChatGPT generiert und bietet Ihnen einzigartige und ansprechende Themen. Wir empfehlen, jedes gegebene Thema zu üben, um Ihre Vorstellungskraft zu erweitern und Ihren aktiven Wortschatz zu vergrößern. Während einige Themen aus dem Kontext gerissen erscheinen mögen, sind sie darauf ausgelegt, Sie herauszufordern und Ihre Schreibfähigkeiten zu verbessern. Wenn ein vorgeschlagenes Thema nicht Ihren Vorlieben entspricht, können Sie leicht ein neues regenerieren.",
        "Reichen Sie Ihre Antworten ein, um eine umfassende Überprüfung dessen zu erhalten, was Sie richtig gemacht haben und wo Sie sich verbessern können.",
        "Wir wünschen Ihnen viel Glück und viel Spaß auf Ihrem Weg, Ihre Sprachkenntnisse zu verbessern!",
    ],
};

const descriptionDataUA: DescriptionData = {
    mainHeading: "Практикуйте свої навички письма!",
    smallDescription:
        "Незалежно від того, чи ви початківець, що перекладає прості слова та речення, або досвідчений учень, що пише тексти, статті та листи, у нас є щось для кожного.",
    paragraphs: [
        "Кожне завдання генерується ChatGPT, надаючи вам унікальні та цікаві теми. Ми рекомендуємо практикувати кожну запропоновану тему, щоб розширити свою уяву та збільшити свій активний словниковий запас. Хоча деякі теми можуть здаватися поза контекстом, вони розроблені для того, щоб кинути вам виклик і покращити ваші навички письма. Якщо запропонована тема не підходить вашим вподобанням, ви можете легко згенерувати нову.",
        "Надсилайте свої відповіді, щоб отримати всебічний огляд того, що ви зробили правильно, та де ви можете покращитись.",
        "Бажаємо вам удачі та багато задоволення на вашому шляху до вдосконалення своїх мовних навичок!",
    ],
};

const descriptionDataMap: Record<string, DescriptionData> = {
    en: descriptionDataEN,
    ua: descriptionDataUA,
    de: descriptionDataDE,
};

const Writing = () => {
    const { userData, setUserData } = useUser();
    const { i18n } = useTranslation();

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

    const descriptionData = descriptionDataMap[i18n.language];

    return (
        <SideBar>
            <ExerciseWrapper
                pageType="writing"
                userData={userData}
                setUserData={setUserData}
                generateQuestion={getWritingQuestion}
                generateAnswerReview={checkWritingAnswer}
                descriptionData={descriptionData}
            />
        </SideBar>
    );
};

export default Writing;
