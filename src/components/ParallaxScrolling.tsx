
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxScrolling() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 pointer-events-none"
    />
  );
}
