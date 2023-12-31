"use client";

import { useAppSelector } from "@/redux/store";
import Image from "next/image";

export default function Aside() {
  const { displayName, photoURL } = useAppSelector(
    (state) => state.authReducer
  );
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Image src={photoURL || ""} alt="profile" width={100} height={100} />
        <span> {displayName} </span>
      </div>
    </div>
  );
}
