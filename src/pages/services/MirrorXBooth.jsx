import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Smartphone, Camera, CheckCircle, Zap, Share2, Heart, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import GallerySlider from '../../components/GallerySlider';
import Contact from '../../components/Contact';

const galleryImages = [
    { url: '/images/Mirror-X-Photobooth-DJ-P-Rock.jpg', label: 'Mirror X Booth' },
    { url: '/images/Mirror-X-Photobooth-3-DJ-P-Rock.jpg', label: 'Mirror Experience' },
    { url: '/images/DJ-P-Rock-Mirror-X.jpg', label: 'Interactive Display' },
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Event Setup' },
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

const MirrorXBooth = () => {
    return (
        <>
            <Helmet>
                <title>Mirror Photo Booth Rental Atlanta | Mirror X Booth Experience – DJ P Rock</title>
                <meta name="description" content="Book a luxury Mirror X photo booth rental in Atlanta. DJ P Rock offers premium mirror booth experiences for weddings, corporate events, and upscale parties." />
            </Helmet>

            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 z-0">
                    <img src="/images/DJP-Rock-About.jpg" alt="Mirror Photo Booth Rental Atlanta" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                        <Smartphone className="inline mr-2" size={16} /> Luxury Photo Experience
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        Mirror Photo Booth Rental in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Atlanta</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        For clients who want a premium photo booth experience that matches upscale venues and elegant events, the <strong className="text-white">Mirror X photo booth rental</strong> is the perfect choice.
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                        This booth looks luxury, feels interactive, and produces professional-quality photos your guests actually want to keep.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16783386333" className="btn btn-primary px-10 py-4 text-lg">+1 (678) 338-6333</a>
                        <Link to="/book" className="btn btn-outline px-10 py-4 text-lg">Book Now</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="container">
                    <h2 className="text-4xl font-black text-white mb-8 text-center">Why Guests Love the Mirror X Booth</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {['Elegant, luxury design', 'Interactive experience', 'Professional photo quality', 'Perfect for weddings and upscale events'].map((item, i) => (
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
                    <h2 className="text-4xl font-black text-white mb-8 text-center">Premium Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Camera className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Touch Screen</h3>
                            <p className="text-gray-400 text-sm">Full-length interactive mirror with gesture controls</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Zap className="text-pink-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Instant Prints</h3>
                            <p className="text-gray-400 text-sm">High-quality 4x6 or strip prints in seconds</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Heart className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Fun Animations</h3>
                            <p className="text-gray-400 text-sm">Screensavers, games, and engaging prompts</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Share2 className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Social Sharing</h3>
                            <p className="text-gray-400 text-sm">Email, text, or AirDrop photos instantly</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="container">
                    <h2 className="text-4xl font-black text-white mb-8 text-center">Package Includes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {['Full-length interactive mirror', 'Professional attendant', 'Unlimited photo sessions', 'Unlimited 4x6 prints', 'Custom photo template design', 'Digital sharing station', 'Props collection', 'Red carpet & stanchions', 'Setup & breakdown'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="text-purple-400 shrink-0" size={20} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container max-w-3xl">
                    <h2 className="text-4xl font-black text-white mb-8 text-center">Common Questions</h2>
                    <div className="glass-panel rounded-3xl p-8">
                        <FAQItem question="What size space do you need?" answer="We recommend at least 8x8 feet for the booth setup, plus additional space for guest lines and prop tables." />
                        <FAQItem question="How many photos can guests take?" answer="Unlimited! Guests can take as many photos as they like during your rental period. We include unlimited prints." />
                        <FAQItem question="Can we customize the photo templates?" answer="Yes! We design custom templates with your event name, date, colors, and logo included at no additional charge." />
                    </div>
                </div>
            </section>

            <GallerySlider images={galleryImages} title="Mirror X Gallery" accentColor="purple" />

            <section className="py-24 bg-black text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-4xl font-black text-white mb-6">Book Mirror Booth Rental</h2>
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

export default MirrorXBooth;
