import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-athlete.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase leading-none mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Sculpt Your Body,{" "}
            <span className="neon-text">Elevate Your Spirit</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            Train smarter. Build strength. Transform your lifestyle.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="xl">
              Join Now
            </Button>
            <Button variant="hero-outline" size="xl">
              Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
