import { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
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
         <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="7M1H0JfOBt7kDSq9nlJoquvdt3bk3CgFGHYBLFpbo7k" />


        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THB4NDVF');
          `}
        </Script>

        {/* Google Analytics */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-4CEHH82KC1" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4CEHH82KC1');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rg7dcdnp3q");
          `}
        </Script>
        </head>
      <body>
       
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THB4NDVF"
height="0" width="0"   style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
 
        {children}
        {/* <CustomCursor /> */}
      </body>
    </html>
  );
}
