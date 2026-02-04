import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lightbulb, CheckCircle, Heart, Building2, PartyPopper, Camera, Sparkles, Music, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import GallerySlider from '../../components/GallerySlider';
import Contact from '../../components/Contact';

const galleryImages = [
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Venue Uplighting' },
    { url: '/images/DJ-P-Rock-Gallery_6.jpg', label: 'Ballroom Lighting' },
    { url: '/images/DJP-Rock-DJ-Service-1.jpg', label: 'Event Ambiance' },
    { url: '/images/Dj-service-DJ-P-Rock.jpg', label: 'Color Options' },
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

const UplightingService = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does uplighting cost in Atlanta?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Uplighting pricing depends on venue size, number of lights, and event type. Contact DJ P Rock for availability and a personalized quote in Atlanta."
                }
            },
            {
                "@type": "Question",
                "name": "Is uplighting worth it for a wedding reception?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Uplighting is one of the most impactful wedding upgrades because it transforms the venue atmosphere and improves photos and videos."
                }
            },
            {
                "@type": "Question",
                "name": "Can you match uplighting colors to my theme?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ P Rock can match uplighting colors to your wedding theme, event décor, or brand colors."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide uplighting services outside Atlanta?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ P Rock provides uplighting services throughout Metro Atlanta and surrounding Georgia cities depending on event date and location."
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>Uplighting Service Atlanta | Wedding & Event Lighting Rental – DJ P Rock</title>
                <meta name="description" content="Transform your venue with uplighting services in Atlanta. DJ P Rock provides premium uplighting rentals for weddings, receptions, corporate events, and private parties across Georgia." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 z-0">
                    <img src="/images/DJP-Rock-About.jpg" alt="Uplighting Service Atlanta" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                        <Lightbulb className="inline mr-2" size={16} /> Transform Your Venue
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        Uplighting Service in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Atlanta</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        Lighting is one of the fastest ways to turn an ordinary venue into something unforgettable. <strong className="text-white">DJ P Rock provides premium uplighting services in Atlanta</strong> designed to elevate the atmosphere, enhance your event décor, and make your space feel more polished and high-end.
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                        Whether you're planning a wedding reception, corporate event, or private celebration, uplighting adds the perfect finishing touch — creating a warm, elegant glow or a bold color theme that matches your event vision.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16783386333" className="btn btn-primary px-10 py-4 text-lg">+1 (678) 338-6333</a>
                        <Link to="/book" className="btn btn-outline px-10 py-4 text-lg">Get a Quote</Link>
                    </div>
                </div>
            </section>

            {/* What is Uplighting */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-white mb-6">What Is Uplighting?</h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                Uplighting is professional event lighting placed around the walls or key areas of a venue. The lights project upward, creating a soft glow that enhances the room and adds depth.
                            </p>
                            <p className="text-gray-400 text-lg mb-6">It's commonly used for:</p>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {['Wedding receptions', 'Banquet halls', 'Ballrooms', 'Outdoor tents', 'Private event venues'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle className="text-purple-400 shrink-0" size={18} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Uplighting is also one of the <strong className="text-white">best upgrades for photos and videos</strong>, because it makes the room look more premium and visually balanced.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-2xl"></div>
                            <img src="/images/DJ-P-Rock-Gallery_6.jpg" alt="Uplighting Effect" className="relative rounded-3xl border border-white/10 w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Uplighting Makes a Difference */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Uplighting Makes a Big Difference at Events</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Many people focus on music and décor — but lighting is what makes the entire venue feel complete. Our <strong className="text-white">uplighting rental in Atlanta</strong> creates a mood that guests feel the moment they walk in.
                        </p>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Benefits of Uplighting</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                'Makes the venue look elegant and upscale',
                                'Adds warmth and atmosphere',
                                'Supports your wedding colors or party theme',
                                'Improves photos and event video quality',
                                'Transforms plain walls into a premium background',
                                'Helps create a "wow" factor without changing the entire décor'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <Sparkles className="text-purple-400 shrink-0" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Wedding Uplighting */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-pink-500/20 flex items-center justify-center">
                            <Heart className="text-pink-400" size={40} />
                        </div>
                        <h2 className="text-4xl font-black text-white mb-4">Wedding Uplighting in Atlanta</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            For weddings, uplighting is one of the most popular upgrades because it changes the entire look of the reception space without needing extra décor.
                        </p>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl max-w-3xl mx-auto">
                        <h3 className="text-xl font-bold text-white mb-6 text-center">Perfect for Wedding Reception Spaces</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {['Ballrooms and banquet halls', 'Indoor wedding venues', 'Outdoor tents', 'Barns and rustic venues', 'Luxury event spaces'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="text-pink-400 shrink-0" size={18} />
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400 text-center mt-6">
                            We can create a romantic, elegant look or match your wedding colors for a clean, coordinated feel.
                        </p>
                    </div>
                </div>
            </section>

            {/* Corporate & Party Uplighting */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">Uplighting for Corporate Events & Private Parties</h2>
                        <p className="text-gray-400 text-lg">
                            Uplighting isn't only for weddings. It's also a great choice for corporate and private events where you want a professional look.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                                <Building2 className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Corporate Uplighting</h3>
                            <p className="text-gray-400 mb-4">Ideal for:</p>
                            <div className="space-y-2">
                                {['Corporate galas', 'Brand events', 'Award nights', 'Holiday parties', 'Conferences'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle className="text-blue-400 shrink-0" size={16} />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                                <PartyPopper className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Party & Celebration Uplighting</h3>
                            <p className="text-gray-400 mb-4">Perfect for:</p>
                            <div className="space-y-2">
                                {['Birthdays', 'Sweet 16 events', 'Graduations', 'Anniversary celebrations', 'Private parties'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle className="text-purple-400 shrink-0" size={16} />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-400 text-center mt-8 max-w-2xl mx-auto">
                        Lighting instantly boosts the vibe and makes the event feel more intentional and premium.
                    </p>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">What's Included With DJ P Rock Uplighting Service</h2>
                        <p className="text-gray-400 text-lg">
                            We don't just drop off lights — we provide a complete professional setup.
                        </p>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl max-w-3xl mx-auto">
                        <h3 className="text-xl font-bold text-white mb-6 text-center">Our Uplighting Service Includes:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                'Professional uplighting equipment',
                                'Clean, safe placement around the venue',
                                'Color matching (based on your theme)',
                                'Full setup and breakdown',
                                'Reliable timing and coordination'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="text-purple-400 shrink-0" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400 text-center mt-6">
                            We handle the details so your venue looks amazing without stress.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose DJ P Rock */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">Why Choose DJ P Rock for Uplighting in Atlanta?</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            DJ P Rock is trusted across Atlanta for premium event entertainment and production. Our uplighting service follows the same standard: clean, professional, and done right.
                        </p>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl max-w-3xl mx-auto">
                        <h3 className="text-xl font-bold text-white mb-6 text-center">What Sets Us Apart:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                'High-quality lighting equipment',
                                'Clean wiring and polished setup',
                                'Professional communication and punctuality',
                                'Lighting designed to match your event style',
                                'One vendor for DJ + lighting + upgrades'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="text-purple-400 shrink-0" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pair with DJ Services */}
            <section className="py-24 bg-black">
                <div className="container text-center">
                    <div className="glass-panel p-12 rounded-3xl max-w-4xl mx-auto border-2 border-purple-500/30">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <Music className="text-purple-400" size={40} />
                        </div>
                        <h2 className="text-4xl font-black text-white mb-6">Pair Uplighting With DJ Services (Best Results)</h2>
                        <p className="text-xl text-gray-400 mb-6">
                            Uplighting becomes even more powerful when paired with DJ services. Music creates the energy — lighting completes the environment.
                        </p>
                        <p className="text-gray-400 mb-8">Many clients choose:</p>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {['DJ Services + Uplighting', 'Wedding DJ + Uplighting', 'Corporate DJ + Venue Lighting'].map((item, i) => (
                                <span key={i} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">{item}</span>
                            ))}
                        </div>
                        <p className="text-gray-400 mb-8">
                            This combo makes the event feel like a full production instead of a basic setup.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/services/dj-service" className="btn btn-outline px-8 py-3">View DJ Services</Link>
                            <Link to="/book" className="btn btn-primary px-8 py-3">Book Package</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <MapPin className="text-purple-400 mx-auto mb-4" size={48} />
                        <h2 className="text-4xl font-black text-white mb-4">Service Areas (Atlanta & Surrounding Georgia Cities)</h2>
                        <p className="text-gray-400 text-lg">DJ P Rock provides uplighting services across Metro Atlanta and surrounding Georgia areas:</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {['Atlanta, GA', 'Buckhead', 'Midtown', 'Sandy Springs', 'Roswell', 'Alpharetta', 'Marietta', 'Smyrna', 'Decatur', 'Duluth', 'Norcross', 'Lawrenceville', 'Stone Mountain', 'College Park', 'East Point'].map((city, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                {city}
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-6">If you're outside these areas, contact us — we often travel for events across Georgia.</p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-black">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">Uplighting Service FAQs</h2>
                    </div>
                    <div className="glass-panel rounded-3xl p-8">
                        <FAQItem
                            question="How much does uplighting cost in Atlanta?"
                            answer="Pricing depends on venue size, number of lights required, and event type. Contact DJ P Rock for availability and a personalized quote."
                        />
                        <FAQItem
                            question="Is uplighting worth it for a wedding reception?"
                            answer="Yes. Uplighting is one of the most impactful upgrades for weddings because it changes the entire look of the venue and improves photos and videos."
                        />
                        <FAQItem
                            question="Can you match uplighting colors to my theme?"
                            answer="Yes. We can match colors to your wedding theme, brand colors, or party style."
                        />
                        <FAQItem
                            question="How early do you set up uplighting?"
                            answer="We coordinate with your venue and event schedule. Setup is handled professionally before guests arrive so everything looks perfect from the start."
                        />
                        <FAQItem
                            question="Do you provide uplighting outside Atlanta?"
                            answer="Yes. We serve Metro Atlanta and surrounding Georgia cities depending on location and event date."
                        />
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <GallerySlider images={galleryImages} title="Uplighting Gallery" accentColor="purple" />

            {/* CTA */}
            <section className="py-24 bg-black text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Book Uplighting Service in Atlanta</h2>
                    <p className="text-xl text-gray-400 mb-6">Ready to transform your venue with premium uplighting?</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <div className="flex items-center gap-2 text-gray-300">
                            <Phone size={18} className="text-purple-400" />
                            <span>+1 (678) 338-6333</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                            <Mail size={18} className="text-purple-400" />
                            <span>deejayprock@gmail.com</span>
                        </div>
                    </div>
                    <p className="text-gray-500 mb-8">Location: Atlanta, GA</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16783386333" className="btn btn-primary px-12 py-4 text-lg">Check Availability</a>
                        <Link to="/book" className="btn btn-outline px-12 py-4 text-lg">Get a Quote</Link>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default UplightingService;
