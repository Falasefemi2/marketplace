import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarketPlace",
  description: "MarketPlace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Modal title="Register" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
