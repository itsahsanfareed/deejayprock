import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, ArrowLeft, Clock, Camera, Sparkles, Smartphone, Share2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhotoBoothTrends2025 = () => {
    return (
        <>
            <Helmet>
                <title>Photo Booth Trends 2025 | What's Hot in Event Photography Atlanta</title>
                <meta name="description" content="Discover the hottest photo booth trends for 2025 events. From 360 spin booths to AI filters, learn what's trending for weddings, parties, and corporate events in Atlanta." />
                <meta name="keywords" content="photo booth trends 2025, 360 photo booth Atlanta, event photography trends, modern photo booth rental Georgia" />
            </Helmet>

            <article className="pt-32 pb-20">
                {/* Back to Blog */}
                <div className="container max-w-4xl mb-8">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-medium">
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>
                </div>

                {/* Header */}
                <div className="container max-w-4xl text-center mb-12">
                    <div className="flex items-center justify-center gap-4 text-sm mb-6">
                        <span className="px-3 py-1 bg-pink-500/20 text-pink-400 font-bold uppercase tracking-wider rounded-full">Event Trends</span>
                        <span className="text-gray-500">•</span>
                        <span className="flex items-center gap-1 text-gray-400">
                            <Clock size={14} />
                            5 Min Read
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-white">
                        The Ultimate Guide to Photo Booth Trends in 2025
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">T</div>
                            <span className="font-medium">Team P Rock</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>February 1, 2026</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="container max-w-5xl mb-16">
                    <div className="aspect-[21/9] rounded-3xl overflow-hidden relative">
                        <img
                            src="/images/blog-photobooth-trends.png"
                            alt="Modern photo booth with neon lights and props"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="container max-w-3xl">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-xl text-gray-300 leading-relaxed mb-10">
                            Photo booths have evolved far beyond the static camera-and-curtain setup. In 2025, event guests expect interactive, shareable experiences that blend technology with entertainment. Here are the trends dominating Atlanta events this year.
                        </p>

                        {/* Trend 1 */}
                        <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-2xl p-8 border border-pink-500/20 my-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                                    <Zap className="text-pink-400" size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white m-0">#1: 360 Video Booths</h2>
                            </div>
                            <p className="text-gray-300 m-0">
                                The <strong className="text-white">360 photo booth</strong> continues to dominate 2025. Guests step onto a platform while a camera rotates around them, creating cinematic slow-motion videos perfect for TikTok and Instagram Reels. With custom overlays, music, and instant sharing, it's the most requested booth at Atlanta weddings and corporate events.
                            </p>
                        </div>

                        {/* Trend 2 */}
                        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20 my-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <Sparkles className="text-blue-400" size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white m-0">#2: AI-Powered Filters & Effects</h2>
                            </div>
                            <p className="text-gray-300 m-0">
                                2025 brings AI to the photo booth experience. Real-time background replacement, age progression filters, and style transfer effects (make yourself look like a painting!) are captivating guests. These aren't your basic Snapchat filters—they're studio-quality transformations.
                            </p>
                        </div>

                        {/* Trend 3 */}
                        <div className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 rounded-2xl p-8 border border-purple-500/20 my-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <Camera className="text-purple-400" size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white m-0">#3: Mirror X Booths</h2>
                            </div>
                            <p className="text-gray-300 m-0">
                                The <strong className="text-white">Mirror X booth</strong> offers a full-length interactive mirror experience. Guests can sign their name on the screen, play games, and take stunning full-body shots. The elegant design makes it perfect for upscale weddings and galas where aesthetics matter.
                            </p>
                        </div>

                        {/* Trend 4 */}
                        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-8 border border-green-500/20 my-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Smartphone className="text-green-400" size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white m-0">#4: iPad Selfie Stations</h2>
                            </div>
                            <p className="text-gray-300 m-0">
                                Compact and budget-friendly, iPad selfie stations are trending for smaller events and corporate activations. They take up minimal space while still offering digital props, filters, and instant sharing. Perfect for trade shows, pop-up shops, and intimate gatherings.
                            </p>
                        </div>

                        {/* Trend 5 */}
                        <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-8 border border-orange-500/20 my-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                                    <Share2 className="text-orange-400" size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white m-0">#5: Instant Social Sharing</h2>
                            </div>
                            <p className="text-gray-300 m-0">
                                Gone are the days of email-only delivery. 2025 photo booths feature QR code instant downloads, direct TikTok/Instagram posting, and text-to-phone delivery. For corporate events, this means real-time branded content hitting social feeds during your event.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">What's OUT in 2025</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Some trends are fading fast:
                        </p>
                        <ul className="space-y-3 text-gray-300 mb-8">
                            <li className="flex items-start gap-3"><span className="text-red-400">✗</span> Traditional enclosed booths with curtains (claustrophobic feel)</li>
                            <li className="flex items-start gap-3"><span className="text-red-400">✗</span> Static photos only (video is essential now)</li>
                            <li className="flex items-start gap-3"><span className="text-red-400">✗</span> Printed-only outputs (guests expect digital)</li>
                            <li className="flex items-start gap-3"><span className="text-red-400">✗</span> Cheesy prop mustaches and glasses (subtle props are in)</li>
                        </ul>

                        <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 border-l-4 border-pink-500 p-8 my-10 rounded-r-2xl">
                            <h3 className="text-xl font-bold text-white mb-3">Booking Tip</h3>
                            <p className="text-gray-300 m-0">When choosing a <strong className="text-white">photo booth rental in Atlanta</strong>, always ask: "What makes this experience shareable?" If the vendor can't answer with specifics about video, social sharing, and customization—keep looking.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Which Booth is Right for Your Event?</h2>
                        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden my-6">
                            <div className="grid grid-cols-3 text-center font-bold border-b border-white/10">
                                <div className="p-4 text-white">Event Type</div>
                                <div className="p-4 text-pink-400">Best Booth</div>
                                <div className="p-4 text-gray-400">Why</div>
                            </div>
                            <div className="grid grid-cols-3 text-center border-b border-white/10">
                                <div className="p-4 text-gray-300">Weddings</div>
                                <div className="p-4 text-gray-300">360 or Mirror X</div>
                                <div className="p-4 text-gray-500 text-sm">Elegant, shareable, memorable</div>
                            </div>
                            <div className="grid grid-cols-3 text-center border-b border-white/10">
                                <div className="p-4 text-gray-300">Corporate Galas</div>
                                <div className="p-4 text-gray-300">360 Booth</div>
                                <div className="p-4 text-gray-500 text-sm">Brandable, professional</div>
                            </div>
                            <div className="grid grid-cols-3 text-center border-b border-white/10">
                                <div className="p-4 text-gray-300">Trade Shows</div>
                                <div className="p-4 text-gray-300">iPad Selfie</div>
                                <div className="p-4 text-gray-500 text-sm">Compact, lead capture</div>
                            </div>
                            <div className="grid grid-cols-3 text-center">
                                <div className="p-4 text-gray-300">Birthday Parties</div>
                                <div className="p-4 text-gray-300">360 Booth</div>
                                <div className="p-4 text-gray-500 text-sm">High energy, social media ready</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Box */}
                    <div className="bg-gradient-to-br from-pink-900/40 to-black p-10 rounded-3xl border border-pink-500/30 text-center mt-16">
                        <h3 className="text-3xl font-bold text-white mb-4">Ready to Book a Trendy Photo Booth?</h3>
                        <p className="text-gray-400 mb-8 text-lg">DJ P Rock offers 360 booths, Mirror X, and iPad selfie stations for Atlanta events. All include attendant, props, and unlimited sessions.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/services/360-photobooth" className="btn btn-primary px-8 py-4">360 Photo Booth</Link>
                            <Link to="/services/mirror-x" className="btn btn-outline px-8 py-4">Mirror X Booth</Link>
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

export default PhotoBoothTrends2025;
