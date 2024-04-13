import { QuestionEntry } from "../../pages/EntryTest";

const MultipleAnswerQuestion = ({ question }: { question: QuestionEntry }) => {
    return (
        <>
            <div className="flex flex-col py-6">
                <p className="my-4 text-2xl font-medium text-gray-900">{question.question}</p>
                {question.options.map((option, key) => (
                    <div key={key} className="flex items-center mb-4">
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                        />
                        <label className="ms-2 text-sm font-medium text-gray-900">{option}</label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MultipleAnswerQuestion;
