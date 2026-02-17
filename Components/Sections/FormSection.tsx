'use client';
import React, { useState } from 'react';
import {
    User,
    Calendar,
    Phone,
    MapPin,
    ChevronRight,
} from 'lucide-react';

const FormSection = () => {
    // State for Form Fields
    const [formData, setFormData] = useState({
        fullName: '',
        city: '',
        gender: 'Male',
        whatsapp: '',
        dob: { dd: '', mm: '', yyyy: '' },
        source: ''
    });

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // WhatsApp Number aur Message Formatting
        const phoneNumber = "923307159000";
        const message = `*New Admission Inquiry - The Avicenna*%0A%0A` +
            `*Full Name:* ${formData.fullName}%0A` +
            `*City:* ${formData.city}%0A` +
            `*Gender:* ${formData.gender}%0A` +
            `*WhatsApp:* ${formData.whatsapp}%0A` +
            `*Date of Birth:* ${formData.dob.dd}/${formData.dob.mm}/${formData.dob.yyyy}%0A` +
            `*Source:* ${formData.source || 'Not specified'}`;

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        // mt-20 aur py-24 se top gap barha diya gaya hai
        <section className="mt-20 py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-6">

                {/* ADMISSION PORTAL CARD */}
                <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden">

                    {/* Header Section */}
                    <div className="bg-slate-900 p-12 text-center relative">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="grid grid-cols-6 gap-4 transform -rotate-12 scale-150">
                                {[...Array(24)].map((_, i) => (
                                    <div key={i} className="h-20 bg-white/20 rounded-xl" />
                                ))}
                            </div>
                        </div>
                        <h2 className="text-4xl font-black text-white relative z-10">Admission Portal</h2>
                        <p className="text-slate-400 mt-2 font-medium">Start your journey with The Avicenna</p>
                    </div>

                    {/* Step Indicators */}
                    <div className="flex flex-wrap justify-center gap-4 p-8 bg-slate-50 border-b border-slate-100">
                        {['Personal Information', 'Guardian Info', 'Academic Info', 'Additional Info', 'Important Disclaimer'].map((step, idx) => (
                            <div key={idx} className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${idx === 0 ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-slate-200 text-slate-500'}`}>
                                {step}
                            </div>
                        ))}
                    </div>

                    {/* Form Body */}
                    <form onSubmit={handleWhatsAppSubmit} className="p-12 space-y-10">
                        <div className="flex items-center gap-3 text-slate-800">
                            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white">
                                <User size={20} />
                            </div>
                            <h3 className="text-xl font-bold">Let's start with the basic. Tell us who you are!</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl focus:border-amber-500 outline-none transition-all font-medium"
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>

                            {/* City */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-2">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Islamabad"
                                    className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl focus:border-amber-500 outline-none transition-all font-medium"
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                />
                            </div>

                            {/* Gender */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-slate-500 tracking-wider">Gender</label>
                                <select
                                    className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl focus:border-amber-500 outline-none transition-all font-medium appearance-none"
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {/* WhatsApp Number */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-2">
                                    WhatsApp Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        required
                                        type="tel"
                                        placeholder="03xx xxxxxxx"
                                        className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-12 rounded-2xl focus:border-amber-500 outline-none transition-all font-medium"
                                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Date of Birth */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-2">
                                    Date of Birth <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    <input required type="text" placeholder="DD" className="bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl text-center outline-none focus:border-amber-500" onChange={(e) => setFormData({ ...formData, dob: { ...formData.dob, dd: e.target.value } })} />
                                    <input required type="text" placeholder="MM" className="bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl text-center outline-none focus:border-amber-500" onChange={(e) => setFormData({ ...formData, dob: { ...formData.dob, mm: e.target.value } })} />
                                    <input required type="text" placeholder="YYYY" className="bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl text-center outline-none focus:border-amber-500" onChange={(e) => setFormData({ ...formData, dob: { ...formData.dob, yyyy: e.target.value } })} />
                                </div>
                            </div>

                            {/* Source */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-slate-500 tracking-wider">How did you come to know about The Avicenna?</label>
                                <input
                                    type="text"
                                    placeholder="Facebook, Instagram, Friend, etc."
                                    className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl focus:border-amber-500 outline-none transition-all font-medium"
                                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-6 flex justify-end">
                            <button
                                type="submit"
                                className="group flex items-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-amber-500 transition-all shadow-xl shadow-slate-900/10 active:scale-95"
                            >
                                Next <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer Info Cards */}
                <div className="mt-24 grid md:grid-cols-3 gap-8">
                    <div className="flex items-start gap-4 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-500"><MapPin size={24} /></div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Campus Address</h4>
                            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                DHA Defence Mor Boulevard Midland    Plaza Lahore</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                        <div className="bg-emerald-50 p-3 rounded-xl text-emerald-500"><Phone size={24} /></div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Contact Details</h4>
                            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                03315290212<br />info@dib.ac.pk</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                        <div className="bg-amber-50 p-3 rounded-xl text-amber-500"><Calendar size={24} /></div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Office Hours</h4>
                            <p className="text-xs text-slate-500 mt-2 leading-relaxed">Mon - Fri: 10:00 AM - 06:00 PM<br />Sat: 10:00 AM - 02:00 PM</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FormSection;