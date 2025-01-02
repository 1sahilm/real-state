import Card2 from "../Card/Card2";

const RecentArticles: React.FC = () => {
    const articles = [
      {
        imageUrl: "recentImage1.png", // replace with actual paths
        date: "24 February, 2024",
        category: "Investing",
        title: "15 Reasons Why Real Estate Is Best Investment",
        rating: 4,
        ratingValue: 4.83,
      },
      {
        imageUrl: "recentImage2.png",
        date: "24 February, 2024",
        category: "Investing",
        title: "15 Reasons Why Real Estate Is Best Investment",
        rating: 4,
        ratingValue: 4.83,
      },
      {
        imageUrl: "recentImage3.png",
        date: "24 February, 2024",
        category: "Investing",
        title: "15 Reasons Why Real Estate Is Best Investment",
        rating: 4,
        ratingValue: 4.83,
      },
    ];
  
    return (
      <section className="py-10 px-4 md:px-10 lg:px-20">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Recent Article</h2>
            <p className="text-gray-500">
              We provide blogs that help start your career on Infranium
            </p>
          </div>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 p-1 sm:p-4 rounded-lg">
            View All
          </button>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card2
              key={index}
              imageUrl={article.imageUrl}
              date={article.date}
              category={article.category}
              title={article.title}
              rating={article.rating}
              ratingValue={article.ratingValue}
              href="/blogs/123"
            />
          ))}
        </div>
      </section>
    );
  };

  export default RecentArticles;