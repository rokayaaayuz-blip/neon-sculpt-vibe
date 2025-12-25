import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";
const navLinks = [{
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
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/30" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="ALL FIT" className="h-12 w-auto" />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.label} to={link.href} className={`transition-colors duration-200 font-medium ${location.pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"}`}>
                {link.label}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="cta" size="default">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden py-4 border-t border-border/30">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.label} to={link.href} className={`transition-colors duration-200 font-medium py-2 ${location.pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>)}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="cta" className="mt-4 w-full">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;