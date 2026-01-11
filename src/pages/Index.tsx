import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

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
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden pb-16 md:pb-0">
        <Navbar />
        <Hero />
        <TrustStrip />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <ScrollReveal>
            <StorySection />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <InstagramReels />
          </ScrollReveal>
          <ScrollReveal>
            <WhyChooseSection />
          </ScrollReveal>
          <ScrollReveal>
            <TrainingZones />
          </ScrollReveal>
          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>
          <ScrollReveal>
            <CoachingCTA />
          </ScrollReveal>
          <ScrollReveal>
            <GoogleMap />
          </ScrollReveal>
          <Footer />
        </Suspense>
      </div>
    </PageTransition>
  );
};

export default Index;
