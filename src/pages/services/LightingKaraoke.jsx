import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Lightbulb, Music, Zap, Layers, Monitor, Disc, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import GallerySlider from '../../components/GallerySlider';

const lightingGalleryImages = [
    { url: '/images/Karaoke-Service_1-DJ-P-Rock.jpg', label: 'Karaoke Setup' },
    { url: '/images/uplight package.png', label: 'Uplight Package' },
    { url: '/images/lighting up sercie.jpg', label: 'Lighting Service' },
    { url: '/images/uplight service.jpg', label: 'Event Uplighting' },
    { url: '/images/uplight service1.jpg', label: 'Venue Lighting' },
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Dance Floor Lights' },
    { url: '/images/gallery-2-DJ-P-Rock.jpg', label: 'Wedding Lighting' },
    { url: '/images/Dj-service-DJ-P-Rock.jpg', label: 'Stage Lighting Setup' },
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-yellow-400' : 'text-white group-hover:text-yellow-300'}`}>
                    {question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-yellow-400' : 'text-gray-500'}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
    <div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group border-yellow-500/10 hover:border-yellow-500/30">
        <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
            {desc}
        </p>
    </div>
);

const LightingKaraoke = () => {
    return (
        <>
            <Helmet>
                <title>Event Lighting & Karaoke Rental Atlanta | DJ P Rock</title>
                <meta name="description" content="Add sparkle to your event with professional uplighting, dance floor lighting, and premium karaoke setups. Huge song library and monitors included." />
                <meta name="keywords" content="Karaoke Rental Atlanta, Event Uplighting, Wedding Lighting, Dance Floor Lights, Karaoke DJ, Party Equipment Rental" />
            </Helmet>

            {/* Hero */}
            <div className="relative pt-40 pb-28 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/30 via-orange-900/10 to-transparent z-0 pointer-events-none"></div>
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                        <Zap size={14} fill="currentColor" /> Set The Mood
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                        Lights. Mic. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Action.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        Transform a dull room into a vibrant venue with our professional lighting design, or turn your guests into rockstars with our premium karaoke experience.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#booking" className="btn btn-primary bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-bold">Get A Quote</a>
                        <Link to="/gallery" className="btn btn-outline px-8 py-4 text-lg">See Examples</Link>
                    </div>
                </div>
            </div>

            {/* Karaoke Section */}
            <section className="py-24 bg-black relative">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="order-2 lg:order-1">
                            <span className="text-yellow-500 font-bold tracking-widest text-sm uppercase mb-4 block">Unleash Your Inner Star</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Premium Karaoke</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                This isn't your average home karaoke machine. We bring a massive digital library of 50,000+ songs, professional wireless microphones (Shure), and confidence monitors so you never miss a lyric.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> 50,000+ High-Quality Tracks</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> 4 Wireless Microphones</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> 43" Singer's Monitor on Stand</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> Professional Audio Processing (Reverb/Echo)</li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="aspect-square rounded-[3rem] bg-gray-900 border border-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/images/Karaoke-Service_1-DJ-P-Rock.jpg')] bg-cover bg-center opacity-80"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <h3 className="text-3xl font-black text-white">Sing It Loud.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lighting Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-4 block">Visual Ambience</span>
                        <h2 className="text-4xl font-black text-white mb-6">Professional Event Lighting</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Lightbulb}
                            title="Wireless Uplighting"
                            desc="Paint your walls with color. Our battery-powered uplights can match any hex color code to perfectly align with your wedding or brand theme."
                        />
                        <FeatureCard
                            icon={Disc}
                            title="Moving Heads"
                            desc="Club-style intelligent lighting that sweeps across the room and creates energy on the dance floor. Controlled via DMX for custom shows."
                        />
                        <FeatureCard
                            icon={Layers}
                            title="Custom Monograms"
                            desc="Project your initials, company logo, or message onto the dance floor or wall. The ultimate personalized touch for weddings and galas."
                        />
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 bg-black border-y border-white/5">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-4 block">Technical Details</span>
                        <h2 className="text-4xl font-black text-white mb-6">Equipment FAQ</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem
                            question="How many uplights do I need?"
                            answer="A typical ballroom wedding needs 12-20 lights to cover the perimeter nicely. We can advise based on your floor plan."
                        />
                        <FAQItem
                            question="Can I rent karaoke without a DJ?"
                            answer="Yes! We offer 'KJ' (Karaoke Host) packages where we just run the karaoke system if you don't need a mixing DJ."
                        />
                        <FAQItem
                            question="Do you have latest songs for karaoke?"
                            answer="Yes, our system is internet-connected (venue wifi required for requests) and updated weekly with the billboard top 100."
                        />
                    </div>
                </div>
            </section>

            {/* Lighting & Karaoke Gallery */}
            <GallerySlider
                images={lightingGalleryImages}
                title="Lighting & Karaoke Gallery"
                accentColor="orange"
            />

            {/* Final CTA */}
            <section id="booking" className="py-24 bg-gradient-to-t from-yellow-900/20 to-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Light It Up.</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Don't let your event look flat. Add depth, color, and fun with our add-on packages.
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

export default LightingKaraoke;
