import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Music, Star, Headphones, CheckCircle, Users, Mic2, Speaker, Calendar, Clock, Award, Heart, Briefcase, PartyPopper, MapPin, Phone, Mail, Zap, Camera, Tv, Sparkles } from 'lucide-react';
import GallerySlider from '../../components/GallerySlider';
import Contact from '../../components/Contact';

const djGalleryImages = [
    { url: '/images/Dj-service-DJ-P-Rock.jpg', label: 'Professional DJ Setup' },
    { url: '/images/DJP-Rock-DJ-Service-1.jpg', label: 'Live Event Performance' },
    { url: '/images/DJP-Rock-DJ-Service.jpg', label: 'Wedding Reception' },
    { url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Corporate Event' },
    { url: '/images/DJ-P-Rock-Gallery_6.jpg', label: 'Private Party' },
    { url: '/images/DJ-P-Rock-Images-1024x576.jpg', label: 'Club Night' },
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

const TestimonialCard = ({ name, date, quote }) => (
    <div className="glass-panel p-8 rounded-3xl relative h-full flex flex-col">
        <div className="flex text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed flex-grow italic">"{quote}"</p>
        <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-purple-400 text-sm">
                {name.charAt(0)}
            </div>
            <div>
                <div className="font-bold text-white text-sm">{name}</div>
                <div className="text-xs text-gray-500">{date}</div>
            </div>
        </div>
    </div>
);

const DJService = () => {
    // FAQ Schema data
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does it cost to book a DJ in Atlanta?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DJ pricing depends on event type, duration, venue location, and add-ons. Contact DJ P Rock for availability and a personalized quote for your Atlanta event."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer wedding DJ packages in Atlanta?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ P Rock offers wedding DJ packages that can include ceremony sound, reception DJ and MC hosting, and upgrades like uplighting and photo booths."
                }
            },
            {
                "@type": "Question",
                "name": "Can we request songs and provide a do-not-play list?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Clients can request must-play songs, share special requests, and provide a do-not-play list so the music matches the event style and audience."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide sound equipment and microphones?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. DJ P Rock provides professional sound equipment and wireless microphones for announcements, speeches, and key event moments."
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>DJ Services in Atlanta GA | Weddings, Corporate & Private Events – DJ P Rock</title>
                <meta name="description" content="Book premium DJ services in Atlanta with DJ P Rock. Weddings, corporate events, and private parties with clean sound, expert mixing, and high-energy crowd engagement." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 z-0">
                    <img src="/images/Dj-service-DJ-P-Rock.jpg" alt="DJ Services Atlanta - DJ P Rock" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
                </div>

                <div className="container relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                        Professional DJ Entertainment Atlanta
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        DJ Services in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Atlanta GA</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        Looking for a professional DJ who can actually control the energy of the room? DJ P Rock provides <strong className="text-white">premium DJ services in Atlanta</strong> for weddings, corporate events, and private parties — delivering clean sound, seamless mixing, and the kind of crowd engagement that keeps the dance floor full all night.
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                        We don't do generic playlists or awkward announcements. Every event is customized, professionally hosted, and executed with experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16783386333" className="btn btn-primary px-10 py-4 text-lg">+1 (678) 338-6333</a>
                        <Link to="/book" className="btn btn-outline px-10 py-4 text-lg">Check Availability</Link>
                    </div>
                </div>
            </section>

            {/* Atlanta DJ Services Built for Real Events */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">More Than Just Music</span>
                            <h2 className="text-4xl font-black text-white mb-6">Atlanta DJ Services Built for Real Events</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                A great DJ doesn't just "play songs." A great DJ understands timing, mood, transitions, and how to keep the flow of an event moving naturally.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                <strong className="text-white">DJ P Rock</strong> is known for delivering a polished, professional experience that feels premium from start to finish — whether you're hosting an elegant wedding reception, a high-end corporate event, or a packed private party.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-2xl"></div>
                            <img src="/images/Dj-service-DJ-P-Rock.jpg" alt="Professional DJ Atlanta" className="relative rounded-3xl border border-white/10 w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Wedding DJ Services */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-600 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
                            <img src="/images/DJP-Rock-DJ-Service-1.jpg" alt="Wedding DJ Atlanta" className="relative rounded-3xl border border-white/10 w-full" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                                <Heart className="text-pink-400" size={32} />
                            </div>
                            <h2 className="text-4xl font-black text-white mb-6">Wedding DJ Services in Atlanta</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Your wedding deserves more than background music. It needs structure, energy, and the right moments at the right time.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                As a trusted <strong className="text-white">wedding DJ in Atlanta</strong>, DJ P Rock provides full reception entertainment with professional MC hosting and clean sound support — so your ceremony, cocktail hour, and reception feel smooth and unforgettable.
                            </p>
                            <h3 className="text-xl font-bold text-white mb-4">Wedding DJ Services Include:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    'Reception DJ + professional MC hosting',
                                    'Ceremony sound setup (optional)',
                                    'Wireless microphones for vows/speeches',
                                    'Grand entrance + introductions',
                                    'First dance, father/daughter, mother/son',
                                    'Perfect transitions and energy control'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="text-pink-400 shrink-0" size={18} />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-500 mt-6 text-sm italic">
                                We work closely with couples to understand their style, music preferences, and timeline — so the night feels like YOUR wedding, not a generic event.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Event DJ Services */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                                <Briefcase className="text-blue-400" size={32} />
                            </div>
                            <h2 className="text-4xl font-black text-white mb-6">Corporate Event DJ Services in Atlanta</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Corporate events require a different level of professionalism — and we understand that.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                DJ P Rock provides <strong className="text-white">corporate DJ services in Atlanta</strong> for brands and organizations that want clean setups, smooth event flow, and entertainment that fits the audience.
                            </p>
                            <h3 className="text-xl font-bold text-white mb-4">Corporate Events We DJ:</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {['Holiday parties', 'Corporate galas', 'Award nights', 'Networking events', 'Brand activations', 'Grand openings'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle className="text-blue-400 shrink-0" size={16} />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-500 mt-6 text-sm italic">
                                Whether you want upbeat background music or a full dance-floor experience, we tailor the vibe to match your event goals.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
                            <img src="/images/DJP-Rock-DJ-Service.jpg" alt="Corporate DJ Atlanta" className="relative rounded-3xl border border-white/10 w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Private Party DJ Services */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                            <PartyPopper className="text-purple-400" size={32} />
                        </div>
                        <h2 className="text-4xl font-black text-white mb-6">Private Party DJ Services</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            If you're planning a celebration, DJ P Rock brings the energy that turns a good party into a night everyone remembers. We provide <strong className="text-white">party DJ services in Atlanta</strong> for:
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                        {['Birthday parties', 'Sweet 16 events', 'Quinceañeras', 'Graduation parties', 'Anniversary celebrations', 'Family events'].map((event, i) => (
                            <div key={i} className="glass-panel p-6 rounded-xl text-center hover:bg-white/10 transition-all">
                                <CheckCircle className="text-purple-400 mx-auto mb-2" size={24} />
                                <span className="text-white font-medium text-sm">{event}</span>
                            </div>
                        ))}
                    </div>

                    <div className="glass-panel p-8 rounded-3xl max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">Music That Matches Your Crowd</h3>
                        <p className="text-gray-400 text-center mb-6">We mix across all genres and generations, including:</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Hip Hop', 'R&B', 'Afrobeats', 'Top 40', 'Old School Classics', 'Pop', 'EDM', 'Latin', 'Country'].map((genre, i) => (
                                <span key={i} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">{genre}</span>
                            ))}
                        </div>
                        <p className="text-gray-500 text-center mt-6 text-sm italic">
                            The key isn't the genre — it's reading the room and knowing what to play next.
                        </p>
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">Full Service Package</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What You Get When You Book DJ P Rock</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">When you hire DJ P Rock, you're hiring an experienced entertainment team — not someone showing up with a laptop and a playlist.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Speaker className="text-purple-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Professional Sound</h3>
                            <p className="text-gray-400 text-sm">Clean, powerful audio system for any venue size</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mic2 className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Wireless Microphones</h3>
                            <p className="text-gray-400 text-sm">For announcements, speeches, and toasts</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Music className="text-pink-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Customized Music</h3>
                            <p className="text-gray-400 text-sm">Personalized playlist planning</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Headphones className="text-green-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">MC Services</h3>
                            <p className="text-gray-400 text-sm">Professional event hosting</p>
                        </div>
                    </div>

                    <div className="mt-12 glass-panel p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Included With Our DJ Services:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                'Professional sound system',
                                'DJ booth with premium presentation',
                                'Wireless microphones',
                                'Customized music planning',
                                'Crowd engagement & hosting',
                                'Smooth transitions & mixing',
                                'On-time arrival',
                                'Organized setup/breakdown'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="text-purple-400 shrink-0" size={18} />
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-500 mt-6">Our goal is simple: deliver an experience that feels premium and effortless for you.</p>
                    </div>
                </div>
            </section>

            {/* Why DJ P Rock */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">What Sets Us Apart</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why DJ P Rock Is a Top Choice for Atlanta DJ Services</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">Atlanta has plenty of DJs — but not all of them bring the same level of consistency, professionalism, and crowd control.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Star, color: 'yellow', title: '5-Star Rated', desc: 'Consistently top-rated across platforms' },
                            { icon: Users, color: 'blue', title: 'Expert Crowd Engagement', desc: 'We read the room and keep energy high' },
                            { icon: Mic2, color: 'purple', title: 'Professional MC Style', desc: 'Smooth announcements and hosting' },
                            { icon: Clock, color: 'green', title: 'Reliable & Punctual', desc: 'Always on time and prepared' },
                            { icon: Music, color: 'pink', title: 'Music Versatility', desc: 'All genres, all generations' },
                            { icon: Award, color: 'orange', title: 'Premium Event Setups', desc: 'Professional presentation every time' }
                        ].map((item, i) => (
                            <div key={i} className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-all">
                                <div className={`w-12 h-12 shrink-0 rounded-xl bg-${item.color}-500/20 flex items-center justify-center`}>
                                    <item.icon className={`text-${item.color}-400`} size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-400 text-lg mt-10">We're focused on making your event memorable, not just "getting through the night."</p>
                </div>
            </section>

            {/* Add-On Enhancements */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">Upgrade Your Event</span>
                        <h2 className="text-4xl font-black text-white mb-4">Add-On Enhancements</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Want the full premium experience? DJ P Rock offers entertainment add-ons that instantly elevate your event.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {[
                            { name: '360 Photo Booth', link: '/services/360-photo-booth' },
                            { name: 'LED Video Wall', link: '/services/video-wall-rental' },
                            { name: 'Video Wall Trailer', link: '/services/video-wall-trailer' },
                            { name: 'Mirror X Booth', link: '/services/mirror-x-booth' },
                            { name: 'iPad Selfie Booth', link: '/services/ipad-selfie-booth' },
                            { name: 'Uplighting', link: '/services/uplighting' },
                            { name: 'Karaoke', link: '/services/karaoke' }
                        ].map((addon, i) => (
                            <Link key={i} to={addon.link} className="glass-panel p-4 rounded-xl text-center hover:bg-purple-500/20 transition-all group">
                                <Sparkles className="text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-white font-medium text-sm">{addon.name}</span>
                            </Link>
                        ))}
                    </div>

                    <p className="text-center text-gray-500 mt-8">If you're planning a wedding or corporate event, combining DJ services with production upgrades creates a true "high-end event" feel.</p>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <MapPin className="text-purple-400 mx-auto mb-4" size={48} />
                        <h2 className="text-4xl font-black text-white mb-4">DJ Service Areas (Atlanta & Surrounding Georgia Cities)</h2>
                        <p className="text-gray-400 text-lg">DJ P Rock provides DJ services across Metro Atlanta and surrounding Georgia areas</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {['Atlanta, GA', 'Buckhead', 'Midtown', 'Sandy Springs', 'Marietta', 'Smyrna', 'Roswell', 'Alpharetta', 'Decatur', 'Duluth', 'Lawrenceville', 'Norcross', 'Stone Mountain', 'College Park', 'East Point'].map((city, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                {city}
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-8">Not sure if you're in range? Contact us — travel options are available.</p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">Client Reviews</span>
                        <h2 className="text-4xl font-black text-white mb-4">What Clients Say About DJ P Rock</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <TestimonialCard
                            name="Sarah Johnson"
                            date="Wedding Reception"
                            quote="DJ P Rock made our wedding reception absolutely incredible! He read the crowd perfectly and had everyone dancing all night. Couldn't have asked for better entertainment!"
                        />
                        <TestimonialCard
                            name="Michael Brown"
                            date="Corporate Gala"
                            quote="Professional from start to finish. The music selection was perfect for our corporate event, and the sound quality was outstanding. Highly recommend!"
                        />
                        <TestimonialCard
                            name="Amanda Williams"
                            date="Birthday Party"
                            quote="Best DJ we've ever hired! The energy was amazing, equipment was top-notch, and DJ P Rock was so easy to work with. Already booking for next year!"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">DJ Services FAQs</h2>
                    </div>
                    <div className="glass-panel rounded-3xl p-8">
                        <FAQItem
                            question="How much does it cost to book a DJ in Atlanta?"
                            answer="Pricing depends on event type, duration, venue location, and add-ons. Contact DJ P Rock for availability and a personalized quote."
                        />
                        <FAQItem
                            question="Do you offer wedding DJ packages?"
                            answer="Yes. We offer wedding DJ packages that can include ceremony sound, reception DJ/MC hosting, and premium upgrades like uplighting and photo booths."
                        />
                        <FAQItem
                            question="Can we request specific songs?"
                            answer="Yes. We encourage clients to share must-play songs, special requests, and a do-not-play list to ensure the music fits your taste."
                        />
                        <FAQItem
                            question="Do you provide microphones and sound equipment?"
                            answer="Yes. We provide professional sound equipment and wireless microphones for announcements, speeches, and formal event moments."
                        />
                        <FAQItem
                            question="Do you DJ outside Atlanta?"
                            answer="Yes. DJ P Rock serves Atlanta and surrounding Georgia cities. Travel options depend on the date and location."
                        />
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <GallerySlider
                images={djGalleryImages}
                title="DJ Gallery"
                accentColor="purple"
            />

            {/* Final CTA */}
            <section className="py-24 bg-black text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Book DJ Services in Atlanta Today</h2>
                    <p className="text-xl text-gray-400 mb-6">If you're ready to book a professional DJ who brings energy, structure, and premium sound — DJ P Rock is here to deliver.</p>
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
                        <Link to="/book" className="btn btn-outline px-12 py-4 text-lg">Get a Quote</Link>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default DJService;
