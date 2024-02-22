import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { Viewport } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
        <meta name="google-adsense-account" content="ca-pub-1436861775123746" />
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
