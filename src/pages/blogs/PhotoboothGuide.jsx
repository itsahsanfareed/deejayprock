import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost2 = () => {
    return (
        <>
            <Helmet>
                <title>Why Corporate Events Need a 360 Photobooth | Brand Activation Atlanta</title>
                <meta name="description" content="Boost engagement at your next Atlanta corporate gala with a 360 Photobooth. Learn how branded video moments can amplify your social media reach." />
                <meta name="keywords" content="360 Photobooth Rental Atlanta, Corporate Event Ideas, Brand Activation Georgia, Video Marketing Events" />
            </Helmet>

            <article className="pt-32 pb-20">
                {/* Back to Blog */}
                <div className="container max-w-4xl mb-8">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>
                </div>

                {/* Header */}
                <div className="container max-w-4xl text-center mb-12">
                    <div className="flex items-center justify-center gap-4 text-sm mb-6">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 font-bold uppercase tracking-wider rounded-full">Corporate Trends</span>
                        <span className="text-gray-500">•</span>
                        <span className="flex items-center gap-1 text-gray-400">
                            <Clock size={14} />
                            4 Min Read
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-white">
                        Why Your Next Corporate Gala Needs a 360 Photobooth
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">T</div>
                            <span className="font-medium">Team P Rock</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>September 28, 2025</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="container max-w-5xl mb-16">
                    <div className="aspect-[21/9] rounded-3xl overflow-hidden relative">
                        <img
                            src="/images/360-Photobooth-DJ-P-Rock.jpg"
                            alt="360 Photobooth at a corporate event"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="container max-w-3xl">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-xl text-gray-300 leading-relaxed mb-10">
                            In 2025, a static photo against a backdrop just doesn't cut it anymore. If you want your brand to trend on social media during your Atlanta launch party or holiday gala, you need movement. Enter the <strong className="text-white">360 Photobooth</strong>.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Maximum Social Shareability</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Video content generates 1200% more shares than text and images combined. When guests step onto our 360 platform, they create dynamic, high-energy videos that are instantly sharable to TikTok and Instagram Reels. Every share is a free impression for your brand.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Custom Branding Opportunities</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            At <strong className="text-blue-400">DJ P Rock</strong>, we don't just rent you the booth; we brand the experience. We can apply digital overlays with your company logo to every video. We can also customize the physical platform and backdrop to match your corporate colors.
                        </p>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 my-10">
                            <h3 className="text-xl font-bold text-white mb-4">What's Included:</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 font-bold">✓</span>
                                    <span><strong className="text-white">Custom Intro/Outro:</strong> Add your animated logo to the video start.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 font-bold">✓</span>
                                    <span><strong className="text-white">Music Overlay:</strong> Match the video music to your campaign theme.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 font-bold">✓</span>
                                    <span><strong className="text-white">Instant Data Capture:</strong> Collect emails and phone numbers for follow-up marketing.</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">The "VIP" Factor</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            There's something undeniably "red carpet" about a 360 booth. It makes every employee and guest feel like a celebrity. It acts as a centerpiece for entertainment during cocktail hours or networking breaks.
                        </p>

                        <p className="text-gray-300 leading-relaxed mb-12">
                            Ready to elevate your brand activation in Atlanta? Our 360 Booth packages come with a professional attendant, unlimited sessions, and instant sharing stations.
                        </p>
                    </div>

                    {/* CTA Box */}
                    <div className="bg-gradient-to-br from-blue-900/40 to-black p-10 rounded-3xl border border-blue-500/30 text-center mt-16">
                        <h3 className="text-3xl font-bold text-white mb-4">Book a 360 Booth Today</h3>
                        <p className="text-gray-400 mb-8 text-lg">Combine with our DJ services for a special package discount.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/services/360-photobooth" className="btn btn-primary px-8 py-4">View 360 Booth Services</Link>
                            <Link to="/contact" className="btn btn-outline px-8 py-4">Get a Quote</Link>
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div className="mt-20 pt-12 border-t border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
                        <Link to="/blog/how-to-choose-best-wedding-dj-atlanta" className="group flex gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                            <div className="w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                <img src="/images/Dj-service-DJ-P-Rock.jpg" alt="Wedding DJ" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div>
                                <span className="text-purple-400 text-sm font-bold uppercase tracking-wider">Weddings</span>
                                <h4 className="text-lg font-bold text-white mt-1 group-hover:text-purple-400 transition-colors">How to Choose the Best Wedding DJ in Atlanta (2025 Guide)</h4>
                                <p className="text-gray-500 text-sm mt-2">Learn what separates a pro from an amateur when hiring a wedding DJ.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost2;
