import { 
  Dumbbell, 
  Users, 
  ClipboardList, 
  Heart, 
  Sparkles, 
  Trophy 
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    text: "Modern Cardio & Strength Equipment",
  },
  {
    icon: Users,
    text: "Certified Personal & General Trainers",
  },
  {
    icon: ClipboardList,
    text: "Custom Workout & Diet Planning",
  },
  {
    icon: Heart,
    text: "Rehab & Physiotherapy Support",
  },
  {
    icon: Sparkles,
    text: "Clean, Motivating & Safe Environment",
  },
  {
    icon: Trophy,
    text: "Suitable for Beginners to Athletes",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-4">
            Why Choose{" "}
            <span className="accent-text-purple">ALL FIT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glow-card p-6 flex items-center gap-4 hover-lift animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-chip">
                <feature.icon className="w-6 h-6" />
              </div>
              <span className="text-foreground font-medium">{feature.text}</span>
            </div>
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
    </section>
  );
};

export default WhyChooseSection;