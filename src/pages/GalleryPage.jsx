import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Helmet } from 'react-helmet-async';
import { Play, Pause, X, ChevronLeft, ChevronRight, ZoomIn, Film, Image as ImageIcon, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxItem, setLightboxItem] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRefs = useRef({});

    // Gallery items - Images
    const galleryImages = [
        { id: 'img1', type: 'image', url: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'Live DJ Performance', category: 'events' },
        { id: 'img2', type: 'image', url: '/images/Dj-service-DJ-P-Rock.jpg', label: 'Wedding Reception Setup', category: 'weddings' },
        { id: 'img3', type: 'image', url: '/images/360-Photobooth-DJ-P-Rock.jpg', label: '360 Photo Booth Experience', category: 'photobooth' },
        { id: 'img4', type: 'image', url: '/images/Video-Wall-Rental-DJP-Rock.jpg', label: 'LED Video Wall Display', category: 'videowalls' },
        { id: 'img5', type: 'image', url: '/images/gallery-2-DJ-P-Rock.jpg', label: 'Wedding Dance Floor', category: 'weddings' },
        { id: 'img6', type: 'image', url: '/images/Mirror-X-Photobooth-DJ-P-Rock.jpg', label: 'Mirror X Booth Magic', category: 'photobooth' },
        { id: 'img7', type: 'image', url: '/images/DJP-Rock-DJ-Service-1.jpg', label: 'DJ Booth Setup', category: 'events' },
        { id: 'img8', type: 'image', url: '/images/Video-wall-trailer-rental-DJ-P-Rock.jpg', label: 'Mobile Video Wall Trailer', category: 'videowalls' },
        { id: 'img9', type: 'image', url: '/images/Karaoke-Service_1-DJ-P-Rock.jpg', label: 'Karaoke Night Fun', category: 'events' },
        { id: 'img10', type: 'image', url: '/images/Ipad-Selfie-Booths-DJP-Rock.jpg', label: 'iPad Selfie Station', category: 'photobooth' },
        { id: 'img11', type: 'image', url: '/images/video-wall-DJ-P-Rock.jpg', label: 'Custom Video Wall Graphics', category: 'videowalls' },
        { id: 'img12', type: 'image', url: '/images/360-Photobooth_1-DJ-P-Rock.jpg', label: '360 Booth in Action', category: 'photobooth' },
        { id: 'img13', type: 'image', url: '/images/gallery-1-DJ-P-Rock.jpg', label: 'Event Highlights', category: 'events' },
        { id: 'img14', type: 'image', url: '/images/DJP-Rock-DJ-Service.jpg', label: 'Professional DJ Setup', category: 'events' },
        { id: 'img15', type: 'image', url: '/images/2-Video-wall-trailer-rental-DJ-P-Rock.jpg', label: 'Video Wall Trailer Setup', category: 'videowalls' },
        { id: 'img16', type: 'image', url: '/images/Mirror-X-Photobooth-3-DJ-P-Rock.jpg', label: 'Mirror X Experience', category: 'photobooth' },
        { id: 'img17', type: 'image', url: '/images/DJ-P-Rock-Mirror-X.jpg', label: 'Mirror X Booth View', category: 'photobooth' },
        { id: 'img18', type: 'image', url: '/images/uplight package.png', label: 'Uplighting Package', category: 'events' },
        { id: 'img19', type: 'image', url: '/images/video wall trailer.jpg', label: 'Video Wall Trailer', category: 'videowalls' },
        { id: 'img20', type: 'image', url: '/images/DJP-Rock-About.jpg', label: 'DJ P Rock Portrait', category: 'events' },
    ];

    // Gallery items - Videos (All videos from the videos folder)
    const galleryVideos = [
        { id: 'vid1', type: 'video', url: '/videos/DJP-rock-Video.mp4', poster: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'DJ P Rock Showreel', category: 'events' },
        { id: 'vid2', type: 'video', url: '/videos/338242632_6876346655725776_418914813401828810_n.mp4', poster: '/images/Dj-service-DJ-P-Rock.jpg', label: 'Wedding Celebration', category: 'weddings' },
        { id: 'vid3', type: 'video', url: '/videos/354427767_6464429396952245_8824889260594315414_n.mp4', poster: '/images/360-Photobooth-DJ-P-Rock.jpg', label: '360 Booth Demo', category: 'photobooth' },
        { id: 'vid4', type: 'video', url: '/videos/354648895_6787890317901324_6329368328322202089_n.mp4', poster: '/images/gallery-2-DJ-P-Rock.jpg', label: 'Dance Floor Energy', category: 'events' },
        { id: 'vid5', type: 'video', url: '/videos/419555179_7286344661410086_5325344929735648350_n.mp4', poster: '/images/DJP-Rock-DJ-Service-1.jpg', label: 'Corporate Event', category: 'events' },
        { id: 'vid6', type: 'video', url: '/videos/430381246_7301717213244235_8903963807267410546_n.mp4', poster: '/images/Video-Wall-Rental-DJP-Rock.jpg', label: 'Video Wall Showcase', category: 'videowalls' },
        { id: 'vid7', type: 'video', url: '/videos/430837782_24838361779144652_8416391438980720873_n.mp4', poster: '/images/Mirror-X-Photobooth-DJ-P-Rock.jpg', label: 'Mirror Booth Highlights', category: 'photobooth' },
        { id: 'vid8', type: 'video', url: '/videos/430870202_6961928507269644_5214898286138296582_n.mp4', poster: '/images/Karaoke-Service_1-DJ-P-Rock.jpg', label: 'Party Vibes', category: 'events' },
        { id: 'vid9', type: 'video', url: '/videos/430878261_24901620526149861_5103826959282098289_n.mp4', poster: '/images/gallery-1-DJ-P-Rock.jpg', label: 'Live Event Moments', category: 'events' },
        { id: 'vid10', type: 'video', url: '/videos/430887900_7278279288916691_906353787875277135_n.mp4', poster: '/images/DJP-Rock-DJ-Service.jpg', label: 'DJ Performance', category: 'events' },
        { id: 'vid11', type: 'video', url: '/videos/431031150_6850957915016016_8271602794328388005_n.mp4', poster: '/images/360-Photobooth_1-DJ-P-Rock.jpg', label: '360 Photo Booth Fun', category: 'photobooth' },
        { id: 'vid12', type: 'video', url: '/videos/431080174_7134545569927269_5089015081536530268_n.mp4', poster: '/images/Video-wall-trailer-rental-DJ-P-Rock.jpg', label: 'Video Wall Event', category: 'videowalls' },
        { id: 'vid13', type: 'video', url: '/videos/431081051_7497627266947241_2796157370990487338_n.mp4', poster: '/images/Ipad-Selfie-Booths-DJP-Rock.jpg', label: 'Event Highlights Reel', category: 'events' },
        { id: 'vid14', type: 'video', url: '/videos/banner video.mp4', poster: '/images/DJ-P-Rock-Gallery_2.jpg', label: 'DJ P Rock Promo', category: 'events' },
    ];

    const allItems = [...galleryImages, ...galleryVideos];

    const filteredItems = activeFilter === 'all'
        ? allItems
        : activeFilter === 'videos'
            ? galleryVideos
            : activeFilter === 'images'
                ? galleryImages
                : allItems.filter(item => item.category === activeFilter);

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'videos', label: 'Videos', icon: Film },
        { id: 'images', label: 'Photos', icon: ImageIcon },
        { id: 'weddings', label: 'Weddings' },
        { id: 'events', label: 'Events' },
        { id: 'photobooth', label: 'Photo Booths' },
        { id: 'videowalls', label: 'Video Walls' },
    ];

    const openLightbox = (item) => {
        const index = filteredItems.findIndex(i => i.id === item.id);
        setLightboxIndex(index);
        setLightboxItem(item);
        setLightboxOpen(true);
        setIsVideoPlaying(item.type === 'video');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setLightboxItem(null);
        setIsVideoPlaying(false);
        document.body.style.overflow = '';
    };

    const navigateLightbox = (direction) => {
        let newIndex;
        if (direction === 'prev') {
            newIndex = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
        } else {
            newIndex = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
        }
        setLightboxIndex(newIndex);
        setLightboxItem(filteredItems[newIndex]);
        setIsVideoPlaying(filteredItems[newIndex].type === 'video');
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox('prev');
            if (e.key === 'ArrowRight') navigateLightbox('next');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, lightboxIndex]);

    const handleVideoHover = (videoId, play) => {
        const video = videoRefs.current[videoId];
        if (video) {
            if (play) {
                video.play().catch(() => { });
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Event Gallery & Videos | DJ P Rock Atlanta</title>
                <meta name="description" content="Browse photos and videos from DJ P Rock's events, weddings, corporate parties, and photo booth experiences in Atlanta. See our work in action!" />
                <meta name="keywords" content="DJ P Rock gallery, Atlanta DJ photos, wedding DJ videos, 360 photo booth videos, event photography, DJ gallery" />
            </Helmet>

            {/* Hero Section */}
            <div className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[70vh] bg-gradient-to-b from-purple-900/30 via-indigo-900/20 to-black z-0 pointer-events-none"></div>

                {/* Animated Background Elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                        <Film size={14} /> Media Gallery
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                        Our Work <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">In Action</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        From electrifying dance floors to magical photo booth moments—explore the energy we bring to every event.
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <section className="sticky top-20 z-40 bg-black/80 backdrop-blur-lg border-y border-white/10 py-4">
                <div className="container">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${activeFilter === filter.id
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {filter.icon && <filter.icon size={14} />}
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 bg-black min-h-screen">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => openLightbox(item)}
                                onMouseEnter={() => item.type === 'video' && handleVideoHover(item.id, true)}
                                onMouseLeave={() => item.type === 'video' && handleVideoHover(item.id, false)}
                                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                                    }`}
                                style={{ aspectRatio: index % 5 === 0 ? '1/1' : '4/3' }}
                            >
                                {item.type === 'image' ? (
                                    <img
                                        src={item.url}
                                        alt={item.label}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                ) : (
                                    <>
                                        <video
                                            ref={(el) => (videoRefs.current[item.id] = el)}
                                            src={item.url}
                                            poster={item.poster}
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Video Play Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Play className="text-white ml-1" size={28} fill="white" />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-purple-400 text-xs font-bold uppercase tracking-wider block mb-1">
                                                    {item.type === 'video' ? 'Video' : 'Photo'}
                                                </span>
                                                <span className="text-white font-bold text-lg">{item.label}</span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                                {item.type === 'video' ? (
                                                    <Play className="text-white ml-0.5" size={18} fill="white" />
                                                ) : (
                                                    <ZoomIn className="text-white" size={18} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Type Badge */}
                                <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${item.type === 'video' ? 'bg-pink-600' : 'bg-purple-600'
                                    } text-white`}>
                                    {item.type === 'video' ? <Film size={12} className="inline mr-1" /> : <ImageIcon size={12} className="inline mr-1" />}
                                    {item.type}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-gray-500 text-6xl mb-4">📷</div>
                            <h3 className="text-2xl font-bold text-white mb-2">No items found</h3>
                            <p className="text-gray-400">Try selecting a different filter</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-t from-purple-900/20 to-black">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Create Your Own Memories?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        Let's make your next event unforgettable. Book DJ P Rock and experience the magic.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/book" className="btn btn-primary px-8 py-4">Book Now</Link>
                        <Link to="/contact" className="btn btn-outline px-8 py-4">Get a Quote</Link>
                    </div>
                </div>
            </section>

            {/* Lightbox - rendered via Portal to bypass SmoothScroll transform */}
            {lightboxOpen && lightboxItem && createPortal(
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                    >
                        <X className="text-white" size={24} />
                    </button>

                    {/* Navigation */}
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                        className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                    >
                        <ChevronLeft className="text-white" size={24} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                        className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                    >
                        <ChevronRight className="text-white" size={24} />
                    </button>

                    {/* Content */}
                    <div
                        className="max-w-[90vw] max-h-[85vh] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {lightboxItem.type === 'image' ? (
                            <img
                                src={lightboxItem.url}
                                alt={lightboxItem.label}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                        ) : (
                            <div className="relative">
                                <video
                                    src={lightboxItem.url}
                                    poster={lightboxItem.poster}
                                    controls
                                    autoPlay
                                    muted={isMuted}
                                    className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                                />
                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                                >
                                    {isMuted ? <VolumeX className="text-white" size={18} /> : <Volume2 className="text-white" size={18} />}
                                </button>
                            </div>
                        )}

                        {/* Label */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                            <div className="flex items-center gap-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${lightboxItem.type === 'video' ? 'bg-pink-600' : 'bg-purple-600'
                                    } text-white`}>
                                    {lightboxItem.type}
                                </span>
                                <p className="text-white font-bold text-lg">{lightboxItem.label}</p>
                            </div>
                        </div>
                    </div>

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
                        {lightboxIndex + 1} / {filteredItems.length}
                    </div>
                </div>,
                document.body
            )}

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </>
    );
};

export default GalleryPage;
