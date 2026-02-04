import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, ArrowLeft, Clock, PartyPopper, Users, Music, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporateHolidayParty = () => {
    return (
        <>
            <Helmet>
                <title>How to Plan a Corporate Holiday Party in Atlanta 2025 | Complete Guide</title>
                <meta name="description" content="Plan the perfect corporate holiday party in Atlanta. Expert tips on venues, entertainment, catering, and hiring the right DJ for your company celebration." />
                <meta name="keywords" content="corporate holiday party Atlanta, company Christmas party ideas, Atlanta corporate event DJ, office party entertainment Georgia" />
            </Helmet>

            <article className="pt-32 pb-20">
                {/* Back to Blog */}
                <div className="container max-w-4xl mb-8">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>
                </div>

                {/* Header */}
                <div className="container max-w-4xl text-center mb-12">
                    <div className="flex items-center justify-center gap-4 text-sm mb-6">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 font-bold uppercase tracking-wider rounded-full">Corporate Events</span>
                        <span className="text-gray-500">•</span>
                        <span className="flex items-center gap-1 text-gray-400">
                            <Clock size={14} />
                            8 Min Read
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-white">
                        How to Plan the Perfect Corporate Holiday Party in Atlanta
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold">P</div>
                            <span className="font-medium">DJ P Rock</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>January 25, 2026</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="container max-w-5xl mb-16">
                    <div className="aspect-[21/9] rounded-3xl overflow-hidden relative">
                        <img
                            src="/images/blog-corporate-holiday.png"
                            alt="Elegant corporate holiday party in Atlanta"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="container max-w-3xl">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-xl text-gray-300 leading-relaxed mb-10">
                            Your company's holiday party is more than just a celebration—it's a chance to boost morale, reward your team, and strengthen company culture. After DJing hundreds of <strong className="text-white">corporate holiday parties across Atlanta</strong>, here's my complete planning guide.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <Calendar className="text-yellow-400" size={28} />
                            Start Planning Early (3-4 Months Out)
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Atlanta's holiday season books up fast. The best venues, DJs, and caterers get booked by September for December parties. Here's your timeline:
                        </p>
                        <ul className="space-y-3 text-gray-300 mb-8">
                            <li className="flex items-start gap-3"><span className="text-yellow-400 font-bold">4 months:</span> Set budget, choose date, book venue</li>
                            <li className="flex items-start gap-3"><span className="text-yellow-400 font-bold">3 months:</span> Book entertainment (DJ, photo booth), send save-the-dates</li>
                            <li className="flex items-start gap-3"><span className="text-yellow-400 font-bold">2 months:</span> Finalize catering, decorations, and activities</li>
                            <li className="flex items-start gap-3"><span className="text-yellow-400 font-bold">1 month:</span> Send formal invitations, confirm headcount</li>
                            <li className="flex items-start gap-3"><span className="text-yellow-400 font-bold">1 week:</span> Final walkthrough with all vendors</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <MapPin className="text-red-400" size={28} />
                            Top Atlanta Corporate Holiday Party Venues
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Based on our experience, these Atlanta venues consistently deliver excellent corporate events:
                        </p>
                        <ul className="space-y-4 text-gray-300 mb-8">
                            <li><strong className="text-white">The Biltmore Ballrooms</strong> – Timeless elegance for 100-500 guests</li>
                            <li><strong className="text-white">Ventanas</strong> – Modern rooftop with stunning city views</li>
                            <li><strong className="text-white">Georgia Aquarium</strong> – Unique "wow factor" experience</li>
                            <li><strong className="text-white">Flourish Atlanta</strong> – Industrial chic for creative companies</li>
                            <li><strong className="text-white">The Estate</strong> – Outdoor garden parties with upscale feel</li>
                        </ul>

                        <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-l-4 border-yellow-500 p-8 my-10 rounded-r-2xl">
                            <h3 className="text-xl font-bold text-white mb-3">Budget Tip</h3>
                            <p className="text-gray-300 m-0">Consider hosting your party in early December or early January. "Off-peak" dates (first two weeks of December) often offer 20-30% venue discounts while still capturing the holiday spirit.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <Music className="text-purple-400" size={28} />
                            Entertainment That Actually Works
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            This is where most corporate parties fail. Here's what actually keeps employees engaged:
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Must-Have: Professional DJ</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            A <strong className="text-white">corporate event DJ in Atlanta</strong> does more than play music. They:
                        </p>
                        <ul className="space-y-2 text-gray-300 mb-6">
                            <li>• Read the room and adjust energy levels throughout the night</li>
                            <li>• Handle announcements and award ceremonies professionally</li>
                            <li>• Play appropriate, workplace-friendly versions of songs</li>
                            <li>• Keep all ages engaged (executives to interns)</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">High-Impact Add-Ons</h3>
                        <ul className="space-y-3 text-gray-300 mb-8">
                            <li className="flex items-start gap-3"><span className="text-purple-400">★</span> <strong className="text-white">360 Photo Booth</strong> – Creates instant shareable content, great for team building</li>
                            <li className="flex items-start gap-3"><span className="text-purple-400">★</span> <strong className="text-white">LED Uplighting</strong> – Transform any venue with your brand colors</li>
                            <li className="flex items-start gap-3"><span className="text-purple-400">★</span> <strong className="text-white">Video Wall</strong> – Display company highlights, award winners, year in review</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <Users className="text-blue-400" size={28} />
                            Making It Inclusive
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            The best corporate parties make everyone feel welcome:
                        </p>
                        <ul className="space-y-3 text-gray-300 mb-8">
                            <li>• Offer non-alcoholic drink options that are just as festive</li>
                            <li>• Include dietary accommodations (vegetarian, vegan, halal, kosher)</li>
                            <li>• Plan activities that don't require drinking or dancing</li>
                            <li>• Consider plus-one policies for work-life balance</li>
                            <li>• Choose a DJ who plays diverse, multi-generational music</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <Sparkles className="text-pink-400" size={28} />
                            The "Wow" Moments
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Create memorable highlights your team will talk about:
                        </p>
                        <ul className="space-y-3 text-gray-300 mb-8">
                            <li><strong className="text-white">Grand Entrance:</strong> Have the DJ announce department teams as they arrive</li>
                            <li><strong className="text-white">Awards Ceremony:</strong> Recognize achievements with proper lighting and music cues</li>
                            <li><strong className="text-white">Group Photo:</strong> Arrange a professional group shot with branded backdrop</li>
                            <li><strong className="text-white">Surprise Performance:</strong> Local band or special musical guest</li>
                            <li><strong className="text-white">Midnight Toast:</strong> For New Year's themed parties</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Sample Budget Breakdown</h2>
                        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden my-6">
                            <div className="grid grid-cols-2 text-center font-bold border-b border-white/10">
                                <div className="p-4 text-white">Category</div>
                                <div className="p-4 text-yellow-400">% of Budget</div>
                            </div>
                            <div className="grid grid-cols-2 text-center border-b border-white/10">
                                <div className="p-4 text-gray-300">Venue</div>
                                <div className="p-4 text-gray-300">30-35%</div>
                            </div>
                            <div className="grid grid-cols-2 text-center border-b border-white/10">
                                <div className="p-4 text-gray-300">Catering & Drinks</div>
                                <div className="p-4 text-gray-300">35-40%</div>
                            </div>
                            <div className="grid grid-cols-2 text-center border-b border-white/10">
                                <div className="p-4 text-gray-300">Entertainment (DJ, Photo Booth)</div>
                                <div className="p-4 text-gray-300">15-20%</div>
                            </div>
                            <div className="grid grid-cols-2 text-center">
                                <div className="p-4 text-gray-300">Decor & Extras</div>
                                <div className="p-4 text-gray-300">10-15%</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Box */}
                    <div className="bg-gradient-to-br from-yellow-900/40 to-black p-10 rounded-3xl border border-yellow-500/30 text-center mt-16">
                        <h3 className="text-3xl font-bold text-white mb-4">Planning Your Company's Holiday Party?</h3>
                        <p className="text-gray-400 mb-8 text-lg">DJ P Rock offers complete corporate entertainment packages including DJ, photo booths, lighting, and video walls.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/packages" className="btn btn-primary px-8 py-4">View Packages</Link>
                            <Link to="/contact" className="btn btn-outline px-8 py-4">Get a Custom Quote</Link>
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div className="mt-20 pt-12 border-t border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
                        <Link to="/blog/why-corporate-events-need-360-photobooths" className="group flex gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                            <div className="w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                <img src="/images/360-Photobooth-DJ-P-Rock.jpg" alt="360 Photobooth" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div>
                                <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Corporate Trends</span>
                                <h4 className="text-lg font-bold text-white mt-1 group-hover:text-purple-400 transition-colors">Why Your Next Corporate Gala Needs a 360 Photobooth</h4>
                                <p className="text-gray-500 text-sm mt-2">Learn how branded video moments can amplify your social media reach.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
};

export default CorporateHolidayParty;
