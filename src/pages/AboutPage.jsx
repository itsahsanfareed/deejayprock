import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Music, Star, Award, Headphones, Users, Mic2, Heart, CheckCircle, Clock, Zap, Play } from 'lucide-react';
import Contact from '../components/Contact';
import GallerySlider from '../components/GallerySlider';

const galleryImages = [
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Live Performance' },
    { url: '/images/DJ-P-Rock-Gallery_6.jpg', label: 'Event Setup' },
    { url: '/images/DJP-Rock-DJ-Service-1.jpg', label: 'DJ Booth' },
    { url: '/images/360-Photobooth-DJ-P-Rock.jpg', label: '360 Photobooth' },
    { url: '/images/Mirror-X-Photobooth-DJ-P-Rock.jpg', label: 'Mirror X Booth' },
    { url: '/images/Video-Wall-Rental-DJP-Rock.jpg', label: 'Video Wall' },
];

const TestimonialCard = ({ name, role, quote, image }) => (
    <div className="glass-panel p-8 rounded-3xl border border-white/10 relative h-full flex flex-col">
        <div className="flex text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed flex-grow italic">"{quote}"</p>
        <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
            <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
            <div>
                <div className="font-bold text-white">{name}</div>
                <div className="text-xs text-gray-500">{role}</div>
            </div>
        </div>
    </div>
);

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About DJ P Rock | Best Corporate & Wedding DJ in Atlanta</title>
                <meta name="description" content="Meet DJ P Rock, Atlanta's premier event specialist with 10+ years of experience. Learn about our philosophy, equipment, and passion for creating unforgettable memories." />
                <meta name="keywords" content="DJ P Rock Bio, About DJ P Rock, Atlanta DJ Experience, Professional Event DJ, DJ Equipment Atlanta" />
            </Helmet>

            {/* Hero Section with Video Background */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/DJP-rock-Video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
                </div>

                <div className="container relative z-10 text-center pt-32 pb-20">
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        The Man Behind The Music
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        PASSION. ENERGY. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">EXCELLENCE.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Creating unforgettable experiences for over a decade. Atlanta's most trusted entertainment curator.
                    </p>
                    <Link to="/book" className="btn btn-primary px-10 py-4 text-lg">Book DJ P Rock</Link>
                </div>
            </section>

            {/* Main Bio Section with Video */}
            <section className="py-24 bg-black relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Column */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-[2.5rem] opacity-30 group-hover:opacity-50 blur-xl transition-all duration-700"></div>
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[4/5]">
                                <img
                                    src="/images/about-us-pic.jpeg"
                                    alt="DJ P Rock"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full p-8">
                                    <h3 className="text-3xl font-black text-white">DJ P Rock</h3>
                                    <p className="text-purple-400 font-medium">Founder & Lead Curator</p>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="space-y-8">
                            <div>
                                <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">Our Story</span>
                                <h2 className="text-4xl font-black text-white mb-6">More Than Just A DJ</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    Music has always been more than just sound to me—it's energy, it's emotion, and it's the heartbeat of every great memory. I started DJ P Rock with a simple mission: to elevate the standard of event entertainment in Atlanta.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    With over <strong className="text-white">10 years of experience</strong> in the industry, I've had the privilege of performing at over <strong className="text-white">250 events</strong>, ranging from intimate wedding ceremonies to massive corporate galas for Fortune 500 companies.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    I don't believe in "pressing play" on a pre-made playlist. I believe in reading the room, feeling the crowd's energy, and crafting a sonic journey that keeps the dance floor packed all night long.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-xl text-white flex items-center gap-2">
                                        <Award className="text-yellow-500" size={24} /> Recognition
                                    </h3>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Top 5% WeddingWire Rated</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> The Knot Best of Weddings</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> 5-Star Google Rating</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-xl text-white flex items-center gap-2">
                                        <Mic2 className="text-blue-500" size={24} /> Expertise
                                    </h3>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Open-Format Mixing</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Master of Ceremonies (MC)</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Audio Engineering</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-y border-white/10">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">250+</div>
                            <div className="text-gray-400 text-sm uppercase tracking-widest">Events Completed</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">10+</div>
                            <div className="text-gray-400 text-sm uppercase tracking-widest">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">100%</div>
                            <div className="text-gray-400 text-sm uppercase tracking-widest">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">5.0</div>
                            <div className="text-gray-400 text-sm uppercase tracking-widest">Google Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-pink-500 font-bold tracking-widest text-sm uppercase mb-4 block">Our Philosophy</span>
                        <h2 className="text-4xl font-black text-white mb-6">THE P ROCK STANDARD</h2>
                        <p className="text-gray-400">We don't just show up; we show out. Here is what you can expect when you book with us.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors group hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                            <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Crowd Psychology</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We are experts at "reading the room." We know exactly when to build the energy, when to slow it down for romance, and when to drop that unexpected banger.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors group hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Headphones size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Musical Versatility</h3>
                            <p className="text-gray-400 leading-relaxed">
                                From 70s Funk to modern Trap, from Country ballads to Afrobeat rhythms. We are true Open-Format DJs who can seamlessly blend genres.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors group hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                            <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Reliability & Trust</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We arrive early, dress professionally, and always have backup equipment. Your peace of mind is our priority with a 100% on-time record.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <GallerySlider
                images={galleryImages}
                title="Our Work"
                accentColor="purple"
            />

            {/* Testimonials / Reviews Section */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-yellow-500 font-bold tracking-widest text-sm uppercase mb-4 block">Client Love</span>
                        <h2 className="text-4xl font-black text-white mb-4">What People Say</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Real testimonials from real clients who trusted us with their special moments.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <TestimonialCard
                            name="Sarah Johnson"
                            role="Wedding Client"
                            quote="DJ P Rock made our wedding reception absolutely incredible! He read the crowd perfectly and had everyone dancing all night. The best decision we made for our wedding entertainment!"
                            image="/images/Sarah-Johnson-DJP-Rock.jpeg"
                        />
                        <TestimonialCard
                            name="Michael Brown"
                            role="Corporate Event"
                            quote="Professional from start to finish. The music selection was perfect for our corporate gala, and the sound quality was outstanding. Our employees are still talking about it!"
                            image="/images/Michael-DJ-P-rock.jpeg"
                        />
                        <TestimonialCard
                            name="Rachel Garcia"
                            role="Birthday Party"
                            quote="Best DJ we've ever hired! The energy was amazing, equipment was top-notch, and DJ P Rock was so easy to work with. Already booking for next year's party!"
                            image="/images/Rachel-Garcia-DJP-Rock.jpeg"
                        />
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/reviews" className="btn btn-outline px-8 py-3">Read More Reviews</Link>
                    </div>
                </div>
            </section>

            {/* Our Equipment */}
            <section className="py-24 bg-[#050505] relative">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block">State Of The Art</span>
                            <h2 className="text-4xl font-black text-white mb-6">GEAR THAT ROCKS</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                We invest in the best so you sound the best. No blown speakers, no buzzing mics, just crystal-clear, concert-quality audio.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <CheckCircle className="text-blue-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-bold text-white">QSC K12.2 Speaker Systems</h4>
                                        <p className="text-sm text-gray-400">Industry leader for clarity and deep bass.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle className="text-blue-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-bold text-white">Shure Wireless Microphones</h4>
                                        <p className="text-sm text-gray-400">Zero dropouts, perfect for toasts and vows.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle className="text-blue-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-bold text-white">Pioneer DDJ-REV7 Controller</h4>
                                        <p className="text-sm text-gray-400">Cutting edge performance hardware.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle className="text-blue-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-bold text-white">Chauvet Professional Lighting</h4>
                                        <p className="text-sm text-gray-400">Intelligent moving heads and DMX control.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-3xl border border-white/10 overflow-hidden group">
                            <img
                                src="/images/DJP-Rock-DJ-Service-1.jpg"
                                alt="DJ P Rock Equipment"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                <div className="glass-panel p-6 rounded-2xl">
                                    <h3 className="text-2xl font-bold text-white mb-2">Sonic Perfection</h3>
                                    <p className="text-gray-300 mb-4">Hear the difference professional audio makes.</p>
                                    <Link to="/contact" className="btn btn-outline w-full">Request Tech Spec Sheet</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process Timeline */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">How It Works</span>
                        <h2 className="text-4xl font-black text-white mb-6">The Journey To Amazing</h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical line - visible only on MD+ */}
                        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-blue-600 to-green-600 hidden md:block"></div>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 relative">
                                <div className="flex-1 text-center md:text-right order-2 md:order-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">The Discovery Call</h3>
                                    <p className="text-gray-400">We hop on a call to vibe check, discuss your vision, and see if we're the perfect fit.</p>
                                </div>
                                <div className="w-14 h-14 rounded-full bg-purple-600 border-4 border-black z-10 flex items-center justify-center font-bold text-white order-1 md:order-2 shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.5)]">1</div>
                                <div className="flex-1 order-3 md:order-3"></div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 relative">
                                <div className="flex-1 order-3 md:order-1 hidden md:block"></div>
                                <div className="w-14 h-14 rounded-full bg-blue-600 border-4 border-black z-10 flex items-center justify-center font-bold text-white order-1 md:order-2 shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.5)]">2</div>
                                <div className="flex-1 text-center md:text-left order-2 md:order-3">
                                    <h3 className="text-2xl font-bold text-white mb-2">Booking & Planning</h3>
                                    <p className="text-gray-400">Secure your date and get access to our online planning app to build your timeline.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 relative">
                                <div className="flex-1 text-center md:text-right order-2 md:order-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">The Music Curating</h3>
                                    <p className="text-gray-400">You select your "must-plays" and "do-not-plays", and we build a custom set around them.</p>
                                </div>
                                <div className="w-14 h-14 rounded-full bg-pink-600 border-4 border-black z-10 flex items-center justify-center font-bold text-white order-1 md:order-2 shrink-0 shadow-[0_0_20px_rgba(236,72,153,0.5)]">3</div>
                                <div className="flex-1 order-3 md:order-3"></div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 relative">
                                <div className="flex-1 order-3 md:order-1 hidden md:block"></div>
                                <div className="w-14 h-14 rounded-full bg-green-600 border-4 border-black z-10 flex items-center justify-center font-bold text-white order-1 md:order-2 shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.5)]">4</div>
                                <div className="flex-1 text-center md:text-left order-2 md:order-3">
                                    <h3 className="text-2xl font-bold text-white mb-2">Showtime</h3>
                                    <p className="text-gray-400">We arrive early, set up, and rock the party. You just have the time of your life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-t from-purple-900/30 to-black">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready To Elevate Your Event?</h2>
                    <p className="text-xl text-gray-400 mb-10">Don't settle for average entertainment. Book the experience you deserve.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/book" className="btn btn-primary px-12 py-4 text-lg">Book Now</Link>
                        <Link to="/contact" className="btn btn-outline px-12 py-4 text-lg">Contact Us</Link>
                    </div>
                </div>
            </section>

            <Contact />

        </>
    );
};

export default AboutPage;
