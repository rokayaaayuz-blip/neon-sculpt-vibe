import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppForm from "@/components/WhatsAppForm";
import InstagramReels from "@/components/InstagramReels";
import Testimonials from "@/components/Testimonials";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// ... (keep all your image imports and services array exactly as they are) ...

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<"assessment" | "training">("assessment");
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  useEffect(() => {
    document.title = "Gym Services in Block C Sushant Lok Phase 1 | Personal Training & Physio – ALL FIT";
  }, []);

  const handleTalkToTrainer = () => {
    window.open(`https://wa.me/919667949344`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* ... (Keep your Hero and Grid sections exactly as they are) ... */}

      <Testimonials />

      {/* ... (Keep your CTA Section exactly as it is) ... */}

      {/* Instagram Reels - CLEAN VERSION */}
      <InstagramReels />

      <Footer />
      
      <WhatsAppForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        formType={formType}
      />
    </div>
  );
};

export default Services;
