import React from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",

});

function Header() {
  return (
    <header className="w-full max-w-4xl text-center mb-12">
      <h1
        className={`text-5xl ${cinzel.className}  tracking-wide font-bold`}
        suppressHydrationWarning
      >
        Palette
      </h1>
    </header>
  );
}

export default Header;
