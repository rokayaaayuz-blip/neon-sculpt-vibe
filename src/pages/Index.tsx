import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import InspirationSection from "@/components/InspirationSection";
import ProgramsSection from "@/components/ProgramsSection";
import WorkoutGallery from "@/components/WorkoutGallery";
import ExperienceSection from "@/components/ExperienceSection";
import CoachesSection from "@/components/CoachesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsStrip />
      <InspirationSection />
      <ProgramsSection />
      <WorkoutGallery />
      <ExperienceSection />
      <CoachesSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
