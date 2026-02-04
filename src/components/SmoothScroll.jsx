import React, { useEffect, useRef, useCallback } from 'react';

const SmoothScroll = ({ children }) => {
    const scrollContainerRef = useRef(null);
    const currentScrollY = useRef(0);
    const targetScrollY = useRef(0);
    const rafId = useRef(null);
    const isScrolling = useRef(false);

    // Smoothing factor - lower = smoother but slower, higher = snappier
    const smoothness = 0.08;

    const lerp = (start, end, factor) => {
        return start + (end - start) * factor;
    };

    const smoothScrollAnimation = useCallback(() => {
        // Lerp towards target
        currentScrollY.current = lerp(currentScrollY.current, targetScrollY.current, smoothness);

        // Apply transform
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.transform = `translateY(-${currentScrollY.current}px)`;
        }

        // Check if we're close enough to stop
        const diff = Math.abs(targetScrollY.current - currentScrollY.current);

        if (diff > 0.5) {
            rafId.current = requestAnimationFrame(smoothScrollAnimation);
        } else {
            // Snap to final position
            currentScrollY.current = targetScrollY.current;
            if (scrollContainerRef.current) {
                scrollContainerRef.current.style.transform = `translateY(-${currentScrollY.current}px)`;
            }
            isScrolling.current = false;
        }
    }, []);

    useEffect(() => {
        // Check for touch device or reduced motion preference
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (isTouchDevice || prefersReducedMotion) {
            // Use native scrolling on touch devices
            document.body.style.overflow = '';
            document.body.style.height = '';
            if (scrollContainerRef.current) {
                scrollContainerRef.current.style.transform = '';
                scrollContainerRef.current.style.position = '';
                scrollContainerRef.current.style.width = '';
            }
            return;
        }

        const container = scrollContainerRef.current;
        if (!container) return;

        // Set up the smooth scroll container
        const setBodyHeight = () => {
            document.body.style.height = `${container.scrollHeight}px`;
        };

        setBodyHeight();
        document.body.style.overflow = 'auto';

        // Handle resize
        const resizeObserver = new ResizeObserver(() => {
            setBodyHeight();
        });
        resizeObserver.observe(container);

        // Handle scroll
        const handleScroll = () => {
            targetScrollY.current = window.scrollY;

            if (!isScrolling.current) {
                isScrolling.current = true;
                rafId.current = requestAnimationFrame(smoothScrollAnimation);
            }
        };

        // Handle wheel for extra smoothness
        const handleWheel = (e) => {
            // Let default scroll happen, we just follow it
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', setBodyHeight);

        // Initial sync
        targetScrollY.current = window.scrollY;
        currentScrollY.current = window.scrollY;

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', setBodyHeight);
            resizeObserver.disconnect();
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
            document.body.style.height = '';
            document.body.style.overflow = '';
        };
    }, [smoothScrollAnimation]);

    // Check for touch device
    const isTouchDevice = typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (isTouchDevice) {
        return <>{children}</>;
    }

    return (
        <div
            ref={scrollContainerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                willChange: 'transform',
            }}
        >
            {children}
        </div>
    );
};

export default SmoothScroll;
