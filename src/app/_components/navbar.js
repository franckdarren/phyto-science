"use client";

import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/logo phyto.png";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 left-0 w-full border-b z-50 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src={logo}
                        alt="logo phytoscience"
                        className="object-cover h-[50px] w-[160px]"
                    />
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
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
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                href="/"
                                className={`block py-2 px-3 rounded md:p-0 ${
                                    pathname === "/"
                                        ? "text-[#377A00] font-bold"
                                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#377A00]"
                                }`}
                                aria-current={pathname === "/" ? "page" : undefined}
                            >
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/produits"
                                className={`block py-2 px-3 rounded md:p-0 ${
                                    pathname === "/produits"
                                        ? "text-[#377A00] font-bold"
                                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#377A00]"
                                }`}
                            >
                                Produits
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/temoignages"
                                className={`block py-2 px-3 rounded md:p-0 ${
                                    pathname === "/temoignages"
                                        ? "text-[#377A00] font-bold"
                                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#377A00]"
                                }`}
                            >
                                Témoignages
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/actualites"
                                className={`block py-2 px-3 rounded md:p-0 ${
                                    pathname === "/actualites"
                                        ? "text-[#377A00] font-bold"
                                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#377A00]"
                                }`}
                            >
                                Actualités
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
