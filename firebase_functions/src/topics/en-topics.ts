const namesEN = [
    "John",
    "Mary",
    "Michael",
    "Jennifer",
    "James",
    "Linda",
    "David",
    "Susan",
    "Robert",
    "Karen",
    "William",
    "Patricia",
    "Richard",
    "Barbara",
    "Joseph",
    "Jessica",
    "Thomas",
    "Sarah",
    "Charles",
    "Nancy",
    "Christopher",
    "Elizabeth",
    "Daniel",
    "Lisa",
    "Matthew",
    "Betty",
    "Anthony",
    "Dorothy",
    "Mark",
    "Sandra",
    "Donald",
    "Ashley",
    "Steven",
    "Kimberly",
    "Paul",
    "Donna",
    "Andrew",
    "Emily",
    "Joshua",
    "Carol",
    "Kenneth",
    "Michelle",
    "Kevin",
    "Amanda",
    "Brian",
    "Melissa",
    "George",
    "Deborah",
    "Edward",
    "Stephanie",
];

const actionsEN = [
    "walks",
    "watches TV",
    "cleans",
    "listens to music",
    "paints",
    "sings",
    "talks on the phone",
    "exercises",
    "meditates",
    "dances",
    "takes a nap",
    "photographs",
    "writes",
    "draws",
    "learns math",
    "plays a guitar",
    "bakes",
    "plays video games",
    "learns history",
    "make new friends",
    "swims",
    "meets friends",
    "goes hiking",
    "feeds pets",
    "plays board games",
    "visit grandparents",
    "goes for a walk",
    "practices yoga",
    "watches a movie",
    "completes puzzles",
    "plays football",
    "gather mushrooms",
    "makes picnic",
    "cook dinner",
    "eats breakfast",
    "watches youtube",
    "makes homework",
    "learns to code",
    "plays with lego",
    "fishing",
    "sleeps",
    "skating",
    "horseback riding",
    "surfing",
    "tourism",
    "skating",
    "skiing",
    "snowboarding",
    "cleans",
];

export const getRandomTopicEN = () => {
    const name = namesEN[Math.floor(Math.random() * namesEN.length)];
    const action = actionsEN[Math.floor(Math.random() * actionsEN.length)];

    return `${name} ${action}.`;
};

const hardTopicsEN = [
    "Climate change and its impact on the environment",
    "The rise of artificial intelligence and its implications",
    "Global economic inequality and poverty",
    "Ethical dilemmas in modern society",
    "The refugee crisis and its humanitarian implications",
    "Cybersecurity threats and online privacy concerns",
    "The future of work in the age of automation",
    "Mental health awareness and stigma reduction",
    "Sustainable living practices and renewable energy sources",
    "The role of technology in education",
    "Cultural appropriation and its effects on marginalized communities",
    "The importance of civic engagement and activism",
    "Urbanization and its effects on communities and the environment",
    "The ethics of genetic engineering and biotechnology",
    "Gender equality and women's rights issues",
    "Indigenous rights and land conservation efforts",
    "The impact of social media on society and mental health",
    "Global health challenges and pandemic preparedness",
    "The intersection of religion and politics",
    "Environmental conservation efforts and endangered species protection",
    "Access to education for underprivileged communities",
    "The effects of mass tourism on local cultures and economies",
    "Food security and sustainable agriculture practices",
    "The role of NGOs and international aid organizations",
    "Technological advancements in medicine and healthcare",
    "The future of transportation and urban mobility",
    "Mental health support systems and resources",
    "Wildlife conservation and habitat preservation",
    "The ethics of animal testing and cruelty-free products",
    "Social justice movements and systemic discrimination",
    "Space exploration and the search for extraterrestrial life",
    "Renewable energy policies and initiatives",
    "The impact of globalization on cultural diversity",
    "The future of democracy and political participation",
    "Sustainable fashion and ethical consumerism",
    "Access to clean water and sanitation worldwide",
    "LGBTQ+ rights and inclusivity in society",
    "The role of arts and culture in societal development",
    "Cyberbullying and online harassment prevention",
    "Mental health challenges among youth",
    "Environmental activism and grassroots movements",
    "The future of artificial intelligence and ethics in technology",
    "Poverty alleviation strategies and economic development",
    "Human trafficking and modern-day slavery",
    "Access to healthcare in developing countries",
    "The impact of automation on job displacement",
    "Community resilience in the face of natural disasters",
    "Religious extremism and its implications for global security",
    "The psychology of decision-making and behavior change",
];

export const getRandomHardTopicEN = () => {
    return hardTopicsEN[Math.floor(Math.random() * hardTopicsEN.length)];
};
