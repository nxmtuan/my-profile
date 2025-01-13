'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faAward, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';
import FloatElement from '@/components/ElementAnimation/FloatElement';

interface ImageItem {
    icon: IconProp;
    label: string;
    total: number;
    subLabel: string;
}

export default function GeneralInformation() {
    const list: ImageItem[] = [
        {
            icon: faCode,
            label: 'TOTAL PROJECTS',
            total: 4,
            subLabel: 'Completed solutions',
        },
        {
            icon: faAward,
            label: 'CERTIFICATES',
            total: 1,
            subLabel: 'Skills have been validated',
        },
        {
            icon: faBriefcase,
            label: 'YEARS OF EXPERIENCE',
            total: 0.5,
            subLabel: 'Continuous learning journey',
        },
    ];

    return (
        <section className="flex flex-col gap-5 justify-center items-end bg-transparent relative w-full h-auto mx-auto p-4 max-sm:w-full max-sm:items-start max-sm:p-0">
            {list.map((item) => (
                <motion.div
                    key={item.label}
                    className="group w-3/4 cursor-pointer text-center flex items-center gap-5 text-neutral-700 border-b-4 border-neutral-700 max-sm:w-full"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, transparent 50%, #404040 50%)',
                        backgroundSize: '100% 200%',
                        backgroundPosition: '100% 0%',
                    }}
                    initial={{ backgroundPosition: '100% 0%' }}
                    whileHover={{ backgroundPosition: '0% 100%' }}
                    transition={{ duration: 0.3 }}
                >
                    <FloatElement
                        duration={2}
                        className="group w-full py-10 p-10 text-center flex items-center gap-5 max-sm:w-full"
                    >
                        <div className="w-10 h-10 rounded-full p-2 border-2 border-neutral-700 group-hover:text-white group-hover:border-white hover:transition-all duration-300">
                            <FontAwesomeIcon icon={item.icon} className="" />
                        </div>
                        <div className="flex flex-col gap-2 items-start group-hover:text-white hover:transition-all duration-300">
                            <span className="text-xl font-bold">{item.label}</span>
                            <span className="text-xs font-light">{item.subLabel}</span>
                        </div>
                        <span className="ml-auto text-4xl font-extrabold group-hover:text-white hover:transition-all duration-300">
                            {item.total}
                        </span>
                    </FloatElement>
                </motion.div>
            ))}
        </section>
    );
}
