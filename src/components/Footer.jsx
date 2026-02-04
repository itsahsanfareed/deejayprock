import React from 'react';
import { Instagram, Facebook, Twitter, Music, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo-DJP-Rock.png';

const Footer = () => {
    return (
        <footer className="relative mt-auto pt-24 pb-12 overflow-hidden">
            {/* Magical Background Pulse */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-purple-900/40 to-transparent pointer-events-none z-0"></div>
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <img src={logo} alt="DJ P Rock" className="h-12 w-auto object-contain" />

                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Elevating events across Georgia with premium sound, intelligent lighting, and unmatched energy. We create moments that last a lifetime.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500 hover:text-white text-gray-400 transition-all duration-300 hover:scale-110">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white text-gray-400 transition-all duration-300 hover:scale-110">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-500 hover:text-white text-gray-400 transition-all duration-300 hover:scale-110">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="font-bold text-white text-lg">Company</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-purple-400 transition-colors">Services</Link></li>
                            <li><Link to="/gallery" className="hover:text-purple-400 transition-colors">Gallery</Link></li>
                            <li><Link to="/reviews" className="hover:text-purple-400 transition-colors">Reviews</Link></li>
                            <li><Link to="/blog" className="hover:text-purple-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="font-bold text-white text-lg">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/services/dj" className="hover:text-purple-400 transition-colors">DJ Service</Link></li>
                            <li><Link to="/services/photobooth" className="hover:text-purple-400 transition-colors">360 Photobooth</Link></li>
                            <li><Link to="/services/video-walls" className="hover:text-purple-400 transition-colors">Video Wall Rental</Link></li>
                            <li><Link to="/services/video-walls" className="hover:text-purple-400 transition-colors">Video Wall Trailer</Link></li>
                            <li><Link to="/services/photobooth" className="hover:text-purple-400 transition-colors">iPad Selfie Booths</Link></li>
                            <li><Link to="/services/photobooth" className="hover:text-purple-400 transition-colors">Mirror X Booths</Link></li>
                            <li><Link to="/services/lighting-karaoke" className="hover:text-purple-400 transition-colors">Uplighting Service</Link></li>
                            <li><Link to="/services/lighting-karaoke" className="hover:text-purple-400 transition-colors">Karaoke Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact / Newsletter */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="font-bold text-white text-lg">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex gap-3 items-start">
                                <Phone size={18} className="text-purple-400 mt-1 shrink-0" />
                                <span>+1 (678) 338-6333</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Mail size={18} className="text-purple-400 mt-1 shrink-0" />
                                <span>deejayprock@gmail.com</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <MapPin size={18} className="text-purple-400 mt-1 shrink-0" />
                                <span>Atlanta, GA & Surrounding Areas</span>
                            </li>
                        </ul>

                        <div className="pt-4">
                            <Link to="/contact" className="btn btn-outline w-full justify-between group">
                                Book Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} DJ P Rock Enterprises. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
