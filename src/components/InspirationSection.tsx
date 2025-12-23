import { Sparkles, Brain, Apple, Target } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Elite Coaches",
    description: "World-class trainers dedicated to your success",
  },
  {
    icon: Brain,
    title: "Smart Training",
    description: "AI-powered workout plans that adapt to you",
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    description: "Personalized meal plans for optimal results",
  },
  {
    icon: Target,
    title: "Personalized Plans",
    description: "Custom programs tailored to your goals",
  },
];

const InspirationSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6">
            Inspired To Inspire{" "}
            <span className="neon-text">Your Best Self</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe everyone has the potential to achieve greatness. Our
            mission is to provide the tools, guidance, and motivation you need
            to unlock your full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift group cursor-pointer"
            >
              <div className="mb-6 p-4 rounded-2xl bg-primary/10 inline-block group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display uppercase mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
