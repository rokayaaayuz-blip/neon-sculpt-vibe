import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-athlete.webp";
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
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        {/* Background Image Wrapper */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* FIX: Removed the multiple bg-gradient layers that were hiding the image.
            Using bg-black/40 creates a uniform tint so the text is readable,
            but the image remains visible from top to bottom.
          */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content - positioned at bottom on mobile, center on desktop */}
        <div className="relative z-10 container mx-auto px-4 text-center mb-8 md:mb-0">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-4 animate-fade-up" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="accent-text-green text-primary-foreground">Train Strong.</span>{" "}
              <span className="text-foreground">Live Fit.</span>{" "}
              <span className="accent-text-purple">Stay Consistent.</span>
            </h1>
            
            <p 
              className="text-base md:text-lg text-primary font-semibold mb-2 animate-fade-up opacity-0" 
              style={{ animationDelay: "0.2s" }}
            >
              Premium Fitness Gym in Sushant Lok Phase I
            </p>

            <p 
              className="text-muted-foreground text-sm md:text-base mb-2 animate-fade-up opacity-0" 
              style={{ animationDelay: "0.3s" }}
            >
              Cardio • Strength • Personal Training • Rehab • Physiotherapy
            </p>

            <p 
              className="text-sm md:text-base text-foreground/90 max-w-xl mx-auto mb-6 animate-fade-up opacity-0" 
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
              <Button variant="outline" size="lg" className="text-base px-8 py-3" onClick={() => setIsFormOpen(true)}>
                Book Free Trial
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade - subtle transition to the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>
      
      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} formType="trial" />
    </>
  );
};

export default Hero;
