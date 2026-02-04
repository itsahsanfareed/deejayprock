import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, Music, Smartphone, Tv, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PackageSection = ({ title, description, pricing, icon: Icon, color, features, image, imageAlt, reverse }) => (
    <section className="py-24 border-t border-white/5 relative overflow-hidden group">
        {/* Background Glow */}
        <div className={`absolute ${reverse ? '-left-1/4' : '-right-1/4'} top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-${color}-600/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-${color}-600/20 transition-colors duration-1000`}></div>

        <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className={`${reverse ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                    <div className={`w-16 h-16 rounded-2xl bg-${color}-500/20 flex items-center justify-center mb-8`}>
                        <Icon className={`text-${color}-400`} size={32} />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">{title}</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-white/10 pl-6">
                        {description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {features && features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className={`text-${color}-500 shrink-0`} size={18} />
                                <span className="text-sm font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm max-w-md">
                        <h4 className={`text-${color}-400 font-bold uppercase tracking-widest text-xs mb-4`}>Transparent Pricing</h4>
                        <div className="space-y-4">
                            {pricing.map((price, index) => (
                                <div key={index} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                    <span className="text-white font-bold">{price.hours}</span>
                                    <span className="text-2xl font-black text-white">${price.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link to="/book" className={`btn bg-${color}-600 hover:bg-${color}-500 text-white border-0 px-8 py-3`}>
                            BOOK {title.toUpperCase()}
                        </Link>
                    </div>
                </div>

                {/* Feature Image */}
                <div className={`${reverse ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                    <div className="aspect-square rounded-[3rem] overflow-hidden relative border border-white/10 group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl">
                        <img
                            src={image}
                            alt={imageAlt}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Overlay Badge */}
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${color}-500/20 border border-${color}-500/30 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-${color}-300 mb-3`}>
                                <div className={`w-2 h-2 rounded-full bg-${color}-500 animate-pulse`}></div>
                                Premium Experience
                            </div>
                            <p className="text-white text-lg font-bold">{title}</p>
                            <p className="text-white/70 text-sm">Professional Setup & Attendants Included</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

const PackagesPage = () => {
    return (
        <>
            <Helmet>
                <title>Packages & Pricing | DJ P Rock Atlanta</title>
                <meta name="description" content="Affordable DJ, Photobooth, and Event packages tailored for you. Transparent pricing for 360 Booths, iPad Selfie Stations, Mirror X, and DJ Services in Atlanta." />
            </Helmet>

            {/* Hero Section */}
            <div className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none"></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container relative z-10 text-center">
                    <span className="text-purple-400 font-bold tracking-widest text-sm uppercase mb-4 block">Tailored For You</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-8">
                        Choose Your <br />
                        <span className="text-gradient">Experience</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Select one of DJ P Rock's unique packages, and we'll make the occasion more extraordinary than it has ever been! Each package is designed to provide maximum value and unforgettable entertainment.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/book" className="btn btn-primary px-10 py-4 text-lg">
                            CHECK AVAILABILITY
                        </Link>
                    </div>
                </div>
            </div>

            {/* 360 Photo Booth Section */}
            <PackageSection
                title="360 Photo Booth"
                icon={Camera}
                color="pink"
                image="/images/360-Photobooth-DJ-P-Rock.jpg"
                imageAlt="360 Photo Booth at an event in Atlanta"
                reverse={false}
                description="With our cutting-edge 360 Photo Booth, featuring multimedia capabilities and immediate sharing possibilities, you can turn ordinary photos into high-energy, unforgettable video experiences. We capture every angle of the fun!"
                features={[
                    "Unlimited 360 Videos",
                    "Instant Sharing Station",
                    "Custom Overlay Design",
                    "Professional Attendant",
                    "Red Carpet VIP Setup",
                    "Fun Props Included"
                ]}
                pricing={[
                    { hours: "2 Hours", amount: "500" },
                    { hours: "3 Hours", amount: "650" },
                    { hours: "4 Hours", amount: "800" }
                ]}
            />

            {/* DJ Service Section */}
            <PackageSection
                title="DJ Service"
                icon={Music}
                color="purple"
                image="/images/Dj-service-DJ-P-Rock.jpg"
                imageAlt="DJ P Rock performing at a wedding in Atlanta"
                reverse={true}
                description="Reach the center of the celebration! This package includes our renowned DJ services, industry-standard sound equipment, and curated playlists to ensure a lively dance floor all night long."
                features={[
                    "Professional Master of Ceremonies",
                    "Premium Sound System",
                    "Wireless Microphones",
                    "Online Music Planning App",
                    "Ceremony & Reception Coverage",
                    "Back-up Equipment On-site"
                ]}
                pricing={[
                    { hours: "2 Hours", amount: "300" },
                    { hours: "3 Hours", amount: "400" },
                    { hours: "4 Hours", amount: "600" }
                ]}
            />

            {/* iPad Selfie Section */}
            <PackageSection
                title="iPad Selfie Booth"
                icon={Smartphone}
                color="blue"
                image="/images/Ipad-Selfie-Booths-DJP-Rock.jpg"
                imageAlt="iPad Selfie Booth setup at an Atlanta event"
                reverse={false}
                description="Our iPad Selfie Rental allows guests to instantly capture, share, and print their favorite images. Compact, sleek, and perfect for venues with limited space but unlimited fun requirements."
                features={[
                    "Digital Photos & Boomerangs",
                    "Filters & Digital Props",
                    "Instant Social Sharing",
                    "Custom Branding/Logos",
                    "Sleek Halo Light Ring",
                    "Data Capture Available"
                ]}
                pricing={[
                    { hours: "2 Hours", amount: "200" },
                    { hours: "3 Hours", amount: "300" },
                    { hours: "4 Hours", amount: "400" }
                ]}
            />

            {/* Mirror X Section */}
            <PackageSection
                title="Mirror X Booth"
                icon={Tv}
                color="rose"
                image="/images/Mirror-X-Photobooth-DJ-P-Rock.jpg"
                imageAlt="Mirror X Photo Booth at a corporate event"
                reverse={true}
                description="Fuse technology with elegance. The Mirror X offers a stunning full-length reflective touchscreen experience with animated colorful graphics that guide guests through an interactive photo session."
                features={[
                    "6ft Tall Interactive Mirror",
                    "Touch Screen Animations",
                    "High-Quality DSLR Photos",
                    "Premium Gold Frame",
                    "On-Glass Signature Feature",
                    "Unlimited Prints"
                ]}
                pricing={[
                    { hours: "2 Hours", amount: "200" },
                    { hours: "3 Hours", amount: "300" },
                    { hours: "4 Hours", amount: "400" }
                ]}
            />

            {/* Video Wall Section */}
            <PackageSection
                title="LED Video Wall"
                icon={Tv}
                color="cyan"
                image="/images/Video-Wall-Rental-DJP-Rock.jpg"
                imageAlt="LED Video Wall at an outdoor event in Atlanta"
                reverse={false}
                description="Make a massive visual impact with our LED video wall rentals. Perfect for outdoor events, concerts, and corporate presentations where you need stunning visibility even in daylight."
                features={[
                    "High-Brightness LED Panels",
                    "Indoor & Outdoor Options",
                    "Custom Screen Sizes",
                    "Content Display Support",
                    "Professional Setup & Takedown",
                    "On-Site Technician"
                ]}
                pricing={[
                    { hours: "4 Hours", amount: "800" },
                    { hours: "6 Hours", amount: "1100" },
                    { hours: "8 Hours", amount: "1400" }
                ]}
            />

            {/* Uplighting Section */}
            <PackageSection
                title="Uplighting Service"
                icon={Tv}
                color="amber"
                image="/images/uplight package.png"
                imageAlt="Uplighting service at a wedding venue"
                reverse={true}
                description="Transform any venue into a stunning visual masterpiece with our wireless LED uplighting. Choose from millions of colors to match your event theme and create the perfect ambiance."
                features={[
                    "Wireless LED Fixtures",
                    "Millions of Color Options",
                    "DMX Controllable",
                    "Battery Powered (No Cables)",
                    "Indoor & Outdoor Use",
                    "Professional Installation"
                ]}
                pricing={[
                    { hours: "10 Lights", amount: "200" },
                    { hours: "15 Lights", amount: "275" },
                    { hours: "20 Lights", amount: "350" }
                ]}
            />

            {/* Call to Action Footer */}
            <section className="py-24 bg-black text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"></div>
                <div className="container relative z-10">
                    <h2 className="text-4xl font-black mb-6 uppercase">Ready to Book?</h2>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">Secure your date today with a small deposit. Dates fill up fast!</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/book" className="btn btn-primary px-12 py-4 text-lg">Start Booking</Link>
                        <Link to="/contact" className="btn btn-outline px-12 py-4 text-lg">Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PackagesPage;
