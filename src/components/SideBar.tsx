import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageButtonSideBar from "./buttons/LanguageButtonSideBar";
import ThemeButton from "./buttons/ThemeButton";
import UserPreferencesButton from "./buttons/UserPreferencesButton";
import { useUser } from "../context/UserContext";
import { Spinner } from "flowbite-react";
import { useTranslation } from "react-i18next";

interface SideNavBarProps {
    children: React.ReactNode;
}

const SideBar = ({ children }: SideNavBarProps) => {
    const [isSideNavOpen, setSideNavOpen] = useState<boolean>(false);
    const location = useLocation().pathname;
    const { userData } = useUser();
    const { t } = useTranslation();

    return (
        <>
            <nav className="block md:hidden sticky top-0 z-50 w-full bg-white border-b border-gray-200">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                onClick={() => setSideNavOpen((prevState) => !prevState)}
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                            <Link to="/home" className="flex ms-2 md:me-24">
                                <img src="/loquela-logo.png" className="h-14" alt="Loquela Logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/*Here change pt-20*/}
            <aside
                id="logo-sidebar"
                className={`flex flex-col justify-between fixed top-0 left-0 z-40 w-64 h-screen pt-20 md:pt-3 transition-transform bg-white border-r border-gray-200 ${isSideNavOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
                aria-label="Sidebar"
            >
                <>
                    <Link to="/home" className="md:flex ms-14 hidden">
                        <img src="/loquela-logo.png" className="h-14" alt="Loquela Logo" />
                    </Link>
                    <hr className="h-px mt-0 md:mt-2 bg-gray-200 border-0" />
                    <div className="h-full mt-2 px-3 pb-4 overflow-y-auto bg-white">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link
                                    to="/home"
                                    className={`flex items-center p-2 rounded-lg group ${location === "/home" ? "text-sky-900 bg-sky-50" : "hover:bg-gray-100 text-gray-900"}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="2 0 24 24"
                                        fill="currentColor"
                                        className={`w-6 h-6  transition duration-75 ${location === "/home" ? "text-sky-700" : "text-gray-500 group-hover:text-gray-900"}`}
                                    >
                                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                    </svg>
                                    <span className="ms-3">{t("sidebar.home")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/progress"
                                    className={`flex items-center p-2 rounded-lg group ${location === "/progress" ? "text-sky-900 bg-sky-50" : "hover:bg-gray-100 text-gray-900"}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="2 0 24 24"
                                        fill="currentColor"
                                        className={`w-6 h-6  transition duration-75 ${location === "/progress" ? "text-sky-700" : "text-gray-500 group-hover:text-gray-900"}`}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
                                            clipRule="evenodd"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span className="ms-3">{t("sidebar.progress")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/grammar"
                                    className={`flex items-center p-2 rounded-lg group ${location === "/grammar" ? "text-sky-900 bg-sky-50" : "hover:bg-gray-100 text-gray-900"}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="2 0 24 24"
                                        fill="currentColor"
                                        className={`w-6 h-6  transition duration-75 ${location === "/grammar" ? "text-sky-700" : "text-gray-500 group-hover:text-gray-900"}`}
                                    >
                                        <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                                    </svg>

                                    <span className="flex-1 ms-3 whitespace-nowrap">{t("sidebar.grammar")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/writing"
                                    className={`flex items-center p-2 rounded-lg group ${location === "/writing" ? "text-sky-900 bg-sky-50" : "hover:bg-gray-100 text-gray-900"}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="2 0 24 24"
                                        fill="currentColor"
                                        className={`w-6 h-6  transition duration-75 ${location === "/writing" ? "text-sky-700" : "text-gray-500 group-hover:text-gray-900"}`}
                                    >
                                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">{t("sidebar.writing")}</span>
                                    {/*<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">*/}
                                    {/*    3*/}
                                    {/*</span>*/}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/reading"
                                    className={`flex items-center p-2 rounded-lg group ${location === "/reading" ? "text-sky-900 bg-sky-50" : "hover:bg-gray-100 text-gray-900"}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="2 0 24 24"
                                        fill="currentColor"
                                        className={`w-6 h-6  transition duration-75 ${location === "/reading" ? "text-sky-700" : "text-gray-500 group-hover:text-gray-900"}`}
                                    >
                                        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">{t("sidebar.reading")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/test"
                                    className={`flex items-center p-2 rounded-lg group ${location === "/test" ? "text-sky-900 bg-sky-50" : "hover:bg-gray-100 text-gray-900"}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="2 0 24 24"
                                        fill="currentColor"
                                        className={`w-6 h-6  transition duration-75 ${location === "/test" ? "text-sky-700" : "text-gray-500 group-hover:text-gray-900"}`}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">{t("sidebar.test")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/recommendations"
                                    className={`flex items-center p-2 rounded-lg group ${location === "/recommendations" ? "text-sky-900 bg-sky-50" : "hover:bg-gray-100 text-gray-900"}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="2 0 24 24"
                                        fill="currentColor"
                                        className={`w-6 h-6  transition duration-75 ${location === "/recommendations" ? "text-sky-700" : "text-gray-500 group-hover:text-gray-900"}`}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        {t("sidebar.recommendations")}
                                    </span>
                                </Link>
                            </li>
                            <hr className="h-px my-8 bg-gray-200 border-0" />
                            <li>
                                <Link
                                    to="/support"
                                    className={`flex items-center p-2 rounded-lg group ${location === "/support" ? "text-sky-900 bg-sky-50" : "hover:bg-gray-100 text-gray-900"}`}
                                >
                                    <svg
                                        className={`w-6 h-6  transition duration-75 ${location === "/support" ? "text-sky-700" : "text-gray-500 group-hover:text-gray-900"}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">{t("sidebar.support")}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </>
                <div className="flex flex-col px-4">
                    <hr className="h-px bg-gray-200 border-0" />
                    <div className="flex flex-row items-center justify-center gap-8 py-1.5">
                        <LanguageButtonSideBar />
                        <ThemeButton />
                        <UserPreferencesButton />
                    </div>
                </div>
            </aside>
            {userData ? (
                <div
                    className="px-4 sm:px-10 lg:px-20 pt-6 py-10 md:ml-64 bg-gray-50 h-full"
                    style={{ minHeight: "100vh" }}
                >
                    {children}
                </div>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default SideBar;
