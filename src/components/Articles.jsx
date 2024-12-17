import React from "react";

const articles = [
  {
    title: "The Future of IoT in Smart Cities",
    image: "https://via.placeholder.com/300x200",
    date: "2024-12-01",
    excerpt:
      "Discover how IoT is revolutionizing urban life and the potential it holds for the future.",
    link: "/articles/future-of-iot",
  },
  {
    title: "Top 5 Web Development Trends",
    image: "https://via.placeholder.com/300x200",
    date: "2024-11-20",
    excerpt:
      "Stay ahead in the industry with these cutting-edge web development trends.",
    link: "/articles/web-development-trends",
  },
  {
    title: "How Mobile Apps Enhance Customer Experience",
    image: "https://via.placeholder.com/300x200",
    date: "2024-11-10",
    excerpt:
      "Learn how mobile apps are reshaping how businesses engage with their customers.",
    link: "/articles/mobile-apps-experience",
  },
];

function Articles() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-primaryPurple mb-6">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-primaryPurple mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{article.date}</p>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                <a
                  href={article.link}
                  className="text-brightRed font-bold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
