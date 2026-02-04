import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Music, Mic2, Star, CheckCircle, Calendar, Users, Sparkles, MessageCircle, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import GallerySlider from '../../components/GallerySlider';

const weddingGalleryImages = [
    { url: '/images/Dj-service-DJ-P-Rock.jpg', label: 'Wedding DJ Setup' },
    { url: '/images/gallery-2-DJ-P-Rock.jpg', label: 'Dance Floor Magic' },
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Reception Entertainment' },
    { url: '/images/DJP-Rock-DJ-Service-1.jpg', label: 'Ceremony Audio' },
    { url: '/images/360-Photobooth-DJ-P-Rock.jpg', label: '360 Photo Booth' },
    { url: '/images/Mirror-X-Photobooth-DJ-P-Rock.jpg', label: 'Mirror Booth Moments' },
    { url: '/images/Video-Wall-Rental-DJP-Rock.jpg', label: 'Video Wall Display' },
    { url: '/images/Karaoke-Service_1-DJ-P-Rock.jpg', label: 'Reception Party' },
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-pink-400' : 'text-white group-hover:text-pink-300'}`}>
                    {question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-pink-400' : 'text-gray-500'}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const TestimonialCard = ({ name, date, quote }) => (
    <div className="glass-panel p-8 rounded-3xl relative h-full flex flex-col">
        <div className="flex text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed flex-grow italic">"{quote}"</p>
        <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
            <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center font-bold text-pink-400 text-sm">
                {name.charAt(0)}
            </div>
            <div>
                <div className="font-bold text-white text-sm">{name}</div>
                <div className="text-xs text-gray-500">{date}</div>
            </div>
        </div>
    </div>
);

const WeddingDJ = () => {
    return (
        <>
            <Helmet>
                <title>Atlanta Wedding DJ | Premium Reception & Ceremony Entertainment</title>
                <meta name="description" content="Award-winning Wedding DJ services in Atlanta. From personalized ceremony audio to high-energy reception mixing. Book DJ P Rock for your perfect day." />
                <meta name="keywords" content="Atlanta Wedding DJ, Wedding Entertainment GA, Luxury Reception DJ, Ceremony Music Atlanta, Wedding MC Services, DJ P Rock Weddings" />
            </Helmet>

            {/* Hero Section */}
            <div className="relative pt-40 pb-28 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-pink-900/20 to-black z-0 pointer-events-none"></div>
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-pink-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                        <Heart size={14} fill="currentColor" /> #1 Rated Wedding DJ in Atlanta
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        Your Love Story. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">The Perfect Soundtrack.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        We don't just clear the dance floor; we create moments. From the emotional "I Do's" to the final confetti drop, we curate the musical journey of a lifetime.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#contact-section" className="btn btn-primary px-8 py-4 text-lg">Check Availability</a>
                        <Link to="/gallery" className="btn btn-outline px-8 py-4 text-lg">View Wedding Gallery</Link>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Grid */}
            <section className="py-24 bg-[#050505]">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">The DJ P Rock Difference</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Why Couples Trust Us</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-pink-500/30 transition-colors group">
                            <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Sparkles className="text-pink-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Bespoke Curation</h3>
                            <p className="text-gray-400 leading-relaxed">
                                No two couples are alike, and neither should their playlists be. We spend hours getting to know your musical tastes to craft a set that screams "YOU".
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors group">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Mic2 className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Expert MC Services</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We guide the evening with class and energy. No cheesy jokes, just smooth announcements that keep the timeline flowing and your guests informed.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors group">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Calendar className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Total Reliability</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Early arrival, backup equipment, and professional attire. We take the stress out of your big day so you can focus on dancing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Breakdown */}
            <section className="py-24 bg-black relative">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-white mb-6">Complete Wedding Coverage</h2>
                            <p className="text-gray-400 text-lg">We cover every aspect of your audio-visual needs, ensuring a cohesive experience from start to finish.</p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg h-fit"><Music size={20} className="text-pink-400" /></div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Ceremony Audio</h3>
                                        <p className="text-gray-400">Crystal clear lapel mics for the officiant and groom. We ensure every vow is heard, accompanied by perfectly timed processional music.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg h-fit"><Users size={20} className="text-pink-400" /></div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Cocktail Hour Vibes</h3>
                                        <p className="text-gray-400">Setting the mood with upbeat jazz, acoustic covers, or soulful R&B while your guests mingle and enjoy drinks.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg h-fit"><Sparkles size={20} className="text-pink-400" /></div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">High-Energy Reception</h3>
                                        <p className="text-gray-400">This is where we shine. Seamless mixing, intelligent lighting, and an uncanny ability to read the crowd and keep everyone dancing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-purple-600 rounded-[2rem] transform rotate-6 scale-95 opacity-40 blur-lg"></div>
                            <div className="glass-panel p-2 rounded-[2rem] aspect-[4/5] relative overflow-hidden">
                                <img
                                    src="/images/Dj-service-DJ-P-Rock.jpg"
                                    alt="DJ P Rock Wedding DJ Service Atlanta"
                                    className="w-full h-full object-cover rounded-[1.5rem]"
                                />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"><Play fill="white" className="ml-1 text-white" /></div>
                                        <div>
                                            <div className="text-white font-bold text-sm">Watch Highlights</div>
                                            <div className="text-gray-400 text-xs">Real Wedding - The Smiths</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-pink-500 font-bold tracking-widest text-sm uppercase mb-4 block">Love Notes</span>
                        <h2 className="text-4xl font-black text-white mb-6">Real Couples. Real Reviews.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TestimonialCard
                            name="Emily & James"
                            date="October 2024"
                            quote="DJ P Rock MADE our wedding. The dance floor was packed from the moment dinner ended until we were kicked out. Best investment we made!"
                        />
                        <TestimonialCard
                            name="Sarah T."
                            date="August 2024"
                            quote="He listened to everything we wanted and played the perfect mix for our diverse family. The 360 booth was also a huge hit!"
                        />
                        <TestimonialCard
                            name="Michael R."
                            date="December 2023"
                            quote="Professional, punctual, and knows how to party. The lighting he brought transformed our venue completely. Highly recommend!"
                        />
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/reviews" className="text-gray-400 hover:text-white underline underline-offset-4">Read 100+ more 5-star reviews</Link>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 bg-black border-y border-white/5">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-4 block">Common Questions</span>
                        <h2 className="text-4xl font-black text-white mb-6">Wedding FAQ</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem
                            question="How far in advance should we book?"
                            answer="We recommend booking 12-18 months in advance, especially for Saturday dates in peak seasons (Spring/Fall). Dates are first-come, first-served."
                        />
                        <FAQItem
                            question="Can we give you a 'Do Not Play' list?"
                            answer="Absolutely! Your wedding should sound like YOU. We strictly adhere to your Do Not Play list to ensure you don't hear any songs you dislike."
                        />
                        <FAQItem
                            question="Do you provide microphones for the ceremony?"
                            answer="Yes, our wedding packages include a separate sound system for the ceremony with wireless lapel and handheld microphones."
                        />
                        <FAQItem
                            question="What happens if something breaks?"
                            answer="We always carry a full set of backup equipment on-site, including a backup computer, mixer, microphones, and speakers. We are prepared for anything."
                        />
                        <FAQItem
                            question="Do you act as the MC?"
                            answer="Yes! All of our packages include professional MC services. We handle all announcements, introductions, and flow management throughout the night."
                        />
                    </div>
                </div>
            </section>

            {/* Wedding Gallery */}
            <GallerySlider
                images={weddingGalleryImages}
                title="Wedding Gallery"
                accentColor="pink"
            />

            {/* Final CTA / Contact */}
            <section id="contact-section" className="py-24 bg-gradient-to-t from-pink-900/20 to-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Let's Save Your Date</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Ready to throw the party of the year? Fill out the form to check availability and get a custom quote for your wedding day.
                            </p>
                            <div className="flex items-center gap-4 text-gray-400 mb-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Currently booking for 2026-2027 seasons
                            </div>
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

export default WeddingDJ;
