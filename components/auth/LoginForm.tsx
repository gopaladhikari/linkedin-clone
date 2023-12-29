"use client";

import { loginSchema } from "@/schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

type Inputs = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="divide-y-2">
      <form className="mt-8 pb-6">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="!bg-transparent focus-visible:outline outline outline-1 focus-visible:ring-0"
          />

          <Label htmlFor="password" className="mt-6">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            className="!bg-transparent focus-visible:outline outline outline-1 focus-visible:ring-0"
          />
          <Link href="/forgot-password" className="mt-2 text-blue-700">
            Forgot Password?
          </Link>

          <Button className="bg-blue-600 text-white"> Sign in </Button>
        </div>
      </form>
      <div className="pb-6">
        <button
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
