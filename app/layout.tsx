import { Metadata } from "next";

import Navbar from "./components/Navbar";
import "./globals.css";
import { Ubuntu, Marcellus } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
  preload: false,
});
export const metadata: Metadata = {
  title: "Celeste Ingrams",
  description: "Celeste Ingrams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${ubuntu.variable} text-lg xl:text-2xl font-ubuntu text-neutral-500 bg-neutral-200`}>
        <Navbar />
       {children}
      </body>
    </html>
  );
}
