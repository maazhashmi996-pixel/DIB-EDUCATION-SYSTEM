'use client';
import React from 'react';
import Image from 'next/image';
import { CheckCircle2, FileText, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

const AdmissionVIP = () => {
    const graduateFeatures = [
        "Strong critical thinking and problem-solving abilities.",
        "Exceptional written and verbal communication skills.",
        "Discipline and self-motivation required at top universities.",
        "Confidence for global academic and professional environments.",
        "A clear understanding of their strengths and interests."
    ];

    const requirements = [
        "Completion of O Levels, Matriculation, or equivalent secondary qualification",
        "Age 16 or over with strong academic performance in relevant subjects",
        "A willingness to engage in academic mentorship and oriented learning"
    ];

    const documents = [
        "Academic transcripts or result cards",
        "CNIC / B Form copy",
        "Two recent passport-size photographs",
        "Character certificate from the last school attended",
        "Completed application form"
    ];

    return (
        <section className="py-24 bg-white overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* UPPER SECTION: GRADUATE READY */}
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-36">
                    <div className="w-full lg:w-1/2 relative">
                        {/* Decorative Badge */}
                        <div className="absolute -top-4 -right-4 bg-amber-500 text-slate-900 z-20 px-6 py-2 rounded-full font-black text-sm flex items-center gap-2 shadow-xl animate-bounce">
                            <Sparkles size={16} /> FUTURE READY
                        </div>

                        <div className="relative h-[450px] w-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 border-8 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                                alt="Modern Classroom Students"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Abstract Background Shapes */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-100 rounded-full -z-0 blur-2xl"></div>
                        <div className="absolute top-20 -left-5 w-10 h-10 bg-amber-400 rounded-lg rotate-12 -z-0"></div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="inline-block px-4 py-1.5 bg-amber-50 border border-amber-100 rounded-full text-amber-600 font-bold text-xs uppercase tracking-widest mb-6">
                            Excellence in Education
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
                            Graduate Ready for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                DIB EDUCATION SYSTEM
                            </span>
                        </h2>
                        <p className="text-slate-500 mb-10 text-xl leading-relaxed max-w-xl">
                            Our graduates leave with much more than strong academic results. They are prepared for global challenges.
                        </p>
                        <ul className="grid gap-5">
                            {graduateFeatures.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <div className="bg-amber-500 rounded-full p-1 mt-1 group-hover:bg-slate-900 transition-colors">
                                        <CheckCircle2 className="text-white" size={18} />
                                    </div>
                                    <span className="text-slate-700 font-semibold text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* LOWER SECTION: WHO CAN APPLY */}
                <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

                    <div className="flex flex-col lg:flex-row gap-16 relative z-10">

                        <div className="w-full lg:w-3/5">
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
                                Who Can Apply to <br />
                                <span className="text-amber-500 underline decoration-amber-500/30 underline-offset-8">Our Institute</span>
                            </h3>
                            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
                                Whether you're transitioning from O Levels, Matric, or an equivalent qualification, we provide a student-friendly environment focused on opportunity.
                            </p>

                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Requirements */}
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-amber-500 rounded-2xl">
                                            <GraduationCap className="text-slate-900" size={28} />
                                        </div>
                                        <h4 className="font-black text-white uppercase tracking-wider text-sm">Minimum <br />Requirements</h4>
                                    </div>
                                    <ul className="space-y-4">
                                        {requirements.map((req, i) => (
                                            <li key={i} className="text-sm text-slate-300 flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Documents */}
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-white rounded-2xl">
                                            <FileText className="text-slate-900" size={28} />
                                        </div>
                                        <h4 className="font-black text-white uppercase tracking-wider text-sm">Documents <br />Required</h4>
                                    </div>
                                    <ul className="space-y-4">
                                        {documents.map((doc, i) => (
                                            <li key={i} className="text-sm text-slate-300 flex items-start gap-3">
                                                <CheckCircle2 className="text-amber-500 flex-shrink-0" size={16} />
                                                {doc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-14 flex flex-col sm:flex-row gap-6 items-center">
                                <button className="w-full sm:w-auto bg-amber-500 text-slate-900 px-12 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-amber-500/20">
                                    APPLY NOW
                                    <ArrowRight />
                                </button>
                                <span className="text-slate-500 font-medium">Limited seats available for 2026</span>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/5">
                            <div className="relative h-full min-h-[500px] w-full rounded-[3rem] overflow-hidden group shadow-inner">
                                <Image
                                    src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop"
                                    alt="Confident Student"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    <p className="text-white italic font-medium">"Choosing this institute was the best decision for my international career."</p>
                                    <p className="text-amber-500 font-bold mt-2"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionVIP;