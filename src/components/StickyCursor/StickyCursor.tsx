'use client';
import { useCallback, useEffect } from 'react';
import styles from './styles.module.css';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function StickyCursor() {
    const cursorSize = 45;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 20, stiffness: 150, mass: 0.5 };
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    };

    const manageMouseMove = useCallback(
        (e: MouseEvent) => {
            const { pageX, pageY } = e; // Dùng pageX và pageY để bao gồm cả phần cuộn
            mouse.x.set(pageX - cursorSize / 2);
            mouse.y.set(pageY - cursorSize / 2);
        },
        [mouse.x, mouse.y],
    );

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove);
        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
        };
    }, [manageMouseMove]);

    return (
        <div className={styles.cursorContainer}>
            <motion.div
                style={{
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                }}
                className={styles.cursor}
            ></motion.div>
        </div>
    );
}
