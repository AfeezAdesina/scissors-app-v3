import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/scissors-logo.png" sizes="any" />
      <title>Scissors App - The Next Big Thing To Shorten Link</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}