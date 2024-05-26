import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { getLanguage, setLanguage } from "../../helper/LocalStoreHelper";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState<string>(getLanguage() || "en");

    const handleLanguageChange = (lang: string) => {
        setCurrentLang(lang);
        setLanguage(lang);
        i18n.changeLanguage(lang).then();
    };

    return (
        <nav className="px-0 md:px-32 lg:px-40 xxl:px-52 bg-white w-full z-20 top-0 start-0 border-b border-gray-200 ">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/loquela-logo.png" className="h-14" alt="Loquela Logo" />
                </Link>
                <div className="flex flex-col xs:flex-row items-center md:order-2 xs:space-x-4 md:space-x-3 rtl:space-x-reverse">
                    <Dropdown
                        label={
                            <img
                                src={`https://flagcdn.com/${currentLang === "en" ? "us" : currentLang}.svg`}
                                width="36"
                                alt="United States"
                            />
                        }
                        inline
                        arrowIcon={false}
                        className="px-2 py-1 rounded-lg"
                    >
                        <Dropdown.Item onClick={() => handleLanguageChange("en")} className="rounded-lg">
                            <div className="flex flex-row w-full rounded-lg gap-2 px-2 py-1 items-center hover:bg-gray-100">
                                <img src="https://flagcdn.com/us.svg" width="32" alt="United States" />
                                <span>{t("language.en")}</span>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleLanguageChange("ua")} className="rounded-lg">
                            <div className="flex flex-row w-full rounded-lg gap-2 px-2 py-1 items-center hover:bg-gray-100">
                                <img src="https://flagcdn.com/ua.svg" width="32" alt="United States" />
                                <span>{t("language.ua")}</span>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleLanguageChange("de")} className="rounded-lg">
                            <div className="flex flex-row w-full rounded-lg gap-2 px-2 py-1 items-center hover:bg-gray-100">
                                <img src="https://flagcdn.com/de.svg" width="32" alt="United States" />
                                <span>{t("language.de")}</span>
                            </div>
                        </Dropdown.Item>
                    </Dropdown>
                    <button
                        type="button"
                        className="text-gray-700 hover:text-black font-semibold text-md px-4 py-2 text-center"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none
                            focus:ring-blue-300 font-semibold rounded-lg text-md px-4 py-2 text-center"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
