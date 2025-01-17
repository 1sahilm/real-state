import "./globals.css";
// import CustomCursor from "@/components/CustomCursor";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

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
