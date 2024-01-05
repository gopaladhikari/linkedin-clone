import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import Link from "next/link";
import { Auth, signInWithEmailAndPassword } from "firebase/auth";

export const metadata: Metadata = {
  title: "Login",
};

export default function page() {
  const login = async (auth: Auth, email: string, password: string) => {
    "use server";

    return signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <section>
      <h1 className="text-center text-3xl font-bold">Sign in</h1>
      <AuthForm login={login} btnTitle="Sign up" />
      <p className="text-center py-6">
        New to LinkedIn?{" "}
        <Link href="/auth/signup" className="text-blue-700 font-bold">
          Join now
        </Link>
      </p>
    </section>
  );
}
