import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    icon: IconProp;
    label: string;
}

export const TabPanel: React.FC<Props> = ({ icon, label }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 ">
            <FontAwesomeIcon icon={icon} className="w-7 h-7" />
            <label className="font-bold text-xl tracking-wide">{label}</label>
        </div>
    );
};
