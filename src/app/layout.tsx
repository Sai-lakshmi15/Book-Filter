import type { Metadata } from "next";
import { Indie_Flower as IndieFlower } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const indieFlower = IndieFlower({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-indie-flower',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Book Filter",
  description: "Search a book by genre or description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${indieFlower.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col">
        <Navbar/>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
