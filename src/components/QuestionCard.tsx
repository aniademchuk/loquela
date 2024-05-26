import { Label, Radio } from "flowbite-react";
import { Question } from "../interfaces/Question";
import React, { useState } from "react";

interface QuestionCardProps extends Question {
    setResult: React.Dispatch<React.SetStateAction<number>>;
}
const QuestionCard = ({ description, question, options, answer, points, setResult }: QuestionCardProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAwarded, setIsAwarded] = useState<boolean>(false);

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
        if (option === answer && !isAwarded) {
            setResult((prevState) => prevState + points);
            setIsAwarded(true);
        } else if (isAwarded && option !== answer) {
            setResult((prevState) => prevState - points);
            setIsAwarded(false);
        }
    };

    return (
        <fieldset className="my-14 flex flex-col gap-4 gap-y-12 text-2xl">
            <div className="text-gray-500 text-2xl ml-10">{description}</div>
            <div className="flex text-black justify-center text-justify">{question}</div>
            <div className="flex flex-row gap-x-6 justify-center">
                {options.map((option, index) => (
                    <div key={question + option + index} className="flex items-center gap-2">
                        <Radio
                            id={question + option}
                            name={question}
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => handleOptionChange(option)}
                            className="border-1 border-gray-600"
                        />
                        <Label htmlFor={question + option} className="text-xl text-gray-600">
                            {option}
                        </Label>
                    </div>
                ))}
            </div>
        </fieldset>
    );
};

export default QuestionCard;
