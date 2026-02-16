'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

// TypeScript Interface for Nav Items
interface NavItem {
    name: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const pathname = usePathname();

    // Scroll detect karne ke liye logic
    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Menu items list - Franchise remove kar diya gaya hai
    const navItems: NavItem[] = [
        { name: 'About', href: '/About' },
        { name: 'Program', href: '/Program' },
        { name: 'Admissions', href: '/Admissions' },
        { name: 'Students', href: '/Students' },
        { name: 'Contact', href: '/Contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* LOGO SECTION */}
                <Link href="/" className="flex items-center group">
                    <div className="relative h-12 w-40 md:h-16 md:w-60 transition-transform group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="DIB Education Zone Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-8 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-[15px] font-bold transition-colors relative group ${pathname === item.href ? 'text-amber-500' : 'text-slate-700 hover:text-amber-500'
                                }`}
                        >
                            {item.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                        </Link>
                    ))}
                </div>

                {/* ACTION BUTTONS - Search Icon Removed */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/Admissions"
                        className="hidden lg:block bg-slate-900 text-white px-7 py-2.5 rounded-full text-sm font-black hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-200 transition-all active:scale-95 text-center"
                    >
                        JOIN NOW
                    </Link>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="md:hidden p-2 text-slate-900 rounded-lg bg-slate-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU DRAWER */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl md:hidden animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-6 gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-lg font-bold p-3 rounded-xl transition-colors ${pathname === item.href ? 'bg-amber-50 text-amber-500' : 'text-slate-800 hover:bg-amber-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-slate-50 mt-2">
                            <Link
                                href="/Admissions"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-center shadow-xl active:scale-95 transition-transform"
                            >
                                JOIN NOW
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;