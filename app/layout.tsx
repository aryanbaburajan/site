import "./globals.css";
import { satoshi } from "./fonts";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Aryan Baburajan",
  description:
    "I'm an 18-year-old graphics / systems programmer from Kerala, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 min-h-screen flex justify-center ${satoshi.className}`}>
        <div className="pointer-events-none fixed inset-0 dot-field" />
        <div className="w-full max-w-xl px-6 my-20">{children}</div>
        <Navbar />
      </body>
    </html>
  );
}
