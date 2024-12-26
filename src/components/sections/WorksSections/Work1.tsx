import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Work1() {
    return (
        <div className="work-1-block">
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-neutral-700 dark:bg-gray-300">
                    <FontAwesomeIcon icon={faCalendarWeek} className="w-3 h-3 text-blue-800 dark:text-blue-800" />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900 dark:text-gray-300">
                    SAVIS TECHNOLOGY JOINT STOCK COMPANY{' '}
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-500 dark:text-blue-100 ms-3">
                        Intern Front-end Developer
                    </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                    September, 2023 - February, 2024
                </time>
                <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                    <span className="font-bold">Description: </span>
                    Joined a project to develop an website, utilizing machine learning to recommend books that are
                    discounted on e-commerce platforms, frequently read, and frequently downloaded. This project
                    leverages modern technologies to improve application security, enhance performance, and provide a
                    better user experience.
                </p>
                <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                    <span className="font-bold">Technologies: </span>
                    JavaScript, AngularJS, ReactJS, PostgreSQL, MongoDB, API Gateway, Microservices.
                </p>
                <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                    <span className="font-bold">Team size: </span>4 members (2 Front-End, 1 Back-End, 1 Leader)
                </p>
                <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                    <span className="font-bold">Responsibility: </span>
                    Implementing fixes to the code base, testing the changes, and ensuring the resolution has been
                    effective. Worked with the team to identify and resolve issues and bugs in web applications
                </p>
            </li>
        </div>
    );
}
