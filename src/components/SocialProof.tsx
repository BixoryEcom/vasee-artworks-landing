import React from "react";

const SocialProof = () => (
  <section className="w-full bg-vasee-charcoal py-12 md:py-20 px-4 md:px-6 border-t border-white/10">
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <h3 className="text-xl md:text-2xl font-maison text-white mb-8 text-center font-light">As featured in</h3>
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {/* Use local press/client logos */}
        <img src="/press-logos/nyt-logo.png" alt="NYT" className="h-8 w-auto grayscale opacity-80" />
        <img src="/press-logos/vogue-logo.jpg" alt="Vogue" className="h-8 w-auto grayscale opacity-80" />
        <img src="/press-logos/elle-logo.gif" alt="Elle" className="h-8 w-auto grayscale opacity-80" />
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-vasee-dark/80 rounded-xl p-6 md:p-8 shadow-lg text-center">
          <p className="text-lg md:text-xl text-white font-light mb-4 italic">“The most emotionally resonant glasswork I've ever seen. Vasee's pieces truly hold presence in any space.”</p>
          <span className="text-vasee-gray text-sm">— Interior Design Magazine</span>
        </div>
      </div>
    </div>
  </section>
);

export default SocialProof; 