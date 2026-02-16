'use client';
import React from 'react';
import Image from 'next/image';
import {
    CheckCircle2,
    ClipboardCheck,
    Calendar,
    ArrowUpRight,
    BookOpen,
    Globe,
    ShieldCheck,
    Laptop,
    Zap,
    GraduationCap,
    Clock,
    UserCheck,
    Lock
} from 'lucide-react';

const StudentPremium = () => {
    return (
        <section className="pt-32 pb-24 md:pt-44 md:pb-40 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- TOP HEADER SECTION --- */}
                <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-amber-700 text-[10px] font-black tracking-widest uppercase mb-6 border border-amber-100">
                            <Zap size={12} className="fill-amber-500" /> Admissions Open 2026
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                            Graduate Ready For <br />
                            <span className="text-amber-500 relative">
                                What's Next.
                                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <path d="M0 7C20 7 30 1 50 1C70 1 80 7 100 7" stroke="#f59e0b" strokeWidth="2" fill="transparent" />
                                </svg>
                            </span>
                        </h2>
                    </div>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-lg lg:mb-4">
                        DIB EDUCATION SYSTEM graduates leave with more than just academic results. They are prepared with critical thinking,
                        verbal communication, and global readiness for top-tier universities.
                    </p>
                </div>

                {/* --- MAIN ADMISSION CONTENT --- */}
                <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">

                    {/* LEFT: CRITERIA & REQS */}
                    <div className="space-y-10 order-2 lg:order-1">
                        {/* Who Can Apply Card */}
                        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-500 group">
                            <h4 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                <UserCheck className="text-amber-500" size={28} />
                                Who Can Apply?
                            </h4>
                            <div className="space-y-6">
                                {[
                                    { t: "Eligibility", d: "Completion of O Levels, Matriculation, or equivalent secondary qualification." },
                                    { t: "Criteria", d: "Age 16 or over with strong academic performance in relevant subjects." },
                                    { t: "Commitment", d: "A willingness to engage in academic mentorship and growth-oriented learning." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="mt-1.5 h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                                        <div>
                                            <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wide">{item.t}</h5>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Important Notes Card (New from Image) */}
                        <div className="bg-amber-50/50 p-8 rounded-[2.5rem] border border-amber-100">
                            <h5 className="font-black text-amber-800 text-sm uppercase mb-4 flex items-center gap-2">
                                <ShieldCheck size={18} /> Important Notes:
                            </h5>
                            <ul className="space-y-3">
                                <li className="text-xs text-amber-900/70 leading-relaxed italic flex gap-2">
                                    <span>•</span> For IBCC equivalence, students need a two years gap after completing SSC.
                                </li>
                                <li className="text-xs text-amber-900/70 leading-relaxed italic flex gap-2">
                                    <span>•</span> Exam & diploma fees are payable directly to the test center at the time of examination.
                                </li>
                            </ul>
                        </div>

                        {/* Documents VIP Card */}
                        <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl group">
                            <div className="absolute -right-10 -top-10 opacity-[0.05] rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                <ClipboardCheck size={200} />
                            </div>
                            <h4 className="text-amber-400 font-black text-xs uppercase tracking-[0.3em] mb-8">Documentation Required</h4>
                            <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                                {[
                                    "Academic Transcripts",
                                    "CNIC / B-Form Copy",
                                    "2x Passport Photographs",
                                    "Character Certificate",
                                    "Completed App Form"
                                ].map((doc, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
                                        <CheckCircle2 size={16} className="text-amber-500" />
                                        <span className="text-xs font-bold tracking-wide">{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: VISUALS & DEADLINE */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative h-[600px] md:h-[780px] rounded-[4rem] overflow-hidden shadow-3xl group">
                            <Image
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                                alt="Avicenna Students"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>

                            {/* Deadline Card */}
                            <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem]">
                                <div className="flex items-center gap-5">
                                    <div className="bg-amber-500 p-4 rounded-2xl text-white shadow-lg shadow-amber-500/30">
                                        <Calendar size={32} />
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em]">Last Date to Register</p>
                                        <h4 className="text-white text-3xl font-black">Feb 26, 2026</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- FACILITIES & FEATURES (EXTRACTED FROM IMAGES) --- */}
                <h3 className="text-center text-3xl font-black text-slate-900 mb-16 uppercase tracking-tighter">Premium Learning Facilities</h3>
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            icon: <Laptop size={30} />,
                            title: "Smart Classrooms",
                            desc: "Interactive screens and digital learning tools that make lessons engaging.",
                            color: "blue"
                        },
                        {
                            icon: <BookOpen size={30} />,
                            title: "Resource Centre",
                            desc: "Quiet study space with practice materials for independent preparation.",
                            color: "amber"
                        },
                        {
                            icon: <Globe size={30} />,
                            title: "Career Guidance",
                            desc: "Expert counsellors help you choose study pathways and apply abroad.",
                            color: "emerald"
                        },
                        {
                            icon: <Clock size={30} />,
                            title: "Testing Labs",
                            desc: "Fully equipped labs for practicing GED mock exams in a supervised environment.",
                            color: "purple"
                        },
                        {
                            icon: <GraduationCap size={30} />,
                            title: "Expert Faculty",
                            desc: "Accessible offices for one-on-one help, feedback, and mentorship.",
                            color: "rose"
                        },
                        {
                            icon: <Lock size={30} />,
                            title: "Secure Campus",
                            desc: "CCTV-monitored premises ensuring a safe, distraction-free environment.",
                            color: "slate"
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 p-10 rounded-[3rem] hover:border-amber-200 hover:shadow-xl transition-all group">
                            <div className={`w-16 h-16 bg-${feature.color}-50 rounded-2xl flex items-center justify-center text-${feature.color}-500 mb-8 group-hover:bg-${feature.color}-500 group-hover:text-white transition-all`}>
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4">{feature.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* --- FOOTER TRUST BADGE --- */}
                <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-xl">
                            <ShieldCheck size={28} />
                        </div>
                        <div>
                            <p className="text-slate-900 font-black text-sm uppercase tracking-tighter">Recognized & Certified</p>
                            <p className="text-slate-400 text-xs font-bold">IBCC Equivalence Assistance Guaranteed</p>
                        </div>
                    </div>
                    <div className="flex gap-12 opacity-30 grayscale contrast-125">
                        <div className="font-black text-2xl text-slate-900 tracking-tighter">DIB EDUCATION</div>
                        <div className="font-black text-2xl text-slate-900 tracking-tighter">GED PREP</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StudentPremium;