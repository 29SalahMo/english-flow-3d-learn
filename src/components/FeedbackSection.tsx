
// Replaces AboutSection with FeedbackSection

import { motion } from "framer-motion";

const FLOAT_SHAPES = [
  { cx: "12%", cy: "22%", r: 34, color: "#C084FC", delay: 0 },
  { cx: "87%", cy: "12%", r: 19, color: "#818CF8", delay: 0.15 },
  { cx: "71%", cy: "67%", r: 23, color: "#38bdf8", delay: 0.3 },
  { cx: "29%", cy: "88%", r: 13, color: "#DE53F7", delay: 0.05 },
  { cx: "56%", cy: "40%", r: 15, color: "#6366F1", delay: 0.2 },
];

const FeedbackSection = () => (
  <section className="relative py-14 md:py-28 bg-gradient-to-br from-[#251948] to-[#402170] overflow-hidden flex flex-col items-center">
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
          opacity={0.11}
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 10 + idx * 1.2,
            delay: s.delay,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      ))}
    </svg>
    <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 text-purple-50">Feedback of the Course</h2>
      <p className="text-base sm:text-xl text-purple-100 mb-6 sm:mb-8">
        Here are some real success stories and feedback from our community. Your own testimonials could be featured next! We’d love to hear about your journey.
      </p>
      <div className="flex flex-col md:flex-row gap-5 md:gap-7 justify-center items-center">
        <div className="bg-[#2d1862]/80 p-3 sm:p-4 rounded-xl shadow-md text-left text-purple-100 max-w-xs w-full border border-[#6D28D9]/20">
          “The interactive lessons and real-life examples helped me speak confidently at work!”
        </div>
        <div className="bg-[#2d1862]/80 p-3 sm:p-4 rounded-xl shadow-md text-left text-purple-100 max-w-xs w-full border border-[#6D28D9]/20">
          “Great visuals. Each topic is easy to remember, and the marketing course is a huge bonus.”
        </div>
      </div>
      {/* Future video placeholders */}
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="h-32 w-full sm:w-56 bg-gradient-to-tr from-[#5C19E8]/30 to-[#C084FC]/10 rounded-lg border-2 border-[#C084FC]/20 flex items-center justify-center text-purple-200 text-lg font-medium shadow-inner">
          🎬 Future Video 1 (Coming Soon)
        </div>
        <div className="h-32 w-full sm:w-56 bg-gradient-to-tr from-[#C084FC]/25 to-[#5C19E8]/10 rounded-lg border-2 border-[#C084FC]/20 flex items-center justify-center text-purple-200 text-lg font-medium shadow-inner">
          🎬 Future Video 2 (Coming Soon)
        </div>
      </div>
    </div>
  </section>
);

export default FeedbackSection;
