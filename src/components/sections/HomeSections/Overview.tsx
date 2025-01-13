import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useCallback } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import FloatElement from '@/components/ElementAnimation/FloatElement';

const mainTech = [
    { id: 1, stack: 'React' },
    { id: 3, stack: 'Next.js' },
    { id: 2, stack: 'JavaScript' },
    { id: 4, stack: 'TypeScript' },
    { id: 5, stack: 'Tailwind' },
];

const quickAction = [
    { id: 'project', action: 'Projects', icon: faPenToSquare },
    { id: 'contact', action: 'Contact', icon: faEnvelope },
];

const quickContact = [
    { id: 1, icon: faLinkedin, link: 'https://www.linkedin.com/in/minh-tuan-nguyen-xuan/' },
    { id: 2, icon: faGithub, link: 'https://github.com/tuannguyen2002' },
    { id: 3, icon: faTelegram, link: 'https://t.me/nx_minhtuan' },
];

export default function Overview() {
    const handleScroll = useCallback((section: string) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, []);

    return (
        <div className="block-page-left flex gap-5 w-1/2 h-full max-sm:w-full">
            <div className="flex flex-col gap-10 w-full">
                <div className="flex justify-center items-center gap-3 w-fit h-10 p-2 pl-5 pr-5 font-bold rounded-full border-2 border-neutral-700/50 text-neutral-700 select-none shadow-[0_0_10px_#404040] hover:bg-neutral-700/20 hover:shadow-[0_0_30px_#404040] transition-all duration-700">
                    <FontAwesomeIcon icon={faWandMagicSparkles} /> Ready to Break Boundaries
                </div>
                <div className="flex flex-col justify-center items-start">
                    <span className="font-code font-black text-8xl text-neutral-700 max-sm:text-6xl">
                        <FloatElement duration={2}>Frontend Developer</FloatElement>
                    </span>
                </div>
                <span className="font-code inline-block overflow-hidden whitespace-nowrap text-base text-neutral-700 max-sm:text-xs">
                    <Typewriter
                        words={[
                            'Website and application interface development.',
                            'Phát triển giao diện website và ứng dụng.',
                        ]}
                        loop
                        cursor
                        cursorStyle="|"
                        cursorBlinking={false}
                        typeSpeed={40}
                        deleteSpeed={40}
                    />
                </span>
                <div className="flex gap-3 max-sm:flex-wrap">
                    {mainTech.map((item) => (
                        <div
                            key={item.id}
                            className="w-fit h-10 p-2 pl-5 pr-5 bg-transparent border-2 border-neutral-700 text-neutral-700 rounded-full"
                        >
                            {item.stack}
                        </div>
                    ))}
                </div>
                <div className="flex gap-3 w-2/3">
                    {quickAction.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className="flex w-1/2 h-10 justify-center gap-3 items-center text-lg bg-transparent border-2 border-neutral-700 text-neutral-700 lg:font-semibold isolation-auto shadow-[0_0_10px_#404040] hover:shadow-[0_0_30px_#404040] transition-all duration-300 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-lg before:bg-neutral-700/20 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden group select-none cursor-pointer"
                        >
                            {item.action}
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="w-4 h-4 transition-all duration-500 ease-in-out group-hover:translate-x-2"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex gap-3">
                    {quickContact.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            className="flex justify-center items-center w-10 h-10 bg-transparent border-2 border-neutral-700 text-neutral-700 shadow-[0_0_10px_#404040] hover:shadow-[0_0_30px_#404040] transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
