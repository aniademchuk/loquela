import { TbPencilCheck, TbTextGrammar } from "react-icons/tb";
import { FaBook, FaBookOpen } from "react-icons/fa";
import { BiStar } from "react-icons/bi";
import { GiStairsGoal } from "react-icons/gi";
import React from "react";

export interface FeatureCard {
    icon: JSX.Element;
    heading: string;
    description: string;
}

export const featuresCardsEN: FeatureCard[] = [
    {
        icon: <TbPencilCheck color="white" size={26} />,
        heading: "Writing",
        description: "Enhance your writing skills with AI-generated tasks and detailed reviews.",
    },
    {
        icon: <FaBookOpen color="white" size={26} />,
        heading: "Reading",
        description: "Boost your reading abilities with tailored exercises and comprehensive feedback.",
    },
    {
        icon: <TbTextGrammar color="white" size={26} />,
        heading: "Grammar",
        description: "Master grammar rules through AI-powered tasks and in-depth analyses.",
    },
    {
        icon: <FaBook color="white" size={26} />,
        heading: "Vocabulary",
        description: "Expand your vocabulary with new prompts and word enrichment activities.",
    },
    {
        icon: <BiStar color="white" size={26} />,
        heading: "Language Level",
        description: "Assess and elevate your language proficiency with personalized exercises.",
    },
    {
        icon: <GiStairsGoal color="white" size={26} />,
        heading: "Progress",
        description: "Track your daily practice streak, total lessons, and overall progress.",
    },
];

export const featuresCardsUA: FeatureCard[] = [
    {
        icon: <TbPencilCheck color="white" size={26} />,
        heading: "Письмо",
        description: "Покращуйте свої навички письма за допомогою завдань, створених AI, та детальних оглядів.",
    },
    {
        icon: <FaBookOpen color="white" size={26} />,
        heading: "Читання",
        description:
            "Покращуйте свої навички читання за допомогою індивідуальних вправ і всебічного зворотного зв’язку.",
    },
    {
        icon: <TbTextGrammar color="white" size={26} />,
        heading: "Граматика",
        description: "Оволодівайте правилами граматики за допомогою завдань на основі AI та глибокого аналізу.",
    },
    {
        icon: <FaBook color="white" size={26} />,
        heading: "Словниковий запас",
        description: "Розширюйте свій словниковий запас за допомогою нових підказок та завдань для збагачення слів.",
    },
    {
        icon: <BiStar color="white" size={26} />,
        heading: "Рівень мови",
        description: "Оцінюйте та підвищуйте свій рівень володіння мовою за допомогою індивідуальних вправ.",
    },
    {
        icon: <GiStairsGoal color="white" size={26} />,
        heading: "Прогрес",
        description: "Відстежуйте свою щоденну практику, загальну кількість уроків і загальний прогрес.",
    },
];

export const featuresCardsDE: FeatureCard[] = [
    {
        icon: <TbPencilCheck color="white" size={26} />,
        heading: "Schreiben",
        description:
            "Verbessern Sie Ihre Schreibfähigkeiten mit AI-generierten Aufgaben und detaillierten Bewertungen.",
    },
    {
        icon: <FaBookOpen color="white" size={26} />,
        heading: "Lesen",
        description: "Steigern Sie Ihre Lesefähigkeiten mit maßgeschneiderten Übungen und umfassendem Feedback.",
    },
    {
        icon: <TbTextGrammar color="white" size={26} />,
        heading: "Grammatik",
        description: "Beherrschen Sie Grammatikregeln durch KI-gestützte Aufgaben und tiefgehende Analysen.",
    },
    {
        icon: <FaBook color="white" size={26} />,
        heading: "Wortschatz",
        description: "Erweitern Sie Ihren Wortschatz mit neuen Aufgaben und Wortbereicherungsaktivitäten.",
    },
    {
        icon: <BiStar color="white" size={26} />,
        heading: "Sprachniveau",
        description: "Bewerten und verbessern Sie Ihre Sprachkenntnisse mit personalisierten Übungen.",
    },
    {
        icon: <GiStairsGoal color="white" size={26} />,
        heading: "Fortschritt",
        description:
            "Verfolgen Sie Ihre täglichen Übungsserien, die Gesamtheit der Lektionen und Ihren Gesamtfortschritt.",
    },
];
