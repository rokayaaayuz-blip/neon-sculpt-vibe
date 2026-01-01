import { Quote } from "lucide-react";
import testimonialImg from "@/assets/testimonial.webp";

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6">
            Your Success Stories,{" "}
            <span className="neon-text">Our Inspiration</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Image */}
              <div className="lg:col-span-1">
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={testimonialImg}
                    alt="Transformation story"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl" />
                </div>
              </div>

              {/* Quote */}
              <div className="lg:col-span-2">
                <Quote className="w-12 h-12 text-primary mb-6" />
                <blockquote className="text-xl lg:text-2xl text-foreground mb-6 leading-relaxed">
                  "This gym completely transformed my life. In just 6 months, I
                  lost 30 pounds and gained confidence I never knew I had. The
                  coaches are incredible and the community here is like family.
                  I'm stronger, faster, and more focused than ever before."
                </blockquote>
                <div>
                  <p className="font-display text-xl uppercase text-foreground">
                    Michael Thompson
                  </p>
                  <p className="text-primary">Member since 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
