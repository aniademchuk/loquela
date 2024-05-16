export const formatUserLanguage = (lang: string) => {
    switch (lang) {
        case "en":
        case "us":
            return "English";
        case "ua":
            return "Ukrainian";
        case "de":
            return "German";
        default:
            return "English";
    }
};
