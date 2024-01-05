"use client";

import Image from "next/image";
import { loginSchema } from "@/schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { auth } from "@/conf/firebase";
import {
  Auth,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Inputs = z.infer<typeof loginSchema>;

const provider = new GoogleAuthProvider();

type Props = {
  btnTitle: string;
  createUser?: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<UserCredential>;

  login?: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<UserCredential>;
};

export default function AuthForm({ createUser, login, btnTitle }: Props) {
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

  const onSumit: SubmitHandler<Inputs> = async ({ email, password }) => {
    try {
      if (createUser) {
        const res = await createUser(auth, email, password);
        if (res.user) router.push("/feed");
        else {
          setError("root", {
            type: "manual",
            message: "Something went wrong",
          });
        }
      }

      if (login) {
        const res = await login(auth, email, password);
        if (res.user) router.push("/feed");
        else {
          setError("root", {
            type: "manual",
            message: "Something went wrong",
          });
        }
      }
    } catch (error: any) {
      const errorMessage = error.message.replace("Firebase:", "");
      setError("root", {
        type: "manual",
        message: errorMessage,
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
    <div className="max-w-sm mx-auto bg-black/10 p-6 rounded-lg mt-4 space-y-4">
      <form onSubmit={handleSubmit(onSumit)}>
        <Label htmlFor="email" className="w-full">
          Email
        </Label>
        <Input
          type="text"
          className="bg-transparent dark:bg-transparent border-slate-600 dark:border-white"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Label htmlFor="email" className="w-full">
          Password
        </Label>
        <Input
          type="password"
          className="bg-transparent dark:bg-transparent border-slate-600 dark:border-white"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        <p className="text-[12px] text-center  text-gray-700 dark:text-white mt-4">
          By clicking Agree & Join, you agree to the LinkedIn User Agreement,
          Privacy Policy, and Cookie Policy.{" "}
        </p>
        <Button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 w-full mt-4"
        >
          {btnTitle}
        </Button>
      </form>
      <div className="text-center mt-6">or</div>
      <div className="pb-6">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="mx-auto w-full px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 mt-8"
        >
          <Image
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            width={40}
            height={40}
            alt="google logo"
          />
          <span>Sign up with Google</span>
        </button>
      </div>
    </div>
  );
}
