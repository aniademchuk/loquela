import {
    getRandomMistakeENA11,
    getRandomMistakeENA12,
    getRandomMistakeENA21,
    getRandomMistakeENA22,
    getRandomMistakesENB11,
    getRandomMistakesENB12,
    getRandomMistakesENB21,
    getRandomMistakesENB22,
} from "../../../topics/grammar/en-grammar-topics";
import { getRandomHardTopicEN, getRandomTopicEN } from "../../../topics/en-topics";

export const getGrammarPromptEN = (userLevel: string): string => {
    const topic = getRandomTopicEN();
    const hardTopic = getRandomHardTopicEN();

    switch (userLevel) {
        case "A1.1": {
            const mistake = getRandomMistakeENA11();
            return `You are a language learning assistant. Generate a simple sentence suitable for an absolute beginner 
            English language learner using the topic "${topic}". Include an intentional grammatical mistake related to 
            ${mistake}. The sentence should encourage the learner to identify and correct the mistake to help them 
            understand and practice basic grammar. Ensure the sentence is contextually relevant to the topic, even if 
            only a part of the topic is used. Return the sentence clearly, without additional formatting.`;
        }
        case "A1.2": {
            const mistake = getRandomMistakeENA12();
            return `You are a language learning assistant. Create a simple sentence with an intentional grammatical 
            mistake related to ${mistake} theme, appropriate for a high beginner English language learner using the 
            topic "${topic}". Your sentence should be designed in a way that challenges the learner to identify and 
            correct the mistake, thereby aiding their grammar practice and learning. Use the topic creatively; you can 
            use either the full topic or just elements of it to ensure the sentence makes sense and is engaging. 
            Return the sentence without additional formatting.`;
        }
        case "A2.1": {
            const mistake = getRandomMistakeENA21();
            return `You are a language learning assistant. Your task is to create two sentences for an elementary 
            English language learner using the topic "${topic}". Each sentence should include an intentional grammatical 
            mistake related to ${mistake}, but the mistake should appear in a different form in each sentence. 
            This approach will help the learner recognize and understand the variability of this grammatical issue. 
            Use the topic either in its entirety or in parts to ensure that the sentences are relevant and engaging. 
            The goal is for the learner to identify and correct these mistakes, facilitating grammar practice and 
            enhancement of their understanding. Return the two sentences clearly, without additional formatting.`;
        }
        case "A2.2": {
            const mistake = getRandomMistakeENA22();
            return `You are a language learning assistant. Your task is to generate three sentences for a high elementary 
            English language learner using the topic "${topic}". Include an intentional grammatical mistake related 
            to ${mistake}, which should challenge the learner's understanding of more complex grammar aspects covered at 
            this level. Use the topic either fully or in parts to make the sentence engaging and contextually relevant. 
            The objective is for the learner to identify and correct the mistake, thus enhancing their grammar skills 
            and understanding. Return the sentence clearly, without additional formatting.`;
        }
        case "B1.1": {
            const mistakes = getRandomMistakesENB11();

            return `You are a language learning assistant. Your task is to generate a short text up to 3 sentences for 
            an intermediate English (B1.1) language learner using the topic "${topic}". This text should contain 3 and 
            more intentional grammatical mistakes related to the selected errors [${mistakes}]. These mistakes should 
            vary to cover different aspects of grammar that are challenging at this level.
            Use the topic creatively, either in its entirety or in parts, to ensure the text is engaging and 
            contextually relevant. The goal is for the learner to identify and correct the mistakes, thereby enhancing 
            their grammar skills and understanding.
            Return the text clearly, without additional formatting.`;
        }
        case "B1.2": {
            const mistakes = getRandomMistakesENB12();

            return `You are a language learning assistant. Your task is to generate a short paragraph up to 5 sentences 
            for a high intermediate English (B1.2) language learner using the topic "${topic}". This paragraph should 
            contain 4 intentional grammatical mistakes related to the selected errors [${mistakes}]. These errors should 
            be varied to challenge the learner's ability to identify and correct complex grammar issues.
            Use the topic either fully or partially to ensure the paragraph is contextually relevant and engaging. 
            The goal is for the learner to analyze the text, identify the grammatical errors, and correct them, which 
            will help in enhancing their grammar skills and understanding.
            Return the paragraph clearly, without additional formatting.`;
        }
        case "B2.1": {
            const mistakes = getRandomMistakesENB21();

            return `You are a language learning assistant. Your task is to generate a text up to 6 sentences for an upper 
            intermediate English language learner using the topic "${hardTopic}". This text should contain 5 intentional 
            grammatical mistakes related to the selected errors [${mistakes}]. The errors should be varied and 
            strategically placed to challenge the learner's ability to identify and correct complex grammar issues.
            Use the topic creatively, integrating it fully or partially to ensure that the text is contextually relevant, 
            engaging, and appropriately challenging. The goal is for the learner to analyze the text, identify the grammatical 
            errors, and correct them, which will help in advancing their grammar skills and understanding.
            Return the text clearly, without additional formatting.`;
        }
        case "B2.2": {
            const mistakes = getRandomMistakesENB22();

            return `You are a language learning assistant. Your task is to generate a text up to 7 sentences for an 
            advanced English language learner using the topic "${hardTopic}". This text should contain 5 intentional 
            grammatical mistakes related to the selected errors [${mistakes}]. The mistakes should be diverse and subtly 
            integrated to thoroughly challenge the learner's proficiency in identifying and correcting advanced grammar 
            issues.
            Use the topic creatively, whether fully or partially, to ensure the text is contextually relevant, 
            intellectually engaging, and reflective of real-world language usage. The goal is for the learner to 
            critically analyze the text, accurately identify the grammatical errors, and correct them, thereby enhancing 
            their mastery of complex English grammar.
            Return the text clearly, without additional formatting.`;
        }
        default:
            return "Bad Input";
    }
};
