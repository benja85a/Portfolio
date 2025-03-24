import type { Metadata } from "next";

import { Space_Grotesk, Poppins } from "next/font/google"; 

import "./globals.css";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const primaryFont = Space_Grotesk({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

const secondaryFont = Poppins({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

export const metadata: Metadata = {
  title: "Benjamin Rivas",
  description: "Portfolio of Benjamin Rivas",
  icons:{
    icon:"/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}>
        <Navbar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
