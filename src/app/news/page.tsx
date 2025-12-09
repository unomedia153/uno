import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NewsPage() {
  const newsItems = [
    {
      title: "New Website Launch",
      date: "2024-01-15",
      excerpt: "We're excited to announce the launch of our new website with enhanced features.",
    },
    {
      title: "Industry Conference 2024",
      date: "2024-01-10",
      excerpt: "Join us at the upcoming industry conference where we'll showcase our latest innovations.",
    },
    {
      title: "Team Expansion",
      date: "2024-01-05",
      excerpt: "We're growing! Welcome our new team members who bring fresh perspectives.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 text-center">News & Updates</h1>
              <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
                Stay updated with our latest news, announcements, and industry insights.
              </p>
              
              <div className="space-y-8 mt-16">
                {newsItems.map((item, index) => (
                  <article
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      <time className="text-sm text-gray-500">{item.date}</time>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.excerpt}</p>
                  </article>
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

