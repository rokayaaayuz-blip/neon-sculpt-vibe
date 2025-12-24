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
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase leading-none mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="accent-text-green">ALL FIT</span>
          </h1>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-display uppercase leading-tight mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Train Strong. Live Fit.{" "}
            <span className="accent-text-purple">Stay Consistent.</span>
          </h2>
          
          <p 
            className="text-xl md:text-2xl text-primary font-semibold mb-4 animate-fade-up opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            Premium Fitness Gym in C Block
          </p>

          <p 
            className="text-muted-foreground text-lg mb-4 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            Cardio • Strength • Personal Training • Rehab • Physiotherapy
          </p>

          <p 
            className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            ALL FIT is where fitness becomes a lifestyle.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="cta" size="xl">
              Join Now
            </Button>
            <Button variant="outline" size="xl">
              Book Free Trial
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