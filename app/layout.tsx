import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/basic/Footer";
import AosInit from "./components/basic/AosInit";

export const metadata: Metadata = {
  title: "Beauty Care Expo | بيوتي كير اكسبو ",};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link  rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css"/>
      </head>
      <body className="bg-[#F7EEEF] overflow-x-hidden">
        
        {children}

<AosInit />
        <Footer />
      </body>
    </html>
  );
}
