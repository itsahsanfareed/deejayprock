import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const GallerySlider = ({ images = [], title = "Gallery", accentColor = "purple" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const sliderRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const colorMap = {
        purple: { gradient: 'from-purple-500 to-indigo-600', text: 'text-purple-400', bg: 'bg-purple-500', border: 'border-purple-500/30' },
        pink: { gradient: 'from-pink-500 to-purple-600', text: 'text-pink-400', bg: 'bg-pink-500', border: 'border-pink-500/30' },
        blue: { gradient: 'from-blue-500 to-indigo-600', text: 'text-blue-400', bg: 'bg-blue-500', border: 'border-blue-500/30' },
        green: { gradient: 'from-green-500 to-emerald-600', text: 'text-green-400', bg: 'bg-green-500', border: 'border-green-500/30' },
        orange: { gradient: 'from-orange-500 to-red-600', text: 'text-orange-400', bg: 'bg-orange-500', border: 'border-orange-500/30' },
    };

    const colors = colorMap[accentColor] || colorMap.purple;

    const checkScrollPosition = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setIsAtStart(scrollLeft <= 10);
            setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('scroll', checkScrollPosition);
            checkScrollPosition();
            return () => slider.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 340;
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    };

    const navigateLightbox = (direction) => {
        if (direction === 'prev') {
            setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        } else {
            setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox('prev');
            if (e.key === 'ArrowRight') navigateLightbox('next');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen]);

    if (!images || images.length === 0) return null;

    return (
        <section className="py-20 bg-black/50 relative overflow-hidden">
            {/* Background Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r ${colors.gradient} opacity-10 blur-[100px] pointer-events-none`}></div>

            <div className="container relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <span className={`${colors.text} font-bold tracking-widest text-sm uppercase mb-3 block`}>Moments Captured</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white">{title}</h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => scroll('left')}
                            disabled={isAtStart}
                            className={`w-12 h-12 rounded-full border ${colors.border} flex items-center justify-center transition-all duration-300 ${isAtStart ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 hover:border-white/50'}`}
                        >
                            <ChevronLeft className="text-white" size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={isAtEnd}
                            className={`w-12 h-12 rounded-full border ${colors.border} flex items-center justify-center transition-all duration-300 ${isAtEnd ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 hover:border-white/50'}`}
                        >
                            <ChevronRight className="text-white" size={20} />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="relative flex-shrink-0 w-[300px] md:w-[340px] h-[240px] md:h-[280px] rounded-2xl overflow-hidden group cursor-pointer snap-start"
                        >
                            {/* Image */}
                            <img
                                src={img.url}
                                alt={img.label || `Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className={`${colors.text} text-xs font-bold uppercase tracking-wider block mb-1`}>DJ P Rock</span>
                                            <span className="text-white font-bold">{img.label || 'Event Highlight'}</span>
                                        </div>
                                        <div className={`w-10 h-10 rounded-full ${colors.bg}/20 flex items-center justify-center`}>
                                            <ZoomIn className={colors.text} size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Border Glow on Hover */}
                            <div className={`absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox - rendered via Portal to bypass SmoothScroll transform */}
            {lightboxOpen && createPortal(
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                    >
                        <X className="text-white" size={24} />
                    </button>

                    {/* Navigation */}
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                        className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                    >
                        <ChevronLeft className="text-white" size={24} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                        className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                    >
                        <ChevronRight className="text-white" size={24} />
                    </button>

                    {/* Image */}
                    <div
                        className="max-w-[90vw] max-h-[85vh] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[lightboxIndex]?.url}
                            alt={images[lightboxIndex]?.label || 'Gallery image'}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                        {images[lightboxIndex]?.label && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                                <p className="text-white font-bold text-lg">{images[lightboxIndex].label}</p>
                            </div>
                        )}
                    </div>

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
                        {lightboxIndex + 1} / {images.length}
                    </div>
                </div>,
                document.body
            )}

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default GallerySlider;
