import React from "react";
import Faq from "./ui/Faq";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Content from "./ui/Content"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="flex flex-col min-h-[100dvh]">
        <Header />
        <Content />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}
