'use client';
import React from 'react';
import { BookOpen, Clock, Tag, FileText, CheckCircle } from 'lucide-react';

const ProgramPage = () => {
    const subjects = [
        {
            title: "Mathematical Reasoning",
            overview: "Learn math concepts, measurements, equations, and applying math concepts to solve real-life problems. You don't have to memorize formulas; a sheet will be provided.",
            topics: ["Basic Math", "Geometry", "Basic Algebra", "Graphs and Functions"],
            details: {
                format: "2 parts, access to math formula sheet and on-screen calculator.",
                duration: "115 minutes (includes 2 min instructions and 3 min break).",
                price: "USD $85"
            }
        },
        {
            title: "Reasoning Through Language Arts",
            overview: "Learn reading and writing concepts, including grammar. You'll read excerpts, show your understanding, draw conclusions, and write clearly.",
            topics: ["Reading for Meaning", "Identifying and Creating Arguments", "Grammar and Language"],
            details: {
                format: "3 sections, 1 written essay (extended response).",
                duration: "150 minutes (includes 10 min break and 45 min for essay).",
                price: "USD $85"
            }
        },
        {
            title: "Social Studies",
            overview: "Apply American social studies concepts, read graphs and charts displaying social data, and use reasoning to interpret information. No memorization required.",
            topics: ["Reading for Meaning in Social Studies", "Analyzing Historical Events", "Using Numbers and Graphs in Social Studies"],
            details: {
                format: "1 part, access to on-screen calculator.",
                duration: "70 minutes (includes 2 min instructions, no break).",
                price: "USD $85"
            }
        },
        {
            title: "Science",
            overview: "Understand science concepts, read graphs/charts with scientific data, and use reasoning. No need to memorize the periodic table or formulas.",
            topics: ["Reading for Meaning in Science", "Designing and Interpreting Science Experiments", "Using Numbers and Graphics in Science"],
            details: {
                format: "1 part, access to on-screen calculator.",
                duration: "90 minutes (includes 2 min instructions, no break).",
                price: "USD $85"
            }
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            {/* HERO SECTION */}
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                    GED TEST <span className="text-amber-500">SUBJECTS</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    DIB EDUCATION SYSTEM is GED® Preparation Center in Pakistan.
                    We prepare you for international success with our comprehensive curriculum.
                </p>
            </div>

            {/* SUBJECTS GRID */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="bg-amber-50 p-4 rounded-2xl group-hover:bg-amber-500 transition-colors">
                                <BookOpen className="text-amber-600 group-hover:text-white" size={32} />
                            </div>
                            <span className="text-2xl font-black text-slate-200 group-hover:text-amber-100">0{index + 1}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{subject.title}</h3>

                        <div className="mb-6">
                            <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-2">Overview</h4>
                            <p className="text-slate-600 leading-relaxed">{subject.overview}</p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-3">Topics</h4>
                            <div className="flex flex-wrap gap-2">
                                {subject.topics.map((topic, i) => (
                                    <span key={i} className="bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-100">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-50">
                            <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-4">Exam Details</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-slate-600">
                                    <FileText size={18} className="text-slate-400" />
                                    <span className="text-sm">{subject.details.format}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Clock size={18} className="text-slate-400" />
                                    <span className="text-sm">{subject.details.duration}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-900 font-bold">
                                    <Tag size={18} className="text-amber-500" />
                                    <span>{subject.details.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CALL TO ACTION */}
            <div className="max-w-4xl mx-auto px-6 mt-20 text-center bg-slate-900 rounded-[40px] p-12 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to take the DIB EDUCATION SYSTEM?</h2>
                    <p className="text-slate-400 mb-8">Join the best GED center in Pakistan and start your journey today.</p>
                    <button className="bg-amber-500 text-slate-900 px-10 py-4 rounded-2xl font-black hover:bg-white hover:scale-105 transition-all">
                        ENROLL IN GED PROGRAM
                    </button>
                </div>
                {/* Decorative background circle */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default ProgramPage;