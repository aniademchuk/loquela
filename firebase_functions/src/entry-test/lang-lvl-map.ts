export interface LanguageLevels {
    min: number;
    max: number;
    level: number;
}
export const englishLevels: LanguageLevels[] = [
    { min: 0, max: 10, level: 1 },
    { min: 11, max: 20, level: 2 },
    { min: 21, max: 30, level: 3 },
    { min: 31, max: 40, level: 4 },
    { min: 41, max: 55, level: 5 },
    { min: 56, max: 70, level: 6 },
    { min: 71, max: 85, level: 7 },
    { min: 86, max: 100, level: 8 },
];

export const germanLevels: LanguageLevels[] = [
    { min: 0, max: 10, level: 1 },
    { min: 11, max: 21, level: 2 },
    { min: 22, max: 32, level: 3 },
    { min: 33, max: 43, level: 4 },
    { min: 44, max: 54, level: 5 },
    { min: 55, max: 65, level: 6 },
    { min: 66, max: 76, level: 7 },
    { min: 77, max: 83, level: 8 },
];

export const ukrainianLevels: LanguageLevels[] = [
    { min: 0, max: 13, level: 1 },
    { min: 14, max: 27, level: 2 },
    { min: 28, max: 41, level: 3 },
    { min: 42, max: 55, level: 4 },
    { min: 56, max: 69, level: 5 },
    { min: 70, max: 83, level: 6 },
    { min: 84, max: 96, level: 7 },
    { min: 97, max: 109, level: 8 },
];
