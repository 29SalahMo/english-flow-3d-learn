
import { motion } from "framer-motion";

export default function FloatingShapes() {
  // Simple floating SVG blobs/shapes for visual appeal
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Purple Blob */}
      <motion.div
        className="absolute left-[15vw] top-[20vh] w-36 h-36 bg-gradient-to-br from-[#A886FE] to-[#C084FC] rounded-full opacity-40 filter blur-2xl"
        animate={{ y: [0, -18, 0], x: [0, 14, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", delay: 0.2 }}
      />
      {/* Blue Blob */}
      <motion.div
        className="absolute right-[12vw] top-[53vh] w-44 h-44 bg-gradient-to-br from-[#5CB8FA] to-[#635BFD] rounded-full opacity-25 filter blur-2xl"
        animate={{ y: [0, 25, 0], x: [0, -9, 0], scale: [1.1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", delay: 0.3 }}
      />
      {/* Pink Small Dot */}
      <motion.div
        className="absolute left-[62vw] top-[10vh] w-14 h-14 bg-[#DE53F7] rounded-full opacity-20 filter blur-lg"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", delay: 0.7 }}
      />
    </div>
  );
}
