
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function EnhancedFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-gradient-to-r from-[#1a0d3a] to-[#2d1862] text-purple-100 py-12 mt-8 border-t border-purple-400/20"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🌟</span>
              Interactive Learning
            </h3>
            <p className="text-purple-200 mb-4">
              Empowering learners worldwide with cutting-edge English and Marketing education through immersive, interactive experiences.
            </p>
            <div className="flex items-center gap-2 text-purple-300">
              <Heart size={16} className="text-red-400" />
              <span className="text-sm">Made with passion for education</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#courses" className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  📚 Our Courses
                </a>
              </li>
              <li>
                <a href="#student-tools" className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  🛠️ Student Tools
                </a>
              </li>
              <li>
                <a href="#feedback" className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  💬 Feedback
                </a>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  ℹ️ About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-purple-200">
                <Phone size={16} className="text-green-400" />
                <span>01018394829</span>
              </div>
              <div className="flex items-center gap-3 text-purple-200">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:salahmohamed2912002@gmail.com" className="hover:text-white transition-colors">
                  salahmohamed2912002@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-purple-200">
                <MapPin size={16} className="text-red-400" />
                <span>Available Worldwide Online</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="border-t border-purple-400/20 pt-6 text-center"
        >
          <p className="text-purple-300 text-sm">
            &copy; {new Date().getFullYear()} Interactive English & Marketing Courses. All rights reserved.
          </p>
          <p className="text-purple-400 text-xs mt-2">
            🚀 Building the future of education, one student at a time
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
