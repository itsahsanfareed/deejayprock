import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id="contact" className="section relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute left-[-20%] bottom-[-20%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-purple-400 font-medium tracking-wider text-sm mb-2 block">GET IN TOUCH</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create <br />Something <span className="text-gradient">Amazing</span></h2>
                        <p className="text-gray-400 mb-8 max-w-md text-lg">
                            Ready to take your event to the next level? Fill out the form or contact us directly to check availability and packages.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 glass-panel rounded-full text-white group-hover:bg-purple-500/20 transition-colors">
                                    <Phone size={24} />
                                </div>
                                <span className="text-lg font-medium">+1 (678) 338-6333</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 glass-panel rounded-full text-white group-hover:bg-purple-500/20 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <span className="text-lg font-medium">deejayprock@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 glass-panel rounded-full text-white group-hover:bg-purple-500/20 transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <span className="text-lg font-medium">Atlanta, GA, United States</span>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
};
export default Contact;
