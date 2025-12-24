import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Eye, Dumbbell, Heart, Trophy, Clock } from "lucide-react";
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

      {/* Mission & Vision */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="glow-card p-8 md:p-10 hover-lift">
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
            <div className="glow-card p-8 md:p-10 hover-lift">
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display uppercase text-center mb-16">
            The <span className="accent-text-green">Numbers</span> Speak
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <div
                key={index}
                className="glow-card p-6 text-center hover-lift animate-fade-up opacity-0"
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
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display uppercase mb-12">
              Our <span className="accent-text-purple">Culture</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {culturePoints.map((point, index) => (
                <div
                  key={index}
                  className="glow-card p-4 flex items-center gap-3 animate-fade-up opacity-0"
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