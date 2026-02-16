'use client';
import React from 'react';
import {
    ClipboardCheck,
    FileText,
    Users,
    MessageSquare, // Fixed the red line error by using MessageSquare
    PartyPopper,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';

const AdmissionStepsVIP = () => {
    const steps = [
        {
            id: "01",
            title: "Online Application",
            desc: "Complete the digital application form available on our official portal.",
            icon: <ClipboardCheck className="text-amber-500" size={24} />
        },
        {
            id: "02",
            title: "Document Submission",
            desc: "Upload or provide transcripts, CNIC/B-Form, and recent photos.",
            icon: <FileText className="text-amber-500" size={24} />
        },
        {
            id: "03",
            title: "Counseling Session",
            desc: "Meet our experts for GED subject selection and career alignment.",
            icon: <Users className="text-amber-500" size={24} />
        },
        {
            id: "04",
            title: "Admissions Interview",
            desc: "A brief interaction with our faculty to evaluate your goals.",
            icon: <MessageSquare className="text-amber-500" size={24} />
        },
        {
            id: "05",
            title: "Offer of Admission",
            desc: "Receive your official letter and join the Next Step community.",
            icon: <PartyPopper className="text-amber-500" size={24} />
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">How to Apply</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Our team is here to guide you through every stage—from document submission to subject selection.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT: THE STEPS ROADMAP */}
                    <div className="lg:col-span-7 space-y-2">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-8 group relative pb-10">
                                {/* Vertical Connecting Line */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute left-[23px] top-[50px] w-0.5 h-[calc(100%-40px)] bg-slate-100 group-hover:bg-amber-200 transition-colors"></div>
                                )}

                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                        {step.icon}
                                    </div>
                                </div>

                                <div className="pt-1">
                                    <span className="text-amber-600 font-black text-xs tracking-[0.2em] uppercase mb-2 block">Step {step.id}</span>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{step.title}</h3>
                                    <p className="text-slate-500 leading-relaxed max-w-md">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: REQUIREMENTS CARD (VIP STYLE) */}
                    <div className="lg:col-span-5">
                        <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                            {/* Decorative Background Glow */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]"></div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-black mb-10 flex items-center gap-4 border-b border-white/10 pb-6">
                                    <CheckCircle2 className="text-amber-500" size={32} />
                                    Requirements
                                </h3>

                                <div className="space-y-12">
                                    {/* Eligibility */}
                                    <div>
                                        <h4 className="text-amber-500 font-black uppercase text-xs tracking-widest mb-6">Who Can Apply?</h4>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3 text-slate-300">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                                                <span className="text-sm font-semibold">Completion of O Levels, Matriculation, or equivalent.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-300">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                                                <span className="text-sm font-semibold">Age 16 or over with academic drive.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Documents Required */}
                                    <div>
                                        <h4 className="text-amber-500 font-black uppercase text-xs tracking-widest mb-6">Documents Needed</h4>
                                        <div className="grid gap-3">
                                            {[
                                                "Academic Transcripts or Result Cards",
                                                "CNIC / B-Form Copy",
                                                "Two Recent Passport-size Photographs",
                                                "Character Certificate from last school",
                                                "Completed application form"
                                            ].map((doc, i) => (
                                                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                                                    <CheckCircle2 className="text-slate-500 group-hover:text-amber-500 transition-colors" size={18} />
                                                    <span className="text-sm text-slate-200 font-medium">{doc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Important Note (Screenshot style) */}
                                    <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-[2rem] flex gap-4">
                                        <AlertCircle className="text-amber-500 flex-shrink-0" size={20} />
                                        <p className="text-xs text-amber-200/90 leading-relaxed italic">
                                            <strong>Note:</strong> For IBCC equivalence certificate, students need to have a two years gap after completing their SSC.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdmissionStepsVIP;