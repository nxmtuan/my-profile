import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCode, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function GeneralInformation() {
    return (
        <div className="block-page-right flex flex-col gap-5 w-3/4 p-5 pl-20 pr-20 rounded-xl bg-white">
            <div className="introduce flex flex-col gap-5 h-2/6">
                <div className="introduce-block flex items-center gap-7">
                    <span className="introduce-title font-bold text-4xl 2xl:text-5xl text-gray-700">ABOUT ME</span>
                    <div className="line w-2/5 h-1 rounded-full bg-gradient-to-r from-teal-400 to-blue-500"></div>
                </div>
                <p className="introduce-par 2xl:text-2xl text-gray-700">
                    Hello! Welcome to my personal introduction page. I am a Front-end Developer, a graduate of the
                    University of Economics - Technology for Industries with a major in Information Technology. My
                    journey in the world of web development has been nothing short of exciting, and I constantly strive
                    to improve my skills and stay updated with emerging trends in the industry.
                </p>
            </div>
            <div className="to-do flex flex-col gap-5 w-full h-4/6">
                <span className="to-do-title font-bold text-4xl 2xl:text-5xl text-gray-700">WHAT I DO!</span>
                <div className="to-do-items w-full h-5/6 grid grid-cols-2 gap-5">
                    <div className="td-item w-full h-full rounded-lg bg-teal-100 p-2 pl-5 pr-5">
                        <div className="item flex items-center gap-3">
                            <FontAwesomeIcon icon={faCode} className="w-5 h-5 text-blue-500" />
                            <span className="item-title font-bold text-lg 2xl:text-2xl">Web Development</span>
                        </div>
                        <p className="item-par text-sm 2xl:text-base text-gray-700">
                            As a developer, I discovered the power of NEXT.js and started using it in my personal
                            projects. I continuously take on new challenges, leveraging its potential to build
                            user-friendly websites.
                        </p>
                    </div>
                    <div className="td-item w-full h-full rounded-lg bg-slate-200 p-2 pl-5 pr-5">
                        <div className="item flex items-center gap-3">
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-teal-500" />
                            <span className="item-title font-bold text-lg 2xl:text-2xl">Mobile App Development</span>
                        </div>
                        <p className="item-par text-sm 2xl:text-base text-gray-700">
                            I build mobile apps with React Native, ensuring smooth performance on iOS & Android. By
                            leveraging reusable components and powerful libraries, focus on creating functional and
                            user-friendly experiences.
                        </p>
                    </div>
                    <div className="td-item w-full h-full rounded-lg bg-slate-200 p-2 pl-5 pr-5">
                        <div className="item flex items-center gap-3">
                            <FontAwesomeIcon icon={faWandMagicSparkles} className="w-5 h-5 text-sky-500" />
                            <span className="item-title font-bold text-lg 2xl:text-2xl">Design & Animation</span>
                        </div>
                        <p className="item-par text-sm 2xl:text-base text-gray-700">
                            I Always leverage powerful tools to support work. Understand and apply user interface design
                            principles to projects. Utilize Tailwind CSS & GSAP for interface design & animations that
                            enhance the user experience on the website.
                        </p>
                    </div>
                    <div className="td-item w-full h-full rounded-lg bg-blue-100 p-2 pl-5 pr-5">
                        <div className="item flex items-center gap-3">
                            <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-cyan-600" />
                            <span className="item-title font-bold text-lg 2xl:text-2xl">Always learning</span>
                        </div>
                        <p className="item-par text-sm 2xl:text-base text-gray-700">
                            I believe in continuous learning to stay ahead in the ever-evolving tech industry. By
                            exploring new technologies and enhancing my skills, I strive to deliver innovative and
                            impactful solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
