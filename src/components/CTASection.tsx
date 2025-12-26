import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppForm from "./WhatsAppForm";

const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-cta/20" />
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6 text-foreground">
              Connect. Engage. <span className="accent-text-green">Transform.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Your transformation journey begins with a single step. Join thousands
              of members who have already changed their lives. Start today.
            </p>
            <Button 
              variant="cta" 
              size="xl" 
              className="group"
              onClick={() => setIsFormOpen(true)}
            >
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
      
      <WhatsAppForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        formType="journey"
      />
    </>
  );
};

export default CTASection;
