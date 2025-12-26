import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import StorySection from "@/components/StorySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TrainingZones from "@/components/TrainingZones";
import CoachingCTA from "@/components/CoachingCTA";
import Testimonials from "@/components/Testimonials";
import InstagramReels from "@/components/InstagramReels";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <TrustStrip />
      <StorySection />
      <WhyChooseSection />
      <TrainingZones />
      <CoachingCTA />
      <Testimonials />
      <InstagramReels />
      <Footer />
    </div>
  );
};

export default Index;
