
import { motion } from "framer-motion";
import { useState } from "react";

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <motion.div
      className="absolute inset-0 opacity-30"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="w-96 h-96 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full filter blur-3xl absolute"
        animate={{
          x: mousePosition.x * 100,
          y: mousePosition.y * 100,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        style={{
          left: "20%",
          top: "30%",
        }}
      />
      <motion.div
        className="w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full filter blur-3xl absolute"
        animate={{
          x: mousePosition.x * -80,
          y: mousePosition.y * -60,
        }}
        transition={{ type: "spring", stiffness: 40 }}
        style={{
          right: "20%",
          bottom: "20%",
        }}
      />
    </motion.div>
  );
}
