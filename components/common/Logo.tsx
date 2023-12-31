"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";

export default function Logo() {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  return (
    <Link href={isLoggedIn ? "/feed" : "/"}>
      <Image
        src="/logo.png"
        alt="logo"
        width={80}
        height={80}
        className="object-contain w-auto max-md:mt-2"
      />
    </Link>
  );
}
