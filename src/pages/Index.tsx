import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";

// Lazy load below-the-fold components to reduce initial bundle size
const StorySection = lazy(() => import("@/components/StorySection"));
const WhyChooseSection = lazy(() => import("@/components/WhyChooseSection"));
const TrainingZones = lazy(() => import("@/components/TrainingZones"));
const CoachingCTA = lazy(() => import("@/components/CoachingCTA"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const InstagramReels = lazy(() => import("@/components/InstagramReels"));
const Footer = lazy(() => import("@/components/Footer"));
const GoogleMap = lazy(() => import("@/components/GoogleMap"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <StorySection />
        <InstagramReels />
        <WhyChooseSection />
        <TrainingZones />
        <Testimonials />
        <CoachingCTA />
        <GoogleMap />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
