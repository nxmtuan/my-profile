import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project1 from '../sections/ProjectSections/Project1';
import Project2 from '../sections/ProjectSections/Project2';
import Project3 from '../sections/ProjectSections/Project3';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

export default function Project() {
    return (
        <div
            id="projects"
            className="project-wrapper mt-10 mb-10 h-screen flex justify-center items-center max-sm:ml-3 max-sm:mr-3 max-sm:mt-0 max-sm:h-fit"
        >
            <div className="container flex flex-col justify-center items-center w-full h-5/6 gap-5">
                <div className="flex w-full h-fit gap-5">
                    <div className="project-block-line flex items-center justify-center w-2/12 h-full font-bold text-3xl 2xl:text-4xl text-white p-7 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl hover:shadow-2xl transition duration-500 select-none">
                        <FontAwesomeIcon icon={faBolt} className="w-9 h-9 max-sm:w-8 max-sm:h-8" />
                    </div>
                    <div className="project-block-title flex justify-center items-center font-bold text-3xl 2xl:text-4xl text-gray-700 p-7 w-10/12 h-full rounded-xl bg-white dark:bg-neutral-700 dark:text-gray-300 max-sm:text-2xl">
                        MY PROJECTS
                    </div>
                </div>
                <div className="project-block-content grid grid-cols-3 justify-center items-center w-full h-5/6 gap-5 max-sm:grid-cols-1">
                    <Project1 />
                    <Project2 />
                    <Project3 />
                </div>
            </div>
        </div>
    );
}
