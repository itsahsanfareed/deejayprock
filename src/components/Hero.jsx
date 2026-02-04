import React from 'react';
import { ArrowRight, Play, Disc } from 'lucide-react';

// Simplified audio visualizer - CSS only, no framer-motion
const AudioVisualizer = () => (
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

const Hero = () => {
    // Marquee content
    const marqueeText = "WEDDINGS • CORPORATE • PRIVATE PARTIES • 360 PHOTOBOOTHS • LED VIDEO WALLS • ";

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">

            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute w-full h-full object-cover scale-105"
                    poster="/images/DJ-P-Rock-Gallery_2.jpg"
                >
                    <source src="/videos/banner video.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[80px] mix-blend-screen" />
            </div>

            {/* Static Vinyl Decoration - CSS animation only */}
            <div className="absolute top-20 right-[-100px] md:right-20 w-40 h-40 md:w-64 md:h-64 opacity-20 pointer-events-none z-0 hidden md:block animate-spin-slow">
                <div className="w-full h-full rounded-full border-4 border-white/30 bg-black flex items-center justify-center relative overflow-hidden shadow-2xl">
                    {/* Grooves */}
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="absolute rounded-full border border-white/5" style={{ inset: `${(i + 1) * 10}%` }} />
                    ))}
                    {/* Label */}
                    <div className="w-1/3 h-1/3 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Disc className="text-white/50" size={24} />
                    </div>
                </div>
            </div>

            <div className="container relative z-10 px-4 sm:px-6 mx-auto">
                <div className="flex flex-col items-center text-center animate-fade-in-up">
                    {/* Trust Badge with Visualizer */}
                    <div className="inline-flex items-center gap-2 sm:gap-4 py-2 px-4 sm:px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 sm:mb-8">
                        <AudioVisualizer />
                        <span className="text-xs sm:text-sm font-medium text-gray-300 border-l border-white/20 pl-2 sm:pl-4">Atlanta's Premier DJ</span>
                    </div>

                    {/* Main Title - SEO H1 */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
                        Atlanta Wedding DJ & {' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                            Event Entertainment
                        </span>
                    </h1>

                    <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed font-light px-2">
                        Premium DJ services in Atlanta with crystal-clear sound, intelligent lighting, and unforgettable crowd energy — specializing in weddings, corporate events, private parties, 360 photo booths, and LED video walls across Georgia.
                    </p>



                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto px-4 sm:px-0">
                        <a href="/book" className="btn btn-primary group text-sm sm:text-base">
                            Check Availability
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#demo" className="btn btn-outline group backdrop-blur-sm text-sm sm:text-base">
                            <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-white/20 transition-colors">
                                <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                            </span>
                            Watch Our Experience
                        </a>
                    </div>
                </div>
            </div>

            {/* CSS-only Infinite Marquee */}
            <div className="absolute bottom-0 w-full left-0 overflow-hidden py-3 sm:py-4 border-y border-white/5 bg-black/20 backdrop-blur-sm">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-lg sm:text-2xl md:text-4xl font-bold text-white/10 px-3 sm:px-4 font-display tracking-widest">
                            {marqueeText}
                        </span>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default Hero;
