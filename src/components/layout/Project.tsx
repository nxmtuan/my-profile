'use client';
import { motion, useSpring } from 'framer-motion';
import Link from 'next/link';
import React, { useState, MouseEvent, useRef } from 'react';
import './layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import FloatElement from '../ElementAnimation/FloatElement';

interface ImageItem {
    id: number;
    label: string;
    subLabel: string;
    img: string;
    link: string;
    demo: string;
}

export default function Project() {
    const [img, setImg] = useState<{ img: string; alt: string; opacity: number }>({
        img: '',
        alt: '',
        opacity: 0,
    });

    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const list: ImageItem[] = [
        {
            id: 1,
            label: 'EBook Online',
            subLabel: 'Website to read and download ebooks',
            img: 'ebook.png',
            link: 'https://ebooks-online-opal.vercel.app/',
            demo: 'Demo',
        },
        {
            id: 2,
            label: 'Portfolio',
            subLabel: 'Website about me',
            img: 'portfolio.png',
            link: 'https://profile-sigma-wine.vercel.app/',
            demo: 'Demo',
        },
        {
            id: 3,
            label: 'Tiktok UI',
            subLabel: 'Website reuses tiktok interface',
            img: 'tiktok.png',
            link: 'https://tiktok-ui-pearl-iota.vercel.app/',
            demo: 'Demo',
        },
        {
            id: 4,
            label: 'Hotel Manager',
            subLabel: 'Hotel operations management',
            img: 'hotel.png',
            link: 'https://github.com/tuannguyen2002/Hotel_Manager',
            demo: 'Source',
        },
    ];

    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1,
    };

    const imagePos = {
        x: useSpring(0, spring),
        y: useSpring(0, spring),
    };

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const { clientX, clientY } = e;
        const relativeX = clientX - containerRect.left;
        const relativeY = clientY - containerRect.top;

        imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
        imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
    };

    const handleImageInteraction = (item: ImageItem, opacity: number) => {
        setImg({ img: item.img, alt: item.label, opacity });
    };

    return (
        <section
            id="project"
            className="flex flex-col gap-10 justify-center bg-transparent w-full h-auto mt-20 mb-20 p-4 max-sm:mt-10"
        >
            <div className="group flex justify-center items-center gap-7 h-28 p-2 pl-5 pr-5 mb-10 text-white select-none z-[2] max-sm:w-full max-sm:mb-0">
                <FontAwesomeIcon
                    icon={faCode}
                    className="w-40 h-40 group-hover:scale-125 transition duration-300 max-sm:w-20 max-sm:h-20"
                />
                <span className="font-code font-bold text-9xl group-hover:translate-x-3 transition duration-300 max-sm:text-5xl">
                    PROJECT
                </span>
            </div>
            <div
                ref={containerRef}
                onMouseMove={handleMove}
                className="flex flex-col gap-5 justify-center bg-transparent relative w-full h-auto select-none"
            >
                {list.map((item) => (
                    <div
                        key={item.id}
                        onMouseEnter={() => handleImageInteraction(item, 1)}
                        onMouseMove={() => handleImageInteraction(item, 1)}
                        onMouseLeave={() => handleImageInteraction(item, 0)}
                        className="w-full py-10 p-10 pl-52 cursor-pointer flex justify-start gap-5 text-white/50 font-code z-[2] hover:text-white hover:translate-x-10 transition-all duration-500 overflow-hidden max-sm:px-4 max-sm:py-5 max-sm:hover:translate-x-2"
                    >
                        <FloatElement duration={2}>
                            <span className="text-xl font-medium">{item.id}</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-8xl font-black max-sm:text-4xl">{item.label}</span>
                                <div className="flex gap-2 items-center">
                                    <span className="text-base font-light">{item.subLabel}</span> /
                                    <Link
                                        href={item.link}
                                        className="text-xl font-bold hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.demo}
                                    </Link>
                                </div>
                            </div>
                        </FloatElement>
                    </div>
                ))}

                <motion.img
                    ref={imageRef}
                    src={img.img}
                    alt={img.alt}
                    className="w-[700px] h-[393.75px] bg-slate-300/50 object-cover absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none z-[1] max-sm:hidden"
                    style={{
                        x: imagePos.x,
                        y: imagePos.y,
                        opacity: img.opacity,
                    }}
                ></motion.img>
            </div>
        </section>
    );
}
