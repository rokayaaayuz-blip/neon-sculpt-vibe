import { Flame } from "lucide-react";

const highlights = [
  "Fat Loss",
  "Muscle Building", 
  "Strength & Conditioning",
  "Injury-Safe Training"
];

const TrustStrip = () => {
  return (
    <section className="py-6 bg-card/50 border-y border-border/30 overflow-hidden">
      <div className="relative">
        {/* Marquee Container */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set */}
          {highlights.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center gap-2 mx-8"
            >
              <Flame className="w-5 h-5 text-cta flex-shrink-0" />
              <span className="text-foreground font-display text-lg uppercase tracking-wider">
                {item}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {highlights.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-2 mx-8"
            >
              <Flame className="w-5 h-5 text-cta flex-shrink-0" />
              <span className="text-foreground font-display text-lg uppercase tracking-wider">
                {item}
              </span>
            </div>
          ))}
          {/* Third duplicate for extra coverage */}
          {highlights.map((item, index) => (
            <div
              key={`third-${index}`}
              className="flex items-center gap-2 mx-8"
            >
              <Flame className="w-5 h-5 text-cta flex-shrink-0" />
              <span className="text-foreground font-display text-lg uppercase tracking-wider">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
