import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Member since 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "ALL FIT transformed my fitness journey completely. The trainers are incredibly supportive and the equipment is top-notch. Lost 15kg in 6 months!",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Personal Training Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "The personal training sessions here are worth every penny. My trainer understood my goals and created a perfect plan. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Transformation Program",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "From being overweight to now running marathons - ALL FIT made it possible. The community here motivates you every single day.",
    rating: 5,
  },
  {
    name: "Neha Singh",
    role: "Rehab Program",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "After my knee injury, I thought I'd never exercise again. The physiotherapy team at ALL FIT helped me recover and get stronger than before.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase mb-4">
            What Our <span className="accent-text-green">Members</span> Say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Real stories from real people who transformed their lives at ALL FIT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glow-card p-6 hover-lift animate-fade-up opacity-0 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cta text-cta" />
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
