'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, Quote, Star, X } from 'lucide-react';

// Data structure ko define karna (Red line se bachne ke liye)
interface Testimonial {
    id: number;
    name: string;
    course: string;
    videoUrl: string;
    thumbnail: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Muhammad Khalid",
        course: "GED Graduate",
        videoUrl: "/1.mp4",
        thumbnail: "/Thumb1.PNG",
    },
    {
        id: 2,
        name: "Ali Sarmad",
        course: "GED Graduate",
        videoUrl: "/2.mp4",
        thumbnail: "/Thumb2.PNG",
    },
    {
        id: 3,
        name: "Muhammad Ahmad",
        course: "GED Graduate",
        videoUrl: "3.mp4",
        thumbnail: "Thumb3.PNG",
    },
];

const VideoTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    // State ko explicit type dena taake 'item.videoUrl' par error na aaye
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 lg:-left-12 z-30 p-4 bg-white rounded-full shadow-xl hover:bg-amber-500 hover:text-white transition-all group"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 lg:-right-12 z-30 p-4 bg-white rounded-full shadow-xl hover:bg-amber-500 hover:text-white transition-all group"
                    >
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
                                    className="min-w-full md:min-w-[350px] relative group cursor-pointer"
                                    onClick={() => setSelectedVideo(item.videoUrl)}
                                >
                                    <div className="relative h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white group-hover:border-amber-500 transition-colors">
                                        <img
                                            src={item.thumbnail}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            alt={item.name}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                                        {/* Play Button Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:bg-amber-500 transition-colors">
                                                <Play className="text-white fill-white ml-1" size={28} />
                                            </div>
                                        </div>

                                        {/* Student Info */}
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

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-10">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-10 bg-amber-500' : 'w-2.5 bg-slate-300'}`}
                        />
                    ))}
                </div>
            </div>

            {/* --- VIDEO POPUP MODAL --- */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
                        onClick={() => setSelectedVideo(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors z-[110]"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <X size={40} />
                        </button>

                        {/* Video Wrapper */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video
                                src={selectedVideo}
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default VideoTestimonials;