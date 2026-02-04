import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Music } from 'lucide-react';

export const MouseSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse movement
    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-screen hidden md:block"
            style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            {/* Core Cursor */}
            <div className="w-full h-full bg-white rounded-full opacity-50 blur-[2px]" />

            {/* Large Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px]" />

            {/* Secondary Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-[40px]" />
        </motion.div>
    );
};

export const AudioVisualizer = () => {
    return (
        <div className="flex gap-1 items-end h-8">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full"
                    animate={{
                        height: ['20%', '100%', '50%', '80%', '20%'],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                        delay: i * 0.1,
                    }}
                />
            ))}
        </div>
    );
};

export const FloatingNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const style = {
                left: Math.random() * 100 + 'vw',
                scale: Math.random() * 0.5 + 0.5,
            };
            setNotes(prev => [...prev, { id, style }]);

            // Cleanup old notes
            setTimeout(() => {
                setNotes(prev => prev.filter(n => n.id !== id));
            }, 5000);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {notes.map(note => (
                <motion.div
                    key={note.id}
                    initial={{ y: '110vh', opacity: 0, rotate: 0 }}
                    animate={{
                        y: '-10vh',
                        opacity: [0, 1, 0],
                        rotate: [0, 45, -45, 0],
                        x: Math.sin(note.id) * 100
                    }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="absolute text-purple-500/20"
                    style={note.style}
                >
                    <Music size={24} />
                </motion.div>
            ))}
        </div>
    );
};
