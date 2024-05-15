import { getRandomHardTopicUA, getRandomTopicUA } from "../../../topics/ua-topics";

export const getQuestionPromptUA = (userLevel: string): string => {
    const topic = getRandomTopicUA();
    const hardTopic = getRandomHardTopicUA();

    const uaPrompts: { [key: string]: string } = {
        "A1.1": `Ви асистент з вивчення укріїнської мови. Використайте цю тему: ${topic}, щоб створити 3 речення для початкового рівня української мови. Якщо не всі слова в реченні підходять по сенсу, заміни їх на більш коректні. Вам слід налаштувати тему та розширити її, щоб надати відповідний навчальний матеріал для початківців. Використовуйте найпростіші слова та мову, щоб створити легкі речення.
            Після створення тексту, розробіть три запитання українською мовою, які перевіряють здатність користувача зрозуміти текст. Ці запитання мають зосереджуватися на деталях у тексті.
            Поверніть лише текст і запитання, подані чітко, без додаткового форматування.
            `,

        "A1.2": `Ви асистент з вивчення укріїнської мови. Використайте цю тему: ${topic}, щоб створити текст із трьома реченнями для початкового рівня української мови A1.2. Студенти на цьому рівні мають базові знання мови і можуть розуміти прості фрази. 
        Ваше завдання — адаптувати тему та розширити її для створення відповідного навчального матеріалу для учнів на цьому рівні. 
        Використовуйте легкі для розуміння слова та структури. Після створення тексту, сформулюйте три запитання українською мовою, які перевіряють здатність користувача зрозуміти текст. Запитання мають зосереджуватися на деталях у тексті. 
        Поверніть лише текст і запитання, подані чітко, без додаткового форматування.
            `,

        "A2.1": `Ви асистент з вивчення української мови. Використайте цю тему: ${topic}, щоб створити текст з чотирма реченнями для мовного рівня A2.1. 
        Учні на цьому рівні можуть розуміти речення та часто вживані вирази, які стосуються таких тем як сім’я, покупки, місцеві події. Ваше завдання — адаптувати тему та розширити її для створення відповідного навчального матеріалу для учнів на цьому рівні. 
        Після створення тексту, сформулюйте чотири запитання українською мовою, які перевіряють здатність користувача зрозуміти текст. Запитання мають зосереджуватися на деталях у тексті. 
        Поверніть лише текст і запитання, подані чітко, без додаткового форматування.
            `,

        "A2.2": `Ви асистент з вивчення української мови. Використайте цю тему: ${topic}, щоб створити текст із п’ятьма пов’язаними реченнями для мовного рівня A2.2. Текст повинен допомагати перевірити, як користувач розуміє речення та часто вживані вирази на такі теми, як особиста інформація, покупки, місцева географія, зайнятість. 
        Ваше завдання — адаптувати тему та розширити її для створення відповідного навчального матеріалу для учнів на цьому рівні. 
        Після створення тексту, сформулюйте чотири запитання українською мовою, які перевіряють здатність користувача зрозуміти текст. Запитання мають зосереджуватися на деталях у тексті. 
        Поверніть лише текст і запитання, подані чітко, без додаткового форматування.
            `,

        "B1.1": `Використайте цю тему: ${topic}, щоб створити текст українською мовою, який складається з більш ніж десяти речень, призначений для мовного рівня B1.1. Учні на цьому рівні можуть розуміти основні моменти чіткої стандартної інформації зі знайомих сфер, які вони регулярно зустрічають у роботі, школі, відпочинку тощо. Текст повинен охоплювати теми, пов'язані з цими областями, можливо, включаючи сценарій або елемент вирішення проблем, що залучає учня до контенту, актуального для їхнього повсякденного життя.
        Після створення тексту розробіть шість запитань для перевірки розуміння українською мовою. Ці запитання повинні перевіряти здатність учня усвідомлювати основні моменти, робити висновки та виводити висновки на основі тексту, йдучи за межі простого відтворення, включаючи питання "чому" та "як", що спонукають до глибшого аналізу.
        Поверніть лише текст і запитання, представлені чітко, без додаткового форматування.
            `,

        "B1.2": `Використайте цю тему: ${hardTopic}, щоб створити текст українською мовою, який складається з більш ніж дванадцяти речень, призначений для мовного рівня B1.2. Учні на цьому етапі можуть розуміти основні ідеї складних текстів на конкретні та абстрактні теми, включаючи технічні дискусії у своїй сфері спеціалізації. Текст, повинен охоплювати різні теми, можливо, інтегруючи мотиви з актуальних подій, культурних дискусій або технологічних досягнень, що можуть викликати у учня потребу критично мислити та аналізувати різні точки зору.
        Після створення тексту розробіть шість запитань для перевірки розуміння українською мовою. Ці запитання повинні не тільки перевіряти розуміння учнем фактів, але й його здатність аналізувати та синтезувати інформацію. Запитання мають включати ті, що просять учня пояснити точки зору, обговорити переваги та недоліки запропонованих варіантів та надати деталізовані відповіді на основі тексту.
        Поверніть лише текст і запитання, представлені чітко, без додаткового форматування.
            `,

        "B2.1": `Використайте цю тему: ${hardTopic}, щоб створити повний текст українською мовою, схожий на статтю, призначений для мовного рівня B2.1. Текст повинен містити понад п’ятнадцять речень та бути структурованим так, щоб залучити до складних тем, як конкретних, так і абстрактних. Він повинен включати технічні обговорення, придатні для людей, знайомих із спеціалізованими темами.
        Після написання статті розробіть сім запитань для перевірки розуміння української мовою. Ці запитання повинні оцінювати здатність учня усвідомлювати та аналізувати основні ідеї, а також його навички у врахуванні різних перспектив. Запитання мають спонукати до критичного мислення та детальних відповідей, просячи учня пояснити та підтримати свою точку зору на обговорювані у статті питання, включаючи переваги та недоліки будь-яких наведених сценаріїв або рішень.
        Поверніть лише текст і запитання, представлені чітко, без додаткового форматування.
            `,

        "B2.2": `Використайте цю тему: ${hardTopic}, щоб створити передовий, детальний текст українською мовою, схожий на глибокий аналітичний огляд, призначений для мовного рівня B2.2. Цей текст повинен містити понад вісімнадцять речень та занурюватися у складні та нюансовані теми. Стаття має інтегрувати інформацію та точки зору з багатьох джерел, пропонуючи всеосяжний огляд, який вимагає високих навичок розуміння.
        Після створення статті розробіть сім глибоких запитань для перевірки розуміння української мовою. Ці запитання повинні тестувати здатність учня підсумовувати та реконструювати аргументи, а також його здатність розуміти та інтерпретувати нюансовані деталі та складні концепції, представлені у тексті. Запитання мають заохочувати до детального розгляду змісту, вимагаючи відповідей, що відображають глибоке розуміння та здатність обговорювати тонкі відмінності та тонші нюанси значення.
        Поверніть лише текст і запитання, представлені чітко, без додаткового форматування.
            `,
    };

    return uaPrompts[userLevel] || "Bad Input";
};
