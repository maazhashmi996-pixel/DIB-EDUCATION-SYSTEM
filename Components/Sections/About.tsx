'use client';
import { motion } from 'framer-motion';
import {
    Target,
    BookOpen,
    Clock,
    HeartHandshake,
    Sparkles,
    TrendingUp
} from 'lucide-react';

const AboutSection = () => {
    const highlights = [
        {
            icon: <Clock size={24} />,
            title: "Flexible Schedules",
            desc: "Morning, evening, and weekend classes tailored for your convenience."
        },
        {
            icon: <HeartHandshake size={24} />,
            title: "Dedicated Counseling",
            desc: "Expert guidance for university admissions and global scholarships."
        },
        {
            icon: <BookOpen size={24} />,
            title: "Modern Resources",
            desc: "Access to interactive classrooms and world-class GED materials."
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Proven Pathways",
            desc: "Success-driven routes to leading universities in Pakistan and abroad."
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Side: Modern Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-white border-[12px]">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                                alt="Collaborative Learning"
                                className="w-full h-[500px] object-cover"
                            />
                            {/* Overlay Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-amber-500 rounded-lg text-white">
                                        <Target size={28} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Our Core Mission</h3>
                                        <p className="text-sm text-slate-600">Transforming potential into global success stories.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side: Content & Features */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                                About DIB EDUCATION SYSTEM
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                Shaping Futures Through <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
                                    GED Excellence
                                </span>
                            </h2>
                            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                                DIB is a premier GED preparation center in Pakistan, dedicated to helping students achieve internationally recognized qualifications. We believe education should open doors to endless opportunities—locally and globally.
                            </p>
                        </motion.div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-amber-200 transition-all group"
                                >
                                    <div className="text-amber-500 mb-3 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                    <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-12 px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 hover:bg-amber-600 transition-colors flex items-center gap-2"
                        >
                            LEARN MORE ABOUT US <Sparkles size={18} />
                        </motion.button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;