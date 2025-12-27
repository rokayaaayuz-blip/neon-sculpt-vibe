import cleanGym from "@/assets/clean-modern-gym-environment.jpg";
import trainerSession from "@/assets/certified-personal-trainer-gym-session.jpg";
import strengthTraining from "@/assets/strength-training-barbell-workout.jpg";
import bodyTransform from "@/assets/body-transformation-results.jpg";
import beginnerAthlete from "@/assets/beginners-to-athletes-training.jpg";
import fitnessAssessment from "@/assets/fitness-assessment-athlete.jpg";

const galleryImages = [
  {
    src: cleanGym,
    alt: "Modern cardio equipment at ALL FIT gym Gurugram",
    title: "Premium Equipment",
  },
  {
    src: trainerSession,
    alt: "Certified personal trainer guiding client during workout",
    title: "Expert Guidance",
  },
  {
    src: strengthTraining,
    alt: "Strength training with barbell at ALL FIT gym",
    title: "Strength Zone",
  },
  {
    src: bodyTransform,
    alt: "Body transformation and muscle building results",
    title: "Transformation",
  },
  {
    src: beginnerAthlete,
    alt: "Personal training session for beginners and athletes",
    title: "All Levels Welcome",
  },
  {
    src: fitnessAssessment,
    alt: "Fitness assessment and functional training",
    title: "Functional Training",
  },
];

const GymGallery = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase mb-4">
            Our <span className="accent-text-green">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a look inside ALL FIT – where fitness meets excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl glow-card animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-display uppercase text-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GymGallery;
