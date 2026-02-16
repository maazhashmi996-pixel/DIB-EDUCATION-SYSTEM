import AboutSection from "@/Components/Sections/About";
import AdmissionsCTA from "@/Components/Sections/CTA";
import Hero from "@/Components/Sections/Hero";
import VideoTestimonials from "@/Components/Sections/testimonials";
import WhyUs from "@/Components/Sections/Why Us";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyUs />
      <AboutSection />
      <VideoTestimonials />
      <AdmissionsCTA />
    </div>
  );
}
