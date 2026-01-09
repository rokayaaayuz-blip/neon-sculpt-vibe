import gymReception from "@/assets/gym-reception-interior.webp";
import equipmentZone from "@/assets/gym-equipment-training-zone.webp";
import strengthArea from "@/assets/gym-strength-training-area.webp";
import dumbbellRack from "@/assets/dumbbell-rack-weight-zone.jpg";
import cardioArea from "@/assets/gym-cardio-functional-area.webp";
import powerRack from "@/assets/power-rack-squat-zone.webp";

const galleryImages = [
  {
    src: gymReception,
    alt: "ALL FIT gym reception and motivation wall Gurugram",
    title: "Reception & Welcome",
  },
  {
    src: equipmentZone,
    alt: "Premium gym equipment and training machines at ALL FIT",
    title: "Training Zone",
  },
  {
    src: strengthArea,
    alt: "Spacious strength training area with advanced equipment",
    title: "Strength Area",
  },
  {
    src: dumbbellRack,
    alt: "Complete dumbbell rack and free weights at ALL FIT gym",
    title: "Free Weights",
  },
  {
    src: cardioArea,
    alt: "Cardio and functional training equipment at ALL FIT",
    title: "Cardio Zone",
  },
  {
    src: powerRack,
    alt: "Power rack and squat station at ALL FIT Gurugram",
    title: "Power Rack",
  },
];

const GymGallery = () => {
  return (
    <section className="py-12 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase mb-3">
            Our <span className="accent-text-green">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
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
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
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
