const StorySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glow-card p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-display uppercase mb-8">
              Our <span className="accent-text-green">Story</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Since 2021, we've helped people transform their bodies, boost confidence, and build long-term strength. With the launch of ALL FIT – C Block on 21.11.2024, we bring advanced equipment, expert trainers, and an energetic workout environment closer to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;