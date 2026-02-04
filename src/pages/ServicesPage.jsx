import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ServicesIndex = () => {
    return (
        <>
            <Helmet>
                <title>All DJ Services & Packages | DJ P Rock</title>
                <meta name="description" content="View our full range of DJ and entertainment services. Weddings, Corporate Events, Private Parties, Lighting Design, and more." />
            </Helmet>

            {/* Hero Section with Video Background */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/banner video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
                </div>

                <div className="container relative z-10 text-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
                    <span className="inline-block px-3 sm:px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-6 backdrop-blur-sm">
                        Our Services
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6">
                        World Class <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">Entertainment</span>
                    </h1>
                    <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                        We don't just play music; we create experiences. Explore our specialized services below.
                    </p>
                </div>
            </section>

            {/* Services Grid - Modern 2-Column Layout */}
            <section className="py-16 sm:py-24 bg-black">
                <div className="container px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">

                        {/* DJ Service */}
                        <Link to="/services/dj" className="group relative overflow-hidden rounded-2xl aspect-[16/10] block bg-gray-900">
                            <img
                                src="/images/Dj-service-DJ-P-Rock.jpg"
                                alt="DJ P Rock DJ Services"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            {/* Floating Icon */}
                            <div className="absolute top-5 right-5 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">DJ Services</h2>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-purple-400 transition-colors">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* 360 Photobooth */}
                        <Link to="/services/360-photobooth" className="group relative overflow-hidden rounded-2xl aspect-[16/10] block bg-gray-900">
                            <img
                                src="/images/360-Photobooth-DJ-P-Rock.jpg"
                                alt="DJ P Rock 360 Photobooth"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            {/* Floating Icon */}
                            <div className="absolute top-5 right-5 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">360 Photobooth</h2>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-pink-400 transition-colors">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Video Wall Rental */}
                        <Link to="/services/video-wall-rental" className="group relative overflow-hidden rounded-2xl aspect-[16/10] block bg-gray-900">
                            <img
                                src="/images/Video-Wall-Rental-DJP-Rock.jpg"
                                alt="DJ P Rock Video Walls"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            {/* Floating Icon */}
                            <div className="absolute top-5 right-5 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Video Wall Rental</h2>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-cyan-400 transition-colors">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Video Wall Trailer */}
                        <Link to="/services/video-wall-trailer" className="group relative overflow-hidden rounded-2xl aspect-[16/10] block bg-gray-900">
                            <img
                                src="/images/Video-wall-trailer-rental-DJ-P-Rock.jpg"
                                alt="DJ P Rock Video Wall Trailer"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            {/* Floating Icon */}
                            <div className="absolute top-5 right-5 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Video Wall Trailer</h2>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-blue-400 transition-colors">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* iPad Selfie Booths */}
                        <Link to="/services/ipad-selfie" className="group relative overflow-hidden rounded-2xl aspect-[16/10] block bg-gray-900">
                            <img
                                src="/images/Ipad-Selfie-Booths-DJP-Rock.jpg"
                                alt="DJ P Rock iPad Selfie Booths"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            {/* Floating Icon */}
                            <div className="absolute top-5 right-5 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">iPad Selfie Booths</h2>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-green-400 transition-colors">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Mirror X Booths */}
                        <Link to="/services/mirror-x" className="group relative overflow-hidden rounded-2xl aspect-[16/10] block bg-gray-900">
                            <img
                                src="/images/Mirror-X-Photobooth-DJ-P-Rock.jpg"
                                alt="DJ P Rock Mirror X Booths"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            {/* Floating Icon */}
                            <div className="absolute top-5 right-5 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Mirror X Booths</h2>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-rose-400 transition-colors">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Uplighting Service */}
                        <Link to="/services/uplighting" className="group relative overflow-hidden rounded-2xl aspect-[16/10] block bg-gray-900">
                            <img
                                src="/images/uplight service.jpg"
                                alt="DJ P Rock Uplighting Service"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            {/* Floating Icon */}
                            <div className="absolute top-5 right-5 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Uplighting Service</h2>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-yellow-400 transition-colors">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Karaoke Service */}
                        <Link to="/services/karaoke" className="group relative overflow-hidden rounded-2xl aspect-[16/10] block bg-gray-900">
                            <img
                                src="/images/Karaoke-Service_1-DJ-P-Rock.jpg"
                                alt="DJ P Rock Karaoke Service"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            {/* Floating Icon */}
                            <div className="absolute top-5 right-5 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Karaoke Service</h2>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-violet-400 transition-colors">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            {/* All Packages Include */}
            <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black border-y border-white/5">
                <div className="container">
                    <h2 className="text-center text-4xl font-black text-white mb-4">All Packages Include</h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Every booking comes with our premium standard of service</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="glass-panel p-6 rounded-2xl border border-white/10">
                            <h3 className="font-bold text-xl mb-2 text-white">Premium Audio</h3>
                            <p className="text-sm text-gray-400">QSC K-Series Sound System</p>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/10">
                            <h3 className="font-bold text-xl mb-2 text-white">Wireless Mics</h3>
                            <p className="text-sm text-gray-400">Shure/Sennheiser Systems</p>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/10">
                            <h3 className="font-bold text-xl mb-2 text-white">Lighting</h3>
                            <p className="text-sm text-gray-400">Dance Floor Wash Lighting</p>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/10">
                            <h3 className="font-bold text-xl mb-2 text-white">Coverage</h3>
                            <p className="text-sm text-gray-400">Setup & Teardown Time</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-black text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-400 mb-10">Let's create an unforgettable experience together. Contact us to discuss your event.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/book" className="btn btn-primary px-12 py-4 text-lg">Book Now</Link>
                        <Link to="/packages" className="btn btn-outline px-12 py-4 text-lg">View Packages</Link>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default ServicesIndex;
