import { faArrowDown, faBookAtlas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Project3() {
    return (
        <div className="project-item-3 w-full h-full p-7 bg-violet-100 rounded-xl hover:shadow-2xl transition duration-500">
            <ol className="relative border-s-2 border-white dark:border-gray-700">
                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <FontAwesomeIcon icon={faBookAtlas} className="w-3 h-3 text-blue-800 dark:text-blue-300" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900 dark:text-white">
                        E-BOOK ONLINE
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        <FontAwesomeIcon icon={faArrowDown} className="w-5 h-5 text-gray-600 dark:text-blue-300" />
                    </time>
                    <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-bold">Description: </span>
                        The next project uses ReactJS to build an online book reading website interface with and JSON
                        server to create RESTful. This application allows readers to search for books available in the
                        library, download or read online free books in many different languages. In addition, the
                        application also recommends books that are on sale, selected by editors and recommends books by
                        genre, author that users are interested in.
                    </p>
                    <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-bold">Technologies: </span>
                        ReactJS, JSON server, RESTful API
                    </p>
                    <p className="flex flex-col mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-bold">Link: </span>
                        <Link
                            href="https://github.com/tuannguyen2002/ebooks-online"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Source code
                        </Link>
                        <Link
                            href="https://github.com/tuannguyen2002/repo_ebooks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Source DB
                        </Link>
                        <Link
                            href="https://ebooks-online-opal.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Demo
                        </Link>
                    </p>
                </li>
            </ol>
        </div>
    );
}
