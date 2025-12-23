import { Dumbbell, Flame, RefreshCw, Zap } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build muscle and increase power with our progressive overload programs designed by elite strength coaches.",
  },
  {
    icon: Flame,
    title: "HIIT Programs",
    description:
      "Torch calories and boost metabolism with high-intensity interval training that delivers results fast.",
  },
  {
    icon: RefreshCw,
    title: "Body Transformation",
    description:
      "Complete lifestyle overhaul with nutrition, training, and mindset coaching for total body transformation.",
  },
  {
    icon: Zap,
    title: "Functional Fitness",
    description:
      "Improve everyday movement, flexibility, and athletic performance with functional training methods.",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6">
            Discover What{" "}
            <span className="neon-text">Sets Us Apart</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift group cursor-pointer relative overflow-hidden"
            >
              {/* Neon accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <program.icon className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display uppercase mb-3 text-foreground">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
