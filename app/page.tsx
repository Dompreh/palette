import Image from "next/image";
import Header from "./components/Header";
import Palette from "./components/Palette";

export default function Home() {
  return (
    <>
      <Header page="/about" />
      <Palette />
    </>
  );
}
