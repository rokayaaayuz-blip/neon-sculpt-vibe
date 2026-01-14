import { useState } from "react";
import { Button } from "@/components/ui/button";
import WhatsAppForm from "./WhatsAppForm";

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
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Grainy textured background */}
        <div className="absolute inset-0 bg-[#F5F5F5] z-0" />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 z-[1] opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Vertical blue translucent bar */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-24 md:w-32 lg:w-40 z-[2]"
          style={{
            background: 'linear-gradient(180deg, hsl(195 85% 60% / 0.2) 0%, hsl(195 85% 70% / 0.3) 50%, hsl(195 85% 60% / 0.2) 100%)',
            backdropFilter: 'blur(8px)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            
            {/* Main DISCIPLINE heading */}
            <h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-none mb-6 animate-fade-up tracking-wider" 
              style={{ 
                animationDelay: "0.1s", 
                background: "none", 
                WebkitTextFillColor: "unset",
                textShadow: '4px 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              <span className="text-primary">DISCIPLINE</span>
            </h1>
            
            {/* Subheading - Premium Fitness */}
            <p 
              className="text-sm md:text-base lg:text-lg text-primary font-semibold mb-3 animate-fade-up opacity-0 uppercase tracking-widest" 
              style={{ animationDelay: "0.2s" }}
            >
              Premium Fitness Gym in Sushant Lok Phase I
            </p>

            {/* Tagline */}
            <p 
              className="text-base md:text-lg lg:text-xl text-foreground font-medium max-w-md mx-auto mb-10 animate-fade-up opacity-0" 
              style={{ animationDelay: "0.3s" }}
            >
              all fit is where fitness becomes a lifestyle
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" 
              style={{ animationDelay: "0.4s" }}
            >
              <Button 
                variant="cta" 
                size="lg" 
                className="text-base px-10 py-6 rounded-full font-semibold shadow-lg" 
                onClick={handleJoinNow}
              >
                Book Now
              </Button>
              <Button 
                size="lg" 
                className="text-base px-10 py-6 rounded-full font-semibold bg-foreground/10 backdrop-blur-md border border-foreground/20 text-foreground hover:bg-foreground/20 shadow-lg" 
                onClick={() => setIsFormOpen(true)}
              >
                Free Trial
              </Button>
            </div>
          </div>
        </div>

        {/* Gradient overlay at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>
      
      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} formType="trial" />
    </>
  );
};

export default Hero;
