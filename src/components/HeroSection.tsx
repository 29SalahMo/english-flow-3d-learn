
import { motion } from "framer-motion";
import ThreeGlobe from "@/components/ThreeGlobe";
import ModernHeroButtons from "@/components/ModernHeroButtons";
import AnimatedText from "@/components/AnimatedText";
import SoundVisualization from "@/components/SoundVisualization";

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[480px] md:min-h-[75vh] flex flex-col items-center justify-center px-3 sm:px-5 z-10"
    >
      <ThreeGlobe />
      <div className="z-10 relative text-center mt-16 sm:mt-20 md:mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-2"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-400/30 text-purple-300 text-xs md:text-sm font-bold tracking-widest uppercase backdrop-blur-sm">
            ✨ Empower Your Future · Learn Visually · Achieve More ✨
          </span>
        </motion.div>
        
        <AnimatedText 
          text="English course with a free marketing course"
          className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg"
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base sm:text-lg md:text-2xl mb-8 text-purple-100 md:max-w-2xl mx-auto leading-relaxed"
        >
          🚀 Unlock powerful English and in-demand marketing skills through cutting-edge, interactive courses backed by real feedback from learners just like you!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <ModernHeroButtons />
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-8 z-10"
      >
        <SoundVisualization />
      </motion.div>
    </motion.section>
  );
}
