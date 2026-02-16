'use client';
import { motion } from 'framer-motion';
import { PhoneCall, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link'; // Navigation ke liye

const AdmissionsCTA = () => {
    return (
        // py-24 se top/bottom gap barh gaya hai aur mb-12 se section ke baad thora gap aayega
        <section className="relative h-auto min-h-[650px] flex items-center justify-center overflow-hidden py-24 mb-12">

            {/* STICKY BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070')",
                }}
            >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
            </div>

            {/* CONTENT CARD */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-16 rounded-[3.5rem] shadow-2xl"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        className="inline-block p-3 bg-amber-500 rounded-2xl text-slate-950 mb-6 shadow-lg shadow-amber-500/30"
                    >
                        <Sparkles size={30} />
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        DIB EDUCATION SYSTEM <br />
                        <span className="text-amber-400 font-medium italic text-3xl md:text-4xl">
                            GED Admissions Open 2026
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Welcoming our newest learners. Join a path that combines academic excellence
                        with individual growth. We keep class sizes small for personalized attention.
                    </p>

                    {/* ACTION BUTTONS */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        {/* Apply Now button link update kiya gaya hai */}
                        <Link href="/admissions#AdmissionPremium" className="w-full sm:w-auto">
                            <button className="w-full px-8 py-4 bg-amber-500 hover:bg-white text-slate-950 font-black rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-xl active:scale-95">
                                APPLY NOW <GraduationCap size={20} className="group-hover:scale-125 transition-transform" />
                            </button>
                        </Link>

                        <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 active:scale-95">
                            <PhoneCall size={20} className="text-amber-400" /> SPEAK TO ADMISSIONS
                        </button>

                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent hover:text-amber-400 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-95">
                            <MapPin size={20} /> VISIT CAMPUS
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* FLOATING DECORATION */}
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-amber-500/20 rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/10 rounded-full animate-bounce" />
        </section>
    );
};

export default AdmissionsCTA;