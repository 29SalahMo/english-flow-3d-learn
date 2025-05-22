
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-ctaprimary mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-6">
          Welcome to our Interactive English Learning Platform! Our mission is to make English learning engaging, accessible, and effective for everyone. We blend modern technology, interactive 3D visuals, and proven pedagogical techniques to help you unlock your full potential. Whether you’re a beginner or advanced learner, our team is passionate about guiding you through an immersive language journey designed for real-life communication. Join our community and discover how learning English can be both memorable and fun!
        </p>
        <div className="mb-6">
          <p className="text-base md:text-lg text-gray-700 mb-1 font-medium">Contact:</p>
          <div className="flex flex-col items-center space-y-1">
            <span className="text-ctaprimary font-semibold text-lg">01018394829</span>
            <span className="text-blue-600 underline">
              <a href="mailto:salahmohamed2912002@gmail.com">salahmohamed2912002@gmail.com</a>
            </span>
          </div>
        </div>
        <Button variant="secondary" size="lg" onClick={() => navigate("/")}>
          Return to Home
        </Button>
      </motion.div>
    </main>
  );
};

export default AboutUs;
