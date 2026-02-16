'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Users, Globe } from 'lucide-react';
const features = [
    "Authorized and Registered by GED & American Council on Education",
    "Proven Track Record of Student Success",
    "Modern Learning Environment & Facilities",
    "Dedicated One-on-One Student Counseling",
    "Focus on Soft Skills & Personality Development",
    "University Prep & Global Career Direction",
    "Socio-Economic Cultural Exposure"
];

const WhyUs = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Animated Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
                                alt="Team"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Decorative Background Element */}
                        <div className="absolute -top-6 -left-6 w-full h-full bg-amber-100 rounded-2xl -z-10" />

                        {/* Floating Experience Card */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            className="absolute -bottom-10 -right-6 bg-amber-500 p-6 rounded-2xl text-white shadow-xl z-20 hidden md:block"
                        >
                            <p className="text-4xl font-bold">10+</p>
                            <p className="text-sm font-medium">Years of Academic Excellence</p>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">
                            Premium Learning Experience
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                            Why <span className="text-amber-500">DIB EDUCATION SYSTEM?</span>
                        </h2>

                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            D.Education Zone is more than just an institute; it's a launchpad for your global future.
                            We specialize in intensive GED preparation and college readiness, helping ambitious
                            students bridge the gap to international universities.
                        </p>

                        <div className="space-y-4 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="mt-1">
                                        <CheckCircle2 className="text-amber-500 group-hover:scale-125 transition-transform" size={20} />
                                    </div>
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-amber-500 transition-colors uppercase tracking-wider"
                        >
                            Explore Our Programs
                        </motion.button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;