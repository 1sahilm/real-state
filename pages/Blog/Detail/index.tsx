import Card2 from "@/components/Card/Card2";
import DeatilCard from "@/components/Card/DeatilCard";
import React from "react";

export default function BlogDetail() {
  return (
    <>
      <div className="pt-[100px]">
        <BlogHeader />
        <BlogSection />
        <RecentArticles />
      </div>
    </>
  );
}

const BlogHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-8 border-b md:border-b-0 max-w-2xl mx-auto">
      <p className="text-gray-500 text-sm">
        8 Feb, 2024 <span className="mx-2">•</span> <span>Success Story</span>
      </p>
      <h1 className="text-3xl font-bold my-2">
        The Quick guide to virtual house flipping
      </h1>
      <p className="text-gray-400">
        we Provide blog that help start your career on Infranium we Provide blog
        that help start your career on Infranium
      </p>
    </div>
  );
};

interface SectionProps {
  title: string;
  description: string;
}

const sections: SectionProps[] = [
  {
    title: "A Way Out Focusing On What Can BE Controlled",
    description:
      "Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.",
  },
  {
    title: "Preparation Meets Opportunity",
    description:
      "Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.",
  },
  {
    title: "Luck Or Fate? Becoming a Wholeseller",
    description:
      "Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.",
  },
  {
    title: "The Value Of Active Listening",
    description:
      "Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.",
  },
  {
    title: "Preparation Meets Opportunity",
    description:
      "Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.",
  },
  {
    title: "A Way Out Focusing On What Can BE Controlled",
    description:
      "Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.",
  },
];

const BlogSection: React.FC = () => {
  return (
    <>
      <DeatilCard imageUrl="mainImage.png" />
      <div className="p-4 px-7 md:px-20 mx-auto text-gray-400">
        <p className="text-gray-400 mb-4">
          Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies.
          Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna
          tristique tempus. Etiam lobortis est at mauris eleifend, id tempor
          purus ultricies.
        </p>
        <p className="font-semibold mb-8">
          Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae est.
          Aliquam porta ex elit, sit amet rutrum turpis egestas viverra. Quisque
          at libero purus.
        </p>
        {sections.slice(0, 3).map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-400">{section.description}</p>
          </div>
        ))}
      </div>
      <div className="p-4 px-7 md:px-16 mx-auto text-gray-400">
        <DeatilCard imageUrl="mainImage4.png" />
      </div>
      <div className="p-4 px-7 md:px-20 mx-auto text-gray-400">
        {sections.slice(3).map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-400">{section.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

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
    <section className="py-10 px-4 md:px-10 lg:px-15">
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
