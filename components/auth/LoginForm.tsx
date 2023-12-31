"use client";

import { loginSchema } from "@/schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/conf/firebase";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { Button } from "../ui/button";

type Inputs = z.infer<typeof loginSchema>;

const provider = new GoogleAuthProvider();

export default function LoginForm() {
  const router = useRouter();

  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  if (isLoggedIn) router.push("/feed");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) router.push("/feed");
    } catch (error: any) {
      setError("root", {
        type: "manual",
        message: error.message,
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      if (res.user) router.push("/feed");
    } catch (error: any) {
      const errorMessage = error.message;
      setError("root", {
        type: "manual",
        message: errorMessage,
      });
    }
  };

  return (
    <div className="divide-y-2">
      <form className="mt-8 pb-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="!bg-transparent focus-visible:outline outline outline-1 focus-visible:ring-0"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <Label htmlFor="password" className="mt-6">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            className="!bg-transparent focus-visible:outline outline outline-1 focus-visible:ring-0"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          {errors.root && <p className="text-red-500">{errors.root.message}</p>}
          <Link href="/forgot-password" className="mt-2 text-blue-700">
            Forgot Password?
          </Link>

          <Button type="submit" className="bg-blue-600 text-white">
            Sign in
          </Button>
        </div>
      </form>
      <div className="pb-6">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 mt-8"
        >
          <Image
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            width={40}
            height={40}
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
}
