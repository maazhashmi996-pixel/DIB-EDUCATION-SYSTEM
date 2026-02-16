'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    ArrowRight,
    Send
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-white relative overflow-hidden">
            {/* 1. NEWSLETTER STRIP (Top Bar) */}
            <div className="bg-amber-500 py-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-slate-900">
                        <h3 className="text-2xl font-black uppercase tracking-tight">Stay Connected</h3>
                        <p className="font-medium">Get updates about admissions and student life at DIB Education System</p>
                    </div>
                    <div className="flex w-full md:w-auto bg-white rounded-2xl p-1 shadow-xl border border-white/20">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-6 py-3 text-slate-900 outline-none w-full md:w-80"
                        />
                        <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
                            SUBSCRIBE <Send size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. MAIN FOOTER CONTENT */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Profile - Logo Size Increased */}
                    <div className="space-y-8">
                        <div className="flex items-center group">
                            {/* Size increased to h-20 and w-64 for better visibility */}
                            <div className="relative h-20 w-64 transition-transform group-hover:scale-105 duration-300">
                                <Image
                                    src="/logo.png"
                                    alt="D.Education Zone Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Pakistan's premier GED institute, bridging the gap between local potential and global opportunities. Authorized partner for world-class education.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, color: '#f59e0b', borderColor: '#f59e0b' }}
                                    className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 transition-all shadow-sm"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 border-l-4 border-amber-500 pl-4 uppercase tracking-wider">Quick Navigation</h4>
                        <ul className="space-y-4 text-slate-400">
                            {['About Us', 'GED Program', 'Admissions', 'Student Life', 'Franchise'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-amber-500 flex items-center gap-2 group transition-all text-[15px]">
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-amber-500" /> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 border-l-4 border-amber-500 pl-4 uppercase tracking-wider">Student Support</h4>
                        <ul className="space-y-4 text-slate-400">
                            {['FAQs', 'Privacy Policy', 'Terms of Service', 'Admission Process', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-amber-500 flex items-center gap-2 group transition-all text-[15px]">
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-amber-500" /> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 border-l-4 border-amber-500 pl-4 uppercase tracking-wider">Get In Touch</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-900 rounded-lg text-amber-500 shadow-inner border border-slate-800">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Call Us</p>
                                    <p className="text-slate-200 font-semibold tracking-wide">03315290212

                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-900 rounded-lg text-amber-500 shadow-inner border border-slate-800">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Email</p>
                                    <p className="text-slate-200 font-semibold">
                                        info@dib.ac.pk</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-900 rounded-lg text-amber-500 shadow-inner border border-slate-800">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Campus</p>
                                    <p className="text-slate-200 font-semibold text-sm">DHA Defence Mor Boulvird Plaza Lahore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. COPYRIGHT BAR */}
                <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
                    <p>© {currentYear} DIB Education System. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -z-0" />
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-0" />
        </footer>
    );
};

export default Footer;