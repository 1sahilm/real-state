import { Metadata } from "next";
import "./globals.css";
// import CustomCursor from "@/components/CustomCursor";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infranium | Pioneering Luxury Real Estate with Timeless Elegance​",
  description: "Infranium leads the way in luxury real estate by blending innovation with timeless elegance, creating extraordinary living spaces that reflect sophistication and modern design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body>
        {children}
        {/* <CustomCursor /> */}
      </body>
    </html>
  );
}
