
import { motion } from "framer-motion";

const FLOAT_SHAPES = [
  { cx: "15%", cy: "18%", r: 26, color: "#7C3AED", delay: 0 },
  { cx: "88%", cy: "8%", r: 16, color: "#FF6B1F", delay: 0.2 },
  { cx: "74%", cy: "69%", r: 20, color: "#3887f8", delay: 0.4 },
  { cx: "30%", cy: "80%", r: 14, color: "#FF6B1F", delay: 0.1 },
  { cx: "55%", cy: "38%", r: 12, color: "#7C3AED", delay: 0.25 },
];

const AboutSection = () => (
  <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden flex flex-col items-center">
    {/* Floating shapes */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      width="100%"
      height="100%"
      aria-hidden
    >
      {FLOAT_SHAPES.map((s, idx) => (
        <motion.circle
          key={idx}
          cx={s.cx}
          cy={s.cy}
          r={s.r}
          fill={s.color}
          opacity={0.13}
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 9 + idx * 1.5,
            delay: s.delay,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      ))}
    </svg>
    <div className="relative z-10 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">About the Course Creator</h2>
      <p className="text-xl text-gray-800 mb-8">
        Hello! I’m passionate about helping you unlock the world of English—making learning simple, engaging, and fun. Join my immersive journey where stories, visuals, and discovery make every lesson memorable. 🚀
      </p>
    </div>
  </section>
);

export default AboutSection;
