import { Card, Spinner } from "flowbite-react";
import React, { useState } from "react";
import QuestionCard from "../QuestionCard";
import { Question } from "../../interfaces/Question";

type EntryTestType = "english" | "german" | "ukrainian";

interface EntryTestWrapperProps {
    entryTestType: EntryTestType;
    questionsArray: Question[];
    testTitle: string;
}

const EntryTestWrapper: React.FC<EntryTestWrapperProps> = ({ entryTestType, testTitle, questionsArray }) => {
    const [result, setResult] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    console.log(result);

    const handleTestFinish = () => {
        // TODO Add cloud function call to calculate and update the lang value in DB.
        setLoading(true);
    };

    return (
        <div>
            <p className="py-6 flex justify-center text-4xl font-medium text-gray-900">{testTitle}</p>
            <Card className="rounded-2xl border-cyan-600">
                {questionsArray.map((question, index) => (
                    <div key={index}>
                        <QuestionCard
                            key={index + question.question}
                            setResult={setResult}
                            description={question.description}
                            question={question.question}
                            options={question.options}
                            answer={question.answer}
                            points={question.points}
                        />
                        <hr />
                    </div>
                ))}
                <div className="mt-2 flex justify-center">
                    <button
                        onClick={handleTestFinish}
                        className="flex px-4 py-2 gap-3 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-lg items-center"
                    >
                        <span>Submit</span>
                        {loading && <Spinner />}
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default EntryTestWrapper;
