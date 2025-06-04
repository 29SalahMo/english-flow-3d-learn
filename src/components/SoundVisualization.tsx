
import { motion } from "framer-motion";

export default function SoundVisualization() {
  const bars = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="flex items-end space-x-1 h-16">
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="bg-gradient-to-t from-purple-500 to-blue-500 w-2 rounded-t"
          animate={{
            height: [
              Math.random() * 40 + 10,
              Math.random() * 60 + 20,
              Math.random() * 40 + 10,
            ],
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}
