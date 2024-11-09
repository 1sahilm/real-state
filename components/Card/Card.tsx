import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  date: string;
  title: string;
  category: string;
  href: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  date,
  title,
  category,
  href,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center p-4 sm:space-x-4">
      <div className="w-full sm:w-32 h-48 sm:h-24 relative mb-4 sm:mb-0">
        <Link href={href}>
          <Image
            src={require(`../../assets/Blog/${imageUrl}`)}
            alt="Side Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </Link>
      </div>
      <div className="text-center sm:text-left">
        <p className="text-xs text-gray-500 mb-1">
          {date} • {category}
        </p>
        <Link href={href}>
          <h3 className="text-sm font-semibold">{title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Card;
