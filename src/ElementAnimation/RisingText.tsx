import { motion } from 'framer-motion';

import { ReactNode } from 'react';

interface RisingTextProps {
    children: ReactNode;
    duration?: number;
    delay?: number;
}

const RisingText = ({ children, duration = 0.6, delay = 0 }: RisingTextProps) => {
    const variants = {
        hidden: { opacity: 0, y: '100%' },
        visible: { opacity: 1, y: '0%' },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration,
                ease: 'easeOut',
                delay, // Thêm delay nếu muốn hiệu ứng được trì hoãn
            }}
            variants={variants}
            style={{
                overflow: 'hidden',
                display: 'inline-block',
            }}
        >
            <span style={{ display: 'block' }}>{children}</span>
        </motion.div>
    );
};

export default RisingText;
