import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Calendar, MessageSquare, User, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';

const ContactPage = () => {
    const [formStatus, setFormStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate sending
        setTimeout(() => setFormStatus('success'), 1500);
    };

    return (
        <>
            <Helmet>
                <title>Book A Date | DJ P Rock Atlanta</title>
                <meta name="description" content="Start your magical event experience. Contact DJ P Rock for availability and pricing for weddings, corporate galas, and private parties in Georgia." />
            </Helmet>

            <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 relative overflow-hidden flex flex-col justify-center">
                {/* Background Magic */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-[-10%] right-[-10%] w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-purple-600/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[60px] sm:blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container relative z-10 px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Side: Pitch */}
                        <div className="text-center lg:text-left">
                            <span className="text-purple-400 font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">Let's Create Magic</span>
                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                                Ready to <br />
                                <span className="text-gradient">Rock?</span>
                            </h1>
                            <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-10 leading-relaxed">
                                You're one step away from securing the best entertainment in Atlanta.
                                Whether it's a dream wedding or a high-energy brand activation,
                                we are ready to bring your vision to life.
                            </p>

                            <div className="space-y-4 sm:space-y-8 mb-8 sm:mb-12">
                                <a href="tel:+16783386333" className="flex items-center gap-4 sm:gap-6 group justify-center lg:justify-start">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full glass-panel flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                        <Phone size={24} className="sm:hidden" />
                                        <Phone size={28} className="hidden sm:block" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-bold">Call / Text</p>
                                        <p className="text-lg sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">+1 (678) 338-6333</p>
                                    </div>
                                </a>
                                <a href="mailto:deejayprock@gmail.com" className="flex items-center gap-4 sm:gap-6 group justify-center lg:justify-start">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full glass-panel flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <Mail size={24} className="sm:hidden" />
                                        <Mail size={28} className="hidden sm:block" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-bold">Email</p>
                                        <p className="text-base sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors break-all">deejayprock@gmail.com</p>
                                    </div>
                                </a>
                            </div>

                            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                                <a href="#" className="p-3 sm:p-4 rounded-full glass-panel hover:bg-white/10 transition-colors pointer-events-auto">
                                    <Instagram size={20} className="sm:hidden text-pink-500" />
                                    <Instagram size={24} className="hidden sm:block text-pink-500" />
                                </a>
                                <a href="#" className="p-3 sm:p-4 rounded-full glass-panel hover:bg-white/10 transition-colors pointer-events-auto">
                                    <Facebook size={20} className="sm:hidden text-blue-600" />
                                    <Facebook size={24} className="hidden sm:block text-blue-600" />
                                </a>
                                <a href="#" className="p-3 sm:p-4 rounded-full glass-panel hover:bg-white/10 transition-colors pointer-events-auto">
                                    <Youtube size={20} className="sm:hidden text-red-600" />
                                    <Youtube size={24} className="hidden sm:block text-red-600" />
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="glass-panel p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2rem] border-purple-500/20 relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl sm:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <h2 className="text-xl sm:text-3xl font-bold mb-5 sm:mb-8 relative z-10">Start The Conversation</h2>

                            {formStatus === 'success' ? (
                                <div className="text-center py-12 sm:py-20 relative z-10">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                        <User size={32} className="sm:hidden" />
                                        <User size={40} className="hidden sm:block" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Received!</h3>
                                    <p className="text-gray-400 text-sm sm:text-base">We'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                                            <div className="relative">
                                                <User className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" size={18} />
                                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" required />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Event Date</label>
                                            <div className="relative">
                                                <Calendar className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" size={18} />
                                                <input type="date" className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 transition-colors text-gray-400" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" size={18} />
                                            <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Tell us about your event</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute top-4 left-4 text-gray-500" size={18} />
                                            <textarea className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 h-32 focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Venue, extensive guest list, or specific vibes..." required></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full btn btn-primary py-4 text-lg group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-shadow">
                                        {formStatus === 'sending' ? 'Sending...' : 'Send Inquiry'}
                                        {!formStatus === 'sending' && <ArrowRight size={20} className="ml-2" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
