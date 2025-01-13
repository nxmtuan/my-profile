import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface elementProps {
    children: ReactNode;
    className?: string;
    duration?: number;
}

const FloatElement = ({ children, className, duration = 0 }: elementProps) => {
    const variants = {
        hidden: { opacity: 1, y: '100%' },
        visible: { opacity: 1, y: '0%' },
    };

    return (
        <motion.div
            variants={variants}
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ type: 'spring', duration, bounce: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default FloatElement;
