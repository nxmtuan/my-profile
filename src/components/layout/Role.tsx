'use client';

import Overview from '@/components/sections/HomeSections/Overview';
import GeneralInformation from '../sections/HomeSections/GeneralInformation';

export default function Role() {
    return (
        <section
            id="role"
            className="home-wrapper flex w-full justify-center items-center bg-[#e9e9e9] max-sm:mt-10 max-sm:px-4 max-sm:mb-10"
        >
            <div className="flex h-screen justify-center items-center max-sm:h-fit">
                <div className="flex w-full h-5/6 mt-auto mb-10 gap-5 max-sm:flex-col max-sm:items-center max-sm:gap-20">
                    <Overview />
                    <GeneralInformation />
                </div>
            </div>
        </section>
    );
}
