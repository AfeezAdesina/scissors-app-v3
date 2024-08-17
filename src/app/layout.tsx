import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scissors App - The Next Big Thing To Shorten Link",
  description: "Link shorening app that is easy to use and free",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <head>
          <link rel="icon" href="/scissors-logo.png" sizes="any" />
          <meta charSet="utf-8" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </SessionWrapper>

  );
}
