import { motion, useTransform } from 'framer-motion';
import { TechStackIcon } from './TeckStackIcon';

interface TechStackItem {
    icon: string;
    language: string;
}

interface SlideProps {
    items: TechStackItem[];
    direction: 'left' | 'right';
    left: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    progress: any;
}

const Slide: React.FC<SlideProps> = ({ items, direction, left, progress }) => {
    const x = useTransform(
        progress,
        [0, 1],
        [500 * (direction === 'left' ? -1 : 1), -500 * (direction === 'left' ? -1 : 1)],
    );

    const duplicateItems = [...items, ...items, ...items];

    return (
        <div className="parallax">
            <motion.div className="relative flex whitespace-nowrap gap-7" style={{ x, left }}>
                {duplicateItems.map((item, index) => (
                    <TechStackIcon key={index} icon={item.icon} language={item.language} />
                ))}
            </motion.div>
        </div>
    );
};

export default Slide;
