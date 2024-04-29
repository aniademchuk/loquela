import React, { useState } from "react";
import { Tooltip } from "flowbite-react";

const LanguageButtonSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState<string>("us");

    return (
        <>
            {/* eslint-disable-next-line react/style-prop-object */}
            <Tooltip content="Interface Langugae" style="light">
                <button
                    className="p-1 w-[44px] h-[44px] text-gray-900 rounded-lg hover:bg-gray-100 group"
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    type="button"
                    onClick={() => setIsOpen((prevState) => !prevState)}
                >
                    <img src={`https://flagcdn.com/${language}.svg`} width="40" alt="United States" />
                </button>
            </Tooltip>
            <div
                id="dropdown"
                className={`z-10 bottom-14 left-6 ${isOpen ? "absolute" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
            >
                <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                    <li className="px-2 py-1">
                        <button
                            className="flex flex-row w-full rounded-lg gap-2 px-4 py-2 items-center hover:bg-gray-100"
                            onClick={() => {
                                setLanguage("us");
                                setIsOpen(false);
                            }}
                        >
                            <img src="https://flagcdn.com/us.svg" width="32" alt="United States" />
                            <span>English</span>
                        </button>
                    </li>
                    <li className="px-2 py-1">
                        <button
                            className="flex flex-row w-full rounded-lg gap-2 px-4 py-2 items-center hover:bg-gray-100"
                            onClick={() => {
                                setLanguage("ua");
                                setIsOpen(false);
                            }}
                        >
                            <img src="https://flagcdn.com/ua.svg" width="32" alt="United States" />
                            <span>Ukrainian</span>
                        </button>
                    </li>
                    <li className="px-2 py-1">
                        <button
                            className="flex flex-row w-full rounded-lg gap-2 px-4 py-2 items-center hover:bg-gray-100"
                            onClick={() => {
                                setLanguage("de");
                                setIsOpen(false);
                            }}
                        >
                            <img src="https://flagcdn.com/de.svg" width="32" alt="United States" />
                            <span>German</span>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default LanguageButtonSideBar;
