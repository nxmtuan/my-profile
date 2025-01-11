'use client';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Slide from '@/components/sections/SkillsSections/Slide';
import { useScroll } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TechStackIcon } from '../sections/SkillsSections/TeckStackIcon';

const techStacks = [
    { icon: 'html.svg', language: 'HTML' },
    { icon: 'css.svg', language: 'CSS' },
    { icon: 'js.svg', language: 'JavaScript' },
    { icon: 'typescript.svg', language: 'TypeScript' },
    { icon: 'c.svg', language: 'C#' },
    { icon: 'java.svg', language: 'Java' },
    { icon: 'react.svg', language: 'ReactJS' },
    { icon: 'next.svg', language: 'NextJS' },
    { icon: 'postgresql.svg', language: 'PostgreSQL' },
    { icon: 'nodejs.svg', language: 'Node JS' },
    { icon: 'tailwindcss.svg', language: 'Tailwind CSS' },
    { icon: 'bootstrap.svg', language: 'Bootstrap' },
    { icon: 'vercel.svg', language: 'Vercel' },
    { icon: 'git.svg', language: 'Git' },
];

export default function Skills() {
    const container = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    return (
        <div
            id="showcase"
            className="skills-wrapper bg-[#e9e9e9] flex w-auto justify-center items-center select-none my-20 max-sm:mt-10 max-sm:mb-10"
        >
            <div className="container flex flex-col gap-10 h-fit justify-center items-center max-sm:h-fit">
                <div className="group flex justify-center items-center gap-5 h-28 p-2 pl-5 pr-5 max-sm:w-full">
                    <FontAwesomeIcon
                        icon={faCubes}
                        className="w-16 h-16 group-hover:scale-125 transition duration-300"
                    />
                    <span className="font-code font-bold text-5xl group-hover:translate-x-3 transition duration-300 max-sm:text-4xl">
                        Tech Sracks
                    </span>
                </div>
                <div className="flex flex-col gap-7 max-md:hidden">
                    <Slide items={techStacks.slice(0, 7)} direction={'left'} left={'-10%'} progress={scrollYProgress} />
                    <Slide
                        items={techStacks.slice(7, 14)}
                        direction={'right'}
                        left={'25%'}
                        progress={scrollYProgress}
                    />
                </div>

                <div className="max-xl:grid max-xl:grid-cols-2 gap-7 xl:hidden">
                    {techStacks.map((item, index) => (
                        <TechStackIcon key={index} icon={item.icon} language={item.language} />
                    ))}
                </div>
            </div>
        </div>
    );
}
