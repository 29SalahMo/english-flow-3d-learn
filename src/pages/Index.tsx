// Homepage: 3D animated hero, CTA, courses, interactive menu/lists, and feedback

import ThreeGlobe from "@/components/ThreeGlobe";
import CourseCard from "@/components/CourseCard";
import FeedbackSection from "@/components/FeedbackSection";
import { useState } from "react";

const courses = [
  {
    title: "Intermediate English",
    level: "Intermediate" as const,
    description: "Master English for work, travel, and social interactions using immersive 3D and real-life examples.",
  },
  {
    title: "Marketing Course",
    level: "Intermediate" as const,
    description: "Learn essential marketing concepts and skills using the same visual, interactive methods!",
  }
];

// Example interactive menu items
const menus = [
  {
    label: "Course Overview",
    list: ["Course structure", "What you will learn", "Requirements"]
  },
  {
    label: "Student Tools",
    list: ["Flashcards", "Progress Tracker", "Ask the Instructor"]
  },
  {
    label: "Support & Community",
    list: ["Live Chat", "Discussion Forums", "Events Calendar"]
  }
];

const Index = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <main className="font-sans min-h-screen relative overflow-x-hidden bg-gradient-to-br from-[#1C074E] via-[#221156] to-[#1A093B]">
      {/* HERO With 3D globe and banner */}
      <section className="relative min-h-[480px] md:min-h-[75vh] flex flex-col items-center justify-center px-3 sm:px-5 z-0">
        <ThreeGlobe />
        <div className="z-10 relative text-center mt-16 sm:mt-20 md:mt-32">
          <p className="uppercase tracking-widest text-xs md:text-base font-bold mb-2 text-purple-300">Empower Your Future · Learn Visually · Achieve More</p>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg" style={{textShadow:"0 2px 24px #9061F980"}}>
            English course with a <span className="text-[#D977FA]">free marketing course</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-8 text-purple-100 md:max-w-2xl mx-auto">
            Unlock powerful English and in-demand marketing skills through cutting-edge, interactive courses backed by real feedback from learners just like you!
          </p>
          <a href="#courses" className="inline-block">
            <button
              className="bg-gradient-to-r from-[#DE53F7] to-[#5184EA] hover:from-[#8447F9] hover:to-[#DE53F7]
                text-white font-extrabold rounded-full px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl shadow-cta transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#C084FC] animate-bounce"
              style={{ boxShadow: "0 8px 50px 0 #8742DB88" }}
            >
              Start The course
            </button>
          </a>
        </div>
      </section>

      {/* INTERACTIVE MENUS/LISTS */}
      <section className="container mx-auto pt-8 pb-8 flex flex-col gap-8 items-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
          {menus.map((menu, idx) => (
            <button
              key={idx}
              className={`
                rounded-xl px-4 py-2 sm:px-6 font-semibold transition-all
                ${selectedMenu === idx ? 'bg-gradient-to-r from-[#D977FA] to-[#4F46E5] text-white shadow-lg scale-105'
                : 'bg-[#22104C] text-purple-200 hover:bg-[#44277D]'}
              `}
              onClick={() => setSelectedMenu(idx)}
            >
              {menu.label}
            </button>
          ))}
        </div>
        <ul className="w-full max-w-xs sm:max-w-md mx-auto bg-[#23114b]/80 text-purple-100 rounded-xl p-4 sm:p-6 shadow-md border border-[#5536a6]/30 animate-fade-in">
          {menus[selectedMenu].list.map((item, i) => (
            <li key={i} className="py-1.5 sm:py-2 pl-2 border-l-4 border-[#C084FC] mb-2 last:mb-0 hover:bg-[#2f1a5e]/60 rounded cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* COURSES */}
      <section id="courses" className="container pt-8 pb-12 md:py-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12 text-purple-100 drop-shadow">
          Choose Your Course
        </h2>
        <div className="flex flex-col md:flex-row gap-7 md:gap-8 justify-center items-center">
          {courses.map((c) => (
            <CourseCard
              key={c.title}
              title={c.title}
              level={c.level}
              description={c.description}
            />
          ))}
        </div>
      </section>

      {/* FEEDBACK REPLACES ABOUT */}
      <FeedbackSection />

      {/* FOOTER */}
      <footer className="text-center py-7 text-purple-300 text-xs sm:text-sm mt-2 sm:mt-6">
        &copy; {new Date().getFullYear()} Interactive English & Marketing Courses
        {" · "}
        <a
          href="/about-us"
          className="text-[#D977FA] hover:underline story-link ml-1"
        >
          About Us
        </a>
      </footer>
    </main>
  );
};

export default Index;
