import { faAddressCard, faCircleUser, faFileCode, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar() {
    return (
        <div className="navBar fixed top-2/4 -translate-y-1/2 right-0 flex flex-col gap-3 items-center h-auto w-20 p-2 bg-white rounded-xl shadow-2xl border-solid border-2 border-slate-200">
            <div className="nav-item nav-item-1 flex flex-col justify-center items-center gap-1 w-16 h-16 rounded-lg cursor-pointer bg-gradient-to-r from-teal-400 to-blue-500">
                <FontAwesomeIcon icon={faCircleUser} className="w-5 h-5 text-white" />
                <div className="item-label text-xs text-white">Overall</div>
            </div>
            <div className="nav-item nav-item-2 flex flex-col justify-center items-center gap-1 w-16 h-16 rounded-lg cursor-pointer bg-slate-200">
                <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5 text-slate-600" />
                <div className="item-label text-xs text-slate-600">Skills</div>
            </div>
            <div className="nav-item nav-item-3   flex flex-col justify-center items-center gap-1 w-16 h-16 rounded-lg cursor-pointer bg-slate-200">
                <FontAwesomeIcon icon={faAddressCard} className="w-5 h-5 text-slate-600" />
                <div className="item-label text-xs text-slate-600">Works</div>
            </div>
            <div className="nav-item nav-item-4   flex flex-col justify-center items-center gap-1 w-16 h-16 rounded-lg cursor-pointer bg-slate-200">
                <FontAwesomeIcon icon={faFileCode} className="w-5 h-5 text-slate-600" />
                <div className="item-label text-xs text-slate-600">Projects</div>
            </div>
        </div>
    );
}
