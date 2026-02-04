import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Music, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import GallerySlider from '../../components/GallerySlider';
import Contact from '../../components/Contact';

const galleryImages = [
    { url: '/images/Karaoke-Service_1-DJ-P-Rock.jpg', label: 'Karaoke Setup' },
    { url: '/images/Karaoke-Service_1-DJ-P-Rock (1).jpg', label: 'Event Performance' },
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Party Night' },
    { url: '/images/DJ-P-Rock-Gallery_6.jpg', label: 'Live Event' },
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

const KaraokeService = () => {
    return (
        <>
            <Helmet>
                <title>Karaoke Service Atlanta | Private Event Karaoke Rental – DJ P Rock</title>
                <meta name="description" content="Looking for karaoke entertainment in Atlanta? DJ P Rock offers full karaoke services for weddings, private parties, and corporate events across Georgia." />
            </Helmet>

            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 z-0">
                    <img src="/images/DJP-Rock-About.jpg" alt="Karaoke Service Atlanta" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                        <Mic className="inline mr-2" size={16} /> Interactive Entertainment
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        Karaoke Service in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Atlanta</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        Looking for <strong className="text-white">karaoke entertainment in Atlanta</strong>? DJ P Rock provides full karaoke services for weddings, private parties, corporate events, and more.
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                        Our setup is designed for real event environments — professional sound, a large song library, and a host to keep things fun.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16783386333" className="btn btn-primary px-10 py-4 text-lg">+1 (678) 338-6333</a>
                        <Link to="/book" className="btn btn-outline px-10 py-4 text-lg">Book Now</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="container">
                    <h2 className="text-4xl font-black text-white mb-8 text-center">What's Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {['Thousands of songs across genres', 'High-quality sound system', 'Wireless microphones', 'Display screens for lyrics', 'Karaoke host to manage queue', 'Full lighting package', 'Setup and breakdown'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="text-purple-400 shrink-0" size={20} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <h2 className="text-4xl font-black text-white mb-8 text-center">Perfect For</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {['Birthday parties', 'Wedding receptions', 'Corporate events', 'Private gatherings', 'Rehearsal dinners', 'Holiday parties', 'Class reunions', 'Office team building'].map((event, i) => (
                            <div key={i} className="glass-panel p-6 rounded-xl text-center hover:bg-white/10 transition-all">
                                <Music className="text-purple-400 mx-auto mb-2" size={24} />
                                <span className="text-white font-medium text-sm">{event}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="container">
                    <h2 className="text-4xl font-black text-white mb-8 text-center">The Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {['Easy song selection', 'Music for all generations and tastes', 'Support for shy singers (group setups available)', 'DJ option to mix music in between performances'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <Star className="text-purple-400 shrink-0" size={20} />
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
                        <FAQItem question="How many songs are in your library?" answer="We have over 25,000 songs spanning all genres from classic hits to current Top 40. If there's a specific song you want, let us know in advance and we can add it!" />
                        <FAQItem question="Can shy guests participate?" answer="Absolutely! We offer group singing options and duets to help shy guests feel more comfortable. Our hosts are great at encouraging participation without making anyone uncomfortable." />
                        <FAQItem question="Can you combine karaoke with DJ services?" answer="Yes! This is actually one of our most popular packages. We can alternate between karaoke and regular DJ sets throughout the night." />
                    </div>
                </div>
            </section>

            <GallerySlider images={galleryImages} title="Karaoke Gallery" accentColor="purple" />

            <section className="py-24 bg-black text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-4xl font-black text-white mb-6">Book Karaoke Service</h2>
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

export default KaraokeService;
