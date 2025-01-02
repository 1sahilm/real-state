// components/Card.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  date: string;
  category: string;
  title: string;
  rating: number;
  ratingValue: number;
  href: string;
}

const Card2: React.FC<CardProps> = ({
  imageUrl,
  date,
  category,
  title,
  rating,
  ratingValue,
  href,
}) => {
  return (
    <Link href={href}>
      <div className="rounded-lg shadow-lg overflow-hidden bg-white">
        <div className="relative w-full h-48">
          <Image
            src={require(`../../assets/Blog/${imageUrl}`)}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">
            {date} • {category}
          </p>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <div className="flex items-center text-yellow-500 text-sm">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
            <span className="ml-2 text-gray-600">{ratingValue}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card2;
