import { Button, Spinner } from "flowbite-react";
import { useState } from "react";
import { englishTestQuestions } from "../../constants/EnglishTestQuestions";
import QuestionCard from "../QuestionCard";
import { EnLvlMap } from "../../constants/LvlMap";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useUser } from "../../context/UserContext";

const EnglishEntryTest = () => {
    const { userData, setUserData } = useUser();
    const [result, setResult] = useState<number>(0);
    const auth = getAuth();
    const db = getDatabase();

    if (!auth.currentUser || !userData) return <Spinner />;

    const userId = auth.currentUser.uid;

    const handleTestFinish = async () => {
        const langLvl = EnLvlMap.find((lvl) => result >= lvl.min && result <= lvl.max)?.langLvl;

        if (langLvl === undefined) {
            console.error("Score out of range or incorrect setup");
            return;
        }

        const updatedUserData = {
            ...userData,
            user_lang_level: {
                ...userData.user_lang_level,
                english: langLvl,
            },
        };

        setUserData(updatedUserData);

        try {
            await set(ref(db, `user_lang_level/${userId}/english`), langLvl);
        } catch (error) {
            console.error("Error updating language level:", error);
        }
    };

    return (
        <div>
            <p className="py-6 flex justify-center text-4xl font-medium text-gray-900">Test your English Level</p>
            <div className="flex flex-col gap-y-10">
                {englishTestQuestions.map((question, index) => (
                    <QuestionCard
                        key={index + question.question}
                        setResult={setResult}
                        description={question.description}
                        question={question.question}
                        options={question.options}
                        answer={question.answer}
                        points={question.points}
                    />
                ))}
            </div>
            <Button onClick={handleTestFinish}>Submit</Button>
        </div>
    );
};

export default EnglishEntryTest;
