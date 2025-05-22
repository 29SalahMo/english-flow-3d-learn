
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CourseMaterials = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#251948] via-[#3A2173] to-[#44307D] flex flex-col items-center py-16 px-4">
      <section className="w-full max-w-2xl bg-[#170A30]/90 p-8 rounded-3xl shadow-xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#DE53F7] mb-6 text-center">
          Course Materials
        </h1>
        <p className="text-lg mb-8 text-purple-100 text-center">
          Here you'll find all your course resources, including videos and downloadable materials. (Videos and files will be added soon.)
        </p>
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 h-44 bg-gradient-to-tr from-[#3B82F6]/30 to-[#DE53F7]/20 rounded-xl flex items-center justify-center text-purple-200 text-lg border-2 border-[#7C3AED]/20 shadow-inner">
            {/* Video 1 placeholder */}
            Video Lesson 1 (Coming Soon)
          </div>
          <div className="flex-1 h-44 bg-gradient-to-tr from-[#3B82F6]/20 to-[#DE53F7]/30 rounded-xl flex items-center justify-center text-purple-200 text-lg border-2 border-[#7C3AED]/20 shadow-inner">
            {/* Video 2 placeholder */}
            Video Lesson 2 (Coming Soon)
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-purple-50">Materials</h2>
          <div className="h-24 bg-[#A21CAF]/10 rounded-lg flex items-center justify-center text-purple-200 text-lg border-2 border-[#C084FC]/10">
            {/* Downloadable files/links placeholder */}
            Materials placeholder (PDFs, docs, etc.)
          </div>
        </div>
      </section>
      <Button variant="secondary" size="lg" onClick={() => navigate("/")}>
        Return to Home
      </Button>
    </main>
  );
};

export default CourseMaterials;
