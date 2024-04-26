import Navbar from "../components/Navbar";
import MultipleAnswerQuestion from "../components/questions/MultipleAnswerQuestion";
import SingleAnswerQuestion from "../components/questions/SingleAnswerQuestion";

export interface QuestionEntry {
    question: string;
    options: string[];
    correctAnswer: string;
    points: number;
}

const singleSelectQuestions: QuestionEntry[] = [
    {
        question: "What is the right option?",
        options: ["first", "second", "third", "forth"],
        correctAnswer: "second",
        points: 3,
    },
    {
        question: "How should I correctly say this: bla bla bla?",
        options: ["first", "second", "third", "forth"],
        correctAnswer: "third",
        points: 4,
    },
];

const multipleSelectQuestions: QuestionEntry[] = [
    {
        question: "New Mega Multiple questions",
        options: ["first", "second", "third", "forth"],
        correctAnswer: "first",
        points: 2,
    },
    {
        question: "Second Mega Multiple questions",
        options: ["first", "second", "third", "forth"],
        correctAnswer: "forth",
        points: 5,
    },
];

const EntryTest = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col px-[40px] md:px-[100px] lg:px-[200px] xl:px-[400px]">
                <p className="pt-6 flex justify-center text-4xl font-medium text-gray-900">Here is your entry test</p>
                {singleSelectQuestions.map((question, key) => (
                    <div key={key}>
                        <SingleAnswerQuestion question={question} />
                    </div>
                ))}
                {multipleSelectQuestions.map((question, key) => (
                    <div key={key}>
                        <MultipleAnswerQuestion question={question} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default EntryTest;
