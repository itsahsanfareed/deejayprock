import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Music, Camera, Zap, Mic2, MapPin } from 'lucide-react';
import logo from '../assets/Logo-DJP-Rock.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMega(null);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        onMouseLeave={() => setActiveMega(null)}
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled || isOpen || activeMega
          ? 'py-4 bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-8 bg-transparent border-transparent'
          }`}
      >
        <div className="container flex justify-between items-center relative z-50 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="DJ P Rock" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="nav-link font-medium text-sm hover:text-purple-400">Home</Link>

            {/* Services Mega Menu Trigger */}
            <div
              className="relative group h-full py-4"
              onMouseEnter={() => setActiveMega('services')}
            >
              <button className="flex items-center gap-1 nav-link font-medium text-sm group-hover:text-purple-400">
                Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
            </div>

            {/* Service Areas Mega Menu Trigger */}
            <div
              className="relative group h-full py-4"
              onMouseEnter={() => setActiveMega('locations')}
            >
              <button className="flex items-center gap-1 nav-link font-medium text-sm group-hover:text-purple-400">
                Service Areas <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
            </div>

            <Link to="/packages" className="nav-link font-medium text-sm hover:text-purple-400">Packages</Link>
            <Link to="/reviews" className="nav-link font-medium text-sm hover:text-purple-400">Reviews</Link>
            <Link to="/blog" className="nav-link font-medium text-sm hover:text-purple-400">Blog</Link>

            {/* Media Mega Menu Trigger */}
            <div
              className="relative group h-full py-4"
              onMouseEnter={() => setActiveMega('media')}
            >
              <button className="flex items-center gap-1 nav-link font-medium text-sm group-hover:text-purple-400">
                Media <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
            </div>

            <Link to="/about" className="nav-link font-medium text-sm hover:text-purple-400">About</Link>

            <Link to="/book" className="btn btn-glow text-sm px-6 py-2 ml-4">Book Now</Link>
          </div>

          {/* Mobile Toggle - Animated Hamburger */}
          <button
            className="lg:hidden text-white z-[60] p-2 relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-2 w-6 h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
            </div>
          </button>
        </div>

        {/* MEGA MENUS */}
        <div className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 transition-all duration-300 overflow-hidden ${activeMega ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
          onMouseEnter={() => setActiveMega(activeMega)}
          onMouseLeave={() => setActiveMega(null)}
        >
          <div className="container py-12">
            {/* Services Mega Content */}
            {activeMega === 'services' && (
              <div className="grid grid-cols-4 gap-8">
                <div className="space-y-4">
                  <h3 className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-4">DJ & Audio</h3>
                  <Link to="/services/dj" className="flex items-start gap-3 group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                      <Music size={20} className="text-gray-300 group-hover:text-purple-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-purple-400">DJ Service</div>
                      <div className="text-xs text-gray-500">Professional DJ Entertainment</div>
                    </div>
                  </Link>
                  <Link to="/services/karaoke" className="flex items-start gap-3 group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <Mic2 size={20} className="text-gray-300 group-hover:text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-cyan-400">Karaoke Service</div>
                      <div className="text-xs text-gray-500">50,000+ Songs Library</div>
                    </div>
                  </Link>
                </div>

                <div className="space-y-4">
                  <h3 className="text-pink-400 font-bold uppercase tracking-widest text-xs mb-4">Photo Booths</h3>
                  <Link to="/services/360-photobooth" className="flex items-start gap-3 group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-pink-500/20 transition-colors">
                      <Camera size={20} className="text-gray-300 group-hover:text-pink-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-pink-400">360 Photobooth</div>
                      <div className="text-xs text-gray-500">Slow-Motion Videos</div>
                    </div>
                  </Link>
                  <Link to="/services/mirror-x" className="flex items-start gap-3 group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-rose-500/20 transition-colors">
                      <Camera size={20} className="text-gray-300 group-hover:text-rose-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-rose-400">Mirror X Booths</div>
                      <div className="text-xs text-gray-500">Interactive Mirror Photo</div>
                    </div>
                  </Link>
                  <Link to="/services/ipad-selfie" className="flex items-start gap-3 group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <Camera size={20} className="text-gray-300 group-hover:text-green-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-green-400">iPad Selfie Booths</div>
                      <div className="text-xs text-gray-500">Instant Social Sharing</div>
                    </div>
                  </Link>
                </div>

                <div className="space-y-4">
                  <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Video & Lighting</h3>
                  <Link to="/services/video-wall-rental" className="flex items-start gap-3 group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Zap size={20} className="text-gray-300 group-hover:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-blue-400">Video Wall Rental</div>
                      <div className="text-xs text-gray-500">Modular LED Screens</div>
                    </div>
                  </Link>
                  <Link to="/services/video-wall-trailer" className="flex items-start gap-3 group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                      <Zap size={20} className="text-gray-300 group-hover:text-indigo-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-indigo-400">Video Wall Trailer</div>
                      <div className="text-xs text-gray-500">Mobile Outdoor Display</div>
                    </div>
                  </Link>
                  <Link to="/services/uplighting" className="flex items-start gap-3 group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                      <Zap size={20} className="text-gray-300 group-hover:text-yellow-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-yellow-400">Uplighting Service</div>
                      <div className="text-xs text-gray-500">Venue Color Wash</div>
                    </div>
                  </Link>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-purple-900/40 to-black p-6 rounded-2xl border border-white/10 h-full flex flex-col justify-end relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-32 bg-purple-600/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <h4 className="text-2xl font-bold mb-2 relative z-10">Need a Custom Package?</h4>
                    <p className="text-gray-400 text-sm mb-4 relative z-10">Combine multiple services for your event. We'll create the perfect entertainment setup.</p>
                    <Link to="/services" className="text-white font-bold text-sm hover:underline relative z-10 flex items-center gap-2">View All Services <span className="text-purple-400">→</span></Link>
                  </div>
                </div>
              </div>
            )}

            {/* Locations Mega Content */}
            {activeMega === 'locations' && (
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-3 grid grid-cols-3 gap-y-4 gap-x-8">
                  {['Atlanta', 'Buckhead', 'Midtown', 'Alpharetta', 'Roswell', 'Marietta', 'Sandy Springs', 'Duluth', 'Norcross', 'Decatur', 'Smyrna', 'Kennesaw'].map(city => (
                    <Link key={city} to={`/locations/${city.toLowerCase()}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <MapPin size={14} className="text-purple-500" />
                      {city}
                    </Link>
                  ))}
                </div>
                <div className="col-span-1">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 h-full">
                    <h4 className="text-lg font-bold mb-2 text-white">Travel Info</h4>
                    <p className="text-xs text-gray-400 mb-4">We serve the entire Metro Atlanta area with NO travel fees. For events outside 50 miles, contact us for a custom quote.</p>
                    <Link to="/locations" className="btn btn-outline w-full text-xs py-2">View Service Map</Link>
                  </div>
                </div>
              </div>
            )}

            {/* Media Mega Content */}
            {activeMega === 'media' && (
              <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                <Link to="/gallery" className="group block relative overflow-hidden rounded-2xl aspect-video bg-gray-900 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform">
                    <Camera size={64} className="text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Event Gallery</h3>
                    <p className="text-sm text-gray-400">See our latest events</p>
                  </div>
                </Link>

                <Link to="/media/dj-stream" className="group block relative overflow-hidden rounded-2xl aspect-video bg-gray-900 border border-white/10 hover:border-red-500/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform">
                    <Zap size={64} className="text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors flex items-center gap-2">
                      Live Stream <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    </h3>
                    <p className="text-sm text-gray-400">Watch DJ P Rock Live</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* ============================================
          IMPRESSIVE ANIMATED MOBILE MENU
          ============================================ */}
      </nav>

      {/* Mobile Menu - Placed OUTSIDE nav to avoid overflow issues */}

      {/* Animated Background Layers */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-700 ${isOpen ? 'visible' : 'invisible pointer-events-none'
          }`}
      >
        {/* Dark overlay sweep */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-black via-[#0a0a15] to-black transition-transform duration-500 ease-out origin-right ${isOpen ? 'scale-x-100' : 'scale-x-0'
            }`}
          style={{ transitionDelay: isOpen ? '0ms' : '150ms' }}
        />

        {/* Animated Glow Orbs - Subtle blue accents only */}
        <div className={`absolute top-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] transition-all duration-1000 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`} />
        <div className={`absolute bottom-20 -right-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] transition-all duration-1000 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`} style={{ transitionDelay: '200ms' }} />

        {/* Animated Lines / Sound Waves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'
                }`}
              style={{
                top: `${20 + i * 15}%`,
                transitionDelay: `${300 + i * 100}ms`,
                transform: isOpen ? 'scaleX(1)' : 'scaleX(0)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden fixed inset-0 z-40 flex flex-col overflow-y-auto ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        style={{ paddingTop: '100px' }}
      >
        <div className="flex flex-col px-8 pb-12 relative z-10">

          {/* Main Navigation Links - Staggered Animation */}
          <nav className="space-y-1 mb-8">
            {[
              { to: '/', label: 'Home', delay: 0 },
              { to: '/services', label: 'Services', delay: 50 },
              { to: '/packages', label: 'Packages', delay: 100 },
              { to: '/gallery', label: 'Gallery', delay: 150 },
              { to: '/reviews', label: 'Reviews', delay: 200 },
              { to: '/about', label: 'About', delay: 250 },
              { to: '/contact', label: 'Contact', delay: 300 },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`block text-2xl sm:text-3xl font-bold text-white py-2 transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 ${isOpen
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
                  }`}
                style={{ transitionDelay: isOpen ? `${400 + item.delay}ms` : '0ms' }}
                onClick={() => setIsOpen(false)}
              >
                <span className="inline-block hover:translate-x-4 transition-transform duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Service Quick Links - Animated Grid */}
          <div
            className={`mb-8 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: isOpen ? '700ms' : '0ms' }}
          >
            <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">Quick Access</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { to: '/services/dj', label: 'DJ Service', icon: <Music size={16} /> },
                { to: '/services/360-photobooth', label: '360 Booth', icon: <Camera size={16} /> },
                { to: '/services/video-wall-rental', label: 'Video Wall', icon: <Zap size={16} /> },
                { to: '/services/karaoke', label: 'Karaoke', icon: <Mic2 size={16} /> },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="py-3 px-4 bg-white/5 backdrop-blur-sm rounded-xl text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all border border-white/5 hover:border-purple-500/30 flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-purple-400">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Animated */}
          <Link
            to="/book"
            className={`relative overflow-hidden group w-full py-5 rounded-2xl text-center font-bold text-lg transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: isOpen ? '800ms' : '0ms' }}
            onClick={() => setIsOpen(false)}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-gradient-x" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-white flex items-center justify-center gap-2">
              Book Your Event
            </span>
          </Link>

          {/* Contact Info - Animated */}
          <div
            className={`mt-8 text-center transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: isOpen ? '900ms' : '0ms' }}
          >
            <a href="tel:+16783386333" className="inline-block text-xl font-bold text-white hover:text-purple-400 transition-colors">
              (678) 338-6333
            </a>
            <p className="text-gray-500 text-sm mt-2">Atlanta, GA & Surrounding Areas</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-6">
              {[
                { name: 'Instagram', icon: <Camera size={18} /> },
                { name: 'Facebook', icon: <Music size={18} /> },
                { name: 'Youtube', icon: <Zap size={18} /> }
              ].map((social, i) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                  style={{ transitionDelay: isOpen ? `${1000 + i * 100}ms` : '0ms' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
