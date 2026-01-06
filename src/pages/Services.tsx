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
import serviceHiit from "@/assets/service-hiit.webp";
import allfitGymEquipmentTrainingArea from "@/assets/allfit-gym-equipment-training-area.webp";
import certifiedPersonalTrainerGymSession from "@/assets/certified-personal-trainer-gym-session.webp";
import fitnessAssessmentAthlete from "@/assets/fitness-assessment-athlete.jpg";
import featureRehab from "@/assets/feature-rehab.jpg";
import beginnersToAthletesTraining from "@/assets/beginners-to-athletes-training.webp";

const services = [
  {
    title: "Cardio & Strength Training",
    description: "Our facility is equipped with the latest cardio machines and professional-grade strength training equipment to help you achieve your goals.",
    image: allfitGymEquipmentTrainingArea,
    formType: "training" as const
  },
  {
    title: "Personal Training",
    description: "Get personalized guidance from our certified trainers who will create a workout plan tailored specifically to your body and goals.",
    image: certifiedPersonalTrainerGymSession,
    formType: "training" as const
  },
  {
    title: "HIIT & Functional Fitness",
    description: "High-Intensity Interval Training and functional movements to boost your metabolism and improve everyday physical performance.",
    image: serviceHiit,
    formType: "training" as const
  },
  {
    title: "Rehab & Physiotherapy",
    description: "Specialized support for injury recovery and body pain management, helping you move safely and effectively.",
    image: featureRehab,
    formType: "assessment" as const
  },
  {
    title: "Fitness Assessments",
    description: "Regular body composition analysis and fitness testing to track your progress and adjust your program for optimal results.",
    image: fitnessAssessmentAthlete,
    formType: "assessment" as const
  },
  {
    title: "Programs for All Levels",
    description: "From beginners to professional athletes, we offer training environments and programs that suit every level of experience.",
    image: beginnersToAthletesTraining,
    formType: "training" as const
  }
];

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
