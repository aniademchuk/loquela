import { useTranslation } from "react-i18next";
import Navbar from "../components/layout/Navbar";

const PrivacyPolicyEN = () => {
    return (
        <div className="p-4 text-gray-700 space-y-6 text-justify">
            <h1 className="text-5xl text-black font-bold text-center">Privacy Policy</h1>
            <p className="text-gray-600 text-lg">
                This privacy policy is designed for the graduation project of IA-03 student Ganna Demchuk at the
                National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute.” Please note that
                this is not a real product, and is intended solely for educational purposes.
            </p>
            <h2 className="text-2xl text-black font-semibold text-center">Data Collection</h2>
            <p className="text-gray-600 text-lg">
                The only data we collect includes your email, full name, timezone, and relevant values necessary for the
                software’s functionality, such as user statistics, reminders, and progress.
            </p>
            <h2 className="text-2xl text-black font-semibold text-center">Security</h2>
            <p className="text-gray-600 text-lg">
                All security measures, including user authentication, are managed by Firebase (Google). We do not store
                or have access to user passwords.
            </p>
            <h2 className="text-2xl text-black font-semibold text-center">Third-Party Services</h2>
            <p className="text-gray-600 text-lg">
                We use GitHub Pages (gh-pages) for deployment, which may involve the use of third-party applications. By
                using this software, you acknowledge and consent to the potential usage of third-party services.
            </p>
        </div>
    );
};
const PrivacyPolicyUA = () => {
    return (
        <div className="p-4 text-gray-700 space-y-6 text-justify">
            <h1 className="text-5xl text-black font-bold text-center">Політика конфіденційності</h1>
            <p className="text-gray-600 text-lg">
                Ця політика конфіденційності розроблена для дипломного проекту студентки ІА-03 Ганни Демчук у
                Національному технічному університеті України "Київський політехнічний інститут імені Ігоря
                Сікорського". Будь ласка, зверніть увагу, що це не справжній продукт і призначений виключно для освітніх
                цілей.
            </p>
            <h2 className="text-2xl text-black font-semibold text-center">Збір даних</h2>
            <p className="text-gray-600 text-lg">
                Ми збираємо лише ваші електронну пошту, повне ім'я, часовий пояс та відповідні значення, необхідні для
                функціонування програмного забезпечення, такі як статистика користувача, нагадування та прогрес.
            </p>
            <h2 className="text-2xl text-black font-semibold text-center">Безпека</h2>
            <p className="text-gray-600 text-lg">
                Всі заходи безпеки, включаючи аутентифікацію користувача, керуються Firebase (Google). Ми не зберігаємо
                та не маємо доступу до паролів користувачів.
            </p>
            <h2 className="text-2xl text-black font-semibold text-center">Сторонні сервіси</h2>
            <p className="text-gray-600 text-lg">
                Ми використовуємо GitHub Pages (gh-pages) для розгортання, що може включати використання сторонніх
                додатків. Використовуючи це програмне забезпечення, ви визнаєте та погоджуєтеся з можливим використанням
                сторонніх сервісів.
            </p>
        </div>
    );
};
const PrivacyPolicyDE = () => {
    return (
        <div className="p-4 text-gray-700 space-y-6 text-justify">
            <h1 className="text-5xl text-black font-bold text-center">Datenschutzrichtlinie</h1>
            <p className="text-gray-600 text-lg">
                Diese Datenschutzrichtlinie wurde für das Abschlussprojekt der IA-03-Studentin Ganna Demchuk an der
                Nationalen Technischen Universität der Ukraine "Igor Sikorsky Kiewer Polytechnisches Institut"
                entwickelt. Bitte beachten Sie, dass dies kein echtes Produkt ist und ausschließlich zu Bildungszwecken
                dient.
            </p>
            <h2 className="text-2xl text-black font-semibold text-center">Datenerhebung</h2>
            <p className="text-gray-600 text-lg">
                Die einzigen Daten, die wir sammeln, umfassen Ihre E-Mail, Ihren vollständigen Namen, Ihre Zeitzone und
                relevante Werte, die für die Funktionalität der Software notwendig sind, wie Benutzerdaten, Erinnerungen
                und Fortschritt.
            </p>
            <h2 className="text-2xl text-black font-semibold text-center">Sicherheit</h2>
            <p className="text-gray-600 text-lg">
                Alle Sicherheitsmaßnahmen, einschließlich der Benutzerauthentifizierung, werden von Firebase (Google)
                verwaltet. Wir speichern keine Benutzerdaten oder haben keinen Zugriff auf Benutzerpasswörter.
            </p>
            <h2 className="text-2xl text-black font-semibold text-center">Drittanbieter-Dienste</h2>
            <p className="text-gray-600 text-lg">
                Wir verwenden GitHub Pages (gh-pages) für die Bereitstellung, was die Nutzung von
                Drittanbieteranwendungen beinhalten kann. Durch die Nutzung dieser Software erkennen Sie die mögliche
                Nutzung von Drittanbieterdiensten an und stimmen dieser zu.
            </p>
        </div>
    );
};

const PrivacyPolicy = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Navbar />
            <div className="px-6 sm:px-12 md:px-20 lg:px-40 xxl:px-52">
                {i18n.language === "en" && <PrivacyPolicyEN />}
                {i18n.language === "ua" && <PrivacyPolicyUA />}
                {i18n.language === "de" && <PrivacyPolicyDE />}
            </div>
        </>
    );
};

export default PrivacyPolicy;
