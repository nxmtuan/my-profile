import NavBar from '@/components/sections/HomeSections/NavBar';
import Overview from '@/components/sections/HomeSections/Overview';
import GeneralInformation from '@/components/sections/HomeSections/GeneralInformation';

export default function Home() {
    return (
        <div
            id="overall"
            className="home-wrapper flex w-auto justify-center items-center max-sm:mt-24 max-sm:ml-3 max-sm:mr-3"
        >
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
