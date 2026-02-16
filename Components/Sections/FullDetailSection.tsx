'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Target,
    Lightbulb,
    Trophy,
    BookOpen,
    CheckCircle,
    ArrowRight
} from 'lucide-react';

const FullDetailSection = () => {
    return (
        /* pt-32 add kiya gaya hai navbar se gap dene ke liye */
        <section className="pt-32 pb-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP HEADER SECTION */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm"
                    >
                        Redefining Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6"
                    >
                        Empowering Minds, <br />
                        <span className="text-amber-500">Transforming Destinies</span>
                    </motion.h2>
                    <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT COLUMN: MISSION & APPROACH */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        {/* About Detail */}
                        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                <Users className="text-amber-500" /> WHO WE ARE
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                DIB Education System is a professional institute powered by a team of highly qualified professionals.
                                Our team works on the world&apos;s best human resource development models, using integrated
                                information and career systems to structure and streamline the pool of human resources.
                            </p>
                            <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500">
                                <p className="text-slate-800 font-bold italic">
                                    &quot;We act as a gateway for smart and eligible Students/Professionals to seek and secure
                                    admissions for higher education and jobs in the International marketplace.&quot;
                                </p>
                            </div>
                        </div>

                        {/* Vision / Success Model */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                                <Target className="text-amber-500" /> OUR STRATEGIC VISION
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Pakistan needs to promote the International level of the education system by keeping abreast
                                of the competitive edge that surrounds us. We provide different programs with training sessions like:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['GED®', 'IELTS', 'Spoken English', 'Grade 10th/12th', 'O/A Levels'].map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-bold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: CORE VALUES & FEATURES */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        {/* Detailed Point Cards */}
                        <div className="grid gap-6">
                            {[
                                {
                                    title: "ACE Authorized Center",
                                    desc: "We are the one and only approved GED® Preparation Center in Pakistan under the American Council of Education (ACE).",
                                    icon: <Trophy className="w-6 h-6" />
                                },
                                {
                                    title: "Nurturing Culture",
                                    desc: "We nurture a culture that plays a part in elevating people's experiences and making things better, uplifting both our team and candidates.",
                                    icon: <Lightbulb className="w-6 h-6" />
                                },
                                {
                                    title: "Modern Learning Resources",
                                    desc: "Our interactive classrooms and world-class faculty are well qualified to train candidates to compete with upcoming global challenges.",
                                    icon: <BookOpen className="w-6 h-6" />
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="group p-6 bg-white rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 text-lg mb-2 uppercase tracking-tight">{feature.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Checklist Section */}
                        <div className="bg-slate-900 p-8 rounded-[32px] text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                                Why Choose DIB?
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Qualified Faculty",
                                    "Morning & Evening Classes",
                                    "Personal Guidance",
                                    "International Standards",
                                    "Admission Counseling",
                                    "Proven Success Rate"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle className="text-amber-500 w-4 h-4" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-8 w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-black rounded-xl transition-colors flex items-center justify-center gap-2">
                                TALK TO A COUNSELOR <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>

                </div>

                {/* BOTTOM MOTIVATION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 p-8 border-2 border-dashed border-slate-200 rounded-[40px] text-center"
                >
                    <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Dear STUDENTS, you are at the crossroads of your academic life. Make the right choice and ensure better mileage
                        out of every learning effort. We invite you to visit our campus personally, talk to our student counselor,
                        and experience the distinctive spirit of **DIB Education System**.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default FullDetailSection;