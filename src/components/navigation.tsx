"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav id="navigation" className="flex justify-between items-center">
            <Link href="/">
                <div className="flex space-x-2">
                    <div className="font-bold font-serif text-xl" style={{ color: 'var(--secondary)' }}>KM</div>
                    <h1 className="font-bold font-serif text-xl">Kuba Milcarz</h1>
                </div>
            </Link>

            {/* Hamburger Icon */}
            <button
                className="sm:hidden flex items-center p-2 rounded-md hover:bg-slate-100"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                    />
                </svg>
            </button>

            {/* Menu Items */}
            <ul
                className={`flex-col space-y-2 text-sm sm:flex sm:flex-row sm:space-x-1 sm:space-y-0 ${isOpen ? 'flex' : 'hidden'
                    } absolute sm:relative top-16 sm:top-0 left-0 w-full sm:w-auto bg-white sm:bg-transparent p-4 sm:p-0 shadow-md sm:shadow-none`}
            >
                <li>
                    <Link href="/apps" className="block p-2 rounded-md hover:bg-slate-100">
                        Apps
                    </Link>
                </li>
                <li>
                    <Link href="#youtube" className="block p-2 rounded-md hover:bg-slate-100">
                        YouTube
                    </Link>
                </li>
                <li>
                    <Link href="#newsletter" className="block p-2 rounded-md hover:bg-slate-100">
                        Newsletter
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
