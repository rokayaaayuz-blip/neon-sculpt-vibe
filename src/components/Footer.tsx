import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";
const footerLinks = [{
  label: "Home",
  href: "/"
}, {
  label: "Services",
  href: "/services"
}, {
  label: "About Us",
  href: "/about"
}, {
  label: "Contact",
  href: "/contact"
}];
const socialLinks = [{
  icon: Instagram,
  href: "#"
}, {
  icon: Facebook,
  href: "#"
}, {
  icon: Twitter,
  href: "#"
}, {
  icon: Youtube,
  href: "#"
}];
const Footer = () => {
  return <footer className="py-12 bg-card border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="ALL FIT" className="h-12 w-auto border-muted" />
            
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(link => <Link key={link.label} to={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                {link.label}
              </Link>)}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => <a key={index} href={social.href} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200">
                <social.icon className="w-5 h-5" />
              </a>)}
          </div>
        </div>

        <div className="section-divider my-8" />

        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} ALL FIT. All rights reserved.
        </p>
      </div>
    </footer>;
};
export default Footer;