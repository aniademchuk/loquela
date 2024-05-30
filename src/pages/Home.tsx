import SideBar from "../components/layout/SideBar";
import { useUser } from "../context/UserContext";
import { Blockquote, Card, Spinner } from "flowbite-react";
import React from "react";
import { formatUserLevel } from "../helper/LevelFormatter";
import { TbLanguage } from "react-icons/tb";
import { GoTrophy } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { IoInfiniteOutline } from "react-icons/io5";
import { GiDiamondHard } from "react-icons/gi";
import { BiError } from "react-icons/bi";
import { useTranslation } from "react-i18next";

type RecommendationsCard = {
    icon: JSX.Element;
    description: string;
};

const recommendationsCardsEN: RecommendationsCard[] = [
    {
        icon: <IoInfiniteOutline size={36} color="balck" />,
        description: "Practice consistently every day, even briefly, as regularity is crucial for steady progress.",
    },
    {
        icon: <GiDiamondHard size={36} color="balck" />,
        description: "Challenge yourself by engaging in more demanding tasks and tests beyond your comfort zone.",
    },
    {
        icon: <BiError size={36} color="balck" />,
        description:
            "Accept that errors are a natural part of learning; carefully analyze and learn from each mistake.",
    },
];

const recommendationsCardsUA: RecommendationsCard[] = [
    {
        icon: <IoInfiniteOutline size={36} color="black" />,
        description:
            "Практикуйтеся регулярно кожен день, навіть коротко, оскільки регулярність є ключовою для стабільного прогресу.",
    },
    {
        icon: <GiDiamondHard size={36} color="black" />,
        description: "Викликайте себе, виконуючи більш складні завдання та тести за межами своєї зони комфорту.",
    },
    {
        icon: <BiError size={36} color="black" />,
        description:
            "Прийміть, що помилки є природною частиною навчання; ретельно аналізуйте та вчіться з кожної помилки.",
    },
];

const recommendationsCardsDE: RecommendationsCard[] = [
    {
        icon: <IoInfiniteOutline size={36} color="black" />,
        description:
            "Üben Sie jeden Tag konsequent, auch wenn es nur kurz ist, da Regelmäßigkeit entscheidend für stetigen Fortschritt ist.",
    },
    {
        icon: <GiDiamondHard size={36} color="black" />,
        description:
            "Fordern Sie sich heraus, indem Sie sich auf anspruchsvollere Aufgaben und Tests außerhalb Ihrer Komfortzone einlassen.",
    },
    {
        icon: <BiError size={36} color="black" />,
        description:
            "Akzeptieren Sie, dass Fehler ein natürlicher Teil des Lernens sind; analysieren Sie jeden Fehler sorgfältig und lernen Sie daraus.",
    },
];

const languageTranslations: Record<string, Record<string, string>> = {
    English: {
        en: "English",
        ua: "Англійська",
        de: "Englisch",
    },
    Ukrainian: {
        en: "Ukrainian",
        ua: "Українська",
        de: "Ukrainisch",
    },
    German: {
        en: "German",
        ua: "Німецька",
        de: "Deutsch",
    },
};

const recommendationsCardsMap: Record<string, RecommendationsCard[]> = {
    en: recommendationsCardsEN,
    ua: recommendationsCardsUA,
    de: recommendationsCardsDE,
};

const Home = () => {
    const { userData } = useUser();
    const { t, i18n } = useTranslation();

    if (!userData) {
        return (
            <div className="flex items-center justify-center h-full" style={{ minHeight: "80vh" }}>
                <Spinner className="h-24 w-24" />
            </div>
        );
    }

    const recommendationsCards = recommendationsCardsMap[i18n.language];

    const getCurrentLanguageLevel = () => {
        switch (userData.users.learnLanguage) {
            case "English":
                return formatUserLevel(userData.user_lang_level.english);
            case "Ukrainian":
                return formatUserLevel(userData.user_lang_level.ukrainian);
            case "German":
                return formatUserLevel(userData.user_lang_level.german);
            default:
                return formatUserLevel(userData.user_lang_level.english);
        }
    };

    const getTranslatedLanguage = (language: string, currentLang: string) => {
        return languageTranslations[language] ? languageTranslations[language][currentLang] : language;
    };

    return (
        <>
            <SideBar>
                <div className="flex flex-col space-y-12">
                    <div className="mt-4 text-center">
                        <h1 className=" space-y-4 text-[40px] font-semibold italic tracking-tight leading-none">
                            {t("home.greeting")}
                            <span className="text-cyan-600">{userData.users.fullName}</span>
                            {t("home.welcome")}
                        </h1>
                    </div>
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 gap-x-6 gap-y-10">
                        <Card className="border-2 hover:border-2 hover:border-cyan-600">
                            <div className="flex flex-row justify-between">
                                <h5 className="text-xl font-normal text-gray-500">{t("home.selected")}</h5>
                                <TbLanguage size={32} className="text-gray-600" />
                            </div>
                            <div className="flex flex-row justify-center gap-2">
                                <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {getTranslatedLanguage(userData.users.learnLanguage, i18n.language)}
                                </div>
                            </div>
                        </Card>
                        <Card className="border-2 hover:border-2 hover:border-cyan-600">
                            <div className="flex flex-row justify-between">
                                <h5 className="text-xl font-normal text-gray-500">{t("home.level")}</h5>
                                <FaRegStar size={32} className="text-gray-600" />
                            </div>
                            <div className="flex flex-row justify-center gap-2">
                                <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {getCurrentLanguageLevel()}
                                </div>
                            </div>
                        </Card>
                        <Card className="border-2 hover:border-2 hover:border-cyan-600">
                            <div className="flex flex-row justify-between">
                                <h5 className="text-xl font-normal text-gray-500">{t("home.streak")}</h5>
                                <GoTrophy size={32} className="text-gray-600" />
                            </div>
                            <div className="flex flex-row justify-center gap-2">
                                <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {userData.user_practice_stats.daily_streak}
                                </div>
                                <div className="text-xl pt-2.5 font-normal text-gray-500">{t("home.days")}</div>
                            </div>
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 gap-x-6 gap-y-10">
                        {recommendationsCards.map((card, index) => (
                            <Card
                                key={card.description.slice(0, 6) + index}
                                className="flex flex-col space-y-3 rounded-2xl border-2 hover:border-2 hover:border-cyan-600"
                            >
                                {card.icon}
                                <p className="text-lg text-gray-700">{card.description}</p>
                            </Card>
                        ))}
                    </div>
                    <div>
                        <figure className="mt-10 mx-auto max-w-screen-md text-center">
                            <svg
                                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 14"
                            >
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <Blockquote>
                                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                                    {t("home.quote")}
                                </p>
                            </Blockquote>
                            <figcaption className="mt-6 flex items-center justify-center space-x-3">
                                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <cite className="pr-3 font-medium text-gray-900">{t("home.author")}</cite>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </SideBar>
        </>
    );
};

export default Home;
