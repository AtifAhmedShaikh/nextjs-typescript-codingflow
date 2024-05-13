"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Profile from "./Profile";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex gap-5">
      <Link href={"/"} className="border-b border-blue-800">
        Home
      </Link>
      <Link href={"/about"} className="border-b border-blue-800">
        About
      </Link>
      <Link href={"/contact"} className="border-b border-blue-800">
        Contact
      </Link>
      <Link href={"/user-todos"} className="border-b border-blue-800">
        Todo List
      </Link>
      <Link href={"/login"} className="border-b border-blue-800">
        Login
      </Link>
      <Link href={"/register"} className="border-b border-blue-800">
        Register
      </Link>
      <Profile path={pathname} />
    </div>
  );
};

export default Navbar;
