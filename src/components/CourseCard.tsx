
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
};

// Custom course colors for the new design (matching deep purples/blues)
const LEVEL_COLORS = {
  Intermediate: "from-[#412388] to-[#3b82f6]",
};

const CARD_BG = "bg-gradient-to-tr from-[#432381]/95 to-[#6C2EBF]/95";

const CourseCard = ({ title, description, level }: Props) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className={`relative rounded-2xl ${CARD_BG} shadow-2xl p-7 w-full max-w-sm cursor-pointer group transition-transform overflow-hidden`}
      whileHover={{ scale: 1.04, rotate: -1 }}
      whileTap={{ scale: 0.97, rotate: 1 }}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.12 } }}
      tabIndex={0}
    >
      <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-md">{title}</h3>
      <p className="text-purple-100 mb-5">{description}</p>
      <motion.button
        className="bg-gradient-to-r from-[#DE53F7] to-[#5184EA] text-white font-bold px-7 py-2 rounded-full shadow-cta hover:from-[#4F46E5] hover:to-[#D977FA]
          transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#C084FC] animate-pulse"
        whileHover={{ scale: 1.07, boxShadow: "0 0 24px #C084FC" }}
        onClick={() => navigate("/course-materials")}
      >
        Enroll
      </motion.button>
      <span className="absolute right-4 top-6 text-xs font-semibold text-white bg-[#3F1C63]/80 px-2 py-1 rounded-lg">{title}</span>
    </motion.div>
  );
};

export default CourseCard;
