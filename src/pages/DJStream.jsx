import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Music, Headphones, Play, ExternalLink, Radio, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DJStream = () => {
    return (
        <>
            <Helmet>
                <title>DJ Mixes & Live Sets | DJ P Rock Atlanta</title>
                <meta name="description" content="Listen to DJ P Rock's mixes on SoundCloud. Experience high-energy DJ sets from Atlanta's premier event DJ." />
            </Helmet>

            {/* Hero Banner */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/DJP-Rock-DJ-Service.jpg"
                        alt="DJ P Rock performing live"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
                </div>

                {/* Animated Elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-500/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>

                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 py-3 px-6 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold uppercase tracking-widest mb-8">
                        <Radio size={18} className="animate-pulse" />
                        Now Streaming
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        DJ P Rock <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">Mixes</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Listen to exclusive mixes, live sets, and party vibes straight from Atlanta's #1 event DJ.
                    </p>
                </div>
            </div>

            <div className="py-20">
                {/* YouTube Section */}
                <div className="container max-w-5xl mx-auto mb-16">
                    <div className="bg-gradient-to-br from-red-900/20 to-black rounded-3xl border border-red-500/20 overflow-hidden">
                        {/* YouTube Header */}
                        <div className="p-6 border-b border-white/10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">YouTube</h2>
                                <p className="text-sm text-gray-400">Watch DJ P Rock's videos & performances</p>
                            </div>
                        </div>

                        {/* YouTube Channel Preview */}
                        <div className="p-6">
                            {/* Channel Banner */}
                            <a
                                href="https://www.youtube.com/@paulrivers7935"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative rounded-xl overflow-hidden group cursor-pointer"
                            >
                                <div className="aspect-video bg-gradient-to-br from-red-900/40 via-red-800/30 to-black flex items-center justify-center relative overflow-hidden">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500 rounded-full blur-[60px]"></div>
                                        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600 rounded-full blur-[80px]"></div>
                                    </div>

                                    {/* Play Button */}
                                    <div className="relative z-10 flex flex-col items-center gap-4">
                                        <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300 shadow-2xl shadow-red-500/50">
                                            <Play className="text-white ml-1" size={40} fill="white" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-white font-bold text-xl">DJ P Rock</p>
                                            <p className="text-gray-300 text-sm">Watch on YouTube</p>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </a>

                            {/* Action Button */}
                            <div className="mt-6 text-center">
                                <a
                                    href="https://www.youtube.com/@paulrivers7935"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn px-8 py-3 inline-flex items-center gap-2 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
                                    style={{ backgroundColor: '#c4302b' }}
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                    Subscribe on YouTube
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SoundCloud Section */}
                <div className="container max-w-5xl mx-auto mb-16">
                    <div className="bg-gradient-to-br from-orange-900/20 to-black rounded-3xl border border-orange-500/20 overflow-hidden">
                        {/* SoundCloud Header */}
                        <div className="p-6 border-b border-white/10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                                <Volume2 className="text-white" size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">SoundCloud</h2>
                                <p className="text-sm text-gray-400">Stream DJ P Rock's mixes</p>
                            </div>
                        </div>

                        {/* SoundCloud Profile Preview */}
                        <div className="p-6">
                            {/* Profile Banner */}
                            <a
                                href="https://soundcloud.com/paul-rivers-6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative rounded-xl overflow-hidden group cursor-pointer"
                            >
                                <div className="aspect-video bg-gradient-to-br from-orange-900/40 via-orange-800/30 to-black flex items-center justify-center relative overflow-hidden">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500 rounded-full blur-[60px]"></div>
                                        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-500 rounded-full blur-[80px]"></div>
                                    </div>

                                    {/* Sound Wave Bars */}
                                    <div className="relative z-10 flex flex-col items-center gap-4">
                                        <div className="flex items-end gap-1.5 h-20">
                                            {[35, 60, 45, 80, 55, 70, 40, 75, 50, 65, 35, 80, 45].map((height, i) => (
                                                <div
                                                    key={i}
                                                    className="w-2 bg-gradient-to-t from-orange-500 to-pink-500 rounded-full group-hover:animate-pulse"
                                                    style={{
                                                        height: `${height}%`,
                                                        animationDelay: `${i * 0.1}s`
                                                    }}
                                                ></div>
                                            ))}
                                        </div>
                                        <div className="text-center">
                                            <p className="text-white font-bold text-xl">DJ P Rock</p>
                                            <p className="text-gray-300 text-sm">Listen on SoundCloud</p>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </a>

                            {/* Action Button */}
                            <div className="mt-6 text-center">
                                <a
                                    href="https://soundcloud.com/paul-rivers-6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn px-8 py-3 inline-flex items-center gap-2 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
                                    style={{ backgroundColor: '#ff5500' }}
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.053.05.098.101.098.05 0 .09-.045.099-.098l.255-2.105-.27-2.154c-.009-.055-.05-.1-.084-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.014.057.045.094.09.094s.089-.037.099-.094l.21-1.319-.21-1.334c-.01-.057-.044-.081-.089-.081zm1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.104.106.104.061 0 .12-.044.12-.104l.24-2.474-.24-2.547c0-.06-.059-.104-.12-.104zm.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.138l.24-2.544-.24-2.656c-.015-.074-.074-.119-.166-.119zm1.065.105c-.09 0-.15.074-.165.164l-.18 2.549.18 2.505c.015.09.075.164.165.164.089 0 .165-.074.18-.164l.21-2.505-.21-2.549c-.015-.09-.091-.164-.18-.164zm1.124-.599c-.105 0-.18.075-.194.18l-.165 3.118.165 2.459c.015.105.09.18.195.18.104 0 .18-.075.194-.18l.195-2.474-.195-3.103c-.015-.105-.09-.18-.194-.18zm1.065 0c-.119 0-.195.09-.21.195l-.149 3.125.149 2.444c.015.12.091.195.21.195.12 0 .195-.075.21-.195l.165-2.444-.165-3.125c-.015-.105-.09-.195-.21-.195zm1.155-.405c-.135 0-.225.09-.24.225l-.12 3.72.135 2.414c.015.135.105.225.225.225s.225-.09.24-.225l.149-2.414-.149-3.72c-.015-.135-.105-.225-.24-.225zm1.095-.195c-.135 0-.24.105-.24.24l-.12 3.915.12 2.384c0 .135.105.24.24.24.15 0 .255-.105.255-.24l.135-2.384-.135-3.915c0-.135-.105-.24-.255-.24zm1.17-.27c-.015 0-.165.105-.165.255l-.09 4.185.09 2.354c0 .15.12.27.27.27.135 0 .255-.12.255-.27l.105-2.354-.105-4.185c0-.15-.135-.255-.27-.255h-.09zm1.17-.225c-.165 0-.3.135-.3.3v.03l-.075 4.38.09 2.31c0 .165.135.3.285.3.165 0 .3-.135.3-.3l.09-2.325-.09-4.395c0-.165-.135-.3-.3-.3zm1.215-.315c-.18 0-.315.15-.315.33v.015l-.06 4.63.06 2.295c0 .18.135.33.315.33.165 0 .315-.135.315-.33l.075-2.295-.075-4.645c0-.18-.15-.33-.315-.33zm1.155-.06c-.195 0-.345.15-.345.345V9.93l-.06 4.935.06 2.28c0 .195.15.345.345.345.195 0 .345-.15.36-.345l.06-2.28-.06-4.935v-.015c-.015-.195-.165-.345-.36-.345zm3.13.615c-.225 0-.4.03-.585.06-.015-.225-.195-.39-.42-.39-.12 0-.345.15-.345.36v7.245c0 .21.165.36.375.39.045 0 .165 0 .195-.015 2.37 0 4.29-1.92 4.29-4.29s-1.92-4.29-4.29-4.29l-.22-.07z" />
                                    </svg>
                                    Follow on SoundCloud
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="container max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Music className="text-purple-400" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Party Mixes</h3>
                            <p className="text-gray-400 text-sm">High-energy sets perfect for any celebration</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Headphones className="text-pink-400" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Wedding Sets</h3>
                            <p className="text-gray-400 text-sm">Elegant mixes for your special day</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="text-blue-400" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Live Recordings</h3>
                            <p className="text-gray-400 text-sm">Recorded live at Atlanta events</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-8 mb-16">
                        <h3 className="text-2xl font-bold text-white text-center mb-6">Follow DJ P Rock</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://www.youtube.com/@paulrivers7935"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-red-500/20 text-red-400 rounded-full font-bold hover:bg-red-500/30 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                YouTube
                            </a>
                            <a
                                href="https://soundcloud.com/paul-rivers-6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-orange-500/20 text-orange-400 rounded-full font-bold hover:bg-orange-500/30 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.053.05.098.101.098.05 0 .09-.045.099-.098l.255-2.105-.27-2.154c-.009-.055-.05-.1-.084-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.014.057.045.094.09.094s.089-.037.099-.094l.21-1.319-.21-1.334c-.01-.057-.044-.081-.089-.081zm1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.104.106.104.061 0 .12-.044.12-.104l.24-2.474-.24-2.547c0-.06-.059-.104-.12-.104zm.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.138l.24-2.544-.24-2.656c-.015-.074-.074-.119-.166-.119zm1.065.105c-.09 0-.15.074-.165.164l-.18 2.549.18 2.505c.015.09.075.164.165.164.089 0 .165-.074.18-.164l.21-2.505-.21-2.549c-.015-.09-.091-.164-.18-.164zm1.124-.599c-.105 0-.18.075-.194.18l-.165 3.118.165 2.459c.015.105.09.18.195.18.104 0 .18-.075.194-.18l.195-2.474-.195-3.103c-.015-.105-.09-.18-.194-.18zm1.065 0c-.119 0-.195.09-.21.195l-.149 3.125.149 2.444c.015.12.091.195.21.195.12 0 .195-.075.21-.195l.165-2.444-.165-3.125c-.015-.105-.09-.195-.21-.195zm1.155-.405c-.135 0-.225.09-.24.225l-.12 3.72.135 2.414c.015.135.105.225.225.225s.225-.09.24-.225l.149-2.414-.149-3.72c-.015-.135-.105-.225-.24-.225zm1.095-.195c-.135 0-.24.105-.24.24l-.12 3.915.12 2.384c0 .135.105.24.24.24.15 0 .255-.105.255-.24l.135-2.384-.135-3.915c0-.135-.105-.24-.255-.24zm1.17-.27c-.015 0-.165.105-.165.255l-.09 4.185.09 2.354c0 .15.12.27.27.27.135 0 .255-.12.255-.27l.105-2.354-.105-4.185c0-.15-.135-.255-.27-.255h-.09zm1.17-.225c-.165 0-.3.135-.3.3v.03l-.075 4.38.09 2.31c0 .165.135.3.285.3.165 0 .3-.135.3-.3l.09-2.325-.09-4.395c0-.165-.135-.3-.3-.3zm1.215-.315c-.18 0-.315.15-.315.33v.015l-.06 4.63.06 2.295c0 .18.135.33.315.33.165 0 .315-.135.315-.33l.075-2.295-.075-4.645c0-.18-.15-.33-.315-.33zm1.155-.06c-.195 0-.345.15-.345.345V9.93l-.06 4.935.06 2.28c0 .195.15.345.345.345.195 0 .345-.15.36-.345l.06-2.28-.06-4.935v-.015c-.015-.195-.165-.345-.36-.345zm3.13.615c-.225 0-.4.03-.585.06-.015-.225-.195-.39-.42-.39-.12 0-.345.15-.345.36v7.245c0 .21.165.36.375.39.045 0 .165 0 .195-.015 2.37 0 4.29-1.92 4.29-4.29s-1.92-4.29-4.29-4.29l-.22-.07z" />
                                </svg>
                                SoundCloud
                            </a>
                            <a
                                href="https://www.instagram.com/deejayprock"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-pink-500/20 text-pink-400 rounded-full font-bold hover:bg-pink-500/30 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                Instagram
                            </a>
                            <a
                                href="https://www.facebook.com/DEEJAYPROCKATLANTA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-blue-500/20 text-blue-400 rounded-full font-bold hover:bg-blue-500/30 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Facebook
                            </a>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-3xl p-10 text-center border border-purple-500/20">
                        <h2 className="text-3xl font-bold text-white mb-4">Want DJ P Rock at Your Event?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Experience the energy and professionalism live. Book DJ P Rock for weddings, corporate events, and private parties in Atlanta.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/book" className="btn btn-primary px-8 py-4">Book Now</Link>
                            <Link to="/contact" className="btn btn-outline px-8 py-4">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DJStream;
