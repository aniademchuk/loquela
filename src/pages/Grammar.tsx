import { Spinner } from "flowbite-react";
import SideBar from "../components/layout/SideBar";
import { useUser } from "../context/UserContext";
import React from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { AnswerReviewRequest, DescriptionData, GrammarQuestionRequest } from "../interfaces/AiRequests";
import ExerciseWrapper from "../components/layout/ExerciseWrapper";
import { useTranslation } from "react-i18next";

const descriptionDataEN: DescriptionData = {
    mainHeading: "Let's Practice Grammar!",
    smallDescription:
        "Whether you are a beginner or an advanced learner, we have something for everyone. You'll receive grammar exercises tailored to your proficiency level, with intentional errors to identify and correct.",
    paragraphs: [
        "For beginners, you'll receive simpler sentences and words to help build your foundational skills. Advanced learners will get more complex texts designed to challenge and enhance your grammatical understanding.",
        "Each task is generated by ChatGPT, providing you with unique and engaging sentences or texts that contain intentional errors. Your goal is to identify these errors and provide the corrected version.",
        "Submit your answers to receive a comprehensive review of what you did correctly and areas where you can improve. Detailed feedback will be provided to help you understand the right and wrong aspects of your corrections.",
        "We wish you good luck and lots of fun on your journey to mastering grammar!",
    ],
    taskDescription: "Task is to find grammar mistakes and correct them.",
};

const descriptionDataDE: DescriptionData = {
    mainHeading: "Lassen Sie uns Grammatik üben!",
    smallDescription:
        "Egal, ob Sie Anfänger oder Fortgeschrittener sind, wir haben für jeden etwas dabei. Sie erhalten auf Ihr Sprachniveau abgestimmte Grammatikübungen mit absichtlichen Fehlern, die Sie identifizieren und korrigieren sollen.",
    paragraphs: [
        "Für Anfänger gibt es einfachere Sätze und Wörter, um Ihre grundlegenden Fähigkeiten aufzubauen. Fortgeschrittene Lernende erhalten komplexere Texte, die darauf abzielen, Ihr grammatikalisches Verständnis zu fördern und herauszufordern.",
        "Jede Aufgabe wird von ChatGPT generiert und bietet Ihnen einzigartige und ansprechende Sätze oder Texte mit absichtlichen Fehlern. Ihr Ziel ist es, diese Fehler zu identifizieren und die korrigierte Version bereitzustellen.",
        "Reichen Sie Ihre Antworten ein, um eine umfassende Überprüfung dessen zu erhalten, was Sie richtig gemacht haben und wo Sie sich verbessern können. Detailliertes Feedback wird bereitgestellt, um Ihnen zu helfen, die richtigen und falschen Aspekte Ihrer Korrekturen zu verstehen.",
        "Wir wünschen Ihnen viel Glück und viel Spaß auf Ihrem Weg, die Grammatik zu meistern!",
    ],
    taskDescription: "Die Aufgabe besteht darin, Grammatikfehler zu finden und zu korrigieren.",
};

const descriptionDataUA: DescriptionData = {
    mainHeading: "Давайте практикувати граматику!",
    smallDescription:
        "Незалежно від того, чи ви початківець або досвідчений учень, у нас є щось для кожного. Ви отримаєте граматичні вправи, пристосовані до вашого рівня володіння мовою, з навмисними помилками, які потрібно виявити та виправити.",
    paragraphs: [
        "Для початківців будуть надані простіші речення та слова, щоб допомогти побудувати ваші базові навички. Досвідчені учні отримають складніші тексти, які покликані кинути виклик та поглибити ваше розуміння граматики.",
        "Кожне завдання генерується ChatGPT, надаючи вам унікальні та цікаві речення або тексти з навмисними помилками. Ваше завдання - виявити ці помилки та надати виправлену версію.",
        "Надсилайте свої відповіді, щоб отримати всебічний огляд того, що ви зробили правильно, та де ви можете покращитись. Детальний зворотній зв'язок допоможе вам зрозуміти правильні та неправильні аспекти ваших виправлень.",
        "Бажаємо вам удачі та багато задоволення на вашому шляху до оволодіння граматикою!",
    ],
    taskDescription: "Завдання полягає у виявленні граматичних помилок та їх виправленні.",
};

const descriptionDataMap: Record<string, DescriptionData> = {
    en: descriptionDataEN,
    ua: descriptionDataUA,
    de: descriptionDataDE,
};

const Grammar = () => {
    const { userData, setUserData } = useUser();
    const { i18n } = useTranslation();

    const functions = getFunctions();
    const getGrammarQuestion = httpsCallable<GrammarQuestionRequest, string>(functions, "getGrammarQuestion");
    const checkGrammarAnswer = httpsCallable<AnswerReviewRequest, string>(functions, "checkGrammarAnswer");

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
                pageType="grammar"
                userData={userData}
                setUserData={setUserData}
                generateQuestion={getGrammarQuestion}
                generateAnswerReview={checkGrammarAnswer}
                descriptionData={descriptionData}
            />
        </SideBar>
    );
};

export default Grammar;
