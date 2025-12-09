import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      <main>
        <Hero />
        {/* Placeholder for other sections usually present in a landing page */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We are a team of passionate developers and designers dedicated to building exceptional digital products.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

