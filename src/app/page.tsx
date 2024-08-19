import React from "react";
import Footer from "./ui/Footer";
import Login from "./login/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="flex flex-col min-h-[100dvh]">
        <Login/>
        <Footer />
      </div>
    </main>
  );
}
