import featureCardio from "@/assets/feature-cardio.jpg";
import featureTrainers from "@/assets/feature-trainers.jpg";
import featureDiet from "@/assets/feature-diet.jpg";
import featureRehab from "@/assets/feature-rehab.jpg";
import featureClean from "@/assets/feature-clean.jpg";
import featureAthletes from "@/assets/feature-athletes.jpg";

const features = [
  {
    image: featureCardio,
    text: "Modern Cardio & Strength Equipment",
  },
  {
    image: featureTrainers,
    text: "Certified Personal & General Trainers",
  },
  {
    image: featureDiet,
    text: "Custom Workout & Diet Planning",
  },
  {
    image: featureRehab,
    text: "Rehab & Physiotherapy Support",
  },
  {
    image: featureClean,
    text: "Clean, Motivating & Safe Environment",
  },
  {
    image: featureAthletes,
    text: "Suitable for Beginners to Athletes",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-4">
            Why Choose{" "}
            <span className="accent-text-purple">ALL FIT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glow-card overflow-hidden hover-lift animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.text}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="max-w-2xl mx-auto">
          <div className="glow-card p-8 text-center border-primary/30">
            <p className="text-xl md:text-2xl font-display uppercase">
              At <span className="accent-text-green">ALL FIT</span>, every workout is purposeful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
