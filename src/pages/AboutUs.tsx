
import { motion } from "framer-motion";

const AboutUs = () => (
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
      <p className="text-lg md:text-xl text-gray-800">
        Welcome to our Interactive English Learning Platform! Our mission is to make English learning engaging, accessible, and effective for everyone. We blend modern technology, interactive 3D visuals, and proven pedagogical techniques to help you unlock your full potential. Whether you’re a beginner or advanced learner, our team is passionate about guiding you through an immersive language journey designed for real-life communication. Join our community and discover how learning English can be both memorable and fun!
      </p>
    </motion.div>
  </main>
);

export default AboutUs;
