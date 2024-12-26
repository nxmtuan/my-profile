import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Work2() {
    return (
        <div className="work-2-block">
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <FontAwesomeIcon icon={faCalendarWeek} className="w-3 h-3 text-blue-800 dark:text-blue-300" />
                </span>
                <h3 className="flex items-center mb-1 font-bold text-lg text-gray-900 dark:text-white">
                    HOANG PHONG CO., LTD.{' '}
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                        Intern Data Analyst
                    </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    May, 2024 - October, 2024
                </time>
                <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    <span className="font-bold">Description: </span>
                    Worked in the website management and monitoring department, using Google Analytics to track traffic,
                    analyze user behavior, monitor conversions, and identify issues. Utilized Python libraries to
                    analyze, process, and visualize data to optimize website performance and enhance user experience.
                </p>
                <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    <span className="font-bold">Technologies: </span>
                    Google Analytics, Python, PowerBI.
                </p>
            </li>
        </div>
    );
}
