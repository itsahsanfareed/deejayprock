import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, BookOpen } from 'lucide-react';

const BlogIndex = () => {
    const posts = [
        {
            id: 1,
            slug: 'how-to-choose-best-wedding-dj-atlanta',
            title: 'How to Choose the Best Wedding DJ in Atlanta (2025 Guide)',
            excerpt: 'Planning a wedding in Georgia? Don\'t hire entertainment until you read this guide on what separates a professional DJ from an amateur.',
            date: 'October 15, 2025',
            author: 'DJ P Rock',
            category: 'Weddings',
            categoryColor: 'purple',
            readTime: '5 min',
            image: '/images/Dj-service-DJ-P-Rock.jpg',
            featured: true
        },
        {
            id: 2,
            slug: 'why-corporate-events-need-360-photobooths',
            title: 'Why Your Next Corporate Gala Needs a 360 Photobooth',
            excerpt: 'Brand activation is everything. Discover how a branded 360 spin booth can increase social media engagement for your Atlanta business event.',
            date: 'September 28, 2025',
            author: 'Team P Rock',
            category: 'Corporate',
            categoryColor: 'blue',
            readTime: '4 min',
            image: '/images/360-Photobooth-DJ-P-Rock.jpg',
            featured: false
        },
        {
            id: 3,
            slug: 'top-wedding-reception-songs-2025',
            title: 'Top Wedding Reception Songs That Keep the Dance Floor Packed',
            excerpt: 'After DJing 500+ weddings, here are the songs guaranteed to get every guest dancing—from first dance to last call.',
            date: 'January 15, 2026',
            author: 'DJ P Rock',
            category: 'Wedding Tips',
            categoryColor: 'pink',
            readTime: '7 min',
            image: '/images/blog-wedding-dance-floor.png',
            featured: false
        },
        {
            id: 4,
            slug: 'led-video-wall-vs-projector',
            title: 'LED Video Wall vs Projector: Which is Better for Your Event?',
            excerpt: 'Expert comparison of LED walls vs projectors. Learn when each makes sense for outdoor events, corporate presentations, and concerts in Atlanta.',
            date: 'January 20, 2026',
            author: 'Tech Team',
            category: 'AV Production',
            categoryColor: 'cyan',
            readTime: '6 min',
            image: '/images/blog-led-video-wall.png',
            featured: false
        },
        {
            id: 5,
            slug: 'corporate-holiday-party-planning-atlanta',
            title: 'How to Plan the Perfect Corporate Holiday Party in Atlanta',
            excerpt: 'Complete planning guide for corporate holiday events—venues, entertainment, budgets, and timelines for your company celebration.',
            date: 'January 25, 2026',
            author: 'DJ P Rock',
            category: 'Corporate Events',
            categoryColor: 'yellow',
            readTime: '8 min',
            image: '/images/blog-corporate-holiday.png',
            featured: false
        },
        {
            id: 6,
            slug: 'photo-booth-trends-2025',
            title: 'The Ultimate Guide to Photo Booth Trends in 2025',
            excerpt: 'From 360 spin booths to AI filters—discover what\'s hot in event photography and which booth is right for your Atlanta event.',
            date: 'February 1, 2026',
            author: 'Team P Rock',
            category: 'Event Trends',
            categoryColor: 'pink',
            readTime: '5 min',
            image: '/images/blog-photobooth-trends.png',
            featured: false
        }
    ];

    const featuredPost = posts.find(p => p.featured);
    const regularPosts = posts.filter(p => !p.featured);

    const getCategoryColor = (color) => {
        const colors = {
            purple: 'bg-purple-500/20 text-purple-400',
            blue: 'bg-blue-500/20 text-blue-400',
            pink: 'bg-pink-500/20 text-pink-400',
            green: 'bg-green-500/20 text-green-400',
            cyan: 'bg-cyan-500/20 text-cyan-400',
            yellow: 'bg-yellow-500/20 text-yellow-400',
        };
        return colors[color] || colors.purple;
    };

    return (
        <>
            <Helmet>
                <title>Event Entertainment Blog | Tips from the Best DJ in Atlanta</title>
                <meta name="description" content="Read the latest tips on wedding planning, corporate event trends, and party entertainment from DJ P Rock, Atlanta's premier DJ service." />
            </Helmet>

            {/* Hero Section */}
            <div className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8">
                            <BookOpen size={14} />
                            Our Journal
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Insights</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Expert advice, event inspiration, and behind-the-scenes stories from Atlanta's premier event entertainment team.
                        </p>
                    </div>
                </div>
            </div>

            {/* Featured Post */}
            {featuredPost && (
                <section className="pb-16">
                    <div className="container">
                        <Link to={`/blog/${featuredPost.slug}`} className="group block">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-white/5 to-transparent rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500">
                                <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 lg:p-12">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">Featured</span>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getCategoryColor(featuredPost.categoryColor)}`}>
                                            {featuredPost.category}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-gray-400 text-lg mb-6 line-clamp-3">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            {featuredPost.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} />
                                            {featuredPost.readTime} read
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-purple-400 transition-colors">
                                        Read Article
                                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Regular Posts Grid */}
            <section className="pb-24">
                <div className="container">
                    <h2 className="text-2xl font-bold text-white mb-8">More Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getCategoryColor(post.categoryColor)}`}>
                                            {post.category}
                                        </span>
                                        <span className="text-gray-500 text-sm flex items-center gap-1">
                                            <Clock size={12} />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">{post.date}</span>
                                        <span className="text-purple-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                            Read <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Stay Updated on Event Trends
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Get the latest tips on wedding planning, corporate events, and entertainment trends delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn btn-primary px-8 py-4">Contact Us</Link>
                            <Link to="/services" className="btn btn-outline px-8 py-4">View Our Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogIndex;
