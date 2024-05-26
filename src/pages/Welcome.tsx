import Navbar from "../components/layout/Navbar";
import { Accordion, Card } from "flowbite-react";
import { TbPencilCheck, TbTextGrammar } from "react-icons/tb";
import React from "react";
import { FaBook, FaBookOpen } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { BiStar } from "react-icons/bi";

type FeatureCard = {
    icon: JSX.Element;
    heading: string;
    description: string;
};

const featuresCards: FeatureCard[] = [
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

type FAQAccordion = {
    title: string;
    content: string;
};

const faqAccordion: FAQAccordion[] = [
    {
        title: "What is Loquela?",
        content:
            "Loquela is a language learning assistant that uses AI to generate prompts in English, Ukrainian, and German. These prompts cover reading, writing, and grammar exercises. After submitting answers, users receive detailed feedback on their responses, helping them understand their strengths and areas for improvement.",
    },
    {
        title: "How to start?",
        content:
            'To start using Loquela, you need to register for an account. After registration, log in and you will be directed to the homepage. From there, navigate to the "test" page via the side navigation bar to take an entry test. This test is available in three languages and can be taken multiple times. Please note that all practice pages will be locked until you complete the entry test.',
    },
    {
        title: "How to change the Learning Language?",
        content:
            "You can change your learning language at any time by accessing the settings page. To do this, click on the gear icon located in the side navigation bar. This allows you to switch between English, Ukrainian, and German according to your learning preferences.",
    },
    {
        title: "What features are there?",
        content:
            "Loquela offers several features to enhance your learning experience: Progress Tracking: Monitor your language level, daily practice streaks, total lessons learned, and total days of learning. Entry Test: Available in English, Ukrainian, and German to assess your proficiency level. Practice Reminders: Receive reminders through email to encourage regular practice.",
    },
    {
        title: "What supported learn languages there are?",
        content:
            "Loquela supports three languages for learning: English, Ukrainian, and German. These languages are available for all the tests and practice prompts provided by the platform.",
    },
    {
        title: "Where is my data stored?",
        content:
            "Your data is securely stored on Google Firebase, a trusted database service. At Loquela, we ensure that your personal information and learning progress are protected with advanced security measures. We do not share your data with any third-party services. Additionally, you have the option to delete all of your data permanently. This can be done through the delete logic provided in your user settings. Upon deletion, all data associated with your account will be removed from both the authentication system and the database, ensuring that no residual information is retained.",
    },
    {
        title: "I have additional questions.",
        content:
            "If you have any additional questions, please do not hesitate to contact the developer via email at ia.03.demchuk.anna@gmail.com. We are here to help and ensure you have the best learning experience with Loquela.",
    },
];

const Welcome = () => {
    return (
        <>
            <Navbar />
            <div className="px-6 sm:px-12 md:px-20 lg:px-40 xxl:px-52 flex flex-col ">
                <div className="mt-16 text-center">
                    <h1 className="text-[56px] font-extrabold tracking-tight leading-none">
                        Practice <span className="text-cyan-600">More</span>, Speak{" "}
                        <span className="text-cyan-600">Better</span>
                    </h1>
                    <h3 className="mt-6 text-[22px] text-gray-600 tracking-tight font-semibold">
                        Let's improve your language skills!
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
                        Frequently asked questions:
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
                            Please note, Loquela is not a substitute for a teacher. It's a practice tool designed to
                            help you improve various language skills through different types of exercises.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;
