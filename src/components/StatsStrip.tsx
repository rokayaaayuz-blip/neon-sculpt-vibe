import { Users, Award, Dumbbell, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "12k+", label: "Members" },
  { icon: Award, value: "50+", label: "Expert Coaches" },
  { icon: Dumbbell, value: "100+", label: "Premium Equipment" },
  { icon: Clock, value: "24/7", label: "Access" },
];

const StatsStrip = () => {
  return (
    <section className="py-8 border-y border-border/30 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-3 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl md:text-4xl font-display text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
