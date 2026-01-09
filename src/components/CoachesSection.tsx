import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

const coaches = [
  {
    image: coach1,
    name: "Marcus Stone",
    specialty: "Strength & Conditioning",
  },
  {
    image: coach2,
    name: "Elena Rivera",
    specialty: "HIIT & Cardio",
  },
  {
    image: coach3,
    name: "James Carter",
    specialty: "Body Transformation",
  },
];

const CoachesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6">
            Your Fitness Goals,{" "}
            <span className="neon-text">Their Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Meet our world-class trainers who are dedicated to helping you
            achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl cursor-pointer hover-lift"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-display uppercase mb-1">
                  {coach.name}
                </h3>
                <p className="text-primary font-medium">{coach.specialty}</p>
              </div>
              {/* Neon border on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
