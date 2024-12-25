import NavBar from '@/components/sections/HomeSections/NavBar';
import Overview from '@/components/sections/HomeSections/Overview';
import GeneralInformation from '@/components/sections/HomeSections/GeneralInformation';

export default function Home() {
    return (
        <div className="home-wrapper flex w-auto justify-center items-center">
            <NavBar />
            <div className="container flex h-screen justify-center items-center">
                <div className="block-page flex w-full h-5/6 mt-auto mb-10 gap-5">
                    <Overview />
                    <GeneralInformation />
                </div>
            </div>
        </div>
    );
}
