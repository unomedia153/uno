import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Digital Innovation Platform",
      description: "A cutting-edge platform for digital transformation",
      category: "Web Development",
    },
    {
      title: "Mobile App Design",
      description: "User-centered mobile application design",
      category: "UI/UX Design",
    },
    {
      title: "E-commerce Solution",
      description: "Complete e-commerce platform with advanced features",
      category: "Full Stack",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 text-center">Portfolio</h1>
              <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
                Explore our recent projects and see how we've helped businesses achieve their goals.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-md mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <span className="text-4xl font-bold text-primary/30">U</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

