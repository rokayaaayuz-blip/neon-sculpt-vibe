import workout1 from "@/assets/workout-1.webp";
import workout2 from "@/assets/workout-2.webp";
import workout3 from "@/assets/workout-3.jpg";
import workout4 from "@/assets/workout-4.jpg";

const workouts = [
  { image: workout1, caption: "Kettlebell Power" },
  { image: workout2, caption: "Battle Ropes Intensity" },
  { image: workout3, caption: "Strength Foundation" },
  { image: workout4, caption: "Combat Training" },
];

const WorkoutGallery = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6">
            Train Smarter,{" "}
            <span className="neon-text">Unleash Your Potential</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {workouts.map((workout, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={workout.image}
                alt={workout.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display text-lg uppercase text-foreground">
                  {workout.caption}
                </p>
              </div>
              {/* Neon border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutGallery;
