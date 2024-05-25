export interface WritingQuestionRequest {
    userLevel: string;
    userLanguage: string;
    userLearnLanguage: string;
}

export interface ReadingQuestionRequest {
    userLevel: string;
    userLearnLanguage: string;
}

export interface GrammarQuestionRequest {
    userLevel: string;
    userLearnLanguage: string;
}

export interface AnswerReviewRequest {
    userLanguage: string;
    userLearnLanguage: string;
    userAnswer: string;
    question: string;
}

export type DescriptionData = {
    mainHeading: string;
    smallDescription: string;
    paragraphs: string[];
    taskDescription?: string;
};
