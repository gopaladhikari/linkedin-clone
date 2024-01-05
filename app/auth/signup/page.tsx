import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function page() {
  const createUser = async (auth: Auth, email: string, password: string) => {
    "use server";

    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <section>
      <h1 className="text-center text-3xl font-bold">
        Make the most of your professional life
      </h1>
      <AuthForm createUser={createUser} btnTitle="Agree & Join" />
    </section>
  );
}
