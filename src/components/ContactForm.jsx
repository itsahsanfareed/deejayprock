import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = ({ className = "" }) => {
    return (
        <form className={`glass-panel p-8 rounded-2xl space-y-4 shadow-2xl shadow-purple-900/10 ${className}`} onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 ml-1 uppercase">Name</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-all text-white placeholder-gray-600" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 ml-1 uppercase">Email</label>
                    <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-all text-white placeholder-gray-600" placeholder="john@example.com" />
                </div>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 ml-1 uppercase">Event Type</label>
                <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-all text-white appearance-none">
                    <option>Wedding</option>
                    <option>Private Party</option>
                    <option>Corporate Event</option>
                    <option>Club / Festival</option>
                    <option>Other</option>
                </select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 ml-1 uppercase">Message</label>
                <textarea rows="4" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-all text-white placeholder-gray-600" placeholder="Tell us about your event details..."></textarea>
            </div>

            <button className="btn btn-primary w-full group mt-2">
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </form>
    );
};

export default ContactForm;
