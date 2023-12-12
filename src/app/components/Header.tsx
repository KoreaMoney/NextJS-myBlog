'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="flex justify-between items-center p-4">
            <Link href="/">
                <h1 className="text-3xl font-bold">{"Dowon's Dev-Blog"}</h1>
            </Link>
            <nav className="flex gap-4">
                <Link href="/" className="hover:text-yellow-500 font-semibold">
                    Home
                </Link>
                <Link
                    href="/about"
                    className={`hover:text-yellow-500 font-semibold ${
                        pathname === '/about' && 'text-yellow-400 font-bold'
                    }`}
                >
                    About
                </Link>
                <Link
                    href="/posts"
                    className={`hover:text-yellow-500 font-semibold ${
                        pathname === '/posts' && 'text-yellow-400 font-bold'
                    }`}
                >
                    Posts
                </Link>
                <Link
                    href="/contact"
                    className={`hover:text-yellow-500 font-semibold ${
                        pathname === '/contact' && 'text-yellow-400 font-bold'
                    }`}
                >
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;
