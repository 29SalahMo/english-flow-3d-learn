
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
};

const LEVEL_COLORS = {
  Beginner: "from-green-400 to-blue-400",
  Intermediate: "from-orange-400 to-yellow-400",
  Advanced: "from-purple-500 to-pink-500",
};

const CourseCard = ({ title, description, level }: Props) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className={`relative rounded-2xl bg-white shadow-xl p-6 w-full max-w-sm cursor-pointer group transition-transform overflow-hidden
      bg-gradient-to-tr ${LEVEL_COLORS[level]}`}
      whileHover={{ scale: 1.04, rotate: -1 }}
      whileTap={{ scale: 0.95, rotate: 1 }}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.12 } }}
      tabIndex={0}
    >
      <h3 className="text-2xl font-bold mb-2 text-gray-900 drop-shadow-md">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <motion.button
        className="bg-ctaprimary text-white font-bold px-6 py-2 rounded shadow-cta hover:bg-ctasecondary transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ctasecondary
        animate-pulse"
        whileHover={{ scale: 1.07, boxShadow: "0 0 16px #7C3AED" }}
        onClick={() => navigate("/course-materials")}
      >
        Enroll
      </motion.button>
      <span className="absolute right-4 top-6 text-xs font-semibold text-white bg-gray-800/60 px-2 py-1 rounded-lg">{level}</span>
    </motion.div>
  );
};

export default CourseCard;
