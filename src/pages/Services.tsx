import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppForm from "@/components/WhatsAppForm";
import InstagramReels from "@/components/InstagramReels";
import Testimonials from "@/components/Testimonials";

import featureCardio from "@/assets/feature-cardio.jpg";
import strengthTraining from "@/assets/strength-training-barbell-workout.webp";
import certifiedTrainer from "@/assets/certified-personal-trainer-gym-session.webp";
import featureRehab from "@/assets/feature-rehab.jpg";
import featureDiet from "@/assets/feature-diet.jpg";
import workoutProgramming from "@/assets/custom-workout-programming-plan.jpg";
import fitnessAssessment from "@/assets/fitness-assessment-athlete.jpg";
import bodyTransform from "@/assets/body-transformation-results.webp";
import cleanGym from "@/assets/clean-modern-gym-environment.webp";
import beginnerAthlete from "@/assets/beginners-to-athletes-training.webp";

const services = [
  {
    image: featureCardio,
    title: "Cardio Training",
    description: "High-performance treadmills, ellipticals, and cycling machines for endurance and heart health.",
  },
  {
    image: strengthTraining,
    title: "Strength Training",
    description: "Professional-grade free weights, machines, and cable systems for muscle building.",
  },
  {
    image: certifiedTrainer,
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
    image: workoutProgramming,
    title: "Workout Programming",
    description: "Structured workout plans for beginners to advanced athletes, updated monthly.",
  },
  {
    image: cleanGym,
    title: "Access to All Equipment",
    description: "Full access to modern cardio machines, free weights, cable systems, and functional training equipment.",
  },
  {
    image: bodyTransform,
    title: "Body Transformation",
    description: "Comprehensive programs combining training, nutrition, and accountability for lasting change.",
  },
  {
    image: beginnerAthlete,
    title: "Expert Trainer Guidance",
    description: "Professional guidance from certified trainers for beginners and advanced athletes alike.",
  },
  {
    image: fitnessAssessment,
    title: "Fitness Assessment",
    description: "Comprehensive body composition analysis and fitness testing to track your progress.",
  },
];

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<"assessment" | "training">("assessment");

  useEffect(() => {
    document.title = "Gym Services in Block C Sushant Lok Phase 1 | Personal Training & Physio – ALL FIT";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "ALL FIT offers cardio, strength training, personal training, custom diet & workout plans, rehab workouts and physiotherapy in Block C, Sushant Lok Phase 1.");
    }
  }, []);

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
      <section className="pt-28 pb-10 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-4">
            Our <span className="accent-text-green">Services</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals, all under one roof.
          </p>
        </div>
      </section>

{/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase text-center mb-8">
            What We <span className="accent-text-green">Offer</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <article
                key={index}
                className="glow-card overflow-hidden hover-lift animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-display uppercase mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="glow-card p-6 md:p-10 text-center relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase mb-4">
                Ready to <span className="accent-text-purple">Get Started?</span>
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Take the first step towards your fitness transformation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="group px-8"
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
                  className="group px-8"
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
