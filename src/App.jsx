import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layout/Layout';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

// Critical - load immediately
import Home from './pages/Home';

// Lazy load all other pages for faster initial load
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LocationsIndex = lazy(() => import('./pages/LocationsIndex'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));

// All 8 individual service pages
const DJService = lazy(() => import('./pages/services/DJService'));
const Photobooth360 = lazy(() => import('./pages/services/Photobooth360'));
const MirrorXBooth = lazy(() => import('./pages/services/MirrorXBooth'));
const IPadSelfieBooth = lazy(() => import('./pages/services/IPadSelfieBooth'));
const VideoWallRental = lazy(() => import('./pages/services/VideoWallRental'));
const VideoWallTrailer = lazy(() => import('./pages/services/VideoWallTrailer'));
const UplightingService = lazy(() => import('./pages/services/UplightingService'));
const KaraokeService = lazy(() => import('./pages/services/KaraokeService'));

// Legacy routes (keep for backward compatibility)
const Photobooth = lazy(() => import('./pages/services/Photobooth'));
const VideoWalls = lazy(() => import('./pages/services/VideoWalls'));
const LightingKaraoke = lazy(() => import('./pages/services/LightingKaraoke'));

const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const BlogPost1 = lazy(() => import('./pages/blogs/BestWeddingDJAtlanta'));
const BlogPost2 = lazy(() => import('./pages/blogs/PhotoboothGuide'));
const BlogPost3 = lazy(() => import('./pages/blogs/WeddingReceptionSongs'));
const BlogPost4 = lazy(() => import('./pages/blogs/LEDvsProjector'));
const BlogPost5 = lazy(() => import('./pages/blogs/CorporateHolidayParty'));
const BlogPost6 = lazy(() => import('./pages/blogs/PhotoBoothTrends2025'));
const DJStream = lazy(() => import('./pages/DJStream'));

// Minimal loading fallback - fast render
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />

              {/* Individual Service Pages */}
              <Route path="services/dj" element={<DJService />} />
              <Route path="services/360-photobooth" element={<Photobooth360 />} />
              <Route path="services/mirror-x" element={<MirrorXBooth />} />
              <Route path="services/ipad-selfie" element={<IPadSelfieBooth />} />
              <Route path="services/video-wall-rental" element={<VideoWallRental />} />
              <Route path="services/video-wall-trailer" element={<VideoWallTrailer />} />
              <Route path="services/uplighting" element={<UplightingService />} />
              <Route path="services/karaoke" element={<KaraokeService />} />

              {/* Legacy routes - keep for backward compatibility */}
              <Route path="services/photobooth" element={<Photobooth />} />
              <Route path="services/video-walls" element={<VideoWalls />} />
              <Route path="services/lighting-karaoke" element={<LightingKaraoke />} />

              <Route path="gallery" element={<GalleryPage />} />
              <Route path="media/dj-stream" element={<DJStream />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="packages" element={<PackagesPage />} />
              <Route path="blog" element={<BlogIndex />} />
              <Route path="blog/how-to-choose-best-wedding-dj-atlanta" element={<BlogPost1 />} />
              <Route path="blog/why-corporate-events-need-360-photobooths" element={<BlogPost2 />} />
              <Route path="blog/top-wedding-reception-songs-2025" element={<BlogPost3 />} />
              <Route path="blog/led-video-wall-vs-projector" element={<BlogPost4 />} />
              <Route path="blog/corporate-holiday-party-planning-atlanta" element={<BlogPost5 />} />
              <Route path="blog/photo-booth-trends-2025" element={<BlogPost6 />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="locations" element={<LocationsIndex />} />
              <Route path="locations/:city" element={<LocationPage />} />
              <Route path="book" element={<BookAppointment />} />
            </Route>
          </Routes>
        </SmoothScroll>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

