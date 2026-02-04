import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, Share2, Zap, Star, CheckCircle, Users, Clock, Sparkles, MapPin, Phone, Mail, Heart, Briefcase, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';
import GallerySlider from '../../components/GallerySlider';
import Contact from '../../components/Contact';

const galleryImages = [
    { url: '/images/360-Photobooth-DJ-P-Rock.jpg', label: '360 Photo Booth' },
    { url: '/images/360-Photobooth_1-DJ-P-Rock.jpg', label: '360 Booth in Action' },
    { url: '/images/360-Photobooth-DJ-P-Rock-1024x577.jpg', label: 'VIP Setup' },
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Event Setup' },
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

const Photobooth360 = () => {
    // FAQ Schema data
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does it cost to rent a 360 photo booth in Atlanta?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pricing depends on event duration, venue location, and customization options. Contact DJ P Rock to check availability and receive a quote for your Atlanta event."
                }
            },
            {
                "@type": "Question",
                "name": "Is an attendant included with the 360 photo booth rental?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ P Rock provides an on-site booth attendant to operate the booth, guide guests, and ensure the experience runs smoothly."
                }
            },
            {
                "@type": "Question",
                "name": "Can I customize the 360 booth videos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Custom overlays such as event names, logos, and dates are available for weddings, corporate events, and private parties."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer 360 photo booth rentals outside Atlanta?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ P Rock serves Atlanta and surrounding Georgia cities. Travel availability depends on event date and location."
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>360 Photo Booth Rental Atlanta | Premium 360 Booth Experience – DJ P Rock</title>
                <meta name="description" content="Make your event unforgettable with a 360 photo booth rental in Atlanta. DJ P Rock offers premium 360 booth experiences for weddings, corporate events, and private parties across Georgia." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img src="/images/360-Photobooth-DJ-P-Rock.jpg" alt="360 Photo Booth Rental Atlanta" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
                </div>

                <div className="container relative z-10 text-center pt-32 pb-20">
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                        <Camera className="inline mr-2" size={16} /> Premium 360 Booth Experience
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        360 Photo Booth Rental in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Atlanta</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        Looking to bring something unforgettable to your event? DJ P Rock offers <strong className="text-white">premium 360 photo booth rentals in Atlanta</strong> designed to turn your guests into the stars of the night. From weddings and corporate galas to birthdays and private parties, our 360 booth delivers the kind of experience people talk about long after the event ends.
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                        This isn't just a photo booth — it's a full video experience with high-energy slow-motion clips, professional lighting, and instant sharing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16783386333" className="btn btn-primary bg-purple-600 hover:bg-purple-500 px-10 py-4 text-lg">+1 (678) 338-6333</a>
                        <Link to="/book" className="btn btn-outline px-10 py-4 text-lg">Check Availability</Link>
                    </div>
                </div>
            </section>

            {/* What Is a 360 Photo Booth */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">The Experience</span>
                            <h2 className="text-4xl font-black text-white mb-6">What Is a 360 Photo Booth?</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                A 360 photo booth is a modern video booth where guests stand on a platform while a rotating camera captures them from every angle. The result is a smooth, cinematic slow-motion video that looks high-end and is perfect for social media.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Unlike traditional photo booths, the <strong className="text-white">360 booth creates an interactive experience</strong> that keeps guests entertained and engaged throughout the event.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-2xl"></div>
                            <img src="/images/360-Photobooth_1-DJ-P-Rock.jpg" alt="360 Photo Booth Experience Atlanta" className="relative rounded-3xl border border-white/10 w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Rent a 360 Photo Booth */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">Key Benefits</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Rent a 360 Photo Booth for Your Atlanta Event?</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">Events today are about more than showing up — they're about creating moments people want to share. A 360 booth rental in Atlanta adds that "wow factor" instantly.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Zap className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">High-Energy Experience</h3>
                            <p className="text-gray-400 text-sm">Guests love stepping onto the platform and striking poses</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Camera className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Slow-Motion Video Effects</h3>
                            <p className="text-gray-400 text-sm">Cinema-quality 120fps slow motion that looks stunning</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Star className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Professional Lighting</h3>
                            <p className="text-gray-400 text-sm">Premium setup with professional lighting for best results</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Share2 className="text-green-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Instant Shareability</h3>
                            <p className="text-gray-400 text-sm">AirDrop, text, email, or QR code delivery in seconds</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Users className="text-pink-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Perfect for All Ages</h3>
                            <p className="text-gray-400 text-sm">Everyone from kids to grandparents loves the 360 experience</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Sparkles className="text-yellow-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Nonstop Excitement</h3>
                            <p className="text-gray-400 text-sm">Creates a centerpiece guests naturally gather around</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perfect For Events */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">Perfect for Weddings, Corporate Events & Parties</h2>
                        <p className="text-gray-400 text-lg">DJ P Rock's 360 booth is one of the most requested entertainment add-ons in Atlanta because it fits almost any event type.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Wedding */}
                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                                <Heart className="text-pink-400" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Wedding 360 Photo Booth Rentals</h3>
                            <p className="text-gray-400 mb-4">Add an unforgettable experience to your reception. The 360 booth is perfect for:</p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Wedding guests entertainment</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Bridal party videos</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Family moments</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Glam slow-motion clips</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Reception hype</li>
                            </ul>
                        </div>

                        {/* Corporate */}
                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                                <Briefcase className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Corporate 360 Photo Booth Rentals</h3>
                            <p className="text-gray-400 mb-4">Corporate clients love the 360 booth because it creates engagement and shareable content:</p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Employee appreciation events</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Holiday parties</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Brand activations</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Grand openings</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Networking events</li>
                            </ul>
                        </div>

                        {/* Private Parties */}
                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                                <PartyPopper className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Private Parties & Celebrations</h3>
                            <p className="text-gray-400 mb-4">From birthdays to graduations, the 360 booth takes the event to another level:</p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Sweet 16</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Quinceañera</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Graduation parties</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> Birthday parties</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-purple-400" /> VIP celebrations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-2xl"></div>
                            <img src="/images/360-Photobooth-DJ-P-Rock-1024x577.jpg" alt="360 Booth Setup Atlanta" className="relative rounded-3xl border border-white/10 w-full" />
                        </div>
                        <div>
                            <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">Full Service</span>
                            <h2 className="text-4xl font-black text-white mb-6">What's Included With Our 360 Booth Rental</h2>
                            <p className="text-gray-400 text-lg mb-8">We don't just drop off equipment — we provide a full professional experience.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Premium 360 booth platform',
                                    'High-quality rotating camera',
                                    'Professional lighting setup',
                                    'Attendant/operator on-site',
                                    'Custom video overlays',
                                    'Smooth setup + breakdown',
                                    'Guest-friendly sharing',
                                    'VIP red carpet option'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="text-purple-400 shrink-0" size={20} />
                                        <span>{item}</span>
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
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">What Sets Us Apart</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why DJ P Rock for 360 Photo Booth Rentals in Atlanta?</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">There are plenty of vendors, but not all 360 booths are equal. DJ P Rock is known for high-quality event experiences — and that same standard applies to our booth rentals.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { title: 'Premium Equipment', desc: 'Clean, modern setup' },
                            { title: 'Professional Team', desc: 'Top-tier presentation' },
                            { title: 'High-Energy Vibe', desc: 'Booth experience that excites' },
                            { title: 'Reliable Timing', desc: 'Always on schedule' },
                            { title: 'Trusted Brand', desc: 'Atlanta\'s event experts' }
                        ].map((item, i) => (
                            <div key={i} className="glass-panel p-6 rounded-2xl text-center hover:bg-white/10 transition-all">
                                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-400 text-lg mt-10">When you book with DJ P Rock, you get professionalism, not chaos — and your guests feel the difference.</p>
                </div>
            </section>

            {/* Combine with DJ */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container max-w-4xl text-center">
                    <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">Best Value</span>
                    <h2 className="text-4xl font-black text-white mb-6">Combine Your 360 Booth With DJ Services</h2>
                    <p className="text-gray-400 text-lg mb-8">Want the full experience? Many clients book the 360 photo booth + DJ package for maximum impact. Pairing the booth with our DJ services creates:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {['Better crowd energy', 'More guest interaction', 'Complete entertainment setup', 'Premium event production feel'].map((item, i) => (
                            <div key={i} className="glass-panel p-4 rounded-xl">
                                <CheckCircle className="text-purple-400 mx-auto mb-2" size={24} />
                                <span className="text-white text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-400">If you're planning a wedding or large event in Atlanta, this combo is one of the best ways to upgrade the night.</p>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <MapPin className="text-purple-400 mx-auto mb-4" size={48} />
                        <h2 className="text-4xl font-black text-white mb-4">Service Areas (Atlanta & Surrounding Cities)</h2>
                        <p className="text-gray-400 text-lg">DJ P Rock provides 360 photo booth rentals across Metro Atlanta and surrounding Georgia areas</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {['Atlanta, GA', 'Buckhead', 'Midtown', 'Sandy Springs', 'Marietta', 'Smyrna', 'Roswell', 'Alpharetta', 'Decatur', 'Duluth', 'Lawrenceville', 'Norcross', 'Stone Mountain', 'College Park', 'East Point'].map((city, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                {city}
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-8">If your city isn't listed, contact us — we often travel for events.</p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">360 Photo Booth Rental FAQs</h2>
                    </div>
                    <div className="glass-panel rounded-3xl p-8">
                        <FAQItem
                            question="How much does it cost to rent a 360 photo booth in Atlanta?"
                            answer="Pricing depends on event duration, venue location, and custom options. Contact us for a quote and availability — we'll recommend the best package for your event."
                        />
                        <FAQItem
                            question="How much space does the 360 booth require?"
                            answer="Most venues can easily accommodate the booth. We'll confirm the space requirements before your event to ensure a clean and safe setup."
                        />
                        <FAQItem
                            question="Is an attendant included?"
                            answer="Yes. DJ P Rock provides an on-site booth attendant to guide guests, operate the booth, and keep everything running smoothly."
                        />
                        <FAQItem
                            question="Can we customize the videos with our name or event date?"
                            answer="Yes. Custom overlays and event branding options are available for weddings, birthdays, and corporate events."
                        />
                        <FAQItem
                            question="Do you provide 360 booth rentals outside Atlanta?"
                            answer="Yes. We serve Atlanta and surrounding Georgia areas. Travel options are available depending on location and event date."
                        />
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <GallerySlider images={galleryImages} title="360 Booth Gallery" accentColor="purple" />

            {/* CTA */}
            <section className="py-24 bg-black text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Book a 360 Photo Booth Rental in Atlanta</h2>
                    <p className="text-xl text-gray-400 mb-6">Ready to upgrade your event with a premium experience?</p>
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
                        <a href="tel:+16783386333" className="btn btn-primary bg-purple-600 hover:bg-purple-500 px-12 py-4 text-lg">Call Now</a>
                        <Link to="/book" className="btn btn-outline px-12 py-4 text-lg">Get a Quote</Link>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default Photobooth360;
