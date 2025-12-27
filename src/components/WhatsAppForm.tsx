import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface WhatsAppFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType?: "trial" | "assessment" | "journey" | "training";
}

const formTitles = {
  trial: "Book Your Free Trial",
  assessment: "Book Free Assessment",
  journey: "Start Your Journey",
  training: "Start Training Today",
};

const WhatsAppForm = ({ isOpen, onClose, formType = "trial" }: WhatsAppFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [joiningDate, setJoiningDate] = useState("");

  // Hide bottom nav when form is open on mobile
  useEffect(() => {
    const bottomNav = document.querySelector('.mobile-bottom-nav');
    if (bottomNav) {
      if (isOpen) {
        bottomNav.classList.add('hidden');
      } else {
        bottomNav.classList.remove('hidden');
      }
    }
    return () => {
      if (bottomNav) {
        bottomNav.classList.remove('hidden');
      }
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello ALL FIT! 👋

*${formTitles[formType]}*

Name: ${name}
Contact: ${phone}${joiningDate ? `\nPreferred Joining Date: ${joiningDate}` : ""}

I would like to know more about your gym services.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919667949344?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setName("");
    setPhone("");
    setJoiningDate("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          
          {/* Form Modal - Centered on all devices */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glow-card p-6 md:p-8 w-full max-w-md relative overflow-hidden">
              {/* Background accents */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-display uppercase mb-2 accent-text-green">
                  {formTitles[formType]}
                </h3>
                <p className="text-muted-foreground mb-6">
                  Fill in your details and we'll connect with you on WhatsApp.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Contact Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Preferred Joining Date (Optional)
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={joiningDate}
                      onChange={(e) => setJoiningDate(e.target.value)}
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <Button type="submit" variant="cta" size="lg" className="w-full mt-6 group">
                    <Send className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppForm;
