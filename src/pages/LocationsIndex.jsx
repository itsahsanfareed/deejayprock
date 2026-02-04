import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Building, Star, Navigation, ArrowRight } from 'lucide-react';
import Contact from '../components/Contact';

const LocationsIndex = () => {
    // List of major service areas with metadata
    const majorCities = [
        {
            name: 'Atlanta',
            desc: 'The heart of our operations. We serve all neighborhoods from Midtown to Buckhead.',
            image: 'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?q=80&w=2070&auto=format&fit=crop'
        },
        {
            name: 'Buckhead',
            desc: 'Providing luxury entertainment for the city\'s most exclusive galas and weddings.',
            image: 'https://images.unsplash.com/photo-1579766922971-d4190c1cb27f?q=80&w=2071&auto=format&fit=crop'
        },
        {
            name: 'Marietta',
            desc: 'Serving the Cobb County area with professional DJ and photobooth services.',
            image: 'https://images.unsplash.com/photo-1596707328608-f1c2eb63c19e?q=80&w=1932&auto=format&fit=crop'
        },
        {
            name: 'Alpharetta',
            desc: 'High-end weddings and corporate events at Avalalon and surrounding venues.',
            image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop'
        }
    ];

    const allCities = [
        'Atlanta', 'Alpharetta', 'Brookhaven', 'Buckhead', 'Chamblee',
        'College Park', 'Decatur', 'Douglasville', 'Duluth', 'Dunwoody',
        'East Point', 'Johns Creek', 'Kennesaw', 'Lawrenceville', 'Lilburn',
        'Lithonia', 'Marietta', 'Morrow', 'Norcross', 'Peachtree City',
        'Riverdale', 'Roswell', 'Sandy Springs', 'Smyrna', 'Snellville',
        'Stone Mountain', 'Suwanee', 'Tucker', 'Vinings', 'Woodstock'
    ];

    const venues = [
        'The Biltmore Ballrooms', 'Chateau Elan', 'Terminus 330',
        'The Fox Theatre', 'Atlanta Botanical Garden', 'Ventanas',
        'Swan House', 'The Estate'
    ];

    return (
        <>
            <Helmet>
                <title>Service Areas | Atlanta Wedding DJ & Event Entertainment – DJ P Rock</title>
                <meta name="description" content="DJ P Rock serves the entire Metro Atlanta area and surrounding Georgia cities. Weddings, corporate events, and private parties in Buckhead, Midtown, Marietta, Alpharetta, and beyond." />
            </Helmet>

            <div className="pt-32 pb-20 container text-center">
                <span className="text-purple-400 font-bold tracking-widest text-sm uppercase mb-4 block">Atlanta DJ Service Areas</span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Areas We <span className="text-gradient">Serve</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
                    DJ P Rock is proud to provide DJ, 360 photo booth, and LED video wall services across Atlanta and surrounding cities in Georgia. From luxury Buckhead weddings to corporate events in Midtown, we bring premium entertainment to every venue.
                </p>
            </div>

            {/* Interactive Map Section (Visual Representation) */}
            <div className="container mb-24">
                <div className="glass-panel p-4 md:p-8 relative overflow-hidden rounded-3xl border-purple-500/20 bg-gray-900 aspect-[16/6] flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Atlanta_Skyline_from_Buckhead.jpg/1920px-Atlanta_Skyline_from_Buckhead.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    <div className="relative z-10 text-center">
                        <MapPin size={48} className="mx-auto mb-4 text-purple-500 animate-bounce" />
                        <h2 className="text-4xl font-bold mb-2">We Are Local.</h2>
                        <p className="text-gray-300">Serving a 50-mile radius around downtown Atlanta.</p>
                    </div>
                </div>
            </div>

            {/* Major Cities Cards */}
            <section className="container mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {majorCities.map((city) => (
                        <Link key={city.name} to={`/locations/${city.name.toLowerCase()}`} className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
                            <div className="absolute inset-0 bg-gray-900">
                                <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-40" />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                                <p className="text-sm text-gray-400 line-clamp-3 mb-4">{city.desc}</p>
                                <span className="text-purple-400 text-sm font-bold flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                                    Explore Area <ArrowRight size={14} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* SEO Directory List */}
            <section className="py-20 bg-black border-t border-white/5">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">All Georgia Locations</h2>
                            <p className="text-gray-400 mb-8">
                                Don't see your city listed? If you are in Georgia, there is a 99% chance we serve your area. Contact us for a custom travel quote.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
                                {allCities.map(city => (
                                    <Link key={city} to={`/locations/${city.toLowerCase()}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:w-3 transition-all"></div>
                                        {city}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-8">Venues We Love</h2>
                            <p className="text-gray-400 mb-8">
                                We are preferred vendors at many of Atlanta's top event spaces. Familiarity with your venue ensures a smooth setup.
                            </p>
                            <div className="space-y-4">
                                {venues.map(venue => (
                                    <div key={venue} className="flex items-center gap-4 p-4 glass-panel hover:bg-white/5 transition-colors">
                                        <Building className="text-gray-500" size={20} />
                                        <span className="font-bold">{venue}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-t from-purple-900/20 to-black">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-8">Planning an Event in Georgia?</h2>
                    <Contact />
                </div>
            </section>
        </>
    );
};

export default LocationsIndex;
