import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Music, Mic2, Star, Zap, Speaker, PartyPopper, Disc, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import GallerySlider from '../../components/GallerySlider';

const partyGalleryImages = [
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Dance Floor Energy' },
    { url: '/images/DJP-Rock-DJ-Service-1.jpg', label: 'Party DJ Setup' },
    { url: '/images/gallery-2-DJ-P-Rock.jpg', label: 'Club Night' },
    { url: '/images/Dj-service-DJ-P-Rock.jpg', label: 'Birthday Celebration' },
    { url: '/images/360-Photobooth-DJ-P-Rock.jpg', label: '360 Booth Party' },
    { url: '/images/Karaoke-Service_1-DJ-P-Rock.jpg', label: 'Karaoke Night' },
    { url: '/images/Video-Wall-Rental-DJP-Rock.jpg', label: 'LED Display' },
    { url: '/images/Mirror-X-Photobooth-DJ-P-Rock.jpg', label: 'Photo Booth Fun' },
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-purple-400' : 'text-white group-hover:text-purple-300'}`}>
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

const ClubPartyDJ = () => {
    return (
        <>
            <Helmet>
                <title>Private Party & Club DJ Atlanta | DJ P Rock</title>
                <meta name="description" content="Turn your private party, birthday, or club night into a legend. High-energy open format DJ mixing Top 40, Hip Hop, House, and more in Atlanta." />
                <meta name="keywords" content="Party DJ Atlanta, Club DJ Booking, Private Event DJ, Birthday Party DJ, House Party Music, High Energy DJ" />
            </Helmet>

            {/* Hero */}
            <div className="relative pt-40 pb-28 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-[80vh] bg-gradient-to-b from-indigo-900/20 to-black z-0 pointer-events-none"></div>
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                        <Disc size={14} fill="currentColor" /> The Life of the Party
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                        Ignite The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Dancefloor.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        Whether it's a sweet 16, a milestone birthday, or a VIP club night, we bring the festival energy directly to you. No cheese, just bangers.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#booking" className="btn btn-primary bg-indigo-600 hover:bg-indigo-500 px-8 py-4 text-lg">Book The Vibe</a>
                        <Link to="/mixes" className="btn btn-outline px-8 py-4 text-lg">Hear A Mix</Link>
                    </div>
                </div>
            </div>

            {/* Vibe Check */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Not Your Average Party</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Forget the "Gap Band" (unless you ask for it). We specialize in high-energy, open-format mixing that blends decades seamlessly. From 90s R&B to 2000s Hip Hop, from Afrobeat to EDM nuances.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-4">
                                    <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400"><Speaker size={20} /></div>
                                    <span className="text-white font-medium text-lg">Club-Standard Bass</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400"><Disc size={20} /></div>
                                    <span className="text-white font-medium text-lg">Live Scratching & Mixing</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="bg-pink-500/20 p-2 rounded-lg text-pink-400"><Zap size={20} /></div>
                                    <span className="text-white font-medium text-lg">Intelligent Lighting Show</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[2rem] bg-gray-800 border border-white/10 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('/images/DJ-P-Rock-Gallery_2.jpg')] bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <h3 className="text-3xl font-black text-white">We Rock Crowds.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Types */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-indigo-500 font-bold tracking-widest text-sm uppercase mb-4 block">Where We Play</span>
                        <h2 className="text-4xl font-black text-white mb-6">Any Party. Any Vibe.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="glass-panel p-8 rounded-3xl group hover:bg-white/5 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <PartyPopper className="text-indigo-500" /> Private Parties
                            </h3>
                            <p className="text-gray-400">
                                Milestone birthdays (21st, 30th, 40th, 50th), Graduation parties, and Engagement celebrations. We tailor the music to the guest of honor.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="glass-panel p-8 rounded-3xl group hover:bg-white/5 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Volume2 className="text-purple-500" /> Club & Lounge
                            </h3>
                            <p className="text-gray-400">
                                Need a guest DJ for your venue? We bring a following and keep the bar revenue high with strategic energy management throughout the night.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="glass-panel p-8 rounded-3xl group hover:bg-white/5 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Star className="text-pink-500" /> Proms & Schools
                            </h3>
                            <p className="text-gray-400">
                                Clean edits of the hottest tracks. We keep it school-appropriate without losing the cool factor that students demand.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-4 block">The Details</span>
                        <h2 className="text-4xl font-black text-white mb-6">Party FAQ</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem
                            question="How much space do you need?"
                            answer="We need about 8x6 feet for our standard DJ setup. We bring our own table, facade, and speakers."
                        />
                        <FAQItem
                            question="Do you play clean versions?"
                            answer="Yes! For school events or family-oriented parties, we have a library of high-quality clean edits for all popular songs."
                        />
                        <FAQItem
                            question="Can we hook up our phone for a slideshow audio?"
                            answer="Our mixers can accommodate an auxiliary input, so if you need to play audio from a video/slideshow, we can plug you in."
                        />
                        <FAQItem
                            question="Do you include lights?"
                            answer="Yes, our party packages include dynamic dance floor lighting that moves to the beat of the music."
                        />
                    </div>
                </div>
            </section>

            {/* Party Gallery */}
            <GallerySlider
                images={partyGalleryImages}
                title="Party & Club Gallery"
                accentColor="purple"
            />

            {/* Final CTA */}
            <section id="booking" className="py-24 bg-gradient-to-t from-indigo-900/20 to-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Let's Get Weird.</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Boring parties are illegal in our book. Fill out the form to secure your date and upgrade your event instantly.
                            </p>
                        </div>
                        <div className="">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClubPartyDJ;
