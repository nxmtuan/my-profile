'use client';

import NavBar from '@/components/sections/HomeSections/NavBar';
import Overview from '@/components/sections/HomeSections/Overview';
import GeneralInformation from '@/components/sections/HomeSections/GeneralInformation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
    return (
        <div
            id="overall"
            className="home-wrapper flex w-auto justify-center items-center max-sm:mt-24 max-sm:ml-3 max-sm:mr-3"
        >
            <div className="flex justify-center items-center fixed top-4 right-4 w-10 h-10 rounded-full select-none bg-white dark:bg-neutral-700 max-sm:hidden">
                <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />
            </div>
            <div className="author flex gap-2 absolute top-4 left-32 h-7 max-sm:hidden">
                <span className="font-playwrite dark:text-gray-300">Designed by </span>
                <span className="font-playwrite bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                    Nguyen Tuan
                </span>
            </div>
            <NavBar />
            <div className="container flex h-screen justify-center items-center max-sm:h-fit">
                <div className="block-page flex w-full h-5/6 mt-auto mb-10 gap-5 max-sm:flex-col max-sm:items-center">
                    <Overview />
                    <GeneralInformation />
                </div>
            </div>
        </div>
    );
}
