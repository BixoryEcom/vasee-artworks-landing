import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import BrandEssence from "@/components/BrandEssence";
import ProductShowcase from "@/components/ProductShowcase";
import ArtistSection from "@/components/ArtistSection";
import MoodGallery from "@/components/MoodGallery";
import TeaseSection from "@/components/TeaseSection";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  useEffect(() => {
    // Set dark mode explicitly
    document.documentElement.classList.add('dark');
    // Removed body background color to prevent dark space above hero
  }, []);

  return (
    <div className="text-white min-h-screen flex flex-col">
      <Hero />
      <ScrollIndicator />
      <BrandEssence />
      <ProductShowcase />
      <ArtistSection />
      <MoodGallery />
      <TeaseSection />
      <Footer />
    </div>
  );
};

export default Index;
