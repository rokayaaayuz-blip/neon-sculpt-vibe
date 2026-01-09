import { Heart, Dumbbell } from "lucide-react";
import workout1 from "@/assets/workout-1.webp";
import workout2 from "@/assets/workout-2.webp";

const zones = [
  {
    icon: Heart,
    emoji: "🏃",
    title: "Cardio Section",
    description: "Burn calories, improve stamina, and boost heart health with high-performance cardio machines.",
    image: workout1,
    accentColor: "primary",
  },
  {
    icon: Dumbbell,
    emoji: "🏋️",
    title: "Strength Section",
    description: "Build muscle, power, and core strength using professional-grade strength equipment.",
    image: workout2,
    accentColor: "accent",
  },
];

const TrainingZones = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase mb-4">
            Training <span className="accent-text-green">Zones</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group hover-lift animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={zone.image}
                alt={zone.title}
                loading="lazy"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{zone.emoji}</span>
                  <h3 className={`text-2xl md:text-3xl font-display uppercase ${zone.accentColor === 'primary' ? 'accent-text-green' : 'accent-text-purple'}`}>
                    {zone.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg max-w-md">
                  {zone.description}
                </p>
              </div>

              {/* Accent border */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${zone.accentColor === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingZones;