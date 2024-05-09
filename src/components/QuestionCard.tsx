import { Card, Label, Radio } from "flowbite-react";
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
        <Card className="flex rounded-[30px] text-center justify-items-center">
            <fieldset className="flex flex-col gap-4 gap-y-10 text-2xl">
                <div className="text-gray-600 text-2xl">{description}</div>
                <div className="text-black">{question}</div>
                <div className="flex flex-row gap-x-6 text-center justify-items-center justify-center">
                    {options.map((option, index) => (
                        <div key={question + option + index} className="flex items-center gap-2">
                            <Radio
                                id={question + option}
                                name={question}
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => handleOptionChange(option)}
                            />
                            <Label htmlFor={question + option} className="text-2xl">
                                {option}
                            </Label>
                        </div>
                    ))}
                </div>
            </fieldset>
        </Card>
    );
};

export default QuestionCard;
