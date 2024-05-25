const mistakesENA11 = [
    "Incorrect verb forms in simple present",
    "Omission or misuse of articles",
    "Incorrect prepositions",
    "Subject-verb agreement errors",
    "Misuse of plural forms",
    "Improper use of simple past tense",
    "Incorrect usage of common adjectives",
];

export const getRandomMistakeENA11 = () => {
    return mistakesENA11[Math.floor(Math.random() * mistakesENA11.length)];
};

const mistakesENA12 = [
    "Incorrect verb forms in simple present",
    "Omission or misuse of articles",
    "Incorrect prepositions",
    "Subject-verb agreement errors",
    "Misuse of plural forms",
    "Incorrect use of simple past tense",
    "Misuse of modal verbs for ability",
    "Errors in prepositional phrases",
];

export const getRandomMistakeENA12 = () => {
    return mistakesENA12[Math.floor(Math.random() * mistakesENA12.length)];
};

const mistakesENA21 = [
    "Incorrect use of present continuous",
    "Mixing simple present with present continuous",
    "Errors in forming simple future with 'will'",
    "Misuse of possessive adjectives",
    "Incorrect usage of basic conjunctions",
    "Using incorrect prepositions in time expressions",
    "Subject-verb agreement errors in complex sentences",
    "Omission or incorrect use of articles in more complex noun phrases",
    "Confusion between 'going to' and 'will' for future plans",
];

export const getRandomMistakeENA21 = () => {
    return mistakesENA21[Math.floor(Math.random() * mistakesENA21.length)];
};

const mistakesENA22 = [
    "Incorrect use of past continuous",
    "Forming questions improperly",
    "Conditional structure errors",
    "Misuse of frequency adverbs",
    "Simple past tense errors",
    "Confusion of prepositions in more complex settings",
    "Misplacement of adverbs in the sentence",
    "Improper use of modal verbs in past abilities",
    "Errors in pluralization of irregular nouns",
    "Using incorrect auxiliary verbs in questions and negatives",
];

export const getRandomMistakeENA22 = () => {
    return mistakesENA22[Math.floor(Math.random() * mistakesENA22.length)];
};

const mistakesENB11 = [
    "Confusion between 'will' and 'going to' for future intentions",
    "Incorrect use of comparative and superlative adjectives",
    "Misuse of modal verbs for suggestions and obligations",
    "Errors in using present perfect tense",
    "Improper placement and form of adverbs",
    "Misuse of phrasal verbs",
    "Conjunction errors in complex sentences",
    "Misplacement of frequency and manner adverbs",
    "Errors in using basic subordinate clauses",
    "Incorrect article use in more complex noun phrases",
    "Prepositional phrase errors",
    "Verb tense consistency errors in longer texts",
    "Incorrect use of passive voice constructions",
    "Misuse of conditional sentences",
    "Errors in the use of reflexive pronouns",
    "Errors in reported speech",
    "Faulty parallelism in lists or comparisons",
    "Misuse of quantifiers",
    "Errors in the usage of relative pronouns",
    "Inappropriate use of formal and informal register",
];

export const getRandomMistakesENB11 = () => {
    const shuffled = mistakesENB11.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
};

const mistakesENB12 = [
    "Misuse of present perfect tense for actions connected to a specific past time",
    "Errors in forming passive voice constructions",
    "Incorrect use of relative clauses",
    "Improper use of modal verbs in hypothetical situations",
    "Errors in indirect question formats",
    "Confusion between quantity expressions",
    "Conjunction errors in complex sentences involving conditionals",
    "Article misuse in complex noun phrases",
    "Prepositional phrase errors, especially in idiomatic expressions",
    "Incorrect use of verb tenses in subordinate clauses",
    "Misuse of phrasal verbs in passive forms",
    "Inconsistent verb tense usage in narratives",
    "Errors in using non-defining relative clauses",
    "Misuse of conditional forms, especially third conditional",
    "Inaccurate use of discourse markers in writing and speaking",
    "Faulty parallelism in complex list structures",
    "Misuse of reported commands and requests",
    "Improper conjunction usage in compound sentences",
    "Mixing up direct and reported speech in narratives",
    "Overuse or incorrect use of intensifiers and qualifiers",
];

export const getRandomMistakesENB12 = () => {
    const shuffled = mistakesENB12.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
};

const mistakesENB21 = [
    "Errors in mixed conditionals",
    "Incorrect usage of advanced modal verbs",
    "Misuse of the subjunctive mood",
    "Errors in reporting speech",
    "Confusion of complex prepositions",
    "Article misuse in advanced noun phrases",
    "Improper use of linking words in complex sentences",
    "Verb tense consistency errors in complex texts",
    "Incorrect placement of adverbs in multi-clause sentences",
    "Errors in idiomatic expressions",
    "Misuse of phrasal verbs",
    "Errors in noun clauses",
    "Faulty parallelism in comparison structures",
    "Misuse of cleft sentences to emphasize information",
    "Errors in the use of conditional perfect",
    "Misplacement of quantifiers in complex expressions",
    "Improper use of passive voice in formal writing",
    "Errors in discourse markers in written texts",
    "Errors in the use of future perfect tense",
    "Misuse of past perfect in narrative",
    "Inconsistent use of the present perfect and simple past",
    "Errors in sequence of tenses",
    "Incorrect use of future continuous",
    "Misapplication of past continuous",
];

export const getRandomMistakesENB21 = () => {
    const shuffled = mistakesENB21.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
};

const mistakesENB22 = [
    "Incorrect use of advanced passive forms",
    "Errors in expressing wishes and regrets with modal verbs",
    "Complex sentence structure errors involving verb tenses",
    "Nuanced article misuse in verb-related contexts",
    "Subtleties in modal verb usage in complex tenses",
    "Phrasal verb misplacement or misuse in narrative contexts",
    "Misuse of advanced idiomatic expressions with verb tenses",
    "Inconsistent verb tense usage in complex narratives",
    "Incorrect conditional forms in hypothetical situations",
    "Improper linking word usage in multi-clause sentences with varied tenses",
    "Confusion over prepositional phrases in complex verb structures",
    "Errors in indirect speech involving shifts in tense",
    "Mismanagement of ellipsis and substitution in verb-driven discourse",
    "Faulty use of inversion with auxiliary verbs for emphasis",
    "Errors in managing long-distance dependencies in verb tense consistency",
    "Inappropriate use of cohesion in complex verb tense constructions",
    "Errors in the use of intensifiers and mitigators with auxiliary verbs",
    "Misuse of punctuation in compound and complex sentences involving verbs",
    "Confusion in the use of aspectual forms of verbs",
    "Misapplication of style and register in verb tenses for formal contexts",
];

export const getRandomMistakesENB22 = () => {
    const shuffled = mistakesENB22.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
};
