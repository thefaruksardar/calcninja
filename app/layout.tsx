import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { Viewport } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#6366f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <meta name="google-adsense-account" content="ca-pub-4453732808692284" />
        <meta
          name="google-site-verification"
          content="0vYFInUhgrQmSX5AUuKVL8tkMFutW8RhlPBT7JoytlE"
        />
        <meta name="google-adsense-account" content="ca-pub-4453732808692284" />
      </head>
      <body className={`${inter.className} bg-slate-50`}>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
