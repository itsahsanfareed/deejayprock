import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, MapPin, Music, Send, User, PartyPopper, Phone, Mail, CheckCircle, ChevronRight, Sparkles, Heart, Building2, Cake, GraduationCap, Disc } from 'lucide-react';

const BookAppointment = () => {
    const [step, setStep] = useState(1);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        eventType: '',
        venue: '',
        guestCount: '',
        details: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => setIsSubmitted(true), 1000);
    };

    const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const eventTypes = [
        { id: 'wedding', label: 'Wedding', icon: Heart, desc: 'Ceremony & Reception', color: 'text-pink-500' },
        { id: 'corporate', label: 'Corporate', icon: Building2, desc: 'Company Events', color: 'text-blue-500' },
        { id: 'birthday', label: 'Birthday', icon: Cake, desc: 'Private Parties', color: 'text-orange-500' },
        { id: 'prom', label: 'School Event', icon: GraduationCap, desc: 'Prom & Graduation', color: 'text-yellow-500' },
        { id: 'club', label: 'Club / Lounge', icon: Disc, desc: 'Nightlife & Festivals', color: 'text-purple-500' },
        { id: 'other', label: 'Other', icon: Sparkles, desc: 'Something Unique', color: 'text-green-500' },
    ];

    return (
        <>
            <Helmet>
                <title>Book DJ P Rock | Atlanta's Premier Event DJ</title>
                <meta name="description" content="Easily book DJ P Rock for your wedding, corporate event, or private party in Atlanta. Check availability and get a quote in minutes." />
            </Helmet>

            <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none"></div>

                <div className="container max-w-5xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <Sparkles size={14} /> Easy 3-Step Booking
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                            Book Your <span className="text-gradient">Experience</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-xl mx-auto">
                            Get a quote in under 2 minutes. No obligations, just vibes.
                        </p>
                    </div>

                    {/* Progress Bar */}
                    {!isSubmitted && (
                        <div className="max-w-md mx-auto mb-12">
                            <div className="flex items-center justify-between mb-2">
                                {[1, 2, 3].map((s) => (
                                    <div key={s} className="flex items-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= s ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-500'}`}>
                                            {step > s ? <CheckCircle size={20} /> : s}
                                        </div>
                                        {s < 3 && <div className={`w-16 md:w-24 h-1 mx-2 rounded-full transition-all ${step > s ? 'bg-purple-600' : 'bg-white/10'}`}></div>}
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 px-1">
                                <span>Event Type</span>
                                <span>Your Details</span>
                                <span>Confirm</span>
                            </div>
                        </div>
                    )}

                    {/* Form Container */}
                    <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 max-w-3xl mx-auto">
                        {isSubmitted ? (
                            /* Success State */
                            <div className="text-center py-12">
                                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(34,197,94,0.5)]">
                                    <CheckCircle className="w-12 h-12 text-black" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">You're All Set!</h2>
                                <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
                                    Thanks, <strong className="text-white">{formState.name.split(' ')[0]}</strong>! We've received your booking request and will contact you within 24 hours with availability and a custom quote.
                                </p>
                                <div className="inline-flex items-center gap-3 bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
                                    <Phone size={20} className="text-purple-400" />
                                    <span className="text-white font-medium">Need it faster? Call us: +1 (678) 338-6333</span>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                {/* Step 1: Event Type */}
                                {step === 1 && (
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <h2 className="text-2xl font-bold text-white mb-2">What's the occasion?</h2>
                                            <p className="text-gray-400">Select your event type to get started.</p>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {eventTypes.map((type) => (
                                                <button
                                                    key={type.id}
                                                    type="button"
                                                    onClick={() => {
                                                        setFormState({ ...formState, eventType: type.id });
                                                        nextStep();
                                                    }}
                                                    className={`p-6 rounded-2xl border text-left transition-all hover:scale-105 hover:bg-white/10 ${formState.eventType === type.id ? 'border-purple-500 bg-purple-500/10' : 'border-white/10 bg-white/5'}`}
                                                >
                                                    <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3 ${type.color}`}>
                                                        <type.icon size={24} />
                                                    </div>
                                                    <div className="font-bold text-white">{type.label}</div>
                                                    <div className="text-xs text-gray-500">{type.desc}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Details */}
                                {step === 2 && (
                                    <div className="space-y-6">
                                        <div className="text-center mb-8">
                                            <h2 className="text-2xl font-bold text-white mb-2">Tell us more!</h2>
                                            <p className="text-gray-400">We need a few details to check availability.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400 font-medium ml-1">Your Name *</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        value={formState.name}
                                                        onChange={handleChange}
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400 font-medium ml-1">Email Address *</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={formState.email}
                                                        onChange={handleChange}
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400 font-medium ml-1">Phone Number</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formState.phone}
                                                        onChange={handleChange}
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all"
                                                        placeholder="(555) 123-4567"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400 font-medium ml-1">Event Date *</label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        required
                                                        value={formState.date}
                                                        onChange={handleChange}
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between pt-6">
                                            <button type="button" onClick={prevStep} className="text-gray-400 hover:text-white transition-colors px-6 py-3">
                                                ← Back
                                            </button>
                                            <button
                                                type="button"
                                                onClick={nextStep}
                                                disabled={!formState.name || !formState.email || !formState.date}
                                                className="btn btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                Continue <ChevronRight size={18} className="ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Confirm */}
                                {step === 3 && (
                                    <div className="space-y-6">
                                        <div className="text-center mb-8">
                                            <h2 className="text-2xl font-bold text-white mb-2">Almost there!</h2>
                                            <p className="text-gray-400">Add any final details and submit.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400 font-medium ml-1">Venue / Location</label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                    <input
                                                        type="text"
                                                        name="venue"
                                                        value={formState.venue}
                                                        onChange={handleChange}
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all"
                                                        placeholder="e.g. The Fox Theatre, Atlanta"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400 font-medium ml-1">Estimated Guest Count</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                    <input
                                                        type="number"
                                                        name="guestCount"
                                                        value={formState.guestCount}
                                                        onChange={handleChange}
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all"
                                                        placeholder="e.g. 150"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-400 font-medium ml-1">Anything else we should know?</label>
                                            <textarea
                                                name="details"
                                                rows={3}
                                                value={formState.details}
                                                onChange={handleChange}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all resize-none"
                                                placeholder="Special requests, music preferences, timeline notes..."
                                            />
                                        </div>

                                        {/* Summary */}
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                                            <h4 className="font-bold text-white mb-4">Booking Summary</h4>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-400">Event Type</span>
                                                <span className="text-white font-medium capitalize">{formState.eventType}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-400">Date</span>
                                                <span className="text-white font-medium">{formState.date ? new Date(formState.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '-'}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-400">Contact</span>
                                                <span className="text-white font-medium">{formState.email}</span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between pt-4">
                                            <button type="button" onClick={prevStep} className="text-gray-400 hover:text-white transition-colors px-6 py-3">
                                                ← Back
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary px-10 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)]"
                                            >
                                                Submit Request <Send size={18} className="ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        )}
                    </div>

                    {/* Trust Signals */}
                    {!isSubmitted && (
                        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>No Spam, Ever</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>Response Within 24 Hours</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>Free Quote, No Obligation</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default BookAppointment;
