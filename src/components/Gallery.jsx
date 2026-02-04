import React from 'react';

const Gallery = () => {
    // Using DJ P Rock's actual event images
    const images = [
        { id: 1, url: '/images/DJ-P-Rock-Gallery_2.jpg', span: '', label: 'Live Event' },
        { id: 2, url: '/images/Dj-service-DJ-P-Rock.jpg', span: 'md:col-span-2', label: 'DJ Service' },
        { id: 3, url: '/images/360-Photobooth-DJ-P-Rock.jpg', span: '', label: '360 Photobooth' },
        { id: 4, url: '/images/Video-Wall-Rental-DJP-Rock.jpg', span: '', label: 'Video Wall' },
        { id: 5, url: '/images/gallery-2-DJ-P-Rock.jpg', span: 'md:col-span-2', label: 'Wedding Reception' },
    ];

    return (
        <section id="gallery" className="section bg-black/50">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-purple-400 font-medium tracking-wider text-sm mb-2 block">MOMENTS</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Event <span className="text-gradient">Gallery</span></h2>
                    <p className="text-gray-400">Capturing the energy of the night.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {images.map((img) => (
                        <div key={img.id} className={`group relative overflow-hidden rounded-2xl ${img.span} bg-white/5`}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 z-10">
                                <div>
                                    <span className="text-purple-400 text-sm font-bold tracking-wider mb-1 block translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">DJ P ROCK</span>
                                    <span className="font-bold text-xl text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.label}</span>
                                </div>
                            </div>

                            <img
                                src={img.url}
                                alt={`DJ P Rock ${img.label}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Gallery;
