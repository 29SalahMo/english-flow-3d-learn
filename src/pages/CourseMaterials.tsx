
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CourseMaterials = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center py-16 px-4">
      <section className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-ctaprimary mb-6 text-center">
          Course Materials
        </h1>
        <p className="text-lg mb-8 text-gray-700 text-center">
          Welcome to your course resources. Here you'll find all videos and materials you need. (This is just a placeholder — videos & materials will be added soon!)
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Videos</h2>
          <div className="h-36 bg-blue-100 rounded-lg flex items-center justify-center text-blue-400 text-lg">
            {/* Replace with your video embeds or players */}
            Video lessons placeholder
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Materials</h2>
          <div className="h-24 bg-purple-100 rounded-lg flex items-center justify-center text-purple-400 text-lg">
            {/* Replace with your downloadable files/links */}
            Materials placeholder
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
