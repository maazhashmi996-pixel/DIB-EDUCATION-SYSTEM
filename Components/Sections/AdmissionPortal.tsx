'use client';
import React, { useState } from 'react';
import {
    User, Users, GraduationCap, ShieldCheck,
    ChevronRight, ChevronLeft, Send, AlertCircle, Check
} from 'lucide-react';

const AdmissionPortal = () => {
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState({
        fullName: '', city: '', gender: 'Male', whatsapp: '',
        guardianName: '', guardianContact: '',
        lastQualification: '', schoolName: '',
        isAgreed: false
    });

    // ⚠️ APNA REAL NUMBER YAHAN DALEIN
    // Format: "923XXXXXXXXX" (Bina '+' ya '00' ke)
    const WHATSAPP_NUMBER = "923001234567";

    // Validation Logic
    const validateStep = (currentStep: number) => {
        let newErrors: { [key: string]: string } = {};

        if (currentStep === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
            if (!formData.city.trim()) newErrors.city = "City is required";
            if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp number is required";
        } else if (currentStep === 2) {
            if (!formData.guardianName.trim()) newErrors.guardianName = "Guardian name is required";
            if (!formData.guardianContact.trim()) newErrors.guardianContact = "Contact is required";
        } else if (currentStep === 3) {
            if (!formData.lastQualification.trim()) newErrors.lastQualification = "Qualification is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(step)) {
            setStep(step + 1);
            // Smooth scroll to top of the portal
            const element = document.getElementById('AdmissionPremium');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: '' });
    };

    const sendToWhatsApp = () => {
        if (!formData.isAgreed) {
            alert("Please agree to the terms first.");
            return;
        }

        const message = `*✨ VIP ADMISSION INQUIRY ✨*%0A%0A` +
            `*👤 PERSONAL DETAILS*%0A- Name: ${formData.fullName}%0A- City: ${formData.city}%0A- Gender: ${formData.gender}%0A- WhatsApp: ${formData.whatsapp}%0A%0A` +
            `*🎓 ACADEMIC INFO*%0A- Qualification: ${formData.lastQualification}%0A- Last Institute: ${formData.schoolName || 'Not Mentioned'}%0A%0A` +
            `*🛡️ GUARDIAN INFO*%0A- Name: ${formData.guardianName}%0A- Contact: ${formData.guardianContact}`;

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    const steps = [
        { id: 1, title: 'Personal', icon: <User size={20} /> },
        { id: 2, title: 'Guardian', icon: <Users size={20} /> },
        { id: 3, title: 'Academic', icon: <GraduationCap size={20} /> },
        { id: 4, title: 'Review', icon: <ShieldCheck size={20} /> },
    ];

    return (
        <section id="AdmissionPremium" className="scroll-mt-24 min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-20 px-4 flex items-center justify-center">
            <div className="max-w-4xl w-full">

                {/* VIP Header */}
                <div className="text-center mb-10">
                    <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-4 inline-block shadow-sm">
                        Official Enrollment 2026
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
                        Admission <span className="text-amber-500">Portal</span>
                    </h2>
                    <p className="text-slate-500 font-medium">Precision in every step. Please fill the details carefully.</p>
                </div>

                {/* Progress Bar */}
                <div className="flex justify-between mb-12 max-w-2xl mx-auto relative px-4">
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -z-10 -translate-y-1/2"></div>
                    {steps.map((s) => (
                        <div key={s.id} className="flex flex-col items-center group">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-2 ${step >= s.id ? 'bg-slate-900 border-slate-900 text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] scale-110' : 'bg-white border-slate-100 text-slate-300'
                                }`}>
                                {step > s.id ? <Check size={22} /> : s.icon}
                            </div>
                            <span className={`mt-3 text-[10px] font-black uppercase tracking-widest ${step >= s.id ? 'text-slate-900' : 'text-slate-300'}`}>
                                {s.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Main Glassmorphism Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white p-8 md:p-14 transition-all">

                    <div className="min-h-[320px]">
                        {/* Step 1: Personal */}
                        {step === 1 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-tighter ml-1">Full Name <span className="text-red-500">*</span></label>
                                        <input name="fullName" onChange={handleInputChange} value={formData.fullName} type="text" placeholder="e.g. Ali Khan" className={`w-full bg-white border ${errors.fullName ? 'border-red-500' : 'border-slate-100'} rounded-2xl p-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all outline-none font-medium shadow-sm`} />
                                        {errors.fullName && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.fullName}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-tighter ml-1">City <span className="text-red-500">*</span></label>
                                        <input name="city" onChange={handleInputChange} value={formData.city} type="text" placeholder="e.g. Karachi" className={`w-full bg-white border ${errors.city ? 'border-red-500' : 'border-slate-100'} rounded-2xl p-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all outline-none font-medium shadow-sm`} />
                                        {errors.city && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.city}</p>}
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-tighter ml-1">WhatsApp Number <span className="text-red-500">*</span></label>
                                        <input name="whatsapp" onChange={handleInputChange} value={formData.whatsapp} type="tel" placeholder="03XXXXXXXXX" className={`w-full bg-white border ${errors.whatsapp ? 'border-red-500' : 'border-slate-100'} rounded-2xl p-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all outline-none font-medium shadow-sm`} />
                                        {errors.whatsapp && <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.whatsapp}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-tighter ml-1">Gender</label>
                                        <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full bg-white border border-slate-100 rounded-2xl p-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all outline-none font-medium shadow-sm cursor-pointer">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Guardian */}
                        {step === 2 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-tighter ml-1">Guardian Full Name <span className="text-red-500">*</span></label>
                                    <input name="guardianName" onChange={handleInputChange} value={formData.guardianName} type="text" placeholder="Father or Guardian's Name" className={`w-full bg-white border ${errors.guardianName ? 'border-red-500' : 'border-slate-100'} rounded-2xl p-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all outline-none font-medium shadow-sm`} />
                                    {errors.guardianName && <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.guardianName}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-tighter ml-1">Guardian Contact No <span className="text-red-500">*</span></label>
                                    <input name="guardianContact" onChange={handleInputChange} value={formData.guardianContact} type="tel" placeholder="03XXXXXXXXX" className={`w-full bg-white border ${errors.guardianContact ? 'border-red-500' : 'border-slate-100'} rounded-2xl p-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all outline-none font-medium shadow-sm`} />
                                    {errors.guardianContact && <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.guardianContact}</p>}
                                </div>
                            </div>
                        )}

                        {/* Step 3: Academic */}
                        {step === 3 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-tighter ml-1">Last Academic Qualification <span className="text-red-500">*</span></label>
                                    <input name="lastQualification" onChange={handleInputChange} value={formData.lastQualification} type="text" placeholder="e.g. Matric / O-Levels" className={`w-full bg-white border ${errors.lastQualification ? 'border-red-500' : 'border-slate-100'} rounded-2xl p-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all outline-none font-medium shadow-sm`} />
                                    {errors.lastQualification && <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.lastQualification}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-tighter ml-1">Previous School / Institute</label>
                                    <input name="schoolName" onChange={handleInputChange} value={formData.schoolName} type="text" placeholder="Name of your last school" className="w-full bg-white border border-slate-100 rounded-2xl p-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all outline-none font-medium shadow-sm" />
                                </div>
                            </div>
                        )}

                        {/* Step 4: Review */}
                        {step === 4 && (
                            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 text-center">
                                <div className="w-24 h-24 bg-amber-50 text-amber-500 rounded-3xl flex items-center justify-center mx-auto shadow-inner rotate-3">
                                    <ShieldCheck size={48} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black text-slate-900">Final Verification</h4>
                                    <p className="text-slate-500 text-sm max-w-xs mx-auto">Please confirm that all provided information is accurate.</p>
                                </div>

                                <label className="flex items-center justify-center gap-3 cursor-pointer group">
                                    <input type="checkbox" checked={formData.isAgreed} onChange={(e) => setFormData({ ...formData, isAgreed: e.target.checked })} className="w-5 h-5 rounded-md border-slate-200 text-amber-500 focus:ring-amber-500 transition-all cursor-pointer" />
                                    <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">I agree to the Admission Terms & Conditions</span>
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-12 pt-10 border-t border-slate-100">
                        <button
                            onClick={() => setStep(step - 1)}
                            disabled={step === 1}
                            className={`flex items-center gap-2 font-black text-xs tracking-widest transition-all ${step === 1 ? 'opacity-0 invisible' : 'text-slate-400 hover:text-slate-900 cursor-pointer'}`}
                        >
                            <ChevronLeft size={16} /> PREVIOUS
                        </button>

                        {step < 4 ? (
                            <button
                                onClick={handleNext}
                                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest flex items-center gap-3 hover:bg-amber-500 transition-all shadow-xl active:scale-95 group cursor-pointer"
                            >
                                CONTINUE <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        ) : (
                            <button
                                onClick={sendToWhatsApp}
                                className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest flex items-center gap-3 hover:shadow-[0_20px_40px_rgba(37,211,102,0.3)] transition-all shadow-xl active:scale-95 cursor-pointer"
                            >
                                SUBMIT TO WHATSAPP <Send size={16} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Secure Note */}
                <div className="mt-8 text-center flex items-center justify-center gap-2 text-slate-400">
                    <ShieldCheck size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">End-to-End Encrypted Data Submission</span>
                </div>
            </div>
        </section>
    );
};

export default AdmissionPortal;