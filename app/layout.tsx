import "./globals.css";
import { satoshi } from "./fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aryan Baburajan",
  description:
    "I'm a 19-year-old graphics / systems programmer. I have been programming since I was 9, with a deep passion for building complex systems from scratch and understanding their architecture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 min-h-screen flex justify-center ${satoshi.className}`}>
        <div className="w-full max-w-xl px-6 my-40">{children}</div>
      </body>
    </html>
  );
}
