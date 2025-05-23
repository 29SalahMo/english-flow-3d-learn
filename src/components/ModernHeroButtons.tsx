
import { Rocket, Smile, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ModernHeroButtons() {
  return (
    <div className="flex flex-wrap gap-3 justify-center sm:mt-2">
      <motion.div whileHover={{ scale: 1.07 }}>
        <Button
          variant="default"
          size="lg"
          className="bg-gradient-to-r from-[#DE53F7] to-[#5184EA] font-bold shadow-cta animate-pulse"
        >
          <Rocket className="mr-2" /> Start Learning Now
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.07 }}>
        <Button
          variant="secondary"
          size="lg"
          className="bg-gradient-to-r from-[#C084FC] to-[#818CF8] font-semibold"
        >
          <PlayCircle className="mr-2" /> Preview Demo
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.07 }}>
        <Button
          variant="outline"
          size="lg"
          className="bg-background border-2 border-[#DE53F7] text-[#DE53F7] font-semibold"
        >
          <Smile className="mr-2" /> Join Community
        </Button>
      </motion.div>
    </div>
  );
}
