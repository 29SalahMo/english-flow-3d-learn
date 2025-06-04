
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import ThreeGlobe from "@/components/ThreeGlobe";
import CourseCard from "@/components/CourseCard";
import FeedbackSection from "@/components/FeedbackSection";
import { useState } from "react";
import FloatingShapes from "@/components/FloatingShapes";
import ModernHeroButtons from "@/components/ModernHeroButtons";
import ParallaxScrolling from "@/components/ParallaxScrolling";
import AnimatedText from "@/components/AnimatedText";
import CursorTrail from "@/components/CursorTrail";
import ParticleSystem from "@/components/ParticleSystem";
import ScrollProgress from "@/components/ScrollProgress";
import InteractiveBackground from "@/components/InteractiveBackground";
import LoadingAnimation from "@/components/LoadingAnimation";
import SoundVisualization from "@/components/SoundVisualization";
import MorphingShapes from "@/components/MorphingShapes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, BookOpen, Users, MessageCircle, HelpCircle, Calendar, CheckCircle } from "lucide-react";

const courses = [
  {
    title: "Intermediate English",
    level: "Intermediate" as const,
    description: "Master English for work, travel, and social interactions using immersive 3D and real-life examples.",
  },
  {
    title: "Marketing Course",
    level: "Intermediate" as const,
    description: "Learn essential marketing concepts and skills using the same visual, interactive methods!",
  }
];

const menus = [
  {
    label: "Course Overview",
    icon: BookOpen,
    list: [
      { item: "Course structure", action: "View detailed curriculum breakdown" },
      { item: "What you will learn", action: "Explore learning outcomes" },
      { item: "Requirements", action: "Check prerequisites" }
    ]
  },
  {
    label: "Student Tools",
    icon: HelpCircle,
    list: [
      { item: "Flashcards", action: "Create and review flashcards" },
      { item: "Progress Tracker", action: "Monitor your learning journey" },
      { item: "Ask the Instructor", action: "Get instant help and guidance" }
    ]
  },
  {
    label: "Support & Community",
    icon: Users,
    list: [
      { item: "Live Chat", action: "Connect with support team" },
      { item: "Discussion Forums", action: "Join student discussions" },
      { item: "Events Calendar", action: "View upcoming events and webinars" }
    ]
  }
];

const Index = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleItemClick = (action: string) => {
    console.log(`Action clicked: ${action}`);
    // You can add navigation logic here based on the action
  };

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
          
          {/* HERO With 3D globe and banner */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[480px] md:min-h-[75vh] flex flex-col items-center justify-center px-3 sm:px-5 z-10"
          >
            <ThreeGlobe />
            <div className="z-10 relative text-center mt-16 sm:mt-20 md:mt-32">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="uppercase tracking-widest text-xs md:text-base font-bold mb-2 text-purple-300"
              >
                Empower Your Future · Learn Visually · Achieve More
              </motion.p>
              <AnimatedText 
                text="English course with a free marketing course"
                className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg"
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-base sm:text-lg md:text-2xl mb-8 text-purple-100 md:max-w-2xl mx-auto"
              >
                Unlock powerful English and in-demand marketing skills through cutting-edge, interactive courses backed by real feedback from learners just like you!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <ModernHeroButtons />
              </motion.div>
            </div>
            
            {/* Sound Visualization */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-8 z-10"
            >
              <SoundVisualization />
            </motion.div>
          </motion.section>

          {/* INTERACTIVE MENUS/LISTS */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto pt-8 pb-8 flex flex-col gap-8 items-center" 
            id="student-tools"
          >
            <motion.div 
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {menus.map((menu, idx) => {
                const IconComponent = menu.icon;
                return (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      rounded-xl px-4 py-3 sm:px-6 font-semibold transition-all duration-300 flex items-center gap-2
                      ${selectedMenu === idx 
                        ? 'bg-gradient-to-r from-[#D977FA] to-[#4F46E5] text-white shadow-lg shadow-purple-500/25' 
                        : 'bg-[#22104C] text-purple-200 hover:bg-[#44277D] hover:shadow-md'}
                    `}
                    onClick={() => setSelectedMenu(idx)}
                  >
                    <IconComponent size={18} />
                    {menu.label}
                  </motion.button>
                );
              })}
            </motion.div>
            
            <motion.div
              key={selectedMenu}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-lg mx-auto bg-[#23114b]/80 text-purple-100 rounded-xl p-4 sm:p-6 shadow-xl border border-[#5536a6]/30 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold mb-4 text-center text-purple-200 flex items-center justify-center gap-2">
                {React.createElement(menus[selectedMenu].icon, { size: 20 })}
                {menus[selectedMenu].label}
              </h3>
              <ul className="space-y-2">
                {menus[selectedMenu].list.map((listItem, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    onMouseEnter={() => setHoveredItem(i)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`
                      p-3 pl-4 border-l-4 border-[#C084FC] rounded-r-lg cursor-pointer transition-all duration-300
                      ${hoveredItem === i 
                        ? 'bg-gradient-to-r from-[#2f1a5e] to-[#3d2373] transform translate-x-2 shadow-md' 
                        : 'hover:bg-[#2f1a5e]/60'}
                    `}
                    onClick={() => handleItemClick(listItem.action)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-[#C084FC]" />
                          <span className="font-medium">{listItem.item}</span>
                        </div>
                        <p className="text-xs text-purple-300 mt-1 ml-6">{listItem.action}</p>
                      </div>
                      <ChevronRight 
                        size={16} 
                        className={`text-[#C084FC] transition-transform duration-300 ${
                          hoveredItem === i ? 'translate-x-1' : ''
                        }`} 
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.section>

          {/* COURSES */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id="courses" 
            className="container pt-8 pb-12 md:py-24"
          >
            <AnimatedText 
              text="Choose Your Course"
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12 text-purple-100 drop-shadow"
            />
            <motion.div 
              className="flex flex-col md:flex-row gap-7 md:gap-8 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {courses.map((c, index) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CourseCard
                    title={c.title}
                    level={c.level}
                    description={c.description}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Loading Animation */}
            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <LoadingAnimation />
            </motion.div>
          </motion.section>

          {/* FEEDBACK REPLACES ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FeedbackSection />
          </motion.div>

          {/* FOOTER */}
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center py-7 text-purple-300 text-xs sm:text-sm mt-2 sm:mt-6"
          >
            &copy; {new Date().getFullYear()} Interactive English & Marketing Courses
            {" · "}
            <Link
              to="/about-us"
              className="text-[#D977FA] hover:underline story-link ml-1 transition-colors duration-300 hover:text-[#E084FF]"
            >
              About Us
            </Link>
          </motion.footer>
        </div>
      </div>
      {/* Floating sidebar trigger button for mobile/small screens */}
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
