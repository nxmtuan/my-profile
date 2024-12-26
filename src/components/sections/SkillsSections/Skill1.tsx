import { faEvernote, faGitAlt, faStripeS, faUbuntu, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skill1() {
    return (
        <div className="skill-1-wrapper flex flex-col gap-6 w-full h-5/6 bg-cyan-100 rounded-xl p-10 pt-8 pb-8 2xl:gap-14 2xl:pl-20 2xl:pr-20 hover:shadow-2xl transition duration-500 max-sm:pl-20 max-sm:pr-20">
            <div className="skill-item flex gap-5">
                <div className="skill-item-1 flex flex-col gap-5 2xl:gap-6">
                    <span className="font-bold text-xl text-gray-700">Operating Systems</span>
                    <ul className="flex flex-col gap-2 2xl:gap-4">
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faWindows} className="w-7 h-7 text-blue-500" /> Windows
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faUbuntu} className="w-7 h-7 text-orange-700" /> Ubuntu
                        </li>
                    </ul>
                </div>
            </div>

            <div className="skill-item flex gap-5">
                <div className="skill-item-2 flex flex-col gap-5 2xl:gap-6">
                    <span className="font-bold text-xl text-gray-700">Tools</span>
                    <ul className="flex flex-col gap-2 2xl:gap-4">
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faTerminal} className="w-7 h-7 text-blue-500" /> VS Code
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faCode} className="w-7 h-7 text-violet-600" /> Visual Studio
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faGitAlt} className="w-7 h-7 text-orange-500" /> Git & Github
                        </li>
                    </ul>
                </div>
            </div>

            <div className="skill-item flex gap-5">
                <div className="skill-item-3 flex flex-col gap-5">
                    <span className="font-bold text-xl text-gray-700">Database</span>
                    <ul className="flex flex-col gap-2">
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faStripeS} className="w-7 h-7 text-red-500" /> SQL Server
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faDatabase} className="w-7 h-7 text-blue-600" /> MySQL
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faEvernote} className="w-7 h-7 text-blue-500" /> PostgreSQL
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
