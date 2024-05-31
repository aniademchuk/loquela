import { getRandomHardTopicEN, getRandomTopicEN } from "../../../topics/en-topics";

export const getWritingPromptEN = (userLevel: string, userLearnLanguage: string): string => {
    const topic = getRandomTopicEN();
    const hardTopic = getRandomHardTopicEN();

    const englishPrompts: { [key: string]: string } = {
        "A1.1": `As a language learning assistant, please generate 5 words related to the topic "${topic}" for a user at the A1.1 English level. This words should be as simple as possible, since user only started to learn ${userLearnLanguage}.
            Words should be generated in English, so user can translate them into language that he learns.
            Return user task to translate this words and 5 words separated by comas. The task and words should be provided in English.
            Return only the task and words without any formatting, just the plain text.
            `,

        "A1.2": `As a language learning assistant, please generate 1 simple sentence related to the topic "${topic}" for a user at the A1.2 English level. This sentence should be as simple as possible, since user only started to learn ${userLearnLanguage}.
            Sentence should be generated in English, so user can translate them into language that he learns.
            Return user task to translate this sentence and the sentence itself. The task and sentence should be provided in English.
            Return only the task and sentence without any formatting, just the plain text.
            `,

        "A2.1": `As a language learning assistant, please generate a simple writing theme using the topic "${topic}" for a user at the A2.1 English level. Imagine user who started to learn ${userLearnLanguage} and have a little bit of progress, provide theme for this language level. 
            If the content of topic is not related to each other, please adjust it as needed. Theme should be generated in English. 
            Also Theme should be simple and short less then 2 sentences. Give User 2 simple and straightforward suggestions for A2.1 what he can write about to enhance this theme and practice writing.
            Return only the text and suggestions without answers and any additional formatting.
            `,

        "A2.2": `As a language learning assistant, please generate a simple writing theme using the topic "${topic}" for a user at the A2.2 English level.
            The user has some understanding of basic sentences and frequently used expressions, particularly those related to areas like personal and family information, shopping, local geography, and employment. Enhance the theme to make it slightly challenging yet relevant for their level of study.
            If the content of topic is not related to each other, please adjust it as needed. Theme should be generated in English. 
            Give User 3 suggestions for A2.2 what he can write about, to practice writing.
            Return only the text and suggestions without answers and any additional formatting.
            `,

        "B1.1": `Use this topic: ${topic} to generate a theme in English tailored for a B1.1 level language learner to practice writing skills. 
        The learner at this level can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. The text should thus explore topics related to these areas, possibly including a scenario or a problem-solving element that engages the learner with content relevant to their everyday life.
            Task can be to write an article, letter, program or explanation of some topic. Use the best suitable format for B1.1 level.
            Return only the theme without answers and any additional formatting.
            `,

        "B1.2": `Use this topic: ${hardTopic} to generate a theme in English tailored for a B1.2 level language learner to practice writing skills. 
            The learner at this stage can understand the main ideas of complex texts on both concrete and abstract topics. The text should, therefore, cover a range of subjects, possibly integrating themes from current events, cultural discussions, or technological advancements, which can challenge the learner to think critically and analyze differing viewpoints.
            Task can be to write an article, letter, program or explanation of some topic. Use the best suitable format for B1.2 level.
            Return only the theme as a simple text without answers and any additional formatting.
            `,

        "B2.1": `Use this topic: ${hardTopic} to generate a theme in English tailored for a B2.1 level language learner. This theme should help to practice writing skills.
            At the B2.1 level, individuals can write clear, detailed texts on a variety of topics, demonstrating coherent structure and a broad vocabulary. They are capable of expressing viewpoints systematically, adapting their style for different audiences, and using complex sentence structures with a high degree of grammatical accuracy.
            Return only the text, without any additional formatting.
            `,

        "B2.2": `Use this topic: ${hardTopic} to generate a theme in English tailored for a B2.2 level language learner. This theme should help to practice writing skills.
            At the B2.2 level, individuals can produce clear, well-structured, and detailed texts across a range of subjects, showing controlled use of organizational patterns, connectors, and cohesive devices. They can discuss complex topics in a letter, an essay, or a report, supporting their points with logical arguments and relevant examples.
            Return only the text, without any additional formatting.
            `,
    };

    return englishPrompts[userLevel] || "Bad Input";
};
