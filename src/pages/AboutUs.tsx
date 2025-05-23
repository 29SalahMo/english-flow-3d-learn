
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GmailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 5.5v13A1.5 1.5 0 0 0 4.5 20h15a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 19.5 4h-15A1.5 1.5 0 0 0 3 5.5Z" fill="#EA4335"/>
    <path d="M3 5.5L12 13l9-7.5" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="11" fill="#25D366"/>
    <path d="M17.47 15.43c-.25-.13-1.46-.72-1.68-.81-.23-.09-.39-.13-.55.13-.16.25-.63.81-.77.98-.14.16-.28.18-.53.06-.25-.13-1.05-.38-2-1.2-.73-.65-1.23-1.45-1.37-1.7-.14-.25-.01-.39.12-.52.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.09-.19.05-.36-.02-.49-.07-.13-.55-1.33-.75-1.81-.2-.48-.41-.42-.56-.43-.15-.01-.33-.01-.52-.01-.18 0-.47.07-.71.33-.24.26-.92.89-.92 2.16 0 1.27.94 2.5 1.07 2.67.13.17 1.84 2.94 4.47 4.04.62.25 1.1.4 1.47.48.62.13 1.19.12 1.64.07.5-.06 1.53-.62 1.75-1.23.22-.61.22-1.13.16-1.23-.07-.1-.23-.16-.48-.29Z" fill="#fff"/>
  </svg>
);

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
              <GmailIcon />
              salahmohamed2912002@gmail.com
            </a>
            <a
              href="https://wa.me/201018394829"
              className="flex items-center text-green-400 hover:text-green-500 transition gap-2 underline"
              target="_blank" rel="noopener noreferrer"
            >
              <WhatsAppIcon />
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
