import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor, LayoutGrid, Maximize, Zap, CheckCircle, Building2, Users, Presentation, Heart, PartyPopper, MapPin, Phone, Mail, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import GallerySlider from '../../components/GallerySlider';
import Contact from '../../components/Contact';

const galleryImages = [
    { url: '/images/Video-Wall-Rental-DJP-Rock.jpg', label: 'Indoor LED Wall' },
    { url: '/images/Video-Wall-Rental-DJP-Rock-1024x575.jpg', label: 'Event Setup' },
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Corporate Event' },
    { url: '/images/DJ-P-Rock-Gallery_6.jpg', label: 'Stage Display' },
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
                <p className="text-gray-400 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const VideoWallRental = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you provide setup and staff?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We handle full setup, operation support if needed, and breakdown."
                }
            },
            {
                "@type": "Question",
                "name": "Can the LED wall display our wedding slideshow or corporate branding?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We can display custom visuals depending on your event needs."
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>LED Video Wall Rental Atlanta GA | Premium Event LED Screens – DJ P Rock</title>
                <meta name="description" content="Upgrade your event with an LED video wall rental in Atlanta. DJ P Rock provides premium video wall setups for weddings, corporate events, and private parties across Georgia." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 z-0">
                    <img src="/images/DJP-Rock-About.jpg" alt="LED Video Wall Rental Atlanta" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
                </div>

                <div className="container relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                        <Monitor className="inline mr-2" size={16} /> Premium LED Displays
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        LED Video Wall Rental in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Atlanta GA</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        Want your event to look like a real production? <strong className="text-white">DJ P Rock offers premium LED video wall rentals in Atlanta</strong> that instantly elevate the atmosphere. Whether it's a wedding reception, corporate gala, or private celebration, our LED walls create a powerful visual centerpiece that guests notice immediately.
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                        From clean visuals to professional setup, we provide a reliable experience that feels high-end from start to finish.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16783386333" className="btn btn-primary px-10 py-4 text-lg">+1 (678) 338-6333</a>
                        <Link to="/book" className="btn btn-outline px-10 py-4 text-lg">Get Quote</Link>
                    </div>
                </div>
            </section>

            {/* What Is an LED Video Wall */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">Premium Visual Technology</span>
                            <h2 className="text-4xl font-black text-white mb-6">What Is an LED Video Wall?</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                An LED video wall is a large, high-resolution screen made of LED panels that displays vibrant visuals, videos, slideshows, and live content.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                It's one of the best upgrades for events that want a <strong className="text-white">premium stage look</strong> or an unforgettable "wow" factor.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-2xl"></div>
                            <img src="/images/Video-Wall-Rental-DJP-Rock-1024x575.jpg" alt="LED Video Wall Atlanta" className="relative rounded-3xl border border-white/10 w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Uses for an LED Video Wall */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Best Uses for an LED Video Wall at Your Event</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Corporate Events */}
                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                                <Building2 className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Corporate Events & Presentations</h3>
                            <p className="text-gray-400 mb-4">Perfect for:</p>
                            <div className="space-y-2">
                                {['Presentations', 'Branded visuals', 'Sponsor logos', 'Product launches'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle className="text-blue-400 shrink-0" size={16} />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Weddings */}
                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                                <Heart className="text-pink-400" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Weddings</h3>
                            <p className="text-gray-400 mb-4">Ideal for:</p>
                            <div className="space-y-2">
                                {['Love story slideshows', 'Custom visuals', 'Photo montages', 'Reception entertainment'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle className="text-pink-400 shrink-0" size={16} />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Parties */}
                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                                <PartyPopper className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Parties & Special Events</h3>
                            <p className="text-gray-400 mb-4">Great for:</p>
                            <div className="space-y-2">
                                {['Music visuals', 'Highlight videos', 'Sports viewing', 'Stage-style party setups'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle className="text-purple-400 shrink-0" size={16} />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why DJ P Rock */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">Reliable & Professional</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why DJ P Rock for Video Wall Rentals in Atlanta?</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Our clients choose DJ P Rock because we bring professionalism and clean execution — not last-minute chaos.
                        </p>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">What You Can Expect</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                'Premium LED panels with bright, clean visuals',
                                'Professional setup and breakdown',
                                'Smooth coordination with your venue',
                                'Reliable equipment and experienced team',
                                'Optional add-ons with DJ services'
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

            {/* Combine Video Wall + DJ Services */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container text-center">
                    <div className="glass-panel p-12 rounded-3xl max-w-4xl mx-auto border-2 border-purple-500/30">
                        <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">Most Popular</span>
                        <h2 className="text-4xl font-black text-white mb-6">Combine Video Wall + DJ Services</h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Many clients book <strong className="text-white">DJ + LED wall together</strong> for a full entertainment setup. It's the fastest way to create a premium event vibe without needing multiple vendors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/services/dj-service" className="btn btn-outline px-8 py-3">View DJ Services</Link>
                            <Link to="/book" className="btn btn-primary px-8 py-3">Book Package</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <MapPin className="text-purple-400 mx-auto mb-4" size={48} />
                        <h2 className="text-4xl font-black text-white mb-4">Service Areas</h2>
                        <p className="text-gray-400 text-lg">We provide LED video wall rentals in:</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {['Atlanta', 'Buckhead', 'Midtown', 'Sandy Springs', 'Roswell', 'Alpharetta', 'Marietta', 'Smyrna', 'Decatur', 'Duluth', 'Norcross', 'Lawrenceville'].map((city, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                {city}
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-6">...and surrounding Georgia cities</p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">LED Video Wall FAQs</h2>
                    </div>
                    <div className="glass-panel rounded-3xl p-8">
                        <FAQItem
                            question="Do you provide setup and staff?"
                            answer="Yes. We handle full setup, operation support if needed, and breakdown."
                        />
                        <FAQItem
                            question="Can the LED wall display our wedding slideshow or corporate branding?"
                            answer="Yes. We can display custom visuals depending on your event needs."
                        />
                        <FAQItem
                            question="How early do you set up?"
                            answer="We typically arrive 3-4 hours before your event for setup. For larger configurations, we may need more time. We'll coordinate with your venue for load-in times."
                        />
                        <FAQItem
                            question="Can I display my own content?"
                            answer="Absolutely! We accept content in most formats (MP4, MOV, JPG, PNG). We can also help create custom content for an additional fee."
                        />
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <GallerySlider images={galleryImages} title="Video Wall Gallery" accentColor="purple" />

            {/* CTA */}
            <section className="py-24 bg-black text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Book LED Video Wall Rental in Atlanta</h2>
                    <p className="text-xl text-gray-400 mb-6">Ready to make a massive visual impact at your event?</p>
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

export default VideoWallRental;
