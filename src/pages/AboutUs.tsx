
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Whatsapp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1C074E] via-[#221156] to-[#1A093B] flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white/5 rounded-3xl shadow-xl p-8 md:p-12 text-center border border-[#5536a6]/30 backdrop-blur-md"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-ctaprimary mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-purple-100 mb-6">
          Welcome to our Interactive English Learning Platform! Our mission is to make English learning engaging, accessible, and effective for everyone. We blend modern technology, interactive 3D visuals, and proven pedagogical techniques to help you unlock your full potential. Whether you’re a beginner or advanced learner, our team is passionate about guiding you through an immersive language journey designed for real-life communication. Join our community and discover how learning English can be both memorable and fun!
        </p>
        <div className="mb-6">
          <p className="text-base md:text-lg text-purple-100 mb-1 font-medium">Contact:</p>
          <div className="flex flex-col items-center space-y-2">
            <span className="flex items-center text-ctaprimary font-semibold text-lg gap-2">
              <Phone className="w-5 h-5 text-ctaprimary" />
              01018394829
            </span>
            <a
              href="mailto:salahmohamed2912002@gmail.com"
              className="flex items-center text-blue-300 hover:text-blue-500 transition gap-2 underline"
              target="_blank" rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5" />
              salahmohamed2912002@gmail.com
            </a>
            <a
              href="https://wa.me/201018394829"
              className="flex items-center text-green-400 hover:text-green-500 transition gap-2 underline"
              target="_blank" rel="noopener noreferrer"
            >
              <Whatsapp className="w-5 h-5" />
              WhatsApp
            </a>
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
