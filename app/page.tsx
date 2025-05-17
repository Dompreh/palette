import Image from "next/image";
import Header from "./components/Header";
import Palette from "./components/Palette";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <Header />
      <Palette />
    </main>
  );
}
