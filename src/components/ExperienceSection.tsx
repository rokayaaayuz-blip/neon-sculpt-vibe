import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gymInterior from "@/assets/gym-interior.jpg";

const ExperienceSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6">
            Experience Fitness{" "}
            <span className="neon-text">Like Never Before</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Card */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src={gymInterior}
              alt="Premium gym facility"
              className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-display uppercase mb-2">
                State-of-the-Art Facility
              </h3>
              <p className="text-muted-foreground mb-4">
                Premium equipment and luxurious amenities
              </p>
              <Button variant="cta" className="group/btn">
                Take a Tour
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
            {/* Neon accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Content Card */}
          <div className="glass-card p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-display uppercase mb-4">
                Your Journey Starts Here
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Join a community of dedicated individuals who are committed to
                pushing their limits. Our comprehensive programs and expert
                guidance will help you achieve results you never thought
                possible.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Personalized fitness assessments",
                  "Access to all group classes",
                  "Dedicated locker and towel service",
                  "Recovery and spa amenities",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="lg" className="group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
