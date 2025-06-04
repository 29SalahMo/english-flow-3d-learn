
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrails(prev => [...prev.slice(-5), newTrail]);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        />
      ))}
    </div>
  );
}
