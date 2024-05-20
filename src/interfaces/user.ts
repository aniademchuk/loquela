export interface RegisterUser {
    email: string;
    password: string;
    fullName: string;
    learnLanguage: string;
    timezone: string;
}

export interface UserMain {
    users: {
        email: string;
        fullName: string;
        learnLanguage: string;
        timezone: string;
    };
    user_practice_stats: {
        daily_streak: number;
        total_days_learning: number;
        total_lessons: number;
    };
    user_lang_level: {
        english: number;
        german: number;
        ukrainian: number;
    };
    user_reminders: {
        loquela_news: boolean;
        practice: boolean;
        weekly_stats: boolean;
    };
}
