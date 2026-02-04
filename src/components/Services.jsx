import React from 'react';
import { Heart, Music, Mic2 } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Heart size={32} />,
            title: "Weddings",
            desc: "Unforgettable wedding entertainment. From the ceremony specifics to the reception dance floor, we create the perfect soundtrack for your special day.",
            link: "#contact"
        },
        {
            icon: <Music size={32} />,
            title: "Private Parties",
            desc: "Birthdays, anniversaries, or just because. We bring the club atmosphere to your private event with high-energy mixes and lighting.",
            link: "#contact"
        },
        {
            icon: <Mic2 size={32} />,
            title: "Corporate Events",
            desc: "Professional sound and lighting for company parties, product launches, and conferences. Reliable and classy entertainment.",
            link: "#contact"
        }
    ];

    return (
        <section id="services" className="section relative">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-blue-400 font-medium tracking-wider text-sm mb-2 block">WHAT WE DO</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Services</span></h2>
                    <p className="text-gray-400">Tailored entertainment packages for every occasion.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-start bg-gradient-to-b from-white/5 to-transparent">
                            <div className="mb-6 p-4 rounded-full bg-white/5 w-fit text-purple-400 border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                            <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{s.desc}</p>
                            <a href={s.link} className="text-sm font-semibold text-white group flex items-center hover:text-purple-400 transition-colors">
                                Get a Quote <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services;
