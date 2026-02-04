import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Sun, Tv, Wifi, CheckCircle, TreePine, PartyPopper, Building2, Music, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import GallerySlider from '../../components/GallerySlider';
import Contact from '../../components/Contact';

const galleryImages = [
    { url: '/images/Video-wall-trailer-rental-DJ-P-Rock.jpg', label: 'Mobile Video Wall' },
    { url: '/images/2-Video-wall-trailer-rental-DJ-P-Rock.jpg', label: 'Outdoor Display' },
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Event Setup' },
    { url: '/images/DJ-P-Rock-Gallery_6.jpg', label: 'Outdoor Event' },
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

const VideoWallTrailer = () => {
    return (
        <>
            <Helmet>
                <title>Video Wall Trailer Rental Atlanta | Outdoor LED Screen Rental – DJ P Rock</title>
                <meta name="description" content="Book a video wall trailer rental in Atlanta for outdoor events, sports viewing, weddings, and festivals. DJ P Rock provides premium mobile LED screen setups across Georgia." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 z-0">
                    <img src="/images/DJP-Rock-About.jpg" alt="Video Wall Trailer Rental Atlanta" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
                </div>

                <div className="container relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                        <Truck className="inline mr-2" size={16} /> Mobile Outdoor Display
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        Video Wall Trailer Rental in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Atlanta</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        If you're planning an outdoor event or need a mobile LED screen setup, our <strong className="text-white">video wall trailer rental in Atlanta</strong> is the perfect solution. This setup delivers huge visual impact and is ideal for large crowds, outdoor venues, and events that need a professional "big screen" experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16783386333" className="btn btn-primary px-10 py-4 text-lg">+1 (678) 338-6333</a>
                        <Link to="/book" className="btn btn-outline px-10 py-4 text-lg">Get Quote</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose a Video Wall Trailer */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">Mobile LED Solution</span>
                            <h2 className="text-4xl font-black text-white mb-6">Why Choose a Video Wall Trailer?</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                A video wall trailer is a <strong className="text-white">mobile LED screen</strong> that can be positioned outdoors without complicated staging. It's fast, powerful, and perfect for events where visibility matters.
                            </p>
                            <h3 className="text-xl font-bold text-white mb-4">Best For:</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {['Outdoor weddings', 'Festivals', 'Sports watch parties', 'Community events', 'Corporate outdoor gatherings'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle className="text-purple-400 shrink-0" size={18} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-2xl"></div>
                            <img src="/images/2-Video-wall-trailer-rental-DJ-P-Rock.jpg" alt="Mobile LED Screen Atlanta" className="relative rounded-3xl border border-white/10 w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">Mobile Solution</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Choose The Trailer?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Truck className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Fully Mobile</h3>
                            <p className="text-gray-400 text-sm">Self-contained unit goes anywhere you need it</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Sun className="text-yellow-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Daylight Visible</h3>
                            <p className="text-gray-400 text-sm">10,000+ nit brightness works in direct sunlight</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Tv className="text-green-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Massive Screen</h3>
                            <p className="text-gray-400 text-sm">12'x7' LED display visible from 500+ feet</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Wifi className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Generator Powered</h3>
                            <p className="text-gray-400 text-sm">No venue power needed - we're self-sufficient</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Setup */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">Professional Setup + Reliable Service</h2>
                        <p className="text-gray-400 text-lg">We handle everything so you get a clean, premium look without stress.</p>
                    </div>
                    <div className="glass-panel p-8 rounded-3xl max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-white mb-6 text-center">We Handle:</h3>
                        <div className="space-y-4">
                            {['Delivery and placement', 'Setup and breakdown', 'Support coordination'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="text-purple-400 shrink-0" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Perfect For */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">Perfect For</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Heart, label: 'Outdoor Weddings' },
                            { icon: TreePine, label: 'Festivals' },
                            { icon: PartyPopper, label: 'Block Parties' },
                            { icon: Building2, label: 'Sports Watch Parties' },
                        ].map((item, i) => (
                            <div key={i} className="glass-panel p-8 rounded-xl text-center hover:bg-white/10 transition-all">
                                <item.icon className="text-purple-400 mx-auto mb-4" size={32} />
                                <span className="text-white font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-black">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">Common Questions</h2>
                    </div>
                    <div className="glass-panel rounded-3xl p-8">
                        <FAQItem
                            question="What if it rains?"
                            answer="Our trailer screen is IP65 rated and can operate in light rain. For heavy weather, we can quickly lower and protect the screen. We monitor weather forecasts and communicate with you about conditions."
                        />
                        <FAQItem
                            question="How much space do you need?"
                            answer="We need about 30' x 20' of flat, level ground for the trailer and screen. The surface can be concrete, asphalt, or firm grass. We'll do a site survey beforehand to ensure compatibility."
                        />
                        <FAQItem
                            question="Can you stream live events?"
                            answer="Yes! We can display live TV, sports broadcasts, streaming services, or any HDMI/wireless input you provide."
                        />
                        <FAQItem
                            question="Do you include sound?"
                            answer="Sound is available as an add-on package. We can provide full concert-grade sound or basic speakers depending on your crowd size and needs."
                        />
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <GallerySlider images={galleryImages} title="Video Wall Trailer Gallery" accentColor="purple" />

            {/* CTA */}
            <section className="py-24 bg-black text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Book Video Wall Trailer Rental</h2>
                    <p className="text-xl text-gray-400 mb-6">Take the big screen outdoors for your next event.</p>
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

export default VideoWallTrailer;
