
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import BrandEssence from "@/components/BrandEssence";
import ProductShowcase from "@/components/ProductShowcase";
import ArtistSection from "@/components/ArtistSection";
import MoodGallery from "@/components/MoodGallery";
import TeaseSection from "@/components/TeaseSection";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import SocialProof from "@/components/SocialProof";

const Index = () => {
  useEffect(() => {
    // Set dark mode explicitly
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="text-white min-h-screen">
      {/* Fixed Hero section that covers the entire viewport */}
      <Hero />
      
      {/* Content sections with top margin to account for fixed hero */}
      <div className="relative z-10" style={{ marginTop: '100vh' }}>
        <ScrollIndicator />
        <BrandEssence />
        <ProductShowcase />
        <ArtistSection />
        <MoodGallery />
        <SocialProof />
        <TeaseSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
