import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Project2() {
    return (
        <div className="project-item-2 w-full h-full p-7 bg-blue-100 rounded-xl hover:shadow-2xl transition duration-500">
            <ol className="relative border-s-2 border-white dark:border-gray-700">
                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <FontAwesomeIcon icon={faTiktok} className="w-3 h-3 text-blue-800 dark:text-blue-300" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900 dark:text-white">
                        CLONE TIKTOK UI
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        <FontAwesomeIcon icon={faArrowDown} className="w-5 h-5 text-gray-600 dark:text-blue-300" />
                    </time>
                    <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-bold">Description: </span>
                        This is the first project to get acquainted with ReactJS, create an interface similar to the
                        tiktok website and use ReactJS to handle logic and some basic features.
                    </p>
                    <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-bold">Technologies: </span>
                        Javascript, ReactJS, RESTful API
                    </p>
                    <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-bold">Link: </span>
                        <Link
                            href="https://github.com/tuannguyen2002/tiktok-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Source
                        </Link>
                    </p>
                </li>
            </ol>
        </div>
    );
}
