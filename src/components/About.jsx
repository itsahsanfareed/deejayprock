import React from 'react';
import { User, Award, Headphones } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute right-0 top-20 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>

            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 md:order-1">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-2xl transform rotate-3 blur-2xl opacity-20"></div>
                        <div className="relative glass-panel rounded-2xl p-8 aspect-[4/5] flex items-center justify-center overflow-hidden">
                            {/* Placeholder pattern */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                            <div className="text-center z-10">
                                <User size={64} className="mx-auto mb-4 text-gray-600" />
                                <span className="text-gray-500 font-medium">DJ Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <span className="text-purple-400 font-medium tracking-wider text-sm mb-2 block">ABOUT THE ARTIST</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">More Than Just a <span className="text-gradient">DJ</span></h2>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            With over 10 years of experience rocking dance floors, DJ P Rock brings a unique blend of energy, professionalism, and musical versatility to every event. From intimate weddings to high-energy club nights, the goal is always the same: create an unforgettable atmosphere.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                                    <Headphones size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Masterful Mixing</h3>
                                    <p className="text-sm text-gray-400">Seamless transitions across Open Format, Hip-Hop, House, and Top 40.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Professional Experience</h3>
                                    <p className="text-sm text-gray-400">Top-tier sound equipment, intelligent lighting, and reliable planning services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
