import React from "react";
import { Tooltip } from "flowbite-react";

const ThemeButton = () => {
    return (
        <>
            {/* eslint-disable-next-line react/style-prop-object */}
            <Tooltip content="Theme" style="light">
                <button className="p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                        />
                    </svg>
                </button>
            </Tooltip>
        </>
    );
};

export default ThemeButton;
