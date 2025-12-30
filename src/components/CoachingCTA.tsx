import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import WhatsAppForm from "./WhatsAppForm";

const CoachingCTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleMeetTrainers = () => {
    const message = encodeURIComponent(
      "Hello ALL FIT! 👋\n\nI would like to know more about your trainers and coaching services. Could you please share the pricing details?"
    );
    window.open(`https://wa.me/919667949344?text=${message}`, "_blank");
  };

  return (
    <>
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="glow-card p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="icon-chip mx-auto mb-6 w-16 h-16">
                <Users className="w-8 h-8" />
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase mb-6">
                Expert Coaching That{" "}
                <span className="accent-text-green">Delivers Results</span>
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Our trainers guide, motivate, and push you — safely and effectively.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="group" onClick={handleMeetTrainers}>
                  Meet Our Trainers
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="cta" size="lg" className="group" onClick={() => setIsFormOpen(true)}>
                  Start Training Today
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        formType="training"
      />
    </>
  );
};

export default CoachingCTA;
