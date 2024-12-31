import { faNeos, faReact } from '@fortawesome/free-brands-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faRoute, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skill3() {
    return (
        <div className="skill-3-wrapper flex flex-col gap-10 h-1/2 bg-violet-100 rounded-xl p-9 pl-10 pr-10 hover:shadow-2xl transition duration-500 dark:bg-neutral-700">
            <div className="skill-item flex gap-5">
                <div className="skill-item-5 flex flex-col gap-5">
                    <span className="font-bold text-xl text-gray-700 dark:text-gray-300">
                        Advance Frameworks and skills
                    </span>
                    <ul className="flex flex-col gap-3 2xl:gap-5">
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faNeos} className="w-7 h-7" /> Next.js
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faReact} className="w-7 h-7 text-blue-500" /> ReactJS (Function
                            Components,State Management, Hooks: useState, useEffect, useReducer, useRef)
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faRoute} className="w-7 h-7 text-red-600" /> React Router (Routing,
                            Lazy Loading)
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faServer} className="w-7 h-7 text-violet-600" /> API Integration
                            (Fetch, Axios, React Query)
                        </li>
                        <li className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faSquareCheck} className="w-7 h-7 text-green-600" /> Performance
                            Optimization (React.memo, useMemo, useCallback, Code Splitting)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
