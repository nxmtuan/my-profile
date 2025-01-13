'use client';

import { useState, useEffect, useCallback } from 'react';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'role', label: 'About' },
    { id: 'showcase', label: 'Skill' },
    { id: 'project', label: 'Project' },
    { id: 'contact', label: 'Contact' },
];

export default function NavBar() {
    const [active, setActive] = useState<string>('home');

    const handleScroll = useCallback((section: string) => {
        setActive(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, []);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const handleSectionChange = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                let currentSection = 'home';
                navItems.forEach((item) => {
                    const element = document.getElementById(item.id);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                            currentSection = item.id;
                        }
                    }
                });
                setActive(currentSection);
            }, 100);
        };

        window.addEventListener('scroll', handleSectionChange);

        return () => {
            window.removeEventListener('scroll', handleSectionChange);
            clearTimeout(timer);
        };
    }, []);

    return (
        <header className="navBar fixed top-0 left-0 right-0 flex gap-3 justify-end items-center h-14 w-full p-5 pr-20 z-50 select-none max-sm:w-full max-sm:flex-row max-sm:pr-0 max-sm:justify-center">
            <div className="author flex absolute left-20 gap-2 h-7 max-sm:hidden">
                <span className="font-playwrite text-primaryColor">Nguyen Tuan</span>
            </div>
            {navItems.map((item) => (
                <div
                    key={item.id}
                    className={`nav-item flex justify-center items-center gap-1 cursor-pointer hover:border-b-4 hover:border-primaryColor hover:transition-all duration-300 ease-in-out ${
                        active === item.id ? 'border-b-4 border-primaryColor' : 'border-slate-200/50'
                    }`}
                    onClick={() => handleScroll(item.id)}
                >
                    <div
                        className={`font-bold pl-2 pr-2 pb-1 h-full item-label text-base hover:-translate-y-1 transform transition duration-300 ${
                            active === item.id ? 'text-primaryColor' : 'text-gray-500'
                        }`}
                    >
                        {item.label}
                    </div>
                </div>
            ))}
        </header>
    );
}
