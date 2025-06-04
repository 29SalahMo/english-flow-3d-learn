
import { motion } from "framer-motion";

export default function MorphingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-purple-400 opacity-20"
        animate={{
          borderRadius: ["20%", "50%", "20%"],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400 opacity-20"
        animate={{
          borderRadius: ["50%", "20%", "50%"],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
