'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import { ProfileImage } from '../sections/HomeSections/ProfileImage';

export default function Home() {
    const handleScroll = () => {
        const target = document.getElementById('role');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="flex justify-center items-center h-screen max-sm:h-fit max-sm:my-10">
            <div className="container h-5/6 mt-auto mb-10 max-sm:mb-0">
                <div className=" flex justify-center items-center gap-5">
                    <div className="w-3/5 h-full max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center">
                        <div className="flex flex-col gap-10 justify-center items-center max-sm:px-4 max-sm:gap-7">
                            <div className="flex items-center justify-center w-1/2 h-1/3">
                                <ProfileImage />
                            </div>
                            <span className="flex flex-col gap-5 font-code font-black text-5xl text-white text-center">
                                Nguyen Xuan Minh Tuan
                            </span>
                            <p className="w-full font-code text-lg text-white text-center">
                                Welcome to my portfolio website. As a Front-end Developer, I`m constantly striving to
                                improve my skills and stay updated with the emerging trends in the industry.
                            </p>
                            <div className="flex gap-5 w-2/3 max-sm:flex-col max-sm:w-full max-sm:items-center">
                                <a
                                    href="/downloads/[CV]_MinhTuan_Developer.pdf"
                                    download
                                    className="group relative cursor-pointer p-2 w-1/2 border bg-transparent overflow-hidden text-white text-center font-semibold shadow-[0_0_10px_#ffffff] hover:shadow-[0_0_30px_#ffffff] transition-all duration-300"
                                >
                                    <span className="translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block">
                                        Download CV
                                    </span>
                                    <div className="flex gap-2 text-black z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300">
                                        <span>Download CV</span>
                                        <FontAwesomeIcon icon={faDownload} />
                                    </div>
                                    <div className="absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-white scale-[1] dark:group-hover:bg-[#e7cb6e] group-hover:bg-white group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] "></div>
                                </a>
                                <div
                                    onClick={() => handleScroll()}
                                    className="group relative cursor-pointer p-2 w-1/2 border bg-transparent overflow-hidden text-white text-center font-semibold shadow-[0_0_10px_#ffffff] hover:shadow-[0_0_30px_#ffffff] transition-all duration-300"
                                >
                                    <span className="translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block">
                                        About
                                    </span>
                                    <div className="flex gap-2 text-black z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300">
                                        <span>About</span>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                                    <div className="absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-white scale-[1] dark:group-hover:bg-[#e7cb6e] group-hover:bg-white group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
