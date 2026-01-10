import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight
} from "lucide-react";
import WhatsAppForm from "@/components/WhatsAppForm";
import InstagramReels from "@/components/InstagramReels";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import gymEquipmentArea from "@/assets/allfit-gym-equipment-training-area.webp";
import fitnessWorkoutPlan from "@/assets/fitness-workout-plan-equipment.webp";
import bodyMeasurement from "@/assets/body-measurement-fitness-results.webp";
import personalTrainerSession from "@/assets/personal-trainer-coaching-session.webp";

const benefits = [
  { 
    image: gymEquipmentArea, 
    text: "Access to all equipment",
    title: "Full Equipment Access",
    description: "Get unlimited access to all our modern equipment including cardio machines, free weights, cable systems, power racks, and functional training gear. Everything you need for a complete workout is available under one roof."
  },
  { 
    image: personalTrainerSession, 
    text: "Expert trainer guidance",
    title: "Expert Trainer Guidance",
    description: "Our certified personal and general trainers are always available to guide you. They focus on proper form, safe workouts, and motivation, making sure members of all ages feel confident while training."
  },
  { 
    image: fitnessWorkoutPlan, 
    text: "Custom workout plan",
    title: "Custom Workout Plan",
    description: "We design custom workout routines based on your age, body type, and fitness goals. Whether you want to lose weight, gain strength, or stay healthy, our personalized plans help you achieve results step by step."
  },
  { 
    image: bodyMeasurement, 
    text: "Fitness assessment",
    title: "Comprehensive Fitness Assessment",
    description: "Start your journey with a complete body composition analysis and fitness testing. Regular assessments help track your progress and allow us to adjust your program for optimal results."
  },
];

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState<(typeof benefits)[0] | null>(null);

  useEffect(() => {
    document.title = "Join ALL FIT Gym in Block C Sushant Lok Phase 1 | Free Trial Available";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Looking for the best gym in Block C, Sushant Lok Phase 1? Visit ALL FIT Gym, meet expert trainers and start your fitness journey with a free trial session.");
    }
  }, []);

  const handleJoinNow = () => {
    const message = encodeURIComponent(
      "Hello ALL FIT! 👋\n\nI am interested in joining your gym. Could you please share the pricing details and membership plans?"
    );
    window.open(`https://wa.me/919667949344?text=${message}`, "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+919667949344";
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden pb-0 md:pb-0">
      <Navbar />
      
      {/* Motivational CTA Panel */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-primary/20 via-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(142_70%_45%/0.1)_0%,_transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display uppercase mb-6 animate-fade-up">
            <span className="accent-text-green">Connect.</span>{" "}
            <span className="accent-text-purple">Engage.</span>{" "}
            <span className="text-cta">Transform.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Your transformation begins with a single step. Join ALL FIT today and become the best version of yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="xl" className="group" onClick={() => setIsFormOpen(true)}>
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display uppercase text-center mb-12">
            What You <span className="accent-text-green">Get</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <button
                key={index}
                onClick={() => setSelectedBenefit(benefit)}
                className="glow-card overflow-hidden hover-lift animate-fade-up opacity-0 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={`Learn more about ${benefit.text}`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.text}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5 text-center">
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Benefit Detail Dialog */}
      <Dialog open={!!selectedBenefit} onOpenChange={() => setSelectedBenefit(null)}>
        <DialogContent className="sm:max-w-2xl">
          {selectedBenefit && (
            <>
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={selectedBenefit.image}
                  alt={selectedBenefit.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl font-display uppercase tracking-wide">
                  {selectedBenefit.title}
                </DialogTitle>
                <DialogDescription className="text-base text-foreground/80 leading-relaxed pt-3">
                  {selectedBenefit.description}
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Instagram Reels */}
      <InstagramReels />

      {/* Google Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase text-center mb-8">
            Our <span className="accent-text-purple">Location</span>
          </h2>
          <div className="glow-card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5559387661747!2d77.07008631507883!3d28.45055738248825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f3db40fb61%3A0xc8aa41b9b31ebf75!2sSushant%20Lok%20Phase%20I%2C%20Sector%2043%2C%20Gurugram%2C%20Haryana%20122009!5e0!3m2!1sen!2sin!4v1703590000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="ALL FIT Location - Sushant Lok Phase I, Sector 43, Gurugram"
            />
          </div>
        </div>
      </section>

      {/* Contact Info & CTAs */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase text-center mb-10">
            Get in <span className="accent-text-green">Touch</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="glow-card p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-display uppercase mb-8 accent-text-green">
                Visit Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="icon-chip flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      A, Basement, Block C, 2935<br />
                      Block C, Sushant Lok Phase I<br />
                      Sector 43, Gurugram, Haryana 122009
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="icon-chip flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Hours</p>
                    <p className="text-muted-foreground">
                      6:00 AM - 10:00 PM<br />
                      7 Days a Week
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <button onClick={handlePhone} className="icon-chip flex-shrink-0 hover:bg-secondary/80 transition-colors">
                    <Phone className="w-5 h-5" />
                  </button>
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <button onClick={handlePhone} className="text-muted-foreground hover:text-primary transition-colors">
                      +91 9667949344
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-chip flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a href="mailto:allfit.cblock@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      allfit.cblock@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="glow-card p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cta/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-display uppercase mb-4">
                  Ready to <span className="accent-text-purple">Transform?</span>
                </h3>
                <p className="text-muted-foreground text-lg mb-8">
                  Take the first step towards a healthier, stronger you. Book a free trial session or join ALL FIT today.
                </p>
                
                <div className="space-y-4">
                  <Button variant="cta" size="lg" className="w-full group" onClick={() => setIsFormOpen(true)}>
                    Book Free Trial
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="accent" size="lg" className="w-full group" onClick={handleJoinNow}>
                    Join ALL FIT Today
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <WhatsAppForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        formType="trial"
      />
    </div>
  );
};

export default Contact;
