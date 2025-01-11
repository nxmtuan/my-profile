import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <section className="mt-5 py-5 w-full border-t-[1px] border-white/50">
            <div className="flex gap-2 justify-center items-center font-code text-white">
                <FontAwesomeIcon icon={faCopyright} />
                <span>2024</span>
                <span>Designed by Nguyen Tuan</span>
            </div>
        </section>
    );
}
