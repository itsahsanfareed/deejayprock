import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, CheckCircle, Music, Star, Calendar, Shield, ArrowRight, Building, HelpCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const FAQAccordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                className="w-full py-5 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`font-bold transition-colors ${isOpen ? 'text-purple-400' : 'text-white group-hover:text-purple-300'}`}>
                    {question}
                </span>
                <span className={`text-xl transition-transform ${isOpen ? 'rotate-45 text-purple-400' : 'text-gray-500'}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const LocationPage = () => {
    const { city } = useParams();

    // Capitalization helper
    const cityName = city ? city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Atlanta Area';

    return (
        <>
            <Helmet>
                <title>Best DJ in {cityName}, GA | Wedding & Corporate Events | DJ P Rock</title>
                <meta name="description" content={`Looking for a top-rated DJ in ${cityName}, GA? DJ P Rock provides award-winning wedding DJ, photobooth, and lighting services for events in ${cityName}. Book now!`} />
                <meta name="keywords" content={`DJ in ${cityName}, ${cityName} Wedding DJ, Corporate Event DJ ${cityName}, Party Rental ${cityName}, Photobooth ${cityName}, Event Entertainment ${cityName}`} />
            </Helmet>

            {/* Hero Section */}
            <div className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>

                <div className="container relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-6">
                                <MapPin size={16} />
                                <span className="text-xs font-bold uppercase tracking-widest">Now Serving {cityName}, GA</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                                The #1 Rated DJ in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient-x">{cityName}</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
                                Bringing elite entertainment to {cityName}. From intimate venues to grand ballrooms, we are the local experts in creating unforgettable vibes for weddings, corporate events, and private parties.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="#booking" className="btn btn-primary px-8 py-4">Check {cityName} Availability</a>
                                <Link to="/reviews" className="btn btn-outline px-8 py-4">Read Local Reviews</Link>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            {/* Abstract Map Graphic Placeholder */}
                            <div className="aspect-square rounded-[2rem] bg-gray-900 border border-white/10 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('/images/DJP-Rock-About.jpg')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-green-500 rounded-full"><CheckCircle size={16} className="text-black" /></div>
                                            <span className="font-bold text-white">Active in {cityName}</span>
                                        </div>
                                        <p className="text-xs text-gray-400">We have performed at top venues throughout {cityName} and the surrounding metro area.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Local Stats / Trust Bar */}
            <section className="border-y border-white/5 bg-black/50 backdrop-blur-sm">
                <div className="container py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <h3 className="text-3xl font-black text-white mb-1">50+</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">Events in {cityName}</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-black text-white mb-1">100%</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">On-Time Arrival</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-black text-white mb-1">5-Star</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">Client Feedback</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-black text-white mb-1">No</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">Travel Fees</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services for City */}
            <section className="py-24 bg-[#050505] relative">
                <div className="container relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Complete Event Solutions for {cityName}</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">We provide a comprehensive suite of entertainment services tailored to the specific needs of {cityName} venues and clients.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="glass-panel p-8 rounded-3xl group hover:bg-white/5 transition-colors">
                            <div className="w-14 h-14 rounded-2xl bg-purple-900/40 text-purple-400 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform"><Music /></div>
                            <h3 className="text-xl font-bold text-white mb-3">{cityName} Wedding DJ</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Expert MCing and open-format mixing for {cityName} weddings. We handle ceremony audio, cocktail hour, and reception parties with style.
                            </p>
                            <Link to="/services/weddings" className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                View Bridal Packages <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Service 2 */}
                        <div className="glass-panel p-8 rounded-3xl group hover:bg-white/5 transition-colors">
                            <div className="w-14 h-14 rounded-2xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform"><Building /></div>
                            <h3 className="text-xl font-bold text-white mb-3">Corporate Events</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Trusted by local {cityName} businesses for holiday parties, product launches, and networking mixers. Professional sound and brand-aligned music.
                            </p>
                            <Link to="/services/corporate" className="text-blue-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Corporate Solutions <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Service 3 */}
                        <div className="glass-panel p-8 rounded-3xl group hover:bg-white/5 transition-colors">
                            <div className="w-14 h-14 rounded-2xl bg-pink-900/40 text-pink-400 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform"><Star /></div>
                            <h3 className="text-xl font-bold text-white mb-3">Photobooth Rentals</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Add our popular 360 Booth or Mirror X to your event in {cityName}. Instant digital sharing and custom prints available.
                            </p>
                            <Link to="/services/photobooth" className="text-pink-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                See Booth Options <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Hire Local */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="glass-panel p-10 rounded-[3rem] border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Why {cityName} Loves DJ P Rock</h2>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Choosing a DJ who knows the area makes a difference. We are familiar with the load-in logistics of top {cityName} venues, understand the local noise ordinances, and know exactly what kind of music gets {cityName} crowds moving.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="text-green-500 shrink-0" size={20} />
                                        <span className="text-gray-200">Familiar with local venue acoustics and logistics.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="text-green-500 shrink-0" size={20} />
                                        <span className="text-gray-200">Zero travel fees for events within {cityName}.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="text-green-500 shrink-0" size={20} />
                                        <span className="text-gray-200">Recommended by local event planners.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="text-green-500 shrink-0" size={20} />
                                        <span className="text-gray-200">Early setup to beat {cityName} traffic.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                {/* Trust Signals Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <Shield className="text-blue-500 mb-2" size={32} />
                                        <h4 className="font-bold text-white">Insured</h4>
                                        <p className="text-xs text-gray-500">Full Liability Coverage</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <Calendar className="text-purple-500 mb-2" size={32} />
                                        <h4 className="font-bold text-white">Reliable</h4>
                                        <p className="text-xs text-gray-500">Never Cancellations</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <Star className="text-yellow-500 mb-2" size={32} />
                                        <h4 className="font-bold text-white">Top Rated</h4>
                                        <p className="text-xs text-gray-500">100+ 5-Star Reviews</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <CheckCircle className="text-green-500 mb-2" size={32} />
                                        <h4 className="font-bold text-white">Quality</h4>
                                        <p className="text-xs text-gray-500">Premium Equipment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* City Specific FAQs */}
            <section className="py-24 bg-[#050505]">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-4 block">Q & A</span>
                        <h2 className="text-4xl font-black text-white mb-6">FAQs for {cityName} Events</h2>
                    </div>

                    <div className="space-y-2">
                        <FAQAccordion
                            question={`Do you charge for travel to ${cityName}?`}
                            answer={`No! For almost all locations within ${cityName} and the immediate metro area, we do not charge any travel fees. It is all included in your package.`}
                        />
                        <FAQAccordion
                            question={`Have you played at venues in ${cityName} before?`}
                            answer={`Yes, DJ P Rock is very active in the ${cityName} area. We are likely familiar with your venue, which helps us ensure a smooth load-in and setup process.`}
                        />
                        <FAQAccordion
                            question="How early do you arrive for setup?"
                            answer="We typically arrive 2 hours prior to the start of music to ensure sound checks and lighting setup are completed well before your first guest arrives."
                        />
                        <FAQAccordion
                            question="Can we meet before booking?"
                            answer="Absolutely. We offer free video consultations to discuss your vision, timeline, and music preferences before you sign anything."
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="booking" className="py-24 bg-gradient-to-t from-purple-900/20 to-black">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Book Your {cityName} Event</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Dates in {cityName} fill up fast, especially during peak seasons. Contact us today to secure your date and get a custom quote.
                            </p>
                            <ul className="space-y-2 text-gray-400 mb-8">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Immediate Quote Response</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Custom Packages Available</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Online Planning Portal Included</li>
                            </ul>
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

export default LocationPage;
