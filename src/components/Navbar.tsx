import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isNavOpen, setNavOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/loquela-logo.png" className="h-14" alt="Loquela Logo" />
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="text-gray-700 hover:text-black font-medium text-md px-4 py-2 text-center"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                            focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                    <button
                        data-collapse-toggle="navbar-hamburger"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg
                            md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                        aria-controls="navbar-hamburger"
                        aria-expanded="false"
                        onClick={() => setNavOpen(!isNavOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg
                            bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white "
                    >
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 text-white bg-blue-700 rounded
                                    md:bg-transparent md:text-blue-700 md:p-0 "
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
                                    md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
                                    md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
                                    md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`${isNavOpen ? "block" : "hidden"} md:hidden w-full `}>
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 ">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 text-white bg-blue-700 rounded "
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;