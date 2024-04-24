import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import MovingCard from "@/components/MovingCard";
import WavyBack from "@/components/WavyBack";
import AnimatedTooltipPreview from "@/components/AnimatedTooltipPreview";

import Footer from "@/components/Footer";

 
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">  
      <HeroSection /> 
      <FeatureCard />
      <WhyChooseUs />
      <MovingCard /> 
      <WavyBack />  
      <AnimatedTooltipPreview />    
      <Footer />
    </main>
  );   
} 

// ---------------------------ui libuary ---------------------------------------
// https://ui.aceternity.com/components/meteors