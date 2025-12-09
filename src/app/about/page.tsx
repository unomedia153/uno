import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
              <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
                We are a team of passionate developers and designers dedicated to building exceptional digital products.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To create digital experiences that transform brands and grow businesses. 
                    We believe in the power of design and technology to solve complex problems.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading digital agency that helps businesses thrive in the digital age. 
                    We strive for excellence in every project we undertake.
                  </p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold mb-8">Our Team</h2>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Our diverse team brings together expertise in design, development, and strategy 
                  to deliver solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

