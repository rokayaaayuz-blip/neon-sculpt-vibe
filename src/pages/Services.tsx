import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppForm from "@/components/WhatsAppForm";
import InstagramReels from "@/components/InstagramReels";
import Testimonials from "@/components/Testimonials";

import featureCardio from "@/assets/feature-cardio.jpg";
import serviceStrength from "@/assets/service-strength.jpg";
import servicePersonal from "@/assets/service-personal.jpg";
import featureRehab from "@/assets/feature-rehab.jpg";
import featureDiet from "@/assets/feature-diet.jpg";
import benefitPlan from "@/assets/benefit-plan.jpg";
import serviceHiit from "@/assets/service-hiit.jpg";
import serviceTransform from "@/assets/service-transform.jpg";

const services = [
  {
    image: featureCardio,
    title: "Cardio Training",
    description: "High-performance treadmills, ellipticals, and cycling machines for endurance and heart health.",
  },
  {
    image: serviceStrength,
    title: "Strength Training",
    description: "Professional-grade free weights, machines, and cable systems for muscle building.",
  },
  {
    image: servicePersonal,
    title: "Personal Training",
    description: "One-on-one coaching with certified trainers who customize every session to your goals.",
  },
  {
    image: featureRehab,
    title: "Rehab & Physiotherapy",
    description: "Injury recovery and prevention programs with licensed physiotherapy support.",
  },
  {
    image: featureDiet,
    title: "Custom Diet Planning",
    description: "Personalized nutrition plans designed to complement your training and maximize results.",
  },
  {
    image: benefitPlan,
    title: "Workout Programming",
    description: "Structured workout plans for beginners to advanced athletes, updated monthly.",
  },
  {
    image: serviceHiit,
    title: "HIIT & Functional Training",
    description: "High-intensity interval training and functional movement classes for overall fitness.",
  },
  {
    image: serviceTransform,
    title: "Body Transformation",
    description: "Comprehensive programs combining training, nutrition, and accountability for lasting change.",
  },
];

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<"assessment" | "training">("assessment");

  const handleTalkToTrainer = () => {
    const message = encodeURIComponent(
      "Hello ALL FIT! 👋\n\nI would like to talk to a trainer about my fitness goals. Could you please connect me with one?"
    );
    window.open(`https://wa.me/919667949344?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display uppercase mb-6">
            Our <span className="accent-text-green">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals, all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glow-card overflow-hidden hover-lift animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display uppercase mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="glow-card p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase mb-6">
                Ready to <span className="accent-text-purple">Get Started?</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Take the first step towards your fitness transformation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="group"
                  onClick={() => {
                    setFormType("assessment");
                    setIsFormOpen(true);
                  }}
                >
                  Book a Free Assessment
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group"
                  onClick={handleTalkToTrainer}
                >
                  Talk to a Trainer
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Reels */}
      <InstagramReels />

      <Footer />
      
      <WhatsAppForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        formType={formType}
      />
    </div>
  );
};

export default Services;
