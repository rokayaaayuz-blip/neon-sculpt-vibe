import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Check, 
  ArrowRight,
  Dumbbell,
  Users,
  ClipboardList,
  Heart
} from "lucide-react";

const benefits = [
  { icon: Dumbbell, text: "Access to all equipment" },
  { icon: Users, text: "Expert trainer guidance" },
  { icon: ClipboardList, text: "Custom workout plan" },
  { icon: Heart, text: "Fitness assessment" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Motivational CTA Panel */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-primary/20 via-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(142_70%_45%/0.1)_0%,_transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display uppercase mb-6 animate-fade-up">
            <span className="accent-text-green">Connect.</span>{" "}
            <span className="accent-text-purple">Engage.</span>{" "}
            <span className="text-cta">Transform.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Your transformation begins with a single step. Join ALL FIT today and become the best version of yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="xl" className="group">
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display uppercase text-center mb-12">
            What You <span className="accent-text-green">Get</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glow-card p-6 flex flex-col items-center text-center hover-lift animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-chip mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <span className="text-foreground font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & CTAs */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="glow-card p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-display uppercase mb-8 accent-text-green">
                Visit Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="icon-chip flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      ALL FIT Gym, C Block<br />
                      Main Commercial Area<br />
                      Your City
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="icon-chip flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Sunday: 5:00 AM - 11:00 PM<br />
                      24/7 Access for Members
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-chip flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-chip flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground">hello@allfit.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="glow-card p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cta/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-display uppercase mb-4">
                  Ready to <span className="accent-text-purple">Transform?</span>
                </h3>
                <p className="text-muted-foreground text-lg mb-8">
                  Take the first step towards a healthier, stronger you. Book a free trial session or join ALL FIT today.
                </p>
                
                <div className="space-y-4">
                  <Button variant="cta" size="lg" className="w-full group">
                    Book Free Trial
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="accent" size="lg" className="w-full group">
                    Join ALL FIT Today
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;