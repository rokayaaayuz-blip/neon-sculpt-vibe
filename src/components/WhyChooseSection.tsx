import { useState } from "react";
import featureCardio from "@/assets/feature-cardio.jpg";
import certifiedTrainer from "@/assets/certified-personal-trainer-gym-session.webp";
import featureDiet from "@/assets/feature-diet.jpg";
import featureRehab from "@/assets/feature-rehab.jpg";
import cleanGym from "@/assets/clean-modern-gym-environment.webp";
import beginnerAthlete from "@/assets/beginners-to-athletes-training.webp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const features = [
  {
    image: featureCardio,
    text: "Modern Cardio & Strength Equipment",
    title: "Modern Cardio & Strength Equipment",
    description:
      "At All Fit Gym, we provide modern cardio and strength training equipment to help you exercise safely and comfortably. From treadmills and cycles to weight machines and free weights, our gym supports weight loss, muscle building, and overall fitness.",
  },
  {
    image: certifiedTrainer,
    text: "Certified Personal & General Trainers",
    title: "Certified & Supportive Trainers",
    description:
      "Our certified personal and general trainers are always available to guide you. They focus on proper form, safe workouts, and motivation, making sure members of all ages feel confident while training.",
  },
  {
    image: featureDiet,
    text: "Custom Workout & Diet Planning",
    title: "Personalized Workout & Diet Planning",
    description:
      "We design custom workout routines and diet plans based on your age, body type, and fitness goals. Whether you want to lose weight, gain strength, or stay healthy, our plans help you achieve results step by step.",
  },
  {
    image: featureRehab,
    text: "Rehab & Physiotherapy Support",
    title: "Rehab & Physiotherapy Support",
    description:
      "All Fit Gym also offers rehabilitation and physiotherapy support for members with injuries or body pain. Our expert guidance helps you recover safely and improve movement without over-straining your body.",
  },
  {
    image: cleanGym,
    text: "Clean, Motivating & Safe Environment",
    title: "Clean, Safe & Motivating Environment",
    description:
      "We maintain a clean, hygienic, and well-organized gym space to ensure a safe and positive workout experience. Regular cleaning, proper ventilation, and a friendly atmosphere keep you motivated every day.",
  },
  {
    image: beginnerAthlete,
    text: "Suitable for Beginners to Athletes",
    title: "Suitable for All Fitness Levels",
    description:
      "From beginners and seniors to fitness enthusiasts and athletes, All Fit Gym Sushant Lok Phase 1 welcomes everyone. Our flexible training programs make fitness easy, enjoyable, and effective for all.",
  },
];

const WhyChooseSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null);

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase mb-4">
            Why Choose{" "}
            <span className="accent-text-purple">ALL FIT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setSelectedFeature(feature)}
              className="glow-card overflow-hidden hover-lift animate-fade-up opacity-0 text-left cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={`Learn more about ${feature.text}`}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={feature.image}
                  alt={feature.text}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-5">
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Closing statement */}
        <div className="max-w-2xl mx-auto">
          <div className="glow-card p-8 text-center border-primary/30">
            <p className="text-xl md:text-2xl font-display uppercase">
              At <span className="accent-text-green">ALL FIT</span>, every workout is purposeful.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Detail Dialog */}
      <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="sm:max-w-2xl">
          {selectedFeature && (
            <>
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl font-display uppercase tracking-wide">
                  {selectedFeature.title}
                </DialogTitle>
                <DialogDescription className="text-base text-foreground/80 leading-relaxed pt-3">
                  {selectedFeature.description}
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WhyChooseSection;
