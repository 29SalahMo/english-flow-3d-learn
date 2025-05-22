
// Homepage: 3D animated hero, CTA, courses, and about

import ThreeGlobe from "@/components/ThreeGlobe";
import CourseCard from "@/components/CourseCard";
import AboutSection from "@/components/AboutSection";

const courses = [
  {
    title: "Beginner English",
    level: "Beginner" as const,
    description: "Kickstart your language journey. Build core vocabulary, grammar, and real conversation skills.",
  },
  {
    title: "Intermediate English",
    level: "Intermediate" as const,
    description: "Push your skills. Master more complex grammar and speak confidently in work, travel, and social settings.",
  },
  {
    title: "Advanced English",
    level: "Advanced" as const,
    description: "Reach fluency. Tackle advanced vocabulary, subtleties, and idioms for truly native communication.",
  },
];

const Index = () => (
  <main className="font-sans bg-gradient-to-b from-blue-100 to-white min-h-screen relative overflow-x-hidden">
    {/* HERO With 3D globe and banner */}
    <section className="relative min-h-[540px] md:min-h-[80vh] flex flex-col items-center justify-center px-5 z-0">
      <ThreeGlobe />
      <div className="z-10 relative text-center mt-20 md:mt-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-5 text-gray-900 drop-shadow" style={{textShadow:"0 2px 12px #c5dafe80"}}>
          Unlock Your <span className="text-ctaprimary">English</span> Potential
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-800 md:max-w-2xl mx-auto">
          Learn, practice, and master English with interactive 3D visuals, animations, and real stories!
        </p>
        <a
          href="#courses"
          className="inline-block"
        >
          <button
            className="bg-ctaprimary hover:bg-ctasecondary text-white font-extrabold rounded-full px-8 py-4 text-xl shadow-cta transition-all duration-300 animate-bounce
              focus:outline-none focus:ring-4 focus:ring-ctasecondary"
            style={{ boxShadow: "0 8px 30px 0 rgba(255,107,31,0.3)" }}
          >
            Start Learning English Today!
          </button>
        </a>
      </div>
    </section>

    {/* COURSES */}
    <section id="courses" className="container pt-12 pb-24 md:py-32">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Choose Your Course</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {courses.map((c) => (
          <CourseCard
            key={c.level}
            title={c.title}
            level={c.level}
            description={c.description}
          />
        ))}
      </div>
    </section>

    {/* ABOUT */}
    <AboutSection />

    <footer className="text-center py-8 text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} Interactive English with 3D Experience
    </footer>
  </main>
);

export default Index;
