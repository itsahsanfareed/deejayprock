import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Headphones, Star, Users, Music, CheckCircle, MapPin, ArrowRight, Play, Camera, Tv, Mic2, Smartphone, Lightbulb, User, Mail, Phone, Map } from 'lucide-react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, link, icon: Icon, color, image }) => {
    const glowColors = {
        purple: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]',
        pink: 'group-hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]',
        blue: 'group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]',
        indigo: 'group-hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]',
        green: 'group-hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]',
        rose: 'group-hover:shadow-[0_0_40px_rgba(244,63,94,0.4)]',
        yellow: 'group-hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]',
        cyan: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]',
    };

    const borderColors = {
        purple: 'group-hover:border-purple-500/50',
        pink: 'group-hover:border-pink-500/50',
        blue: 'group-hover:border-blue-500/50',
        indigo: 'group-hover:border-indigo-500/50',
        green: 'group-hover:border-green-500/50',
        rose: 'group-hover:border-rose-500/50',
        yellow: 'group-hover:border-yellow-500/50',
        cyan: 'group-hover:border-cyan-500/50',
    };

    return (
        <Link to={link || "/services"} className={`group relative overflow-hidden rounded-3xl aspect-square flex flex-col justify-end p-6 border border-white/10 ${borderColors[color]} ${glowColors[color]} transition-all duration-500`}>
            {image && (
                <>
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:via-black/30 transition-all duration-500"></div>
                </>
            )}
            <div className={`absolute top-6 right-6 w-14 h-14 rounded-2xl bg-${color}-500/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-${color}-500/50 transition-all duration-300 z-10 border border-${color}-400/30`}>
                <Icon className={`text-${color}-400 group-hover:text-white transition-colors`} size={26} />
            </div>
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform drop-shadow-lg">{title}</h3>
                <div className="flex items-center gap-2 text-sm font-bold text-white/70 group-hover:text-white transition-colors">
                    LEARN MORE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
};


const StatItem = ({ value, label, sub }) => (
    <div className="text-center p-6 border-r border-white/10 last:border-0">
        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-2">{value}</div>
        <div className="text-sm font-bold text-white uppercase tracking-widest mb-1">{label}</div>
        {sub && <div className="text-xs text-gray-500">{sub}</div>}
    </div>
);

const TestimonialCard = ({ name, role, quote }) => (
    <div className="glass-panel p-8 rounded-3xl relative">
        <div className="flex text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">"{quote}"</p>
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white text-sm">
                {name.charAt(0)}
            </div>
            <div>
                <div className="font-bold text-white text-sm">{name}</div>
                <div className="text-xs text-gray-500">{role}</div>
            </div>
        </div>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-purple-400' : 'text-white group-hover:text-purple-300'}`}>
                    {question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-purple-400' : 'text-gray-500'}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Atlanta Wedding DJ | 360 Photo Booth & LED Video Wall Rental – DJ P Rock</title>
                <meta name="description" content="Book DJ P Rock for premium DJ services in Atlanta. Weddings, corporate events & private parties with 360 photo booth rentals, uplighting, and LED video wall production across Georgia." />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "DJ P Rock",
                        "image": "https://djprock.com/images/about-us-pic.jpeg",
                        "url": "https://djprock.com/",
                        "telephone": "+16783386333",
                        "email": "deejayprock@gmail.com",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Atlanta",
                            "addressRegion": "GA",
                            "addressCountry": "US"
                        },
                        "areaServed": "Atlanta, GA",
                        "priceRange": "$$",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5.0",
                            "reviewCount": "150"
                        },
                        "sameAs": [
                            "https://www.instagram.com/djprock",
                            "https://www.facebook.com/djprock"
                        ]
                    })}
                </script>
            </Helmet>

            <Hero />

            {/* About & Stats Section - Redesigned */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none" />

                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Interactive Owner Image */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-[2.5rem] opacity-30 group-hover:opacity-50 blur-xl transition-all duration-700 animate-pulse-slow" />
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-gray-900 shadow-2xl">
                                <img
                                    src="/images/about-us-pic.jpeg"
                                    alt="DJ P Rock - Professional DJ Entertainment"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay Card */}
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <h3 className="text-3xl font-black text-white mb-1">DJ P Rock</h3>
                                            <p className="text-purple-400 font-medium tracking-wide">Standard-Setting Event Curator</p>
                                        </div>
                                        <div className="hidden md:flex gap-2">
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                                                <Music size={18} />
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                                                <Star size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute top-10 -left-10 hidden md:block p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">100%</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-widest">Success Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div>
                            <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-purple-500 inline-block" /> About DJ P Rock
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                                More Than Just a DJ — <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">We Create the Energy</span>
                            </h2>

                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    DJ P Rock is Atlanta's go-to name for clients who want more than a playlist. With over <strong className="text-white">10 years of experience</strong>, we've mastered what most DJs never learn: how to read the crowd, build momentum, and keep every age group engaged.
                                </p>
                                <p>
                                    From luxury weddings to packed corporate galas, we deliver entertainment that feels custom, smooth, and unforgettable. No cookie-cutter playlists. No awkward announcements. Just <strong className="text-white">premium entertainment</strong> tailored to your event.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-3xl font-black text-white mb-1">250+</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider">Events Rocked</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-3xl font-black text-white mb-1">150+</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Couples</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-3xl font-black text-white mb-1">10+</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider">Years Active</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-3xl font-black text-white mb-1">Top 1%</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider">In Atlanta</p>
                                </div>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <Link to="/about" className="btn btn-primary">READ FULL STORY</Link>
                                <Link to="/contact" className="btn btn-outline">MEET THE TEAM</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer - Services Grid - Modern 2-Column Layout */}
            <section className="py-16 sm:py-24 bg-black relative">
                <div className="container px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 max-w-6xl mx-auto">
                        <div>
                            <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-2 block">Atlanta Event Entertainment Services</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-lg">Premium DJ Services in Atlanta for Weddings, Corporate Events & Parties</h2>
                        </div>
                        <Link to="/services" className="hidden md:flex items-center gap-2 text-white hover:text-purple-400 transition-colors font-bold mt-4 md:mt-0">
                            LOOK FOR MORE SERVICES <ArrowRight size={20} />
                        </Link>
                    </div>

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
                                <Music className="w-7 h-7 text-purple-400" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">DJ Services</h3>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-purple-400 transition-colors">
                                    <span>Learn More</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                                <Camera className="w-7 h-7 text-pink-400" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">360 Photobooth</h3>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-pink-400 transition-colors">
                                    <span>Learn More</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                                <Tv className="w-7 h-7 text-cyan-400" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Video Wall Rental</h3>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-cyan-400 transition-colors">
                                    <span>Learn More</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                                <Tv className="w-7 h-7 text-blue-400" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Video Wall Trailer</h3>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-blue-400 transition-colors">
                                    <span>Learn More</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                                <Smartphone className="w-7 h-7 text-green-400" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">iPad Selfie Booths</h3>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-green-400 transition-colors">
                                    <span>Learn More</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                                <Camera className="w-7 h-7 text-rose-400" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Mirror X Booths</h3>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-rose-400 transition-colors">
                                    <span>Learn More</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                                <Lightbulb className="w-7 h-7 text-yellow-400" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Uplighting Service</h3>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-yellow-400 transition-colors">
                                    <span>Learn More</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                                <Mic2 className="w-7 h-7 text-violet-400" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 w-full">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Karaoke Service</h3>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide uppercase group-hover:text-violet-400 transition-colors">
                                    <span>Learn More</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="mt-12 text-center md:hidden max-w-6xl mx-auto">
                        <Link to="/services" className="btn btn-outline w-full">LOOK FOR MORE SERVICES</Link>
                    </div>
                </div>
            </section>

            {/* Gallery Teaser */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="container text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tighter">Our Gallery</h2>
                    <p className="text-gray-500 mb-12 uppercase tracking-widest text-sm">Capturing the energy of the night</p>

                    {/* Simple Consistent Grid - 2 columns mobile, 3 columns desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                        {/* Gallery Item 1 - Using gallery specific image */}
                        <div className="aspect-square rounded-2xl border border-white/10 relative overflow-hidden group">
                            <img
                                src="/images/gallery-1-DJ-P-Rock.jpg"
                                alt="DJ P Rock Live Performance"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <span className="absolute bottom-4 left-4 font-bold text-white">Live Events</span>
                        </div>

                        {/* Gallery Item 2 - Different 360 booth angle */}
                        <div className="aspect-square rounded-2xl border border-white/10 relative overflow-hidden group">
                            <img
                                src="/images/360-Photobooth_1-DJ-P-Rock.jpg"
                                alt="360 Photo Booth in Action"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <span className="absolute bottom-4 left-4 font-bold text-white">360 Booth</span>
                        </div>

                        {/* Gallery Item 3 - Video wall trailer */}
                        <div className="aspect-square rounded-2xl border border-white/10 relative overflow-hidden group">
                            <img
                                src="/images/video wall trailer.jpg"
                                alt="Video Wall Trailer Setup"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <span className="absolute bottom-4 left-4 font-bold text-white">Video Trailer</span>
                        </div>

                        {/* Gallery Item 4 - Mirror X alternative */}
                        <div className="aspect-square rounded-2xl border border-white/10 relative overflow-hidden group">
                            <img
                                src="/images/Mirror-X-Photobooth-3-DJ-P-Rock.jpg"
                                alt="Mirror X Photo Booth Experience"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <span className="absolute bottom-4 left-4 font-bold text-white">Mirror X</span>
                        </div>

                        {/* Gallery Item 5 - Karaoke */}
                        <div className="aspect-square rounded-2xl border border-white/10 relative overflow-hidden group">
                            <img
                                src="/images/Karaoke-Service_1-DJ-P-Rock.jpg"
                                alt="Karaoke Night"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <span className="absolute bottom-4 left-4 font-bold text-white">Karaoke</span>
                        </div>

                        {/* Gallery Item 6 - Gallery 2 image */}
                        <div className="aspect-square rounded-2xl border border-white/10 relative overflow-hidden group">
                            <img
                                src="/images/gallery-2-DJ-P-Rock.jpg"
                                alt="DJ P Rock Wedding Event"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <span className="absolute bottom-4 left-4 font-bold text-white">Weddings</span>
                        </div>
                    </div>

                    <Link to="/gallery" className="btn btn-outline px-12">VIEW FULL GALLERY</Link>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">WHY CHOOSE DJ P ROCK</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Atlanta's Premier Entertainment Experience</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            When you partner with DJ P Rock, you're investing in more than music — you're securing a <strong className="text-white">premium entertainment experience</strong> built on professionalism, precision, and an unwavering commitment to excellence. Our services are trusted by discerning clients across Atlanta for weddings, corporate functions, and milestone celebrations.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            With over <strong className="text-white">a decade of professional experience</strong>, we've established ourselves as a leading <strong className="text-white">wedding DJ and event entertainment provider in Atlanta</strong>. Every detail is meticulously planned, every playlist thoughtfully curated, and every event executed with the care and attention your occasion deserves.
                        </p>
                        <a href="tel:+16783386333" className="btn btn-primary px-10 py-4 text-lg">+1 (678) 338-6333</a>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 translate-y-8">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <Star className="text-yellow-400 mb-4" size={32} />
                                <h4 className="font-bold text-lg mb-2">5-Star Excellence</h4>
                                <p className="text-xs text-gray-500">Consistently rated as one of Atlanta's top DJ services on Google and leading event platforms.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <Users className="text-blue-400 mb-4" size={32} />
                                <h4 className="font-bold text-lg mb-2">Expert Crowd Management</h4>
                                <p className="text-xs text-gray-500">We masterfully read the room to maintain energy and keep guests engaged throughout your event.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <Music className="text-purple-400 mb-4" size={32} />
                                <h4 className="font-bold text-lg mb-2">Versatile Music Selection</h4>
                                <p className="text-xs text-gray-500">Spanning all genres and generations — expertly mixed to complement your event's unique atmosphere.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <CheckCircle className="text-green-400 mb-4" size={32} />
                                <h4 className="font-bold text-lg mb-2">Guaranteed Reliability</h4>
                                <p className="text-xs text-gray-500">Punctual, prepared, and professional — delivering flawless execution for every event.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-black">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-4 block">FAQs</span>
                        <h2 className="text-4xl font-bold mb-4 uppercase">Any Questions Left? <span className="text-gradient">Ask Now</span></h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem question="What are the available services you offer for events?" answer="We offer a comprehensive range of services including DJ Services, 360 Photobooths, Video Wall Rentals, Video Wall Trailers, iPad Selfie Booths, Mirror X Booths, Uplighting, and Karaoke Services." />
                        <FAQItem question="Which musical genres is DJ P Rock skilled in?" answer="DJ P Rock is an open-format expert, skilled in Hip-Hop, R&B, Pop, Country, Top 40, Afrobeat, Latin, and Old School classics, ensuring everyone hits the dance floor." />
                        <FAQItem question="Do you provide assistance or staff during the event?" answer="Yes, all our premium services like Photobooths and Video Walls come with professional attendants to ensure smooth operation throughout your event." />
                        <FAQItem question="Can DJ P Rock fulfil some requirements?" answer="Absolutely. We pride ourselves on customization. Whether you have a specific playlist, a 'do-not-play' list, or specific lighting color schemes, we tailor our service to your vision." />
                        <FAQItem question="Are your services customizable to fit the theme or requirements of my event?" answer="Yes! distinctive themes require distinctive setups. From custom video wall graphics to branded photobooth overlays, we align entirely with your event's theme." />
                    </div>
                </div>
            </section>

            {/* Google Reviews Section */}
            <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
                {/* Map Pattern Background */}
                <div className="absolute inset-0 opacity-[0.07]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="map-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                                {/* Main grid lines */}
                                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
                                {/* Diagonal lines for roads */}
                                <path d="M 0 0 L 100 100" fill="none" stroke="white" strokeWidth="0.3" />
                                <path d="M 50 0 L 100 50" fill="none" stroke="white" strokeWidth="0.3" />
                                <path d="M 0 50 L 50 100" fill="none" stroke="white" strokeWidth="0.3" />
                                {/* Curved path for river/highway */}
                                <path d="M 0 30 Q 50 50 100 30" fill="none" stroke="white" strokeWidth="0.8" />
                                <path d="M 0 70 Q 50 50 100 70" fill="none" stroke="white" strokeWidth="0.8" />
                                {/* Small circles for locations */}
                                <circle cx="25" cy="25" r="2" fill="white" />
                                <circle cx="75" cy="75" r="2" fill="white" />
                                <circle cx="50" cy="50" r="3" fill="white" />
                                {/* Additional road lines */}
                                <path d="M 25 0 L 25 100" fill="none" stroke="white" strokeWidth="0.2" />
                                <path d="M 75 0 L 75 100" fill="none" stroke="white" strokeWidth="0.2" />
                                <path d="M 0 25 L 100 25" fill="none" stroke="white" strokeWidth="0.2" />
                                <path d="M 0 75 L 100 75" fill="none" stroke="white" strokeWidth="0.2" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#map-grid)" />
                    </svg>
                </div>
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none"></div>

                <div className="container relative z-10">
                    {/* Header with Google Branding */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <svg className="w-8 h-8" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="text-2xl font-semibold text-white">Google Reviews</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold text-white">5.0</span>
                                <div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-400 mt-1">Based on 150+ reviews</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/reviews" className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all">
                            View All Reviews
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Reviews Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Review Card 1 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                                    S
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="font-semibold text-white">Sarah Mitchell</h3>
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                                            Local Guide
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400">2 weeks ago</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">"DJ P Rock was absolutely incredible at our wedding! He read the crowd perfectly and kept the dance floor packed all night. The 360 photobooth was a HUGE hit!"</p>
                            <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                                <span className="flex items-center gap-2 text-sm text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                                    Helpful (24)
                                </span>
                            </div>
                        </div>

                        {/* Review Card 2 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                                    M
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-white">Marcus Thompson</h3>
                                    <p className="text-sm text-gray-400">1 month ago</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">"We hired DJ P Rock for our corporate gala and he knocked it out of the park. Professional, punctual, and played a great mix. The video wall setup was stunning!"</p>
                            <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                                <span className="flex items-center gap-2 text-sm text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                                    Helpful (18)
                                </span>
                            </div>
                        </div>

                        {/* Review Card 3 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                                    J
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="font-semibold text-white">Jessica Williams</h3>
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                                            Local Guide
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400">3 weeks ago</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">"Best DJ ever! The uplighting transformed our backyard, and the music was fire. He mixed old school hip hop with new hits perfectly. Birthday was unforgettable!"</p>
                            <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                                <span className="flex items-center gap-2 text-sm text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                                    Helpful (31)
                                </span>
                            </div>
                        </div>

                        {/* Review Card 4 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                                    A
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-white">Ashley Rodriguez</h3>
                                    <p className="text-sm text-gray-400">2 months ago</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">"Our guests are still talking about the music at our reception! The Mirror X booth was a huge hit - photos came out so professional. Worth every penny!"</p>
                            <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                                <span className="flex items-center gap-2 text-sm text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                                    Helpful (15)
                                </span>
                            </div>
                        </div>

                        {/* Review Card 5 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                                    A
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="font-semibold text-white">Amanda Garcia</h3>
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                                            Local Guide
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400">6 weeks ago</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">"My daughter's Sweet 16 was AMAZING thanks to DJ P Rock! He knew exactly what teenagers wanted but kept it appropriate. Already booked for my son's graduation!"</p>
                            <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                                <span className="flex items-center gap-2 text-sm text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                                    Helpful (27)
                                </span>
                            </div>
                        </div>

                        {/* Review Card 6 - Featured */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border-2 border-yellow-400/50">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">TOP REVIEW</span>
                            </div>
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                                    R
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="font-semibold text-white">Rachel Howard</h3>
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                                            Local Guide
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400">1 week ago</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">"Just had our wedding reception and WOW! DJ P Rock absolutely crushed it. From ceremony to last dance, everything was perfect. If you're looking for a DJ in Atlanta, look no further!"</p>
                            <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                                <span className="flex items-center gap-2 text-sm text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                                    Helpful (42)
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Custom Contact Section */}
            <section className="py-24 bg-black relative" id="contact">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black pointer-events-none"></div>
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block">Contact</span>
                            <h2 className="text-5xl font-black text-white mb-8">LET’S GET IN TOUCH</h2>

                            <div className="space-y-8 mt-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Phone className="text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Phone</h4>
                                        <p className="text-gray-400">+1(678) 338-6333</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Mail className="text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Email</h4>
                                        <p className="text-gray-400">deejayprock@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <MapPin className="text-pink-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Location</h4>
                                        <p className="text-gray-400">Atlanta, GA, United States</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-8 bg-white/5 rounded-2xl border border-white/10">
                                <h4 className="font-bold text-xl mb-2">Are You ready to enjoy us?</h4>
                                <p className="text-gray-400 mb-4">It’s easy; complete the form to join our team. We will respond with the necessary actions.</p>
                            </div>
                        </div>

                        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 bg-black/40">
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                                        <input type="text" className="w-full bg-white/5 border-b border-white/10 focus:border-purple-500 py-3 outline-none text-white transition-colors" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                                        <input type="text" className="w-full bg-white/5 border-b border-white/10 focus:border-purple-500 py-3 outline-none text-white transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border-b border-white/10 focus:border-purple-500 py-3 outline-none text-white transition-colors" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                                    <input type="tel" className="w-full bg-white/5 border-b border-white/10 focus:border-purple-500 py-3 outline-none text-white transition-colors" placeholder="+1..." />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Address</label>
                                    <input type="text" className="w-full bg-white/5 border-b border-white/10 focus:border-purple-500 py-3 outline-none text-white transition-colors" placeholder="Event Location" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Type Of Services</label>
                                    <select className="w-full bg-black border-b border-white/10 focus:border-purple-500 py-3 outline-none text-white transition-colors">
                                        <option>Select a service...</option>
                                        <option>DJ Service</option>
                                        <option>360 Photobooth</option>
                                        <option>Video Wall Rental</option>
                                        <option>Video Wall Trailer</option>
                                        <option>iPad Selfie Booth</option>
                                        <option>Mirror X Booth</option>
                                        <option>Uplighting</option>
                                        <option>Karaoke</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Your Message</label>
                                    <textarea rows="4" className="w-full bg-white/5 border-b border-white/10 focus:border-purple-500 py-3 outline-none text-white transition-colors resize-none" placeholder="Tell us about your event..."></textarea>
                                </div>
                                <button type="submit" className="w-full btn btn-primary py-4 mt-4 text-lg">SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
