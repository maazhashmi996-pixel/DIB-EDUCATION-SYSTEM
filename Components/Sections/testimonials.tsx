'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Ayesha Khan",
        course: "GED Graduate",
        videoUrl: "/videos/student1.mp4", // Apna video path yahan dein
        thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000",
    },
    {
        id: 2,
        name: "Zain Ahmed",
        course: "GED Student",
        videoUrl: "/videos/student2.mp4",
        thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000",
    },
    {
        id: 3,
        name: "Sara Malik",
        course: "University Prep",
        videoUrl: "/videos/student3.mp4",
        thumbnail: "https://images.unsplash.com/photo-1524504527035-13770ce3f85e?q=80&w=1000",
    },
];

const VideoTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Text Overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[12rem] font-black text-slate-200/40 select-none -z-0">
                REVIEWS
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex justify-center gap-1 mb-4"
                    >
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="fill-amber-500 text-amber-500" />
                        ))}
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                        Success Stories from <span className="text-amber-500">Our Students</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto italic text-lg">
                        "Real people, real results. Watch how DIB Education System transformed their career paths."
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative flex items-center justify-center">

                    {/* Navigation Buttons */}
                    <button onClick={prevSlide} className="absolute left-0 lg:-left-12 z-30 p-4 bg-white rounded-full shadow-xl hover:bg-amber-500 hover:text-white transition-all group">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 lg:-right-12 z-30 p-4 bg-white rounded-full shadow-xl hover:bg-amber-500 hover:text-white transition-all group">
                        <ChevronRight size={24} />
                    </button>

                    {/* Video Cards Grid */}
                    <div className="flex gap-8 overflow-hidden py-10 px-4">
                        {testimonials.map((item, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <motion.div
                                    key={item.id}
                                    animate={{
                                        scale: isActive ? 1.05 : 0.9,
                                        opacity: isActive ? 1 : 0.5,
                                        x: `-${activeIndex * 100}%`
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="min-w-full md:min-w-[350px] relative group"
                                >
                                    <div className="relative h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white group-hover:border-amber-500 transition-colors">
                                        {/* Video/Image Thumbnail */}
                                        <img
                                            src={item.thumbnail}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            alt={item.name}
                                        />

                                        {/* Overlay Layer */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                                        {/* Play Button Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                whileHover={{ scale: 1.2 }}
                                                className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 cursor-pointer group-hover:bg-amber-500 transition-colors"
                                            >
                                                <Play className="text-white fill-white ml-1" size={28} />
                                            </motion.div>
                                        </div>

                                        {/* Student Info Bar */}
                                        <div className="absolute bottom-8 left-8 right-8">
                                            <div className="flex items-center gap-3 mb-2 text-amber-400">
                                                <Quote size={20} className="fill-amber-400" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
                                            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase">{item.course}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Pagination Dots */}
                <div className="flex justify-center gap-3 mt-10">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-10 bg-amber-500' : 'w-2.5 bg-slate-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;