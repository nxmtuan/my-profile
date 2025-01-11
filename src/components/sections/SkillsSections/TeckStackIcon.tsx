import Image from 'next/image';
import './skill.module.css';

interface Props {
    icon: string;
    language: string;
}

export const TechStackIcon: React.FC<Props> = ({ icon, language }) => {
    return (
        <div className="w-40 h-40 group p-6 bg-transparent backdrop-blur-lg hover:bg-slate-500/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer hover:shadow-xl">
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                <Image
                    src={icon}
                    alt={`${language} icon`}
                    width={64}
                    height={64}
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                />
            </div>
            <span className="text-neutral-700 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                {language}
            </span>
        </div>
    );
};
