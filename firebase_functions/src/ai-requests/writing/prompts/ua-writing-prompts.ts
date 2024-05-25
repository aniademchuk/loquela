import { getRandomHardTopicUA, getRandomTopicUA } from "../../../topics/ua-topics";

export const getWritingPromptUA = (userLevel: string, userLearnLanguage: string): string => {
    const topic = getRandomTopicUA();
    const hardTopic = getRandomHardTopicUA();

    const uaPrompts: { [key: string]: string } = {
        "A1.1": `Як помічник з вивчення мови, будь ласка, згенеруйте 5 слів, пов'язаних з темою "${topic}", для користувача на рівні A1.1 української мови. Ці слова повинні бути максимально простими, оскільки користувач тільки почав вивчати ${userLearnLanguage}.
        Слова повинні бути згенеровані українською, щоб користувач міг перекласти їх мовою, яку він вивчає.
        Згенеруй пояснення до завдання та 5 слів, розділених комами, без додаткового форматування. Завдання та слова пиши українською.
            `,

        "A1.2": `Як помічник з вивчення мови, будь ласка, згенеруйте 1 просте речення, пов'язане з темою "${topic}", для користувача на рівні A1.2 української мови. Це речення повинно бути максимально простим, оскільки користувач тільки почав вивчати ${userLearnLanguage}.
        Речення повинно бути згенероване українською, щоб користувач міг перекласти його мовою, яку він вивчає.
        Згенеруй пояснення до завдання і саме речення, яке треба перекласти, без додаткового форматування. Завдання та речення пиши українською.
            `,

        "A2.1": `Як помічник з вивчення мови, будь ласка, згенеруйте просту тему для письма, використовуючи тему "${topic}", для користувача на рівні A2.1 української мови. Уявіть собі користувача, який почав вивчати ${userLearnLanguage} і вже має невеликий прогрес, надайте тему для цього рівня мови.
        Якщо зміст теми не пов'язаний між собою, будь ласка, відкоригуйте його за потребою. Тема повинна бути згенерована українською мовою.
        Також тема повинна бути простою і короткою, менш ніж 2 речення. Дайте користувачу 2 прості та зрозумілі пропозиції для рівня A2.1, про що він може писати, щоб розширити цю тему та практикувати письмо.
        Згенеруй пояснення до завдання, сам текст і пропозиції без відповідей і будь-якого додаткового форматування.
            `,

        "A2.2": `Як помічник з вивчення мови, будь ласка, згенеруйте просту тему для письма, використовуючи тему "${topic}", для користувача на рівні A2.2 української мови.
        Користувач має деяке розуміння базових речень і часто вживаних виразів, особливо тих, що стосуються особистої та сімейної інформації, покупок, місцевої географії та працевлаштування. Розширте тему, щоб зробити її трохи складнішою, але відповідною для їх рівня навчання.
        Якщо зміст теми не пов'язаний між собою, будь ласка, відкоригуйте його за потребою. Тема повинна бути згенерована українською мовою.
        Дайте користувачу 3 пропозиції для рівня A2.2, про що він може писати, щоб практикувати письмо.
        Згенеруй пояснення до завдання, текст і пропозиції без відповідей і будь-якого додаткового форматування.
            `,

        "B1.1": `Використайте цю тему: ${topic}, щоб згенерувати тему українською мовою, пристосовану для вивчення мови на рівні B1.1 для практики навичок письма.
        Учень на цьому рівні може розуміти основні моменти чіткої стандартної інформації на знайомі теми, які регулярно зустрічаються на роботі, в школі, на дозвіллі тощо. Текст повинен досліджувати теми, пов'язані з цими сферами, можливо, включаючи сценарій або елемент вирішення проблеми, який зацікавить учня та буде пов'язаний з їх повсякденним життям.
        Завдання може полягати в написанні статті, листа, програми або пояснення якоїсь теми. Використовуйте найкращий відповідний формат для рівня B1.1.
        Згенеруй пояснення до завдання та тему без відповідей і будь-якого додаткового форматування.
            `,

        "B1.2": `Використайте цю тему: ${hardTopic}, щоб згенерувати тему українською мовою, пристосовану для вивчення мови на рівні B1.2 для практики навичок письма.
        Учень на цьому етапі може розуміти основні ідеї складних текстів на конкретні та абстрактні теми. Тому текст повинен охоплювати різні предмети, можливо інтегруючи теми з поточних подій, культурних дискусій або технологічних досягнень, які можуть викликати в учня критичне мислення та аналіз різних точок зору.
        Завдання може полягати в написанні статті, листа, програми або пояснення якоїсь теми. Використовуйте найкращий відповідний формат для рівня B1.2.
        Згенеруй пояснення до завдання та тему у вигляді простого тексту без відповідей і будь-якого додаткового форматування.
            `,

        "B2.1": `Використайте цю тему: ${hardTopic}, щоб згенерувати тему українською мовою, пристосовану для вивчення мови на рівні B2.1. Ця тема повинна допомогти практикувати навички письма.
        На рівні B2.1 люди можуть писати чіткі, детальні тексти на різні теми, демонструючи послідовну структуру та широкий словниковий запас. Вони здатні систематично висловлювати свої точки зору, адаптуючи свій стиль для різних аудиторій, і використовувати складні структури речень з високим ступенем граматичної точності.
        Згенеруй пояснення до завдання та текст, без будь-якого додаткового форматування.
            `,

        "B2.2": `Використайте цю тему: ${hardTopic}, щоб згенерувати тему українською мовою, пристосовану для вивчення мови на рівні B2.2. Ця тема повинна допомогти практикувати навички письма.
        На рівні B2.2 люди можуть писати чіткі, добре структуровані та детальні тексти на різні теми, демонструючи контрольоване використання організаційних схем, сполучних слів та засобів зв’язності. Вони можуть обговорювати складні теми в листі, есе або звіті, підкріплюючи свої точки зору логічними аргументами та відповідними прикладами.
        Згенеруй пояснення до завдання та текст, без будь-якого додаткового форматування.
            `,
    };

    return uaPrompts[userLevel] || "Bad Input";
};
