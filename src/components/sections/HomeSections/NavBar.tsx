'use client';

import { useState, useEffect, useCallback } from 'react';
import { faAddressCard, faCircleUser, faFileCode, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navItems = [
    { id: 'overall', icon: faCircleUser, label: 'Overall' },
    { id: 'skills', icon: faLightbulb, label: 'Skills' },
    { id: 'works', icon: faAddressCard, label: 'Works' },
    { id: 'projects', icon: faFileCode, label: 'Projects' },
];

export default function NavBar() {
    const [active, setActive] = useState<string>('overall');

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
                let currentSection = 'overall';
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
        <div className="navBar fixed top-2/4 -translate-y-1/2 right-0 flex flex-col gap-3 items-center h-auto w-20 p-2 z-10 bg-white rounded-xl shadow-2xl border-solid border-2 border-slate-200 max-sm:top-10 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-fit max-sm:flex-row">
            {navItems.map((item) => (
                <div
                    key={item.id}
                    className={`nav-item flex flex-col justify-center items-center gap-1 w-16 h-16 rounded-lg cursor-pointer ${
                        active === item.id ? 'bg-gradient-to-r from-teal-400 to-blue-500' : 'bg-slate-200'
                    }`}
                    onClick={() => handleScroll(item.id)}
                >
                    <FontAwesomeIcon
                        icon={item.icon}
                        className={`w-5 h-5 ${active === item.id ? 'text-white' : 'text-slate-600'}`}
                    />
                    <div className={`item-label text-xs ${active === item.id ? 'text-white' : 'text-slate-600'}`}>
                        {item.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
