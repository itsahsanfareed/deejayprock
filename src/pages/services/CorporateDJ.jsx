import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, Mic, Users, Zap, Shield, Globe, Award, CheckCircle, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import GallerySlider from '../../components/GallerySlider';

const corporateGalleryImages = [
    { url: '/images/DJP-Rock-DJ-Service-1.jpg', label: 'Corporate Gala Setup' },
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Brand Activation Event' },
    { url: '/images/Video-Wall-Rental-DJP-Rock.jpg', label: 'LED Video Wall' },
    { url: '/images/Dj-service-DJ-P-Rock.jpg', label: 'Conference Entertainment' },
    { url: '/images/360-Photobooth-DJ-P-Rock.jpg', label: '360 Booth Activation' },
    { url: '/images/gallery-2-DJ-P-Rock.jpg', label: 'Holiday Party' },
    { url: '/images/Video-wall-trailer-rental-DJ-P-Rock.jpg', label: 'Outdoor Video Wall' },
    { url: '/images/Mirror-X-Photobooth-DJ-P-Rock.jpg', label: 'Team Building Event' },
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-400' : 'text-white group-hover:text-blue-300'}`}>
                    {question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-blue-400' : 'text-gray-500'}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const TestimonialCard = ({ name, role, company, quote }) => (
    <div className="glass-panel p-8 rounded-3xl relative h-full flex flex-col border-blue-500/10 hover:border-blue-500/30 transition-colors">
        <div className="flex text-blue-500 mb-6">
            <Briefcase size={20} />
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed flex-grow">"{quote}"</p>
        <div className="border-t border-white/5 pt-4 mt-auto">
            <div className="font-bold text-white text-lg">{name}</div>
            <div className="text-sm text-blue-400">{role}</div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{company}</div>
        </div>
    </div>
);

const CorporateDJ = () => {
    return (
        <>
            <Helmet>
                <title>Atlanta Corporate DJ & Event Entertainment | Brand Activations</title>
                <meta name="description" content="Elevate your corporate event with DJ P Rock. Professional sound, lighting, and entertainment for galas, product launches, conferences, and holiday parties in Atlanta." />
                <meta name="keywords" content="Corporate DJ Atlanta, Business Event Entertainment, Conference Audio Visual, Company Holiday Party DJ, Brand Activation Music, Professional Event Host" />
            </Helmet>

            {/* Hero Section */}
            <div className="relative pt-40 pb-28 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-[80vh] bg-gradient-to-b from-blue-900/20 to-black z-0 pointer-events-none"></div>
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                        <Shield size={14} fill="currentColor" /> Licensed & Insured Professional
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        Corporate Events <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Reimagined.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        From upscale galas to high-energy product launches, we provide the professionalism your brand deserves with the atmosphere your guests crave.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#quote-section" className="btn btn-primary bg-blue-600 hover:bg-blue-500 px-8 py-4 text-lg">Get A Quote</a>
                        <Link to="/contact" className="btn btn-outline px-8 py-4 text-lg">Download Press Kit</Link>
                    </div>
                </div>
            </div>

            {/* Trusted By / Logos Placeholder */}
            <section className="border-y border-white/5 bg-white/5 backdrop-blur-sm py-12">
                <div className="container text-center">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Trusted by Atlanta's Top Brands</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos - purely visual with text for now */}
                        <div className="text-2xl font-black text-white">COCA-COLA</div>
                        <div className="text-2xl font-black text-white">DELTA</div>
                        <div className="text-2xl font-black text-white">HOME DEPOT</div>
                        <div className="text-2xl font-black text-white">PORSCHE</div>
                    </div>
                </div>
            </section>

            {/* The Corporate Standard */}
            <section className="py-24 bg-[#050505]">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block">The Gold Standard</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Why Event Planners Choose Us</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors group">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Briefcase className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Brand Aligned</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We represent your company with immaculate attire and conduct. We understand that we are an extension of your brand image.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors group">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">AV Excellence</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Crystal clear wireless mics for speeches, powerful sound for large venues, and projection support. We handle the tech so you don't have to.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors group">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Globe className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Diverse Appeal</h3>
                            <p className="text-gray-400 leading-relaxed">
                                From Gen Z interns to Boomer executives, we masterfully bridge the generational gap with open-format mixing that keeps everyone engaged.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Types Grid */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl font-black text-white mb-4">Events We Enhance</h2>
                            <p className="text-gray-400 max-w-xl">We adapt our energy to match the specific tone of your corporate gathering.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Holiday Parties', 'Product Launches', 'Awards Galas', 'Conferences', 'Team Building', 'Store Openings', 'Fashion Shows', 'VIP Networking'].map((evt, i) => (
                            <div key={i} className="glass-panel p-8 flex flex-col justify-between h-48 group hover:bg-white/10 transition-colors cursor-default border-l-4 border-l-blue-500/0 hover:border-l-blue-500 transition-all">
                                <div className="flex justify-between items-start">
                                    <span className="text-3xl font-black text-white/10 group-hover:text-white/20">0{i + 1}</span>
                                    <ArrowIcon />
                                </div>
                                <span className="text-xl font-bold text-white group-hover:translate-x-2 transition-transform">{evt}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block">Client Success Stories</span>
                        <h2 className="text-4xl font-black text-white mb-6">Proven Results</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <TestimonialCard
                            name="Marcus Johnson"
                            role="Marketing Director"
                            company="TechStart Inc."
                            quote="DJ P Rock understood exactly the vibe we needed for our product launch. High energy but not overpowering. The branding on the DJ booth was a nice touch!"
                        />
                        <TestimonialCard
                            name="Sarah Williams"
                            role="HR Coordinator"
                            company="Global Logistics"
                            quote="The best holiday party we've had in 10 years. People who never dance were on the floor. Professional, punctual, and easy to work with."
                        />
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 bg-black border-y border-white/5">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-4 block">Logistics</span>
                        <h2 className="text-4xl font-black text-white mb-6">Corporate FAQ</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem
                            question="Are you insured?"
                            answer="Yes, we carry full liability insurance (up to $2M). We can provide a COI (Certificate of Insurance) to your venue within 24 hours of booking."
                        />
                        <FAQItem
                            question="Can we use your microphones for speeches?"
                            answer="Absolutely. All corporate packages include professional grade wireless handheld and lapel microphones for your CEO, presenters, or award winners."
                        />
                        <FAQItem
                            question="Do you take requests?"
                            answer="We facilitate requests based on your company's policy. We can take live requests from employees or stick strictly to a pre-approved playlist to ensure all content is HR-friendly."
                        />
                        <FAQItem
                            question="Can we add branding to your setup?"
                            answer="Yes! We offer options to brand the DJ booth with your company logo, and our 360/Photo booths can have custom branded overlays for all digital content."
                        />
                        <FAQItem
                            question="What are your payment terms?"
                            answer="We understand corporate billing cycles. We offer flexible invoicing options including Net-30 terms for approved vendor partners."
                        />
                    </div>
                </div>
            </section>

            {/* Corporate Gallery */}
            <GallerySlider
                images={corporateGalleryImages}
                title="Corporate Event Gallery"
                accentColor="blue"
            />

            {/* Final CTA / Contact */}
            <section id="quote-section" className="py-24 bg-gradient-to-t from-blue-900/20 to-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <ContactForm />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Let's Get To Business</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Dates, especially during Q4 holiday season, fill up months in advance. Secure your entertainment partner today.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500" size={24} />
                                    <span className="text-white font-medium">Fast Vendor Approval Process</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500" size={24} />
                                    <span className="text-white font-medium">Detailed W-9 & Invoicing</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500" size={24} />
                                    <span className="text-white font-medium">Dedicated Event Manager</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const ArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);

export default CorporateDJ;
