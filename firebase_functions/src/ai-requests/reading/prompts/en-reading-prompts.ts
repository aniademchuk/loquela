import { getRandomHardTopicEN, getRandomTopicEN } from "../../../topics/en-topics";

export const getQuestionPromptEN = (userLevel: string): string => {
    const topic = getRandomTopicEN();
    const hardTopic = getRandomHardTopicEN();

    const englishPrompts: { [key: string]: string } = {
        "A1.1": `You are language learning assistant. Use this topic: ${topic} to generate 3 sentences for the absolute beginner english language level. You should adjust the topic and enhance it to provide the learning material for beginners. Use the most simple language and words, to create easy sentences.
            After creating the text, develop three questions in English that test user ability to understand the text. These questions should focus on details within the text.
            Return only the text and questions, presented clearly, without any additional formatting.
            `,

        "A1.2": `You are language learning assistant. Use this topic: ${topic} to generate small text with 3 sentences for an A1.2 level language learner, who has some foundational understanding of the language and a little bit more deep knowledge then absolute beginner.
            You should adjust the topic and enhance it to provide the correct learning material for A1.2 learner.
            After creating the text, develop three questions in English that test user ability to understand the text. These questions should focus on details within the text.
            Return only the text and questions, presented clearly, without any additional formatting.
            `,

        "A2.1": `You are language learning assistant. Use this topic: ${topic} to generate text with 4 sentences for an A2.1 level language learner. This learner can understand sentences and frequently used expressions related to areas like family, shopping, and local events.
            You should adjust the topic and enhance it to provide the correct learning material for A2.1 learner.
            After creating the text, develop 4 questions in English that test user ability to understand the text. These questions should focus on details within the text.
            Return only the text and questions, presented clearly, without any additional formatting.
            `,

        "A2.2": `You are language learning assistant. Use this topic: ${topic} to generate text with 5 connected sentences for an A2.2 level language learner. The text should check how user can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. very basic personal and family information, shopping, local geography, employment). Text should be about advanced topics like employment, family, environment.
            You should adjust the topic and enhance it to provide the correct learning material for A2.2 learner.
            After creating the text, develop 4 questions in English that test user ability to understand the text. These questions should focus on details within the text.
            Return only the text and questions, presented clearly, without any additional formatting.
            `,

        "B1.1": `Use this topic: ${topic} to generate a text in English consisting of more than ten sentences tailored for a B1.1 level language learner. The learner at this level can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. The text should thus explore topics related to these areas, possibly including a scenario or a problem-solving element that engages the learner with content relevant to their everyday life.
            After creating the text, develop six comprehension questions in English. These questions should test the learner's ability to grasp main points, infer meanings, and draw conclusions based on the text, moving beyond straightforward recall to include why and how questions that encourage deeper analysis.
            Return only the text and questions, presented clearly, without any additional formatting
            `,

        "B1.2": `Use this topic: ${hardTopic} to generate a text in English consisting of more than twelve sentences tailored for a B1.2 level language learner. The learner at this stage can understand the main ideas of complex texts on both concrete and abstract topics. The text should, therefore, cover a range of subjects, possibly integrating themes from current events, cultural discussions, or technological advancements, which can challenge the learner to think critically and analyze differing viewpoints.
            After crafting the text, develop six comprehension questions in English. These questions should not only test the learner’s understanding of the facts but also their ability to analyze and synthesize information. Questions should include ones that ask the learner to explain viewpoints, discuss the advantages and disadvantages of presented options, and provide detailed responses based on the text.
            Return only the text and questions, presented clearly, without any additional formatting
            `,

        "B2.1": `Use this topic: ${hardTopic} to generate a comprehensive text in English, resembling an article, tailored for a B2.1 level language learner. The text should span more than fifteen sentences and be structured to engage with complex topics on both concrete and abstract themes. It should include technical discussions suitable for someone familiar with specialized subjects.
            After composing the article, develop seven comprehension questions in English. These questions should assess the learner's ability to grasp and analyze the main ideas, and their skill in evaluating different perspectives. Questions should encourage critical thinking and detailed responses, asking the learner to explain and support their viewpoint on the issues discussed in the article, including the advantages and disadvantages of any given scenarios or solutions.
            Return only the text and questions, presented clearly, without any additional formatting
            `,

        "B2.2": `Use this topic: ${hardTopic} to generate an advanced, detailed text in English, resembling an in-depth analytical article, tailored for a B2.2 level language learner. This text should exceed eighteen sentences and delve into complex and nuanced topics. The article should integrate information and viewpoints from multiple sources, offering a comprehensive overview that requires sophisticated comprehension skills.
            After creating the article, develop seven in-depth comprehension questions in English. These questions should test the learner's ability to summarize and reconstruct arguments, as well as their capability to understand and interpret nuanced details and complex concepts presented in the text. Questions should encourage detailed examination of the content, requiring responses that reflect an advanced understanding and the ability to discuss subtle distinctions and finer shades of meaning.
            Return only the text and questions, presented clearly, without any additional formatting
            `,
    };

    return englishPrompts[userLevel] || "Bad Input";
};
