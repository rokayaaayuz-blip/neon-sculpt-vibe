import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Info, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-allfit.svg";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: Briefcase },
  { name: "About Us", url: "/about", icon: Info },
  { name: "Contact", url: "/contact", icon: Mail },
];

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    navItems.find((item) => item.url === location.pathname)?.name || "Home"
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };
    handleChange(mql);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentItem = navItems.find((item) => item.url === location.pathname);
    if (currentItem) {
      setActiveTab(currentItem.name);
    }
  }, [location.pathname]);

  const handleJoinNow = () => {
    const message = encodeURIComponent(
      "Hello ALL FIT! 👋\n\nI am interested in joining your gym. Could you please share the pricing details and membership plans?"
    );
    window.open(`https://wa.me/919667949344?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Logo - Fixed top left with fade on scroll */}
      <div className={cn(
        "fixed top-4 left-4 z-50 transition-all duration-500",
        isScrolled ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
      )}>
        <Link to="/">
          <img alt="ALL FIT" className="h-14 w-auto" src={logo} />
        </Link>
      </div>

      {/* Desktop Floating Navbar */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6 hidden md:block">
        <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary"
                )}
              >
                <span className="hidden lg:inline">{item.name}</span>
                <span className="lg:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
          
          {/* Join Now Button */}
          <button
            onClick={handleJoinNow}
            className="ml-2 px-6 py-2 bg-cta text-cta-foreground rounded-full font-semibold text-sm hover:bg-cta/90 transition-colors"
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-3 rounded-full bg-secondary/80 backdrop-blur-sm border border-border"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <Link
                  key={item.name}
                  to={item.url}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-secondary"
                  )}
                >
                  <Icon size={24} />
                  <span className="font-semibold text-lg">{item.name}</span>
                </Link>
              );
            })}
            
            <button
              onClick={() => {
                handleJoinNow();
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 p-4 bg-cta text-cta-foreground rounded-2xl font-semibold text-lg text-center"
            >
              Join Now
            </button>
          </div>
        </motion.div>
      )}

    </>
  );
};

export default Navbar;
