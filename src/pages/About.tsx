import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Eye, Dumbbell, Heart, Trophy, Clock, Instagram, Play } from "lucide-react";
import gymInterior from "@/assets/gym-interior.jpg";

const teamStats = [
  { icon: Users, value: "10+", label: "Expert Trainers" },
  { icon: Trophy, value: "500+", label: "Transformations" },
  { icon: Clock, value: "24/7", label: "Access" },
  { icon: Dumbbell, value: "3+", label: "Years Experience" },
];

const culturePoints = [
  "Discipline Over Motivation",
  "Progress Over Perfection",
  "Community Over Competition",
  "Consistency Over Intensity",
];

const instagramReels = [
  { id: 1, thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=400&fit=crop" },
  { id: 2, thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=400&fit=crop" },
  { id: 3, thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=400&fit=crop" },
  { id: 4, thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=300&h=400&fit=crop" },
  { id: 5, thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300&h=400&fit=crop" },
  { id: 6, thumbnail: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300&h=400&fit=crop" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display uppercase mb-6">
            About <span className="accent-text-green">ALL FIT</span>
          </h1>
          <p className="text-xl md:text-2xl font-display uppercase text-accent">
            Built on Discipline. Driven by Results.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-display uppercase mb-6">
                Our <span className="accent-text-green">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
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
              <div className="rounded-3xl overflow-hidden">
                <img 
                  src={gymInterior} 
                  alt="ALL FIT Gym Interior" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display uppercase">
                Follow Us on <span className="accent-text-purple">Instagram</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              @allfit_c_block
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramReels.map((reel, index) => (
              <a
                key={reel.id}
                href="https://www.instagram.com/allfit_c_block/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden glow-card animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={reel.thumbnail}
                  alt={`ALL FIT Instagram Reel ${reel.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-5 h-5 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <Instagram className="w-5 h-5 text-foreground/80" />
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/allfit_c_block/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Instagram className="w-5 h-5" />
              View More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="glow-card p-8 md:p-10 hover-lift atomic-gradient">
              <div className="icon-chip mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display uppercase mb-4 accent-text-green">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower individuals through fitness by providing world-class equipment, expert guidance, and a motivating environment that inspires lasting transformation.
              </p>
            </div>

            {/* Vision */}
            <div className="glow-card p-8 md:p-10 hover-lift atomic-gradient">
              <div className="icon-chip mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display uppercase mb-4 accent-text-purple">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become the most trusted fitness destination in the community, known for transforming lives and building a healthier, stronger society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display uppercase text-center mb-16">
            The <span className="accent-text-green">Numbers</span> Speak
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <div
                key={index}
                className="glow-card p-6 text-center hover-lift animate-fade-up opacity-0 atomic-gradient"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-chip mx-auto mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-display accent-text-green mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Culture */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display uppercase mb-12">
              Our <span className="accent-text-purple">Culture</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {culturePoints.map((point, index) => (
                <div
                  key={index}
                  className="glow-card p-4 flex items-center gap-3 animate-fade-up opacity-0 atomic-gradient"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Heart className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;