import LoginForm from "@/components/auth/LoginForm";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Log In or Sign Up",
};

export default function page() {
  return (
    <MaxWidthWrapper className="flex w-full max-md:flex-col">
      <section className="basis-1/2">
        <h1 className="text-5xl text-red-600/80">
          Welcome to your professional community{" "}
        </h1>
        <LoginForm />
      </section>
      <section className="basis-1/2">
        <Image src="/login.svg" width={700} height={700} alt="Image" />
      </section>
    </MaxWidthWrapper>
  );
}
