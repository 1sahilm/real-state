import FeatureCard from "../Card/FeatureCard";

const PopularArticles: React.FC = () => {
    return (
      <section className="py-10 px-0 md:px-10 lg:px-20">
        <div className="flex justify-between items-center px-4 md:px-0 lg:px-0  mb-8">
          <div>
            <h2 className="text-3xl font-bold">Popular Article</h2>
            <p className="text-gray-500">
              We provide blog that help start your career on Infranium
            </p>
          </div>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 p-1 sm:p-4 rounded-lg">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard
            imageUrl="mainImage2.png"
            des="23 Dec, 2024"
            title="Luxury living: Exploring High-End Real Estate Market"
            category="Success Story"
            description="Feeling like work is a constant work of stress? You're not...."
            href="/blogs/123"
          />
          <FeatureCard
            imageUrl="mainImage3.png"
            des="29 Dec, 2024"
            title="Short Vs Long Term Real Estate Investing"
            category="Tips"
            description="Feeling like work is a constant work of stress? You're not...."
            href="/blogs/123"
          />
        </div>
      </section>
    );
  };
  export default PopularArticles;