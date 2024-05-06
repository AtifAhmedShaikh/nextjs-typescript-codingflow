import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2 className="text-2xl">Hi, I am Main Page of App</h2>
      <Link href={"/about"}>About Page</Link>
      <Navbar />
    </main>
  );
}
