'use client';
import Role from '@/components/layout/Role';
import Skills from '@/components/layout/Skills';
import Homes from '@/components/layout/Home';
import StickyCursor from '@/components/StickyCursor/StickyCursor';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Project from '@/components/layout/Project';
import Contact from '@/components/layout/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);

            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <main className="wrapper flex flex-col justify-center items-center max-sm:overflow-x-hidden">
            <div className="container">
                <Homes />
            </div>
            <div className="flex justify-center w-screen bg-[#e9e9e9]">
                <div className="container">
                    <Role />
                    <Skills />
                </div>
            </div>
            <div className="container">
                <Project />
                <Contact />
                <Footer />
            </div>
            <StickyCursor />
        </main>
    );
}
