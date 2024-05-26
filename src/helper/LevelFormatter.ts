export const formatUserLevel = (level: number) => {
    const levels: { [key: string]: string } = {
        "0": "No Level",
        "1": "A1.1",
        "2": "A1.2",
        "3": "A2.1",
        "4": "A2.2",
        "5": "B1.1",
        "6": "B1.2",
        "7": "B2.1",
        "8": "B2.2",
    };

    return levels[level] || "No level";
};
