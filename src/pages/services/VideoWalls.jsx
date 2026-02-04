import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor, Square, Tv, Move, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import GallerySlider from '../../components/GallerySlider';

const videoWallGalleryImages = [
    { url: '/images/Video-Wall-Rental-DJP-Rock.jpg', label: 'LED Wall Setup' },
    { url: '/images/Video-wall-trailer-rental-DJ-P-Rock.jpg', label: 'Mobile Video Wall' },
    { url: '/images/video-wall-DJ-P-Rock.jpg', label: 'Indoor Video Wall' },
    { url: '/images/2-Video-wall-trailer-rental-DJ-P-Rock.jpg', label: 'Outdoor Display' },
    { url: '/images/video wall trailer.jpg', label: 'Event Video Wall' },
    { url: '/images/video-wall-DJ-P-Rock-1024x1024.jpg', label: 'Custom Video Display' },
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Stage Screen' },
    { url: '/images/gallery-2-DJ-P-Rock.jpg', label: 'Wedding Video Wall' },
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-cyan-400' : 'text-white group-hover:text-cyan-300'}`}>
                    {question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-cyan-400' : 'text-gray-500'}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const VideoWalls = () => {
    return (
        <>
            <Helmet>
                <title>LED Video Wall Rental Atlanta | Large Format Display | DJ P Rock</title>
                <meta name="description" content="Make a massive impact with high-definition LED video walls. Perfect for trade shows, concerts, and corporate presentations in Atlanta." />
                <meta name="keywords" content="LED Wall Rental Atlanta, Video Wall, Event Screens, Corporate AV Rental, Large TV Rental, Stage Visuals" />
            </Helmet>

            {/* Hero */}
            <div className="relative pt-40 pb-28 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 via-blue-900/10 to-transparent z-0 pointer-events-none"></div>
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                        <Monitor size={14} fill="currentColor" /> Cinematic Experiences
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                        Go <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Massive.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        Stop squinting at small projector screens. Deliver high-brightness, high-contrast visuals that command attention from the back of the room.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#booking" className="btn btn-primary bg-cyan-600 hover:bg-cyan-500 text-black px-8 py-4 text-lg font-bold">Get A Quote</a>
                        <Link to="/contact" className="btn btn-outline px-8 py-4 text-lg">Tech Specs</Link>
                    </div>
                </div>
            </div>

            {/* Main Product */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-white mb-6">Direct View LED Walls</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Our modular LED panels can be configured to any size or aspect ratio. Unlike projections, they are fully visible in daylight and offer infinite contrast ratios.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 h-fit"><LayoutGrid size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">2.9mm Pixel Pitch</h4>
                                        <p className="text-gray-400 text-sm">Ultra-high resolution suitable for close viewing distances.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 h-fit"><Tv size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Daylight Viewable</h4>
                                        <p className="text-gray-400 text-sm">5000+ nits brightness beats the sun every time.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 h-fit"><Move size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Custom Shapes</h4>
                                        <p className="text-gray-400 text-sm">Build curved walls, columns, or scattered tile designs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-[2rem] bg-gray-900 border border-white/10 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('/images/Video-Wall-Rental-DJP-Rock.jpg')] bg-cover bg-center opacity-80"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-6">Perfect Applications</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-panel p-8 rounded-3xl group hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">Trade Shows</h3>
                            <p className="text-gray-400">Stand out on the expo floor with a moving digital backdrop.</p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl group hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">Weddings</h3>
                            <p className="text-gray-400">Display same-day edits or live camera feeds of the couple.</p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl group hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">Corporate Keynotes</h3>
                            <p className="text-gray-400">Show PowerPoint slides and IMAG (Image Magnification) clearly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-4 block">Tech Specs</span>
                        <h2 className="text-4xl font-black text-white mb-6">Video Wall FAQ</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem
                            question="How much power does it need?"
                            answer="Video walls draw significant power. We usually require dedicated 20amp circuits or a power drop from the venue. We will conduct a site survey."
                        />
                        <FAQItem
                            question="Can you create the content?"
                            answer="Yes, our in-house motion graphics team can create custom loops, logo animations, and backgrounds for your event."
                        />
                        <FAQItem
                            question="How long does setup take?"
                            answer="A typical 10x20ft wall takes about 4-6 hours to build and calibrate. We always set up the day before or very early morning."
                        />
                    </div>
                </div>
            </section>

            {/* Video Wall Gallery */}
            <GallerySlider
                images={videoWallGalleryImages}
                title="Video Wall Gallery"
                accentColor="blue"
            />

            {/* Final CTA */}
            <section id="booking" className="py-24 bg-gradient-to-t from-cyan-900/20 to-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Visual Dominance.</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Ready to make a statement? Contact our technical director for a custom quote and CAD drawing.
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

export default VideoWalls;
