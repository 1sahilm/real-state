import React from "react";
import Image from "next/image";

interface DeatilCardProps {
  imageUrl: string;
}

const DeatilCard: React.FC<DeatilCardProps> = ({ imageUrl }) => {
  return (
    <div className="w-full p-0 md:p-4">
      <div className="relative bg-white shadow-lg overflow-hidden w-full">
        <div className="relative w-full">
          <Image
            src={require(`../../assets/Blog/${imageUrl}`)}
            alt="Main Image"
            layout="responsive"
            width={16}
            height={8.2}
            objectFit="cover"
            className="md:rounded-lg rounded-none"
          />
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:rounded-lg rounded-none"></div>
        </div>
      </div>
    </div>
  );
};

export default DeatilCard;
