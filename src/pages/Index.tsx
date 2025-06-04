
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import FeedbackSection from "@/components/FeedbackSection";
import FloatingShapes from "@/components/FloatingShapes";
import ParallaxScrolling from "@/components/ParallaxScrolling";
import CursorTrail from "@/components/CursorTrail";
import ParticleSystem from "@/components/ParticleSystem";
import ScrollProgress from "@/components/ScrollProgress";
import InteractiveBackground from "@/components/InteractiveBackground";
import MorphingShapes from "@/components/MorphingShapes";
import HeroSection from "@/components/HeroSection";
import InteractiveMenus from "@/components/InteractiveMenus";
import CoursesSection from "@/components/CoursesSection";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="w-full flex min-h-screen">
        <AppSidebar />
        <div className="flex-1 min-h-screen relative overflow-x-hidden bg-gradient-to-br from-[#1C074E] via-[#221156] to-[#1A093B]">
          <ScrollProgress />
          <CursorTrail />
          <ParticleSystem />
          <FloatingShapes />
          <ParallaxScrolling />
          <InteractiveBackground />
          <MorphingShapes />
          
          <HeroSection />
          <InteractiveMenus />
          <CoursesSection />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FeedbackSection />
          </motion.div>

          <EnhancedFooter />
        </div>
      </div>
      
      <motion.div 
        className="fixed bottom-6 left-5 z-40 md:hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <SidebarTrigger />
      </motion.div>
    </SidebarProvider>
  );
};

export default Index;
