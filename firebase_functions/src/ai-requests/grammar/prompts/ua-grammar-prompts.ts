import { getRandomHardTopicUA, getRandomTopicUA } from "../../../topics/ua-topics";
import {
    getRandomMistakesUAB11,
    getRandomMistakesUAB12,
    getRandomMistakesUAB21,
    getRandomMistakesUAB22,
    getRandomMistakeUAA11,
    getRandomMistakeUAA21,
} from "../../../topics/grammar/ua-grammar-topics";

export const getGrammarPromptUA = (userLevel: string): string => {
    const topic = getRandomTopicUA();
    const hardTopic = getRandomHardTopicUA();

    switch (userLevel) {
        case "A1.1": {
            const mistake = getRandomMistakeUAA11();
            return `Ви є асистентом з вивчення мови. Сформуйте просте речення, яке підходить для абсолютного початківця (A1.1) у вивченні української мови на тему "${topic}". Включіть навмисну граматичну помилку, пов'язану з ${mistake}. Речення повинно заохочувати учня ідентифікувати та виправити помилку, щоб допомогти йому зрозуміти та практикувати базову граматику. Переконайтеся, що речення контекстуально відповідає темі, навіть якщо використовується лише частина теми. Поверніть речення чітко, без додаткового форматування.`;
        }
        case "A1.2": {
            const mistake = getRandomMistakeUAA11();
            return `Ви є асистентом з вивчення мови. Сформуйте просте речення з навмисною граматичною помилкою, пов'язаною з темою ${mistake}, яке підходить для учня з рівнем знань вище початкового (A1.2), використовуючи тему "${topic}". Ваше речення повинно бути розроблено таким чином, щоб спонукати учня ідентифікувати та виправити помилку, тим самим сприяючи їх практиці граматики та навчанню. Використовуйте тему творчо; ви можете використати або всю тему, або лише її елементи, щоб забезпечити сенс та залучення речення. Поверніть речення без додаткового форматування.`;
        }
        case "A2.1": {
            const mistake = getRandomMistakeUAA21();
            return `Ви є асистентом з вивчення мови. Ваше завдання - створити два речення для учня з рівнем знань початкового рівня (A2.1), використовуючи тему "${topic}". Кожне речення повинно включати навмисну граматичну помилку, пов'язану з темою ${mistake}, але помилка повинна бути у різній формі в кожному реченні. Цей підхід допоможе учню розпізнати та зрозуміти варіативність цієї граматичної проблеми. Використовуйте тему повністю або частково, щоб забезпечити актуальність та залучення речень. Мета полягає в тому, щоб учень ідентифікував та виправив ці помилки, сприяючи практиці граматики та покращенню розуміння. Поверніть два речення чітко, без додаткового форматування.`;
        }
        case "A2.2": {
            const mistake = getRandomMistakeUAA21();
            return `Ви є асистентом з вивчення мови. Ваше завдання - створити три речення для учня з рівнем знань вище початкового (A2.2), використовуючи тему "${topic}". Включіть декілька навмисних граматичних помилок, пов'язану з темою ${mistake}, яка повинна кинути виклик розумінню учнем більш складних граматичних аспектів, що охоплюються на цьому рівні. Використовуйте тему повністю або частково, щоб зробити речення захоплюючим і контекстуально доречним. Мета полягає в тому, щоб учень ідентифікував та виправив помилку, таким чином покращуючи свої граматичні навички та розуміння. Поверніть речення чітко, без додаткового форматування.`;
        }
        case "B1.1": {
            const mistakes = getRandomMistakesUAB11();
            return `Ви є асистентом з вивчення мови. Ваше завдання - створити короткий текст до 3 речень для учня з рівнем знань середнього рівня (B1.1), використовуючи тему "${topic}". Цей текст повинен містити від 3 навмисних граматичних помилок, пов'язаних з обраними помилками [${mistakes}]. Ці помилки повинні відрізнятися, щоб охопити різні аспекти граматики, які є складними на цьому рівні. Використовуйте тему творчо, як повністю, так і частково, щоб забезпечити, що текст є захоплюючим і контекстуально доречним. Мета полягає в тому, щоб учень ідентифікував та виправив помилки, таким чином покращуючи свої граматичні навички та розуміння. Поверніть текст чітко, без додаткового форматування.`;
        }
        case "B1.2": {
            const mistakes = getRandomMistakesUAB12();
            return `Ви є асистентом з вивчення мови. Ваше завдання - створити короткий абзац до 5 речень для учня з високим середнім рівнем (B1.2), використовуючи тему "${topic}". Цей абзац повинен містити від 3 навмисних граматичних помилок, пов'язані з обраними помилками [${mistakes}]. Ці помилки повинні бути різноманітними, щоб кинути виклик здатності учня ідентифікувати та виправляти складні граматичні проблеми. Використовуйте тему повністю або частково, щоб забезпечити, що абзац є контекстуально доречним і захоплюючим. Мета полягає в тому, щоб учень проаналізував текст, ідентифікував граматичні помилки та виправив їх, що допоможе покращити його граматичні навички та розуміння. Поверніть абзац чітко, без додаткового форматування.`;
        }
        case "B2.1": {
            const mistakes = getRandomMistakesUAB21();
            return `Ви є асистентом з вивчення мови. Ваше завдання - створити текст до 6 речень для учня з високим середнім рівнем знань (B2.1), використовуючи тему "${hardTopic}". Цей текст повинен містити від 4 навмисних граматичних помилок, пов'язаних з обраними помилками [${mistakes}]. Помилки повинні бути різноманітними і стратегічно розташованими, щоб кинути виклик здатності учня ідентифікувати та виправляти складні граматичні проблеми. Використовуйте тему творчо, інтегруючи її повністю або частково, щоб забезпечити, що текст є контекстуально доречним, захоплюючим та відповідно складним. Мета полягає в тому, щоб учень проаналізував текст, ідентифікував граматичні помилки та виправив їх, що допоможе покращити його граматичні навички та розуміння. Поверніть текст чітко, без додаткового форматування.`;
        }
        case "B2.2": {
            const mistakes = getRandomMistakesUAB22();
            return `Ви є асистентом з вивчення мови. Ваше завдання - створити текст до 7 речень для учня з високим рівнем знань (B2.2), використовуючи тему "${hardTopic}". Цей текст повинен містити від 4 навмисних граматичних помилок, пов'язаних з обраними помилками [${mistakes}]. Помилки повинні бути різноманітними і тонко інтегрованими, щоб кинути виклик учню в здатності ідентифікувати та виправляти складні граматичні проблеми. Використовуйте тему творчо, як повністю, так і частково, щоб забезпечити, що текст є контекстуально доречним, інтелектуально захоплюючим та відображає реальне використання мови. Мета полягає в тому, щоб учень критично проаналізував текст, точно ідентифікував граматичні помилки та виправив їх, тим самим покращуючи своє володіння складною граматикою української мови. Поверніть текст чітко, без додаткового форматування.`;
        }
        default:
            return "Bad Input";
    }
};
