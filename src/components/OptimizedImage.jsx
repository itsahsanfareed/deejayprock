import React, { useState } from 'react';

/**
 * Optimized image component with lazy loading and fade-in effect
 */
export const OptimizedImage = ({
    src,
    alt,
    className = '',
    priority = false,
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            {...props}
        />
    );
};

/**
 * Lighter AudioVisualizer - pure CSS, no framer-motion
 */
export const AudioVisualizer = () => (
    <div className="flex gap-1 items-end h-6">
        {[...Array(5)].map((_, i) => (
            <div
                key={i}
                className="w-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full animate-pulse"
                style={{
                    height: `${20 + (i % 3) * 30}%`,
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: '0.8s'
                }}
            />
        ))}
    </div>
);

export default { OptimizedImage, AudioVisualizer };
