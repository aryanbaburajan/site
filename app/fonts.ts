import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
