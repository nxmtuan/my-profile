import { faCss3, faHtml5, faJava, faJs } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skill2() {
    return (
        <div className="skill-2-wrapper flex flex-col gap-10 w-1/2 h-full bg-blue-100 rounded-xl p-7 pl-20 pr-20 hover:shadow-2xl transition duration-500 max-sm:w-full dark:bg-neutral-700">
            <div className="skill-item flex gap-5">
                <div className="skill-item-4 flex flex-col gap-5">
                    <span className="font-bold text-xl text-gray-700 dark:text-gray-300">Basic Technical</span>
                    <ul className="flex flex-col gap-3 2xl:gap-5">
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faHtml5} className="w-7 h-7 text-orange-600" /> HTML 5 (Semantic
                            HTML)
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faCss3} className="w-7 h-7 text-blue-600" /> CSS (Flexbox, Grid,
                            Animations)
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faJs} className="w-7 h-7 text-yellow-600" /> JavaScript ES6+
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faC} className="w-7 h-7 text-violet-600" /> C#
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faJava} className="w-7 h-7 text-red-500" /> Java
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
