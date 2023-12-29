import Link from "next/link";

export default function AuthNav() {
  return (
    <div className="flex gap-6 items-center">
      <Link
        href="/signup"
        className="hover:bg-white/60 px-6 py-2 rounded-3xl dark:hover:bg-white/20"
      >
        Join Now
      </Link>
      <Link
        href="login"
        className="outline outline-1 outline-blue-600 text-blue-600 dark:text-blue-600 px-6 py-2 rounded-3xl hover:bg-blue-600 hover:text-white transition-colors ease-in duration-100"
      >
        Sign In
      </Link>
    </div>
  );
}
