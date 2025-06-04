
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, HelpCircle, ChevronRight, CheckCircle, Sparkles } from "lucide-react";

const menus = [
  {
    label: "Course Overview",
    icon: BookOpen,
    color: "from-blue-500 to-purple-600",
    list: [
      { item: "📚 Course structure", action: "View detailed curriculum breakdown" },
      { item: "🎯 What you will learn", action: "Explore learning outcomes" },
      { item: "📋 Requirements", action: "Check prerequisites" }
    ]
  },
  {
    label: "Student Tools",
    icon: HelpCircle,
    color: "from-purple-500 to-pink-600",
    list: [
      { item: "🔥 Flashcards", action: "Create and review flashcards" },
      { item: "📈 Progress Tracker", action: "Monitor your learning journey" },
      { item: "💬 Ask the Instructor", action: "Get instant help and guidance" }
    ]
  },
  {
    label: "Support & Community",
    icon: Users,
    color: "from-pink-500 to-red-600",
    list: [
      { item: "💬 Live Chat", action: "Connect with support team" },
      { item: "🗣️ Discussion Forums", action: "Join student discussions" },
      { item: "📅 Events Calendar", action: "View upcoming events and webinars" }
    ]
  }
];

export default function InteractiveMenus() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleItemClick = (action: string) => {
    console.log(`Action clicked: ${action}`);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto pt-8 pb-8 flex flex-col gap-8 items-center" 
      id="student-tools"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-center mb-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          <Sparkles className="text-yellow-400" size={28} />
          Student Resources
          <Sparkles className="text-yellow-400" size={28} />
        </h2>
        <p className="text-purple-200 text-lg">Everything you need for successful learning</p>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-3 sm:mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {menus.map((menu, idx) => {
          const IconComponent = menu.icon;
          return (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`
                rounded-xl px-4 py-3 sm:px-6 font-semibold transition-all duration-300 flex items-center gap-2 relative overflow-hidden
                ${selectedMenu === idx 
                  ? `bg-gradient-to-r ${menu.color} text-white shadow-lg shadow-purple-500/25 ring-2 ring-white/20` 
                  : 'bg-[#22104C] text-purple-200 hover:bg-[#44277D] hover:shadow-md border border-purple-400/20'}
              `}
              onClick={() => setSelectedMenu(idx)}
            >
              <IconComponent size={18} />
              {menu.label}
              {selectedMenu === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-xl"
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>
      
      <motion.div
        key={selectedMenu}
        initial={{ opacity: 0, x: 20, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="w-full max-w-lg mx-auto bg-gradient-to-br from-[#23114b]/90 to-[#1a0d3a]/90 text-purple-100 rounded-xl p-4 sm:p-6 shadow-2xl border border-[#5536a6]/30 backdrop-blur-md"
      >
        <h3 className={`text-lg font-semibold mb-4 text-center bg-gradient-to-r ${menus[selectedMenu].color} bg-clip-text text-transparent flex items-center justify-center gap-2`}>
          {React.createElement(menus[selectedMenu].icon, { size: 20 })}
          {menus[selectedMenu].label}
        </h3>
        <ul className="space-y-2">
          {menus[selectedMenu].list.map((listItem, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`
                p-3 pl-4 border-l-4 border-gradient-to-b ${menus[selectedMenu].color} rounded-r-lg cursor-pointer transition-all duration-300 group
                ${hoveredItem === i 
                  ? `bg-gradient-to-r from-[#2f1a5e] to-[#3d2373] transform translate-x-2 shadow-lg scale-105` 
                  : 'hover:bg-[#2f1a5e]/60 hover:transform hover:translate-x-1'}
              `}
              onClick={() => handleItemClick(listItem.action)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400 group-hover:text-green-300 transition-colors" />
                    <span className="font-medium group-hover:text-white transition-colors">{listItem.item}</span>
                  </div>
                  <p className="text-xs text-purple-300 mt-1 ml-6 group-hover:text-purple-200 transition-colors">{listItem.action}</p>
                </div>
                <ChevronRight 
                  size={16} 
                  className={`text-[#C084FC] transition-all duration-300 group-hover:text-white ${
                    hoveredItem === i ? 'translate-x-1 scale-110' : ''
                  }`} 
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
}
