'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070',
        heading: "Start Your GED Journey",
        subheading: "DIB EDUCATION SYSTEM",
        punchline: "Unlock global opportunities with Pakistan's leading GED institute."
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070',
        heading: "Expert Personalized Counseling",
        subheading: "Aspire. Act. Achieve.",
        punchline: "Our expert teachers guide you every step of the way to success."
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070',
        heading: "Join Our Global Community",
        subheading: "Best Prep Center",
        punchline: "Experience world-class education with modern facilities and support."
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const scrollToAdmission = (e: React.MouseEvent) => {
        e.preventDefault();
        // Path matches small 'admissions' or capital 'Admissions' depending on your folder
        if (pathname !== '/Admissions') {
            router.push('/Admissions#AdmissionPremium');
            return;
        }

        const section = document.getElementById('AdmissionPremium');
        if (section) {
            const headerOffset = 100; // Increased offset for safe scrolling
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        // Added pt-20 (mobile) and md:pt-32 (desktop) to push content down from Navbar
        <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 pt-24 md:pt-32 flex flex-col justify-center">

            {/* Background Image Layers */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${slides[current].image})`,
                            animation: 'kenburns 15s infinite alternate'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            {/* removed h-full and added py-12 for better vertical breathing room */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <span className="flex items-center gap-2 px-4 py-1.5 text-xs font-black tracking-[0.2em] uppercase text-amber-400 border border-amber-500/30 bg-amber-500/10 rounded-full backdrop-blur-md">
                                <Sparkles size={14} className="animate-pulse" />
                                {slides[current].subheading}
                            </span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-[1.1] tracking-tighter">
                            {slides[current].heading.split(' ').map((word, i) => (
                                <span key={i} className={["GED", "Global", "Expert", "Journey"].includes(word) ? "text-amber-500 inline-block" : "inline-block"}>
                                    {word}&nbsp;
                                </span>
                            ))}
                        </h1>

                        <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 font-medium leading-relaxed max-w-xl border-l-2 border-amber-500/50 pl-6 italic">
                            "{slides[current].punchline}"
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-5">
                            <button
                                onClick={scrollToAdmission}
                                className="group flex items-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-amber-500 text-slate-950 font-black uppercase text-xs md:text-sm tracking-widest rounded-2xl hover:bg-white transition-all shadow-[0_20px_40px_rgba(245,158,11,0.3)] active:scale-95 cursor-pointer"
                            >
                                APPLY FOR ADMISSION <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>

                            <button className="group flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white/5 text-white font-black uppercase text-xs md:text-sm tracking-widest rounded-2xl border border-white/20 hover:bg-white hover:text-slate-950 transition-all backdrop-blur-xl active:scale-95">
                                <MapPin size={20} /> VISIT CAMPUS
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Custom Navigation Indicators - Adjusted bottom for mobile safety */}
            <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-30 flex flex-col gap-4 md:gap-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className="group flex items-center gap-4 text-left focus:outline-none"
                    >
                        <div className={`h-8 md:h-12 w-1 transition-all duration-500 rounded-full ${current === index ? 'bg-amber-500 scale-y-150' : 'bg-white/20 group-hover:bg-white/50'}`} />
                        <span className={`text-[10px] font-black tracking-widest uppercase transition-all duration-500 ${current === index ? 'text-white opacity-100 translate-x-0' : 'text-white/40 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                            0{index + 1}
                        </span>
                    </button>
                ))}
            </div>

            {/* Background Glow Decor */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full z-0" />

            <style jsx>{`
                @keyframes kenburns {
                    from { transform: scale(1); }
                    to { transform: scale(1.15); }
                }
            `}</style>
        </section>
    );
};

export default Hero;