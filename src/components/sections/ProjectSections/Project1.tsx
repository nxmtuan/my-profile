import { faArrowDown, faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Project1() {
    return (
        <div className="project-item-1 w-full h-full p-7 bg-cyan-100 rounded-xl hover:shadow-2xl transition duration-500">
            <ol className="relative border-s-2 border-white dark:border-gray-700">
                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <FontAwesomeIcon icon={faHotel} className="w-3 h-3 text-blue-800 dark:text-blue-300" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900 dark:text-white">
                        HOTEL MANAGER
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        <FontAwesomeIcon icon={faArrowDown} className="w-5 h-5 text-gray-600 dark:text-blue-300" />
                    </time>
                    <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-bold">Description: </span>
                        This is a major assignment project completed during my time at school. The hotel management
                        application is written in C# combined with SQL server. This project has the function of managing
                        hotel reservations, managing customer information, managing hotel services and issuing payment
                        invoices for customers checking out.
                    </p>
                    <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-bold">Technologies: </span>
                        C#, SQL server
                    </p>
                    <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-bold">Link: </span>
                        <Link
                            href="https://github.com/tuannguyen2002/Hotel_Manager"
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
