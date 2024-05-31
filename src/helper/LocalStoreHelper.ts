export const setLanguage = (lang: string) => {
    localStorage.setItem("language", lang);
};

export const getLanguage = () => {
    return localStorage.getItem("language") || "en";
};
