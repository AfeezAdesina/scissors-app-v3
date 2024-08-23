import React from "react";
import Footer from "./ui/Footer";
import Login from "./Login/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full m-auto">
      <div className="flex flex-col min-h-[100dvh]">
        <Login/>
        <Footer />
      </div>
    </main>
  );
}
