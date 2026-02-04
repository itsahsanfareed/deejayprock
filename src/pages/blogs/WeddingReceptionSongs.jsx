import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, ArrowLeft, Clock, Music, Heart, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeddingReceptionSongs = () => {
    return (
        <>
            <Helmet>
                <title>Top Wedding Reception Songs 2025 | Best Dance Floor Hits Atlanta</title>
                <meta name="description" content="Discover the top wedding reception songs that keep the dance floor packed all night. Expert song list from Atlanta's #1 wedding DJ with 10+ years of experience." />
                <meta name="keywords" content="wedding reception songs, best wedding dance songs, Atlanta wedding DJ playlist, wedding party music 2025" />
            </Helmet>

            <article className="pt-32 pb-20">
                {/* Back to Blog */}
                <div className="container max-w-4xl mb-8">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium">
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>
                </div>

                {/* Header */}
                <div className="container max-w-4xl text-center mb-12">
                    <div className="flex items-center justify-center gap-4 text-sm mb-6">
                        <span className="px-3 py-1 bg-pink-500/20 text-pink-400 font-bold uppercase tracking-wider rounded-full">Wedding Tips</span>
                        <span className="text-gray-500">•</span>
                        <span className="flex items-center gap-1 text-gray-400">
                            <Clock size={14} />
                            7 Min Read
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-white">
                        Top Wedding Reception Songs That Keep the Dance Floor Packed
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">P</div>
                            <span className="font-medium">DJ P Rock</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>January 15, 2026</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="container max-w-5xl mb-16">
                    <div className="aspect-[21/9] rounded-3xl overflow-hidden relative">
                        <img
                            src="/images/blog-wedding-dance-floor.png"
                            alt="Packed wedding reception dance floor with DJ lighting"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="container max-w-3xl">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-xl text-gray-300 leading-relaxed mb-10">
                            After DJing over 500 weddings across Atlanta and Georgia, I've learned exactly what songs get every guest—from grandma to your college friends—out on the dance floor. Here's my expertly curated list for 2025.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <Heart className="text-pink-400" size={28} />
                            First Dance Favorites
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            The first dance sets the tone for your entire reception. These timeless songs create the perfect romantic moment:
                        </p>
                        <ul className="space-y-3 text-gray-300 mb-8">
                            <li className="flex items-start gap-3"><span className="text-pink-400">♪</span> "Perfect" – Ed Sheeran</li>
                            <li className="flex items-start gap-3"><span className="text-pink-400">♪</span> "All of Me" – John Legend</li>
                            <li className="flex items-start gap-3"><span className="text-pink-400">♪</span> "At Last" – Etta James</li>
                            <li className="flex items-start gap-3"><span className="text-pink-400">♪</span> "Thinking Out Loud" – Ed Sheeran</li>
                            <li className="flex items-start gap-3"><span className="text-pink-400">♪</span> "A Thousand Years" – Christina Perri</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <PartyPopper className="text-yellow-400" size={28} />
                            Party Starters (Get Everyone Moving)
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            These are the songs that transform a quiet room into a packed dance floor in seconds:
                        </p>
                        <ul className="space-y-3 text-gray-300 mb-8">
                            <li className="flex items-start gap-3"><span className="text-yellow-400">♪</span> "Uptown Funk" – Bruno Mars</li>
                            <li className="flex items-start gap-3"><span className="text-yellow-400">♪</span> "September" – Earth, Wind & Fire</li>
                            <li className="flex items-start gap-3"><span className="text-yellow-400">♪</span> "I Wanna Dance with Somebody" – Whitney Houston</li>
                            <li className="flex items-start gap-3"><span className="text-yellow-400">♪</span> "Shake It Off" – Taylor Swift</li>
                            <li className="flex items-start gap-3"><span className="text-yellow-400">♪</span> "24K Magic" – Bruno Mars</li>
                        </ul>

                        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-l-4 border-purple-500 p-8 my-10 rounded-r-2xl">
                            <h3 className="text-xl font-bold text-white mb-3">Pro Tip from DJ P Rock</h3>
                            <p className="text-gray-300 m-0">Always include at least 3-4 songs from each decade (70s, 80s, 90s, 2000s, 2010s, 2020s) to make sure every generation feels represented. This is the secret to keeping ALL your guests engaged.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <Music className="text-purple-400" size={28} />
                            Multi-Generational Crowd Pleasers
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            These songs bridge the generation gap and get everyone from 8 to 80 on the floor:
                        </p>
                        <ul className="space-y-3 text-gray-300 mb-8">
                            <li className="flex items-start gap-3"><span className="text-purple-400">♪</span> "Sweet Caroline" – Neil Diamond</li>
                            <li className="flex items-start gap-3"><span className="text-purple-400">♪</span> "Don't Stop Believin'" – Journey</li>
                            <li className="flex items-start gap-3"><span className="text-purple-400">♪</span> "Shout" – The Isley Brothers</li>
                            <li className="flex items-start gap-3"><span className="text-purple-400">♪</span> "Twist and Shout" – The Beatles</li>
                            <li className="flex items-start gap-3"><span className="text-purple-400">♪</span> "Signed, Sealed, Delivered" – Stevie Wonder</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Atlanta Favorites</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Being an <strong className="text-white">Atlanta wedding DJ</strong>, I always include local favorites that get Georgia crowds hyped:
                        </p>
                        <ul className="space-y-3 text-gray-300 mb-8">
                            <li className="flex items-start gap-3"><span className="text-blue-400">♪</span> "Yeah!" – Usher</li>
                            <li className="flex items-start gap-3"><span className="text-blue-400">♪</span> "Get Low" – Lil Jon</li>
                            <li className="flex items-start gap-3"><span className="text-blue-400">♪</span> "Welcome to Atlanta" – Jermaine Dupri</li>
                            <li className="flex items-start gap-3"><span className="text-blue-400">♪</span> "My Boo" – OutKast</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Last Dance Closers</h2>
                        <p className="text-gray-300 leading-relaxed mb-12">
                            End your reception on a high note with these memorable closers that leave guests talking about your wedding for years:
                        </p>
                        <ul className="space-y-3 text-gray-300 mb-8">
                            <li className="flex items-start gap-3"><span className="text-green-400">♪</span> "Last Dance" – Donna Summer</li>
                            <li className="flex items-start gap-3"><span className="text-green-400">♪</span> "Closing Time" – Semisonic</li>
                            <li className="flex items-start gap-3"><span className="text-green-400">♪</span> "Don't Stop the Music" – Rihanna</li>
                        </ul>
                    </div>

                    {/* CTA Box */}
                    <div className="bg-gradient-to-br from-purple-900/40 to-black p-10 rounded-3xl border border-purple-500/30 text-center mt-16">
                        <h3 className="text-3xl font-bold text-white mb-4">Planning Your Atlanta Wedding?</h3>
                        <p className="text-gray-400 mb-8 text-lg">Let DJ P Rock create the perfect playlist for your special day. We customize every set list to match your vision.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/services/dj" className="btn btn-primary px-8 py-4">View DJ Services</Link>
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

export default WeddingReceptionSongs;
