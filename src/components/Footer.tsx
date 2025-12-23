import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-display uppercase neon-text mb-4">
              FORGE
            </h3>
            <p className="text-muted-foreground text-sm">
              Elite fitness experience designed to push your limits and transform
              your body.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display uppercase text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Programs", "Trainers", "Pricing"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display uppercase text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {["Contact", "FAQs", "Membership", "Careers"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display uppercase text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>123 Fitness Boulevard</li>
              <li>New York, NY 10001</li>
              <li>info@forgefit.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 FORGE Fitness. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
