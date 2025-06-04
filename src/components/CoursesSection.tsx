
import { motion } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import AnimatedText from "@/components/AnimatedText";
import LoadingAnimation from "@/components/LoadingAnimation";
import { GraduationCap, Star, TrendingUp } from "lucide-react";

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

export default function CoursesSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="courses" 
      className="container pt-8 pb-12 md:py-24"
    >
      <div className="text-center mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <GraduationCap className="text-yellow-400" size={32} />
          <AnimatedText 
            text="Choose Your Course"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-100 drop-shadow"
          />
          <GraduationCap className="text-yellow-400" size={32} />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-purple-200 text-lg max-w-2xl mx-auto"
        >
          🌟 Start your learning journey with our expertly crafted courses designed for real-world success
        </motion.p>
      </div>

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
            whileHover={{ y: -10, scale: 1.03 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <CourseCard
                title={c.title}
                level={c.level}
                description={c.description}
              />
            </div>
            {index === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
              >
                <Star size={12} />
                Popular
              </motion.div>
            )}
            {index === 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
              >
                <TrendingUp size={12} />
                Free Bonus
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <LoadingAnimation />
      </motion.div>
    </motion.section>
  );
}
