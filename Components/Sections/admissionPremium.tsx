'use client';
import React from 'react';
import Image from 'next/image';
import {
    CheckCircle2,
    ClipboardCheck,
    Calendar,
    CheckCircle,
    ArrowUpRight
} from 'lucide-react';

const AdmissionPremium = () => {
    return (
        // Added 'pt-32' or 'pt-40' for significant top gap
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#fcfcfc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* MAIN SECTION: CRITERIA & REQS */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* LEFT CONTENT: TEXT & CARDS */}
                    <div className="order-2 lg:order-1 relative">
                        {/* Decorative background element */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>

                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white shadow-sm border border-amber-100 rounded-full text-amber-700 text-xs font-black tracking-[0.1em] mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            ADMISSIONS OPEN 2026
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-[1.1]">
                            Who Can Join <br />
                            <span className="text-amber-500 relative">
                                DIB EDUCATION
                                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <path d="M0 7C20 7 30 1 50 1C70 1 80 7 100 7" stroke="#f59e0b" strokeWidth="2" fill="transparent" />
                                </svg>
                            </span>
                        </h2>

                        <div className="space-y-8">
                            {/* Minimum Requirements Card */}
                            <div className="group bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-amber-200 transition-all duration-500">
                                <h4 className="font-black text-slate-900 text-xl mb-6 flex items-center justify-between">
                                    <span className="flex items-center gap-3">
                                        <CheckCircle2 className="text-amber-500" size={24} />
                                        Minimum Requirements
                                    </span>
                                    <ArrowUpRight className="text-slate-300 group-hover:text-amber-500 transition-colors" size={20} />
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Completion of O Levels, Matriculation, or equivalent.",
                                        "Age 16 or over with strong academic drive.",
                                        "Willingness to engage in academic mentorship."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4 items-start text-slate-600 font-medium italic">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Documents Needed Card (VIP Dark Theme) */}
                            <div className="group bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-1">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                                    <ClipboardCheck size={180} />
                                </div>

                                <h4 className="font-bold text-amber-400 mb-8 uppercase tracking-[0.2em] text-[10px]">Essential Documentation</h4>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                                    {[
                                        "Academic Transcripts",
                                        "CNIC / B-Form",
                                        "2x Photographs",
                                        "Character Cert."
                                    ].map((doc, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                                            <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                                                <CheckCircle size={14} className="text-amber-500" />
                                            </div>
                                            <span className="text-sm font-semibold tracking-wide text-slate-200">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT: VISUALS */}
                    <div className="order-1 lg:order-2 relative pt-12 lg:pt-0">
                        {/* Abstract background shape */}
                        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-slate-100 rounded-full -z-10"></div>

                        <div className="relative h-[550px] md:h-[700px] rounded-[4rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] rotate-2 hover:rotate-0 transition-all duration-1000 group">
                            <Image
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                                alt="Student Admission"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60"></div>

                            {/* Overlay Info */}
                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                                    <p className="text-white text-sm font-medium leading-relaxed italic">
                                        "Join a community where your potential is recognized and nurtured through world-class mentorship."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Deadline Card - Adjusted Animation */}
                        <div className="absolute -bottom-12 -left-8 md:-left-12 bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-[280px] hidden md:block border border-slate-50 hover:scale-105 transition-transform duration-500">
                            <div className="flex items-center gap-4 mb-5 text-amber-500">
                                <div className="bg-amber-50 p-3.5 rounded-2xl shadow-inner">
                                    <Calendar size={28} />
                                </div>
                                <div className="text-slate-900 font-black leading-[1.2]">
                                    Feb 20, 2026 <br />
                                    <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Registration Deadline</span>
                                </div>
                            </div>
                            <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-tight">
                                Limited seats available for the upcoming GED prep cohort. Secure your future today.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AdmissionPremium;