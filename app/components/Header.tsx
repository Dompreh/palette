import React from "react";
import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

function Header({ page }: { page: string }) {
  return (
    <header className="w-full max-w-4xl text-center mb-12">
      <Link
        href={`${page}`}
        className={`inline-block ${cinzel.className}  hover:opacity-80 transition-opacity`}
        suppressHydrationWarning
      >
        <h1 className={`text-5xl  tracking-wide font-bold`}>Palette</h1>
      </Link>
    </header>
  );
}

export default Header;
