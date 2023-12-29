import Image from "next/image";
import Link from "next/link";
import { MdOutlineArticle } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { PiNotebookDuotone } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import { ThemeToggler } from "./ThemeToggler";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Navbar() {
  return (
    <MaxWidthWrapper>
      <header>
        <nav className="flex w-full justify-between pb-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </Link>

          <div className="flex gap-6 items-center">
            {" "}
            <ThemeToggler />
            <ul className="flex items-center gap-8 border-r border-black/30 dark:border-white/30 pr-6">
              <li>
                <Link href="/articles">
                  <MdOutlineArticle className="text-xl mx-auto" /> Article
                </Link>
              </li>
              <li>
                <Link href="/peoples">
                  {" "}
                  <IoPeopleSharp className="text-xl mx-auto" /> People
                </Link>
              </li>
              <li>
                <Link href="/learning">
                  {" "}
                  <PiNotebookDuotone className="text-xl mx-auto" /> Learning
                </Link>
              </li>
              <li>
                <Link href="/jobs">
                  {" "}
                  <FaBriefcase className="text-xl mx-auto" /> Jobs
                </Link>
              </li>
            </ul>
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
          </div>
        </nav>
      </header>
    </MaxWidthWrapper>
  );
}
