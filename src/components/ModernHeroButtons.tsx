
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ModernHeroButtons() {
  const handleStartLearning = () => {
    // Scroll to courses section
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center sm:mt-2">
      <motion.div whileHover={{ scale: 1.07 }}>
        <Button
          variant="default"
          size="lg"
          className="bg-gradient-to-r from-[#DE53F7] to-[#5184EA] font-bold shadow-cta animate-pulse"
          onClick={handleStartLearning}
        >
          <Rocket className="mr-2" /> Start Learning Now
        </Button>
      </motion.div>
    </div>
  );
}
