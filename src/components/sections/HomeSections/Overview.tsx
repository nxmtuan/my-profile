import Image from 'next/image';
import avatar from '@/assets/avt.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faLocationDot, faMobileScreen, faZ } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

export default function Overview() {
    return (
        <div className="block-page-left flex flex-col gap-5 w-1/4 max-sm:w-full h-full p-5 rounded-xl hover:shadow-2xl transition duration-500 bg-white">
            <div className="block-page-left-top h-1/2 flex flex-col justify-center items-center gap-2 overflow-visible">
                <Image src={avatar} alt="Avatar" className="avatar w-3/5 h-3/5 rounded-xl object-cover" />
                <span className="title-name font-bold text-xl text-gray-700">Nguyen Xuan Minh Tuan</span>
                <span className="title-position font-light text-sm text-slate-400">Front-end Developer</span>
                <div className="social flex justify-center items-center gap-3">
                    <Link href="https://www.linkedin.com/in/minh-tuan-nguyen-xuan/">
                        <div className="linkedin flex justify-center items-center w-10 h-10 cursor-pointer bg-slate-200 rounded-lg hover:bg-slate-300 transition duration-300">
                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-sky-700" />
                        </div>
                    </Link>
                    <Link href="https://github.com/tuannguyen2002">
                        <div className="github flex justify-center items-center w-10 h-10 cursor-pointer bg-slate-200 rounded-lg hover:bg-slate-300 transition duration-300">
                            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-black" />
                        </div>
                    </Link>
                    <Link href="https://zalo.me/0359146876">
                        <div className="zalo flex justify-center items-center w-10 h-10 cursor-pointer bg-slate-200 rounded-lg hover:bg-slate-300 transition duration-300">
                            <FontAwesomeIcon icon={faZ} className="w-5 h-5 text-cyan-500" />
                        </div>
                    </Link>
                    <Link href="https://t.me/nx_minhtuan">
                        <div className="telegram flex justify-center items-center w-10 h-10 cursor-pointer bg-slate-200 rounded-lg hover:bg-slate-300 transition duration-300">
                            <FontAwesomeIcon icon={faTelegram} className="w-5 h-5 text-sky-600" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="block-page-left-bottom h-1/2 flex flex-col gap-3 p-5 bg-slate-100 rounded-lg">
                <div className="block-page-left-bottom-1 flex items-center gap-3 h-1/4 border-b border-slate-200">
                    <FontAwesomeIcon icon={faMobileScreen} className="w-5 h-5 text-teal-400" />
                    <div className="block-page-left-bottom-1-1 flex flex-col gap-1">
                        <span className="title font-light text-xs text-slate-400">Phone</span>
                        <span className="content font-bold text-gray-700">0359146876</span>
                    </div>
                </div>
                <div className="block-page-left-bottom-2 flex items-center gap-3 h-1/4 border-b border-slate-200">
                    <FontAwesomeIcon icon={faEnvelopeOpen} className="w-5 h-5 text-cyan-400" />
                    <div className="block-page-left-bottom-1-2 flex flex-col gap-1">
                        <span className="title font-light text-xs text-slate-400">Email</span>
                        <span className="content font-bold text-gray-700">nxmtuan.2002@gmail.com</span>
                    </div>
                </div>
                <div className="block-page-left-bottom-3 flex items-center gap-3 h-1/4 border-b border-slate-200">
                    <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-blue-500" />
                    <div className="block-page-left-bottom-1-3 flex flex-col gap-1">
                        <span className="title font-light text-xs text-slate-400">Address</span>
                        <span className="content font-bold text-gray-700">Phuc Yen, Vinh Phuc</span>
                    </div>
                </div>
                <div className="block-page-left-bottom-4 flex justify-center items-end h-1/4">
                    <a
                        className="block-page-left-bottom-1-4 flex justify-center items-center gap-3 h-3/4 w-4/5 rounded-full cursor-pointer bg-gradient-to-r from-teal-400 to-blue-500 max-sm:h-10"
                        href="/downloads/[CV]Minh_Tuan-Frontend-navt.pdf"
                        download
                    >
                        <FontAwesomeIcon icon={faDownload} className="w-5 h-5 text-white" />
                        <span className="download-btn text-white">Download CV</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
