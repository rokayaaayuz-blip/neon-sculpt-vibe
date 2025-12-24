import { Flame, ArrowRight } from "lucide-react";

const highlights = [
  "Fat Loss",
  "Muscle Building",
  "Strength & Conditioning",
  "Injury-Safe Training",
];

const TrustStrip = () => {
  return (
    <section className="py-12 bg-card/50 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
          {/* Highlight badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-secondary/80 px-4 py-2 rounded-full border border-border/50 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Flame className="w-4 h-4 text-cta" />
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA text */}
          <div 
            className="flex items-center gap-2 text-primary font-semibold animate-fade-up opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <ArrowRight className="w-5 h-5" />
            <span>Your fitness journey starts here.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;