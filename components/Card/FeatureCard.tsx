import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  imageUrl: string;
  date?: string;
  title?: string;
  category?: string;
  description?: string;
  href: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageUrl,
  date,
  title,
  category,
  description,
  href,
}) => {
  return (
    <div className="w-full md:p-4 p-0">
      <Link href={href}>
        <div className="relative bg-white shadow-lg overflow-hidden max-w-screen-md mx-auto">
          <div className="relative w-full" style={{ height: "28rem" }}>
            <Image
              src={require(`../../assets/Blog/${imageUrl}`)}
              alt="Main Image"
              layout="fill"
              objectFit="cover"
              className="md:rounded-lg rounded-none"
            />
            {/* Overlay gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:rounded-lg rounded-none"></div>
          </div>
          <div className="absolute bottom-0 md:p-4 p-2 text-white">
            {date && category && (
              <p className="text-sm mb-1 drop-shadow-lg">
                {date} • {category}
              </p>
            )}
            {title && (
              <h2 className="text-lg font-bold drop-shadow-lg">{title}</h2>
            )}
            {description && (
              <p className="text-sm drop-shadow-lg mt-1">{description}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeatureCard;

// import React from "react";
// import Image from "next/image";

// interface FeatureCardProps {
//   imageUrl: string;
//   date?: string;
//   title?: string;
//   category?: string;
//   description?: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({
//   imageUrl,
//   date,
//   title,
//   category,
//   description,
// }) => {
//   return (
//     <div className="w-full p-0 md:p-4">
//       <div className="relative bg-white shadow-lg overflow-hidden w-full h-full">
//         <div className="relative w-full" style={{ height: "28rem" }}>
//           <Image
//             src={require(`../../assets/Blog/${imageUrl}`)}
//             alt="Main Image"
//             layout="fill"
//             objectFit="cover"
//             className="md:rounded-lg rounded-none"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:rounded-lg rounded-none"></div>
//         </div>
//         <div className="absolute bottom-0 md:p-4 p-2 text-white">
//           {date && category && (
//             <p className="text-sm mb-1 drop-shadow-lg">
//               {date} • {category}
//             </p>
//           )}
//           {title && (
//             <h2 className="text-lg font-bold drop-shadow-lg">{title}</h2>
//           )}
//           {description && (
//             <p className="text-sm drop-shadow-lg mt-1">{description}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureCard;
