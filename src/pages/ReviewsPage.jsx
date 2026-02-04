import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, ThumbsUp, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

// Google-style Review Card Component
const GoogleReviewCard = ({ name, avatar, date, rating, text, helpful, isLocalGuide, photos }) => (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
        {/* Header: Avatar, Name, Date */}
        <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0 shadow-md">
                {avatar || name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-white">{name}</h3>
                    {isLocalGuide && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                            Local Guide
                        </span>
                    )}
                </div>
                <p className="text-sm text-gray-400">{date}</p>
            </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-2 mb-3">
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className={i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-600 text-gray-600"}
                    />
                ))}
            </div>
        </div>

        {/* Review Text */}
        <p className="text-gray-300 leading-relaxed mb-4">{text}</p>

        {/* Review Photos (if any) */}
        {photos && photos.length > 0 && (
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {photos.map((photo, idx) => (
                    <img
                        key={idx}
                        src={photo}
                        alt="Review photo"
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                ))}
            </div>
        )}

        {/* Helpful Button */}
        <div className="flex items-center gap-4 pt-3 border-t border-white/10">
            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors">
                <ThumbsUp size={14} />
                <span>Helpful{helpful ? ` (${helpful})` : ''}</span>
            </button>
        </div>
    </div>
);

const ReviewsPage = () => {
    const reviews = [
        {
            name: "Sarah Mitchell",
            date: "2 weeks ago",
            rating: 5,
            isLocalGuide: true,
            text: "DJ P Rock was absolutely incredible at our wedding! He read the crowd perfectly and kept the dance floor packed all night. The planning process was smooth, and he really listened to our requests. The 360 photobooth was a HUGE hit with our guests. Highly recommended for any wedding or event!",
            helpful: 24,
            photos: ["/images/360-Photobooth-DJ-P-Rock.jpg"]
        },
        {
            name: "Marcus Thompson",
            date: "1 month ago",
            rating: 5,
            isLocalGuide: false,
            text: "We hired DJ P Rock for our company's annual gala in Atlanta, and he knocked it out of the park. Professional, punctual, and played a great mix that appealed to all ages. The video wall setup was stunning and really elevated our event. We'll definitely book him again next year!",
            helpful: 18
        },
        {
            name: "Jessica Williams",
            date: "3 weeks ago",
            rating: 5,
            isLocalGuide: true,
            text: "Best DJ ever! The lighting setup transformed our backyard, and the music was fire. He mixed old school hip hop with new hits just like I asked. The karaoke service was also a blast - everyone was singing! Thanks for making my 30th birthday unforgettable.",
            helpful: 31,
            photos: ["/images/uplight service.jpg", "/images/Karaoke-Service_1-DJ-P-Rock.jpg"]
        },
        {
            name: "Ashley Rodriguez",
            date: "2 months ago",
            rating: 5,
            isLocalGuide: false,
            text: "Our guests are still talking about how fun the music was at our reception! The Mirror X booth was also a huge hit - the photos came out so professional. Everything was handled seamlessly, and it took so much stress off us. Worth every penny!",
            helpful: 15
        },
        {
            name: "Turnbull Tech Solutions",
            date: "1 month ago",
            rating: 5,
            isLocalGuide: false,
            text: "The video wall trailer rental was a game changer for our outdoor product launch. High quality visuals, crystal clear sound, and DJ P Rock provided the full AV package we needed. Super professional and the team was easy to work with. Highly recommend for corporate events!",
            helpful: 12,
            photos: ["/images/Video-wall-trailer-rental-DJ-P-Rock.jpg"]
        },
        {
            name: "Amanda Garcia",
            date: "6 weeks ago",
            rating: 5,
            isLocalGuide: true,
            text: "My daughter's Sweet 16 was AMAZING thanks to DJ P Rock! He knew exactly what the teenagers wanted to hear but kept it appropriate. The Mirror X Booth was the highlight - the kids were taking photos all night. Great energy and very professional. Already booked him for my son's graduation party!",
            helpful: 27
        },
        {
            name: "David Chen",
            date: "3 months ago",
            rating: 5,
            isLocalGuide: false,
            text: "We've used DJ P Rock for multiple corporate events now and they never disappoint. The iPad selfie booths were perfect for our networking event - instant sharing to social media had everyone engaged. Top-tier service every single time.",
            helpful: 9
        },
        {
            name: "Rachel Howard",
            date: "1 week ago",
            rating: 5,
            isLocalGuide: true,
            text: "Just had our wedding reception this past Saturday and WOW! DJ P Rock absolutely crushed it. From the ceremony music to the last dance, everything was perfect. The uplighting made our venue look like a completely different space. If you're looking for a DJ in Atlanta, look no further!",
            helpful: 42,
            photos: ["/images/Dj-service-DJ-P-Rock.jpg"]
        }
    ];

    // Calculate average rating
    const totalReviews = reviews.length;
    const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1);

    return (
        <>
            <Helmet>
                <title>DJ P Rock Reviews | 5-Star Rated Atlanta DJ – Read What Clients Say</title>
                <meta name="description" content="Read what real clients are saying about DJ P Rock. With consistent 5-star ratings and standout service, our reviews speak for themselves." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-black to-[#0a0a0a]">
                <div className="container text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white mb-6">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Google Reviews
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Reviews</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Our work speaks for itself, but real feedback from clients always says it best. Browse 5-star reviews from weddings, corporate events, and private parties.
                    </p>
                </div>
            </section>



            {/* Reviews Grid */}
            <section className="py-16 bg-[#0a0a0a]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, i) => (
                            <GoogleReviewCard key={i} {...review} />
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-black">
                <div className="container text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
                    <p className="text-gray-400 text-lg mb-8">Join hundreds of happy clients who trusted DJ P Rock with their most important moments.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/book" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-1">
                            Book Your Event
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReviewsPage;
