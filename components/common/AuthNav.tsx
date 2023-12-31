"use client";

import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { LogOut, Settings, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/conf/firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "@/redux/features/authSlice";
import { useEffect } from "react";

export default function AuthNav() {
  const dispatch = useDispatch();
  const { isLoggedIn, displayName, photoURL } = useAppSelector(
    (state) => state.authReducer
  );

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoggedIn)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {photoURL ? (
            <Image
              src={photoURL || ""}
              alt={displayName || ""}
              width={32}
              height={32}
            />
          ) : (
            <User className="mr-2 h-4 w-4" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/profile">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
            </Link>

            <Link href="/setting">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>{" "}
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

  return (
    <div className="flex gap-2 items-center">
      <Link
        href="/auth/signup"
        className="hover:bg-white/60 px-2 py-2 rounded-3xl dark:hover:bg-white/20"
      >
        Join Now
      </Link>
      <Link
        href="/auth/login"
        className="outline outline-1 outline-blue-600 text-blue-600 dark:text-blue-600 px-2 py-2 rounded-3xl hover:bg-blue-600 hover:text-white transition-colors ease-in duration-100"
      >
        Sign In
      </Link>
    </div>
  );
}
