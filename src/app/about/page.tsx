import Navbar from "@/components/Navbar";
import Link from "next/link";

const About = async () => {
  // await new Promise((resolve, reject) => setTimeout(() => reject(5), 2000));
  return (
    <div>
      About Page
      <Link href={"/"}>back to home</Link>
      <Navbar />
    </div>
  );
};

export default About;
