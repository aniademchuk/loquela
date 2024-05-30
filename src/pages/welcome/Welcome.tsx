import Navbar from "../../components/layout/Navbar";
import { Accordion, Card } from "flowbite-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FeatureCard, featuresCardsDE, featuresCardsEN, featuresCardsUA } from "./card-sets";
import { FAQAccordion, faqAccordionDE, faqAccordionEN, faqAccordionUA } from "./faq-sets";

const Welcome = () => {
    const { t, i18n } = useTranslation();

    const featuresCardsMap: Record<string, FeatureCard[]> = {
        en: featuresCardsEN,
        ua: featuresCardsUA,
        de: featuresCardsDE,
    };

    const faqAccordionMap: Record<string, FAQAccordion[]> = {
        en: faqAccordionEN,
        ua: faqAccordionUA,
        de: faqAccordionDE,
    };

    const defaultLanguage = "en";
    const currentLanguage = i18n.language in featuresCardsMap ? i18n.language : defaultLanguage;

    const featuresCards = featuresCardsMap[currentLanguage];
    const faqAccordion = faqAccordionMap[currentLanguage];

    return (
        <>
            <Navbar />
            <div className="px-6 sm:px-12 md:px-20 lg:px-40 xxl:px-52 flex flex-col ">
                <div className="mt-16 text-center">
                    {(i18n.language === "en" || i18n.language === "de" || i18n.language === "ua") && (
                        <h1 className="text-[56px] font-extrabold tracking-tight leading-none">
                            {i18n.language === "en" && (
                                <>
                                    Practice <span className="text-cyan-600">More</span>, Speak{" "}
                                    <span className="text-cyan-600">Better</span>
                                </>
                            )}
                            {i18n.language === "de" && (
                                <>
                                    Üben Sie <span className="text-cyan-600">mehr</span>, sprechen Sie{" "}
                                    <span className="text-cyan-600">besser</span>
                                </>
                            )}
                            {i18n.language === "ua" && (
                                <>
                                    Практикуйтеся <span className="text-cyan-600">більше</span>, говоріть{" "}
                                    <span className="text-cyan-600">краще</span>
                                </>
                            )}
                        </h1>
                    )}
                    <h3 className="mt-6 text-[22px] text-gray-600 tracking-tight font-semibold">
                        {t("welcome.subTitle")}
                    </h3>
                </div>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-x-6 gap-y-10">
                    {featuresCards.map((feature, index) => (
                        <Card className="rounded-2xl space-y-2" key={feature.heading + index}>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-cyan-600 rounded-2xl w-[50px]">{feature.icon}</div>
                                <div className="text-2xl font-semibold tracking-tight">{feature.heading}</div>
                            </div>
                            <div className="text-lg text-gray-600 font-semibold">{feature.description}</div>
                        </Card>
                    ))}
                </div>
                <div className="mt-24 space-y-10">
                    <h3 className="text-[44px] text-center font-extrabold tracking-tight leading-none">
                        {t("welcome.faq")}
                    </h3>
                    <Accordion>
                        {faqAccordion.map((question, index) => (
                            <Accordion.Panel key={index}>
                                <Accordion.Title>{question.title}</Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500">{question.content}</p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        ))}
                    </Accordion>
                </div>
                <div className="my-24">
                    <div className="text-center">
                        <div className="text-[36px] font-normal tracking-tight leading-none text-gray-500">
                            {t("welcome.note")}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;
