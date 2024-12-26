import Work1 from '@/components/sections/WorksSections/Work1';
import Work2 from '@/components/sections/WorksSections/Work2';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Work() {
    return (
        <div id="works" className="work-wrapper flex mt-10 mb-10 justify-center items-center max-sm:ml-3 max-sm:mr-3">
            <div className="container flex flex-col justify-center items-center gap-5 w-full h-5/6">
                <div className="work-block flex gap-5 w-full h-fit">
                    <div className="work-block-title flex w-11/12 h-full font-bold text-3xl text-gray-700 bg-white rounded-xl p-7 items-center justify-center select-none dark:bg-neutral-700 dark:text-gray-300 2xl:text-4xl max-sm:text-2xl">
                        MY EXPERIENCE
                    </div>
                    <div className="work-block-line flex items-center justify-center w-1/12 h-full font-bold text-3xl 2xl:text-4xl text-white p-7 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl hover:shadow-2xl transition duration-500 select-none">
                        <FontAwesomeIcon icon={faBriefcase} className="w-9 h-9 max-sm:w-8 max-sm:h-8" />
                    </div>
                </div>
                <div className="work-block-content flex items-center w-full h-fit bg-white p-10 pl-20 pr-20 rounded-xl hover:shadow-2xl transition duration-500 max-sm:pl-10 max-sm:pr-10 dark:bg-neutral-700">
                    <ol className="relative border-s border-gray-200 dark:border-gray-300">
                        <Work1 />
                        <Work2 />
                    </ol>
                </div>
            </div>
        </div>
    );
}
