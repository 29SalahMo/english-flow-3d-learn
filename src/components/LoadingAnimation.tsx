
import { motion } from "framer-motion";

export default function LoadingAnimation() {
  return (
    <div className="flex space-x-2 justify-center items-center">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-3 h-3 bg-purple-500 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
}
