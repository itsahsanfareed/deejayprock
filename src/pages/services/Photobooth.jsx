import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, Image, Smartphone, Share2, Printer, Zap, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import GallerySlider from '../../components/GallerySlider';

const photoboothGalleryImages = [
    { url: '/images/360-Photobooth-DJ-P-Rock.jpg', label: '360 Photo Booth' },
    { url: '/images/Mirror-X-Photobooth-DJ-P-Rock.jpg', label: 'Mirror X Booth' },
    { url: '/images/360-Photobooth_1-DJ-P-Rock.jpg', label: '360 Booth in Action' },
    { url: '/images/Ipad-Selfie-Booths-DJP-Rock.jpg', label: 'iPad Selfie Station' },
    { url: '/images/Mirror-X-Photobooth-3-DJ-P-Rock.jpg', label: 'Mirror Booth Fun' },
    { url: '/images/Photo-booth-DJ-P-Rock-577x1024.jpg', label: 'Event Photo Booth' },
    { url: '/images/DJ-P-Rock-Mirror-X.jpg', label: 'Mirror X Experience' },
    { url: '/images/gallery-2-DJ-P-Rock.jpg', label: 'Wedding Booth Setup' },
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

const BoothFeature = ({ icon: Icon, title, desc }) => (
    <div className="flex gap-4">
        <div className="p-3 bg-white/5 rounded-2xl h-fit border border-white/5 shrink-0">
            <Icon className="text-pink-500" size={24} />
        </div>
        <div>
            <h4 className="font-bold text-white mb-2">{title}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
        </div>
    </div>
);

const Photobooth = () => {
    return (
        <>
            <Helmet>
                <title>Atlanta 360 Photo Booth & Mirror Rental | Luxury Event Activations</title>
                <meta name="description" content="Rent premium photobooths for your Atlanta event. 360 Spin Booths, Mirror X Booths, and iPad Selfie Stations. Instant sharing, custom branding, and professional attendants." />
                <meta name="keywords" content="360 Photo Booth Atlanta, Mirror Booth Rental, Event Photobooth, Wedding Photo Booth, Corporate Brand Activation, Selfie Station Rental" />
            </Helmet>

            {/* Hero Section */}
            <div className="relative pt-40 pb-28 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/30 via-purple-900/10 to-transparent z-0 pointer-events-none"></div>

                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-pink-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                        <Camera size={14} fill="currentColor" /> Atlanta's Premier Photo Experience
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                        Capture The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Magic.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        Elevate your guest experience with our state-of-the-art photo activations. From red carpet style 360 videos to interactive mirror booths, we make every moment shareable.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#booking" className="btn btn-primary bg-pink-600 hover:bg-pink-500 px-10 py-4 text-lg">Check Availability</a>
                        <Link to="/gallery" className="btn btn-outline px-10 py-4 text-lg">View Gallery</Link>
                    </div>
                </div>
            </div>

            {/* 360 Booth Section */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">The Main Attraction</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">360 Video Booth</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Give your guests the red carpet treatment. Our 360 booth captures high-definition slow-motion videos that circle around your guests, creating instant music-video style content ready for TikTok and Instagram.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <BoothFeature icon={Zap} title="Slow Motion" desc="Cinema-quality 120fps slow motion capture." />
                                <BoothFeature icon={Share2} title="Instant Sharing" desc="Guests receive videos via AirDrop, Text, or QR Code instantly." />
                                <BoothFeature icon={Star} title="VIP Setup" desc="Includes velvet ropes, red carpet, and professional lighting." />
                                <BoothFeature icon={CheckCircle} title="Custom Overlay" desc="Your logo or event branding on every video." />
                            </div>

                            <a href="#booking" className="btn bg-purple-600 hover:bg-purple-500 border-0 text-white">Book 360 Experience</a>
                        </div>
                        <div className="order-1 lg:order-2 relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-[2.5rem] rotate-3 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            {/* Comparison / Visual Placeholder */}
                            <div className="aspect-square rounded-[2.5rem] bg-gray-900 border border-white/10 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/images/360-Photobooth-DJ-P-Rock.jpg')] bg-cover bg-center opacity-80"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <div className="px-4 py-2 bg-purple-600 text-white font-bold rounded-lg text-sm mb-2 w-fit">Trending Now</div>
                                    <p className="text-white font-bold text-xl">Perfect for Weddings & Galas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mirror X Section */}
            <section className="py-24 bg-black relative">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-bl from-blue-600 to-cyan-600 rounded-[2.5rem] -rotate-3 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className="aspect-[3/4] rounded-[2.5rem] bg-gray-900 border border-white/10 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/images/Mirror-X-Photobooth-DJ-P-Rock.jpg')] bg-cover bg-center opacity-80"></div>
                                <div className="absolute bottom-8 right-8 text-right">
                                    <div className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg text-sm mb-2 w-fit ml-auto">Interactive Fun</div>
                                    <p className="text-white font-bold text-xl">Animations & Games</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block">Elegance Meets Tech</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Mirror X Booth</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                A 6-foot tall, all-mirror design that blends into any luxury venue. Guests can see themselves, interact with colorful animations on the glass, and sign their creations with their finger.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <BoothFeature icon={Image} title="DSLR Quality" desc="Professional Canon DSLR cameras used for studio-quality photos." />
                                <BoothFeature icon={Printer} title="Lab Quality Prints" desc="Unlimited 4x6 prints in seconds for every guest." />
                                <BoothFeature icon={Smartphone} title="Touch Interface" desc="Guests can play games, choose filters, and sign photos." />
                                <BoothFeature icon={CheckCircle} title="Premium Props" desc="Curated high-end prop table included." />
                            </div>

                            <a href="#booking" className="btn bg-blue-600 hover:bg-blue-500 border-0 text-white">Book Mirror Experience</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* iPad Selfie Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container max-w-4xl text-center">
                    <span className="text-pink-500 font-bold tracking-widest text-sm uppercase mb-4 block">Compact & Digital</span>
                    <h2 className="text-4xl font-black text-white mb-6">iPad Selfie Station</h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Perfect for events with limited space or specific branding needs. This sleek, battery-powered halo ring light captures GIFs, Boomerangs, and Photos with a modern digital delivery.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
                        <div className="glass-panel p-6 rounded-2xl">
                            <h4 className="font-bold text-white mb-2 text-lg">Eco-Friendly</h4>
                            <p className="text-sm text-gray-400">100% Digital delivery means no paper waste, perfect for green initiatives.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl">
                            <h4 className="font-bold text-white mb-2 text-lg">Data Capture</h4>
                            <p className="text-sm text-gray-400">Collect emails and phone numbers for your marketing campaigns.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl">
                            <h4 className="font-bold text-white mb-2 text-lg">Anywhere Setup</h4>
                            <p className="text-sm text-gray-400">Small footprint fits in trade show booths or crowded parties.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 bg-black border-y border-white/5">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-4 block">Q & A</span>
                        <h2 className="text-4xl font-black text-white mb-6">Booth FAQ</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem
                            question="How much space do you need?"
                            answer="For the 360 Booth, we need a 10x10ft area. For the Mirror and iPad booths, an 8x8ft area is sufficient. We also need access to a standard power outlet within 25ft."
                        />
                        <FAQItem
                            question="Is an attendant included?"
                            answer="Yes! A professional attendant is included with all 360 and Mirror booth rentals to assist guests and ensure everything runs smoothly."
                        />
                        <FAQItem
                            question="Can we customize the photo template?"
                            answer="Absolutely. Our design team will work with you to create a custom overlay matching your event theme, colors, or including your logo."
                        />
                        <FAQItem
                            question="How do guests get their photos?"
                            answer="360 Videos and Digital photos are sent instantly via Text, Email, or AirDrop. Mirror X booth photos are printed instantly on-site."
                        />
                    </div>
                </div>
            </section>

            {/* Photo Booth Gallery */}
            <GallerySlider
                images={photoboothGalleryImages}
                title="Photo Booth Gallery"
                accentColor="pink"
            />

            {/* Final CTA / Contact */}
            <section id="booking" className="py-24 bg-gradient-to-t from-pink-900/20 to-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready for Your Closeup?</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Our bespoke photo experiences are in high demand. Secure your booth today and let's make some memories.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-500 font-bold">1</div>
                                    <span className="text-white">Select Your Booth Type</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-500 font-bold">2</div>
                                    <span className="text-white">Choose Your Date</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-500 font-bold">3</div>
                                    <span className="text-white">Customize Your Experience</span>
                                </div>
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

export default Photobooth;
