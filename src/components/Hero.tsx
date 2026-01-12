import { useState } from "react";
import { Button } from "@/components/ui/button";
import WhatsAppForm from "./WhatsAppForm";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleJoinNow = () => {
    const message = encodeURIComponent(
      "Hello ALL FIT! 👋\n\nI am interested in joining your gym. Could you please share the pricing details and membership plans?"
    );
    window.open(`https://wa.me/919667949344?text=${message}`, "_blank");
  };

  return (
    <>
      <section className="relative min-h-screen w-full flex items-end md:items-center justify-center overflow-hidden">
        
        {/* HERO SLIDER BACKGROUND */}
        <HeroSlider className="absolute inset-0 w-full h-full z-0" />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* Content - relative z-10 puts it above the image */}
        <div className="relative z-10 container mx-auto px-4 text-center pb-16 md:pb-0">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-4 animate-fade-up" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-white drop-shadow-lg">Train Strong.</span>{" "}
              <span className="text-white drop-shadow-lg">Live Fit.</span>{" "}
              <span className="text-primary drop-shadow-lg">Stay Consistent.</span>
            </h1>
            
            <p 
              className="text-base md:text-lg text-primary font-semibold mb-2 animate-fade-up opacity-0 drop-shadow-md" 
              style={{ animationDelay: "0.2s" }}
            >
              Premium Fitness Gym in Sushant Lok Phase I
            </p>

            <p 
              className="text-white/90 text-sm md:text-base mb-2 animate-fade-up opacity-0 drop-shadow-md" 
              style={{ animationDelay: "0.3s" }}
            >
              Cardio • Strength • Personal Training • Rehab • Physiotherapy
            </p>

            <p 
              className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-6 animate-fade-up opacity-0 drop-shadow-md" 
              style={{ animationDelay: "0.4s" }}
            >
              ALL FIT is where fitness becomes a lifestyle.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up opacity-0" 
              style={{ animationDelay: "0.5s" }}
            >
              <Button variant="cta" size="lg" className="text-base px-8 py-3" onClick={handleJoinNow}>
                Join Now
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => setIsFormOpen(true)}>
                Book Free Trial
              </Button>
            </div>
          </div>
        </div>

        {/* Gradient overlay at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-t from-background via-background/80 to-transparent z-[5]" />
      </section>
      
      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} formType="trial" />
    </>
  );
};

export default Hero;
