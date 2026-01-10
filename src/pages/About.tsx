import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Eye, Dumbbell, Heart, Trophy, Clock } from "lucide-react";
import InstagramReels from "@/components/InstagramReels";
import GymGallery from "@/components/GymGallery";
import teamGroupPhoto from "@/assets/allfit-team-group-photo.webp";

const teamStats = [
  { icon: Users, value: "10+", label: "Expert Trainers" },
  { icon: Trophy, value: "500+", label: "Transformations" },
  { icon: Clock, value: "16hrs", label: "Daily Open" },
  { icon: Dumbbell, value: "3+", label: "Years Experience" },
];

const culturePoints = [
  "Discipline Over Motivation",
  "Progress Over Perfection",
  "Community Over Competition",
  "Consistency Over Intensity",
];

const About = () => {
  useEffect(() => {
    document.title = "About ALL FIT Gym | Trusted Fitness Gym in Sushant Lok Phase 1 Since 2021";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "ALL FIT Gym has been helping people stay fit since 2021. With expert trainers and modern equipment, we deliver real fitness results in Sushant Lok Phase 1.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden pb-16 md:pb-0">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-10 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-4">
            About <span className="accent-text-green">ALL FIT</span>
          </h1>
          <p className="text-lg md:text-xl font-display uppercase text-accent">
            Built on Discipline. Driven by Results.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-display uppercase mb-4">
                Our <span className="accent-text-green">Story</span>
              </h2>
              <div className="space-y-3 text-muted-foreground text-base">
                <p>
                  Since 2021, we've helped people transform their bodies, boost confidence, and build long-term strength.
                </p>
                <p>
                  With the launch of ALL FIT – C Block on 21.11.2024, we bring advanced equipment, expert trainers, and an energetic workout environment closer to you.
                </p>
                <p>
                  We believe fitness is more than just exercise — it's a lifestyle. At ALL FIT, we're committed to creating a space where every individual, regardless of their starting point, can achieve their best self.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden relative">
                <img 
                  src={teamGroupPhoto} 
                  alt="ALL FIT Team Group Photo - Expert Trainers in Gurugram" 
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glow-card p-6 hover-lift atomic-gradient">
              <div className="icon-chip mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-display uppercase mb-3 accent-text-green">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                To empower individuals through fitness by providing world-class equipment, expert guidance, and a motivating environment that inspires lasting transformation.
              </p>
            </div>

            <div className="glow-card p-6 hover-lift atomic-gradient">
              <div className="icon-chip mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-display uppercase mb-3 accent-text-purple">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                To become the most trusted fitness destination in the community, known for transforming lives and building a healthier, stronger society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase text-center mb-8">
            The <span className="accent-text-green">Numbers</span> Speak
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teamStats.map((stat, index) => (
              <div
                key={index}
                className="glow-card p-4 text-center hover-lift animate-fade-up opacity-0 atomic-gradient"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-chip mx-auto mb-3 w-10 h-10">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-3xl md:text-4xl font-display accent-text-green mb-1">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Culture */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display uppercase mb-8">
              Our <span className="accent-text-purple">Culture</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {culturePoints.map((point, index) => (
                <div
                  key={index}
                  className="glow-card p-3 flex items-center gap-3 animate-fade-up opacity-0 atomic-gradient"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Heart className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <InstagramReels />

      {/* Gallery Section */}
      <GymGallery />

      <Footer />
    </div>
  );
};

export default About;
