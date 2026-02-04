import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tablet, Wifi, Camera, CheckCircle, Instagram, MessageSquare, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import GallerySlider from '../../components/GallerySlider';
import Contact from '../../components/Contact';

const galleryImages = [
    { url: '/images/Ipad-Selfie-Booths-DJP-Rock.jpg', label: 'iPad Selfie Booth' },
    { url: '/images/Ipad-Selfie-Booths-DJP-Rock-820x1024.jpg', label: 'Compact Setup' },
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Event Setup' },
    { url: '/images/DJ-P-Rock-Gallery_6.jpg', label: 'Wedding Setup' },
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button className="w-full py-6 flex justify-between items-center text-left focus:outline-none group" onClick={() => setIsOpen(!isOpen)}>
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-purple-400' : 'text-white group-hover:text-purple-300'}`}>{question}</span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-purple-400' : 'text-gray-500'}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const IPadSelfieBooth = () => {
    return (
        <>
            <Helmet>
                <title>Selfie Booth Rental Atlanta | iPad Photo Booth Experience – DJ P Rock</title>
                <meta name="description" content="Rent a modern selfie booth in Atlanta for weddings and events. DJ P Rock offers iPad selfie booth rentals with clean photos, premium setup, and guest-friendly sharing." />
            </Helmet>

            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 z-0">
                    <img src="/images/DJP-Rock-About.jpg" alt="Selfie Booth Rental Atlanta" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                        <Tablet className="inline mr-2" size={16} /> Compact & Modern
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        Selfie Booth Rental in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Atlanta</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        If you want a modern photo booth option that looks clean, takes up less space, and still delivers high-quality photos — our <strong className="text-white">selfie booth rental in Atlanta</strong> is a perfect fit.
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                        This is an excellent option for weddings, corporate events, and private parties where you want guest interaction without a large footprint.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16783386333" className="btn btn-primary px-10 py-4 text-lg">+1 (678) 338-6333</a>
                        <Link to="/book" className="btn btn-outline px-10 py-4 text-lg">Book Now</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="container">
                    <h2 className="text-4xl font-black text-white mb-8 text-center">Why Choose an iPad Selfie Booth?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {['Clean and modern look', 'Fast sharing', 'Easy for guests to use', 'Great for smaller venues', 'Premium photos without bulky setups'].map((item, i) => (
                            <div key={i} className="glass-panel p-6 rounded-xl text-center hover:bg-white/10 transition-all">
                                <CheckCircle className="text-purple-400 mx-auto mb-2" size={24} />
                                <span className="text-white font-medium text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <h2 className="text-4xl font-black text-white mb-8 text-center">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Camera className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Photos, GIFs & Boomerangs</h3>
                            <p className="text-gray-400 text-sm">Create fun content in multiple formats</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Instagram className="text-pink-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Instant Social Sharing</h3>
                            <p className="text-gray-400 text-sm">Post directly to Instagram and TikTok</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Wifi className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">AirDrop Enabled</h3>
                            <p className="text-gray-400 text-sm">Instant wireless delivery to iPhone users</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <MessageSquare className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Text & Email</h3>
                            <p className="text-gray-400 text-sm">Send to any phone via SMS or email</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="container max-w-3xl">
                    <h2 className="text-4xl font-black text-white mb-8 text-center">Common Questions</h2>
                    <div className="glass-panel rounded-3xl p-8">
                        <FAQItem question="Does the iPad booth print photos?" answer="The iPad booth is designed for digital-only delivery (AirDrop, text, email, social sharing). If you need prints, we recommend our Mirror X Booth." />
                        <FAQItem question="How much space does it need?" answer="The iPad booth needs only about 4x4 feet of space - perfect for smaller venues or as an addition to a larger setup." />
                        <FAQItem question="Is an attendant included?" answer="The iPad booth is designed to be self-service, so an attendant is optional. We include setup, training, and on-call support." />
                    </div>
                </div>
            </section>

            <GallerySlider images={galleryImages} title="iPad Booth Gallery" accentColor="purple" />

            <section className="py-24 bg-black text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-4xl font-black text-white mb-6">Book Selfie Booth Rental</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <div className="flex items-center gap-2 text-gray-300"><Phone size={18} className="text-purple-400" /><span>+1 (678) 338-6333</span></div>
                        <div className="flex items-center gap-2 text-gray-300"><Mail size={18} className="text-purple-400" /><span>deejayprock@gmail.com</span></div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16783386333" className="btn btn-primary px-12 py-4 text-lg">Call Now</a>
                        <Link to="/book" className="btn btn-outline px-12 py-4 text-lg">Get Quote</Link>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
};

export default IPadSelfieBooth;
