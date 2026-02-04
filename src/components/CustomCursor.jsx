import React, { useEffect, useRef, useCallback } from 'react';

const CustomCursor = () => {
    const canvasRef = useRef(null);
    const mousePos = useRef({ x: -100, y: -100 });
    const points = useRef([]);
    const isHovering = useRef(false);
    const isClicking = useRef(false);
    const requestRef = useRef(null);
    const hue = useRef(270); // Start with purple

    const isTouchDevice = typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const MAX_POINTS = 20;

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            requestRef.current = requestAnimationFrame(animate);
            return;
        }

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Add new point
        points.current.push({
            x: mousePos.current.x,
            y: mousePos.current.y,
            age: 0
        });

        // Limit trail length
        if (points.current.length > MAX_POINTS) {
            points.current.shift();
        }

        // Slowly cycle hue for color variation
        hue.current = (hue.current + 0.3) % 360;

        // Draw glowing trail
        if (points.current.length > 1) {
            for (let i = 0; i < points.current.length - 1; i++) {
                const point = points.current[i];
                const nextPoint = points.current[i + 1];
                const progress = i / points.current.length;

                // Size decreases along trail
                const baseSize = isHovering.current ? 25 : 18;
                const size = baseSize * progress * (isClicking.current ? 0.7 : 1);

                // Outer glow
                const gradient = ctx.createRadialGradient(
                    point.x, point.y, 0,
                    point.x, point.y, size * 2
                );

                const alpha = progress * 0.3;
                const currentHue = (hue.current + i * 3) % 360;

                gradient.addColorStop(0, `hsla(${currentHue}, 100%, 70%, ${alpha})`);
                gradient.addColorStop(0.4, `hsla(${currentHue + 30}, 100%, 60%, ${alpha * 0.4})`);
                gradient.addColorStop(1, `hsla(${currentHue + 60}, 100%, 50%, 0)`);

                ctx.beginPath();
                ctx.arc(point.x, point.y, size * 2, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }

        // Draw main cursor glow
        const mainX = mousePos.current.x;
        const mainY = mousePos.current.y;
        const mainSize = isHovering.current ? 35 : 25;
        const clickScale = isClicking.current ? 0.6 : 1;

        // Large outer glow
        const outerGlow = ctx.createRadialGradient(
            mainX, mainY, 0,
            mainX, mainY, mainSize * 3 * clickScale
        );
        outerGlow.addColorStop(0, `hsla(${hue.current}, 100%, 75%, 0.2)`);
        outerGlow.addColorStop(0.3, `hsla(${hue.current + 40}, 100%, 65%, 0.1)`);
        outerGlow.addColorStop(0.6, `hsla(${hue.current + 80}, 100%, 55%, 0.05)`);
        outerGlow.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(mainX, mainY, mainSize * 3 * clickScale, 0, Math.PI * 2);
        ctx.fillStyle = outerGlow;
        ctx.fill();

        // Middle glow ring
        const midGlow = ctx.createRadialGradient(
            mainX, mainY, 0,
            mainX, mainY, mainSize * 1.5 * clickScale
        );
        midGlow.addColorStop(0, `hsla(${hue.current}, 100%, 80%, 0.5)`);
        midGlow.addColorStop(0.5, `hsla(${hue.current + 30}, 100%, 70%, 0.2)`);
        midGlow.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(mainX, mainY, mainSize * 1.5 * clickScale, 0, Math.PI * 2);
        ctx.fillStyle = midGlow;
        ctx.fill();

        // Bright core
        const coreGlow = ctx.createRadialGradient(
            mainX, mainY, 0,
            mainX, mainY, mainSize * 0.5 * clickScale
        );
        coreGlow.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        coreGlow.addColorStop(0.3, `hsla(${hue.current}, 100%, 85%, 0.6)`);
        coreGlow.addColorStop(1, `hsla(${hue.current}, 100%, 70%, 0)`);

        ctx.beginPath();
        ctx.arc(mainX, mainY, mainSize * 0.5 * clickScale, 0, Math.PI * 2);
        ctx.fillStyle = coreGlow;
        ctx.fill();

        // Tiny white center dot
        ctx.beginPath();
        ctx.arc(mainX, mainY, 3 * clickScale, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fill();

        // Sparkle particles when hovering
        if (isHovering.current) {
            for (let i = 0; i < 4; i++) {
                const angle = (Date.now() / 500 + i * Math.PI / 2) % (Math.PI * 2);
                const distance = 20 + Math.sin(Date.now() / 200 + i) * 10;
                const sparkleX = mainX + Math.cos(angle) * distance;
                const sparkleY = mainY + Math.sin(angle) * distance;
                const sparkleSize = 2 + Math.sin(Date.now() / 100 + i) * 1;

                const sparkleGrad = ctx.createRadialGradient(
                    sparkleX, sparkleY, 0,
                    sparkleX, sparkleY, sparkleSize * 3
                );
                sparkleGrad.addColorStop(0, `hsla(${(hue.current + i * 60) % 360}, 100%, 90%, 0.5)`);
                sparkleGrad.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.arc(sparkleX, sparkleY, sparkleSize * 3, 0, Math.PI * 2);
                ctx.fillStyle = sparkleGrad;
                ctx.fill();
            }
        }

        requestRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        if (isTouchDevice) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseDown = () => {
            isClicking.current = true;
        };

        const handleMouseUp = () => {
            isClicking.current = false;
        };

        const handleElementCheck = (e) => {
            const target = e.target;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList?.contains('cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer';

            isHovering.current = isClickable;
        };

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mousemove', handleElementCheck, { passive: true });
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousemove', handleElementCheck);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [animate, isTouchDevice]);

    if (isTouchDevice) return null;

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                    zIndex: 99999,
                }}
            />
            <style>{`
                * {
                    cursor: none !important;
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
